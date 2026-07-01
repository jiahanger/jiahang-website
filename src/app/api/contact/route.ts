import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, institution, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "姓名和电话为必填项" }, { status: 400 });
    }

    await prisma.inquiry.create({
      data: {
        name,
        phone,
        email: email || "",
        institution: institution || "",
        service: service || "",
        message: message || "",
        status: "待联系",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to create inquiry:", error);
    return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 });
  }
}
