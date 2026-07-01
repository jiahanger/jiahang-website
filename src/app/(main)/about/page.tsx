export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">关于佳杭生物</h1>
      <p className="text-gray-500 mb-10">您的专属多组学技术伙伴</p>

      <div className="space-y-8">
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">公司简介</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              佳杭生物是一家专注于多组学技术服务的企业，7年来扎根科研服务领域，服务于各大高校和科研院所，
              积累了丰富的项目经验和成功案例。
            </p>
            <p>
              我们不是庞大的机构，而是您专注的技术伙伴。从实验设计到数据分析，再到论文辅助，
              我们亲自为您解决每一个技术难题，把您的课题当成自己的来做。
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "自有生信分析平台", desc: "独立搭建并维护生信在线分析平台（www.jiahoncloud.com），提供便捷高效的分析工具。" },
              { title: "一对一全程跟进", desc: "提供全程跟进服务，从实验设计到数据分析，亲自为您解决每一个技术难题。" },
              { title: "专注小而美", desc: "不追求规模，专注于多组学、风味组学和科研文章辅助，提供最专业深入的服务。" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">联系信息</h2>
          <div className="space-y-3 text-gray-600">
            <p>📧 邮箱：jhbiotech2018@163.com</p>
            <p>💬 QQ：530773164</p>
            <p>🔬 生信平台：www.jiahoncloud.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
