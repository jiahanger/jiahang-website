import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "jiahon-bio-secret-key-2026";

export function signToken(username: string) {
  return jwt.sign({ username }, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as { username: string };
  } catch {
    return null;
  }
}
