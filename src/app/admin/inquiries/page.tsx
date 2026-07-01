"use client";

import { useEffect, useState } from "react";

interface Inquiry {
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

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const fetchInquiries = async () => {
    const res = await fetch("/api/admin/inquiries");
    const data = await res.json();
    setInquiries(data);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch("/api/admin/inquiries", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchInquiries();
    if (selected?.id === id) setSelected({ ...selected, status });
  };

  const updateNote = async (id: number, adminNote: string) => {
    await fetch("/api/admin/inquiries", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, adminNote }),
    });
    setSelected((prev) => (prev?.id === id ? { ...prev, adminNote } : prev));
  };

  const statusColors: Record<string, string> = {
    "待联系": "bg-amber-100 text-amber-800",
    "已联系": "bg-green-100 text-green-800",
    "已成交": "bg-purple-100 text-purple-800",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">咨询管理</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-100 max-h-[70vh] overflow-y-auto">
            {inquiries.map((inq) => (
              <button
                key={inq.id}
                onClick={() => setSelected(inq)}
                className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                  selected?.id === inq.id ? "bg-blue-50" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 text-sm">{inq.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[inq.status] || "bg-gray-100"}`}>
                    {inq.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{inq.phone}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(inq.createdAt).toLocaleString("zh-CN")}</p>
              </button>
            ))}
            {inquiries.length === 0 && (
              <p className="p-4 text-sm text-gray-400 text-center">暂无咨询记录</p>
            )}
          </div>
        </div>

        {/* Detail */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          {selected ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">{selected.name}</h2>
                <div className="flex gap-2">
                  {["待联系", "已联系", "已成交"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                        selected.status === s
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 text-gray-600 hover:border-blue-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-400">电话</span><p className="text-gray-900">{selected.phone}</p></div>
                <div><span className="text-gray-400">邮箱</span><p className="text-gray-900">{selected.email || "-"}</p></div>
                <div><span className="text-gray-400">单位</span><p className="text-gray-900">{selected.institution || "-"}</p></div>
                <div><span className="text-gray-400">感兴趣</span><p className="text-gray-900">{selected.service || "-"}</p></div>
              </div>

              <div>
                <span className="text-sm text-gray-400">需求描述</span>
                <p className="text-gray-900 text-sm mt-1 bg-gray-50 rounded-lg p-3">{selected.message || "无"}</p>
              </div>

              <div>
                <span className="text-sm text-gray-400">管理员备注</span>
                <textarea
                  value={selected.adminNote}
                  onChange={(e) => setSelected({ ...selected, adminNote: e.target.value })}
                  onBlur={() => updateNote(selected.id, selected.adminNote)}
                  placeholder="添加跟进备注..."
                  className="w-full mt-1 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>

              <p className="text-xs text-gray-400">
                提交时间：{new Date(selected.createdAt).toLocaleString("zh-CN")}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 text-center py-12">选择一个咨询查看详情</p>
          )}
        </div>
      </div>
    </div>
  );
}
