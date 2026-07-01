import Link from "next/link";
import { services } from "@/lib/services";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const service = services.find((s) => s.id === Number(id));
  if (!service) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/services" className="text-sm text-blue-600 hover:text-blue-700 mb-6 inline-block">
        ← 返回服务列表
      </Link>
      <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200 mb-4">
        {service.category}
      </span>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{service.name}</h1>

      <div className="prose prose-gray max-w-none mb-8">
        <p className="text-lg text-gray-600 leading-relaxed">{service.detail}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {service.platforms && service.platforms.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">技术平台</h3>
            <ul className="space-y-1.5">
              {service.platforms.map((p) => (
                <li key={p} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.applications && service.applications.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">应用场景</h3>
            <ul className="space-y-1.5">
              {service.applications.map((a) => (
                <li key={a} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
        {service.deliverables && service.deliverables.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">交付内容</h3>
            <ul className="space-y-1.5">
              {service.deliverables.map((d) => (
                <li key={d} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">对该服务感兴趣？</h3>
        <p className="text-gray-500 mb-4">联系我们获取个性化报价和方案</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          立即咨询
        </Link>
      </div>
    </div>
  );
}
