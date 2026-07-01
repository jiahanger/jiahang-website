import Link from "next/link";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  const categoryColors: Record<string, string> = {
    "基因组学": "bg-blue-50 text-blue-700 border-blue-200",
    "转录组学": "bg-green-50 text-green-700 border-green-200",
    "蛋白质组学": "bg-purple-50 text-purple-700 border-purple-200",
    "代谢组学": "bg-orange-50 text-orange-700 border-orange-200",
    "风味组学": "bg-pink-50 text-pink-700 border-pink-200",
    "配套检测服务": "bg-teal-50 text-teal-700 border-teal-200",
    "生信分析": "bg-indigo-50 text-indigo-700 border-indigo-200",
    "科研辅助": "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <Link
      href={`/services/${service.id}`}
      className="block border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all group"
    >
      <span
        className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${
          categoryColors[service.category] || "bg-gray-50 text-gray-600"
        }`}
      >
        {service.category}
      </span>
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
        {service.name}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
    </Link>
  );
}
