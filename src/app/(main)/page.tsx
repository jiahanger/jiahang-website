import Link from "next/link";
import CaseCard from "@/components/CaseCard";

const coreServices = [
  {
    name: "常规多组学分析",
    desc: "基因组、转录组、蛋白质组、代谢组全平台覆盖",
    items: ["Illumina / ThermoFisher 测序平台", "Agilent / AB Sciex 质谱平台", "严格 SOP 质控体系"],
  },
  {
    name: "特色风味组学",
    desc: "独家电子鼻 (E-nose) 与电子舌 (E-tongue) 技术",
    items: ["快速无损检测", "客观量化分析", "食品/中药材风味评价"],
  },
  {
    name: "生信定制化分析",
    desc: "从标准分析到多组学整合，全程技术支持",
    items: ["WGCNA / 代谢通路分析", "专业 SCI 级可视化", "多组学数据整合挖掘"],
  },
  {
    name: "科研文章辅助",
    desc: "数据分析 → 图表优化 → 论文指导",
    items: ["深入数据解读", "图表制作与美化", "论文逻辑优化"],
  },
];

const advantages = [
  { title: "自有生信平台", desc: "www.jiahoncloud.com 集成常用工具，在线交付" },
  { title: "一对一全程跟进", desc: "亲自负责每个项目，及时响应" },
  { title: "7年行业经验", desc: "累计服务百余课题组，口碑可靠" },
];

const cases = [
  {
    title: "利用风味组学优化吉林鲜食玉米饮料口感",
    background: "传统感官评价耗时且主观",
    solution: "应用电子舌技术进行味觉指纹分析 + PCA",
    result: "研发周期缩短3个月，成功申请技术专利",
  },
  {
    title: "通过转录组学分析人参皂苷生物合成通路",
    background: "人参基因组复杂，传统方法难以系统研究",
    solution: "转录组测序 + 差异表达分析 + WGCNA",
    result: "鉴定关键基因模块，发表高水平 SCI 论文",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            佳杭生物
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-3">您的专属多组学技术伙伴</p>
          <p className="text-blue-300 text-lg mb-10">7年专注 · 自有平台 · 一对一服务</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              查看服务
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              立即咨询
            </Link>
          </div>
        </div>
      </section>

      {/* 核心服务 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">核心服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreServices.map((svc) => (
              <div key={svc.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{svc.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
              查看全部服务项目 →
            </Link>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/cases" className="text-blue-600 hover:text-blue-700 font-medium">
              查看更多案例 →
            </Link>
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">合作流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "需求沟通", desc: "深入沟通背景，量身定制方案" },
              { step: "02", title: "签订合同", desc: "确认方案，安排样本准备" },
              { step: "03", title: "检测分析", desc: "执行 QC 标准，完成检测分析" },
              { step: "04", title: "报告交付", desc: "完整报告交付，售后支持" },
            ].map((item) => (
              <div key={item.step} className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">期待与您携手，共创科研新未来</h2>
          <p className="text-blue-200 mb-8">从实验设计到数据分析，再到论文辅助，全程为您保驾护航</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </div>
  );
}
