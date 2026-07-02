import { NextRequest, NextResponse } from "next/server";
import { createInquiry, initAdmin } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, institution, service, message } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "姓名和电话为必填项" }, { status: 400 });
    }

    await createInquiry({ name, phone, email: email || "", institution: institution || "", service: service || "", message: message || "" });
    await initAdmin();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 });
  }
}
