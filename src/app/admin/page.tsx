import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const total = await prisma.inquiry.count();
  const pending = await prisma.inquiry.count({ where: { status: "待联系" } });
  const contacted = await prisma.inquiry.count({ where: { status: "已联系" } });
  const done = await prisma.inquiry.count({ where: { status: "已成交" } });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">管理概览</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "总咨询数", value: total, color: "bg-blue-500" },
          { label: "待联系", value: pending, color: "bg-amber-500" },
          { label: "已联系", value: contacted, color: "bg-green-500" },
          { label: "已成交", value: done, color: "bg-purple-500" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className={`w-3 h-3 rounded-full ${stat.color} mb-2`} />
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
