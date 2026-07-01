import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    const admin = await prisma.admin.findUnique({ where: { username } });

    if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
      return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 });
    }

    const token = signToken(username);
    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: "登录失败" }, { status: 500 });
  }
}
