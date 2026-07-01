import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

const categories = [...new Set(services.map((s) => s.category))];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">服务项目</h1>
      <p className="text-gray-500 mb-10">全面的多组学技术服务，从检测到发文全程支持</p>

      {categories.map((category) => {
        const items = services.filter((s) => s.category === category);
        return (
          <section key={category} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded" />
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
