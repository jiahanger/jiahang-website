import { NextRequest, NextResponse } from "next/server";
import { getInquiries, updateInquiry } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

function unauthorized() {
  return NextResponse.json({ error: "未授权" }, { status: 401 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const inquiries = await getInquiries();
    return NextResponse.json(inquiries);
  } catch {
    return NextResponse.json({ error: "获取失败" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const { id, status, adminNote } = await request.json();
    const result = await updateInquiry(id, { ...(status && { status }), ...(adminNote !== undefined && { adminNote }) });
    if (!result) return NextResponse.json({ error: "未找到该咨询" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "更新失败" }, { status: 500 });
  }
}
