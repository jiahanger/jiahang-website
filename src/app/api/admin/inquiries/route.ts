import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

function unauthorized() {
  return NextResponse.json({ error: "未授权" }, { status: 401 });
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token || !verifyToken(token)) return unauthorized();

  try {
    const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });
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
    await prisma.inquiry.update({
      where: { id },
      data: { ...(status && { status }), ...(adminNote !== undefined && { adminNote }) },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "更新失败" }, { status: 500 });
  }
}
