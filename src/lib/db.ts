export interface InquiryData {
  id: number;
  name: string;
  phone: string;
  email: string;
  institution: string;
  service: string;
  message: string;
  status: string;
  adminNote: string;
  createdAt: string;
}

const INQUIRIES_KEY = "inquiries";

// In-memory fallback for local dev (no KV needed)
let memoryStore: Record<string, string[]> = {};

function getStore(): { lpush: (key: string, val: string) => Promise<number>; lrange: (key: string, start: number, stop: number) => Promise<string[]>; lset: (key: string, idx: number, val: string) => Promise<any>; get: (key: string) => Promise<string | null>; set: (key: string, val: string) => Promise<any> } {
  // Try Vercel KV first
  try {
    // This will only have env vars on Vercel deployment
    if (process.env.KV_REST_API_URL) {
      // Dynamic import to avoid build issues
      const { kv } = require("@vercel/kv");
      return kv;
    }
  } catch {}
  // Fallback: in-memory store
  return {
    lpush: async (key, val) => { if (!memoryStore[key]) memoryStore[key] = []; memoryStore[key].unshift(val); return memoryStore[key].length },
    lrange: async (key, start, stop) => { const arr = memoryStore[key] || []; const end = stop === -1 ? arr.length : stop + 1; return arr.slice(start, end) },
    lset: async (key, idx, val) => { if (memoryStore[key]) memoryStore[key][idx] = val },
    get: async (key) => (memoryStore[key]?.[0]) || null,
    set: async (key, val) => { memoryStore[key] = [val] },
  };
}

const store = getStore();

export async function createInquiry(data: { name: string; phone: string; email: string; institution: string; service: string; message: string }) {
  const id = Date.now() + Math.floor(Math.random() * 1000);
  const inquiry: InquiryData = {
    id,
    ...data,
    status: "待联系",
    adminNote: "",
    createdAt: new Date(id).toISOString(),
  };
  await store.lpush(INQUIRIES_KEY, JSON.stringify(inquiry));
  return inquiry;
}

export async function getInquiries(): Promise<InquiryData[]> {
  const items = await store.lrange(INQUIRIES_KEY, 0, -1);
  return items.map((item: string) => JSON.parse(item));
}

export async function updateInquiry(id: number, updates: { status?: string; adminNote?: string }) {
  const items = await store.lrange(INQUIRIES_KEY, 0, -1);
  for (let i = 0; i < items.length; i++) {
    const inquiry: InquiryData = JSON.parse(items[i]);
    if (inquiry.id === id) {
      if (updates.status) inquiry.status = updates.status;
      if (updates.adminNote !== undefined) inquiry.adminNote = updates.adminNote;
      await store.lset(INQUIRIES_KEY, i, JSON.stringify(inquiry));
      return inquiry;
    }
  }
  return null;
}

export async function initAdmin(username = "admin", password = "admin123") {
  const existing = await store.get("admin:hash");
  if (!existing) {
    const bcrypt = await import("bcryptjs");
    const hash = await bcrypt.hash(password, 10);
    await store.set("admin:hash", JSON.stringify({ username, hash }));
  }
}

export async function verifyAdmin(username: string, password: string) {
  const data = await store.get("admin:hash");
  if (!data) return false;
  try {
    const { username: storedUser, hash: storedHash } = JSON.parse(data);
    if (username !== storedUser) return false;
    const bcrypt = await import("bcryptjs");
    return bcrypt.compare(password, storedHash);
  } catch {
    return false;
  }
}
