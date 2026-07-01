"use client";

import { useState } from "react";
import { services } from "@/lib/services";
const categories = [...new Set(services.map((s) => s.category))];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    institution: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">咨询已提交</h1>
        <p className="text-gray-500">感谢您的咨询！我们会在1-2个工作日内与您联系。</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">联系我们</h1>
      <p className="text-gray-500 mb-10">填写以下表单，我们将为您提供个性化服务方案和报价</p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
            <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">电话 *</label>
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">单位名称</label>
            <input type="text" value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">感兴趣的服务</label>
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">请选择</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">需求描述</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="请描述您的实验设计、样本类型、数量等需求信息" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50">
            {loading ? "提交中..." : "提交咨询"}
          </button>
        </form>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">联系方式</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 jhbiotech2018@163.com</p>
              <p>💬 QQ：530773164</p>
              <p>🔬 www.jiahoncloud.com</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">合作流程</h3>
            <ol className="space-y-2 text-sm text-gray-600">
              <li>1. 需求沟通与方案设计</li>
              <li>2. 签订合同与样本准备</li>
              <li>3. 实验检测与数据分析</li>
              <li>4. 报告交付与售后支持</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
