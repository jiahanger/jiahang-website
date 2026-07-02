import { NextRequest, NextResponse } from "next/server";
import { verifyAdmin, initAdmin } from "@/lib/db";
import { signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    await initAdmin();

    const valid = await verifyAdmin(username, password);
    if (!valid) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 });
    }

    const token = signToken(username);
    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: "登录失败" }, { status: 500 });
  }
}
