import Link from "next/link";

export default function CloudPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">佳杭云平台</h1>
      <p className="text-gray-500 mb-10">www.jiahoncloud.com — 自有生信在线分析平台</p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-12 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">一站式生物信息学分析平台</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          佳杭云平台是佳杭生物独立搭建并维护的生物信息学在线分析平台，集成了常用分析工具和可视化功能。
          合作项目数据可通过平台在线交付，方便快捷。
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "免安装、免代码，浏览器即可完成分析",
            "集成常用生信分析工具和流程",
            "合作项目数据在线交付，随时查看",
            "持续更新维护，功能不断扩展",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link
          href="https://www.jiahoncloud.com"
          target="_blank"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          访问云平台
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
