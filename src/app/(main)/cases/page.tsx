import CaseCard from "@/components/CaseCard";

const allCases = [
  {
    title: "利用风味组学优化吉林鲜食玉米饮料口感",
    background: "传统感官评价耗时且主观，难以量化口感差异",
    solution: "应用电子舌技术进行味觉指纹分析，结合PCA主成分分析",
    result: "研发周期缩短3个月，成功申请技术专利",
  },
  {
    title: "通过转录组学分析人参皂苷生物合成通路",
    background: "人参基因组复杂，传统方法难以系统研究其活性成分合成机制",
    solution: "转录组测序 + 差异表达分析 + WGCNA共表达网络构建",
    result: "鉴定关键基因模块，发表高水平 SCI 论文",
  },
  {
    title: "土壤微生物多样性分析助力黑土地保护",
    background: "长期耕作导致东北黑土地土壤质量退化，需要评估微生物群落变化",
    solution: "16S扩增子测序 + 微生物群落功能预测",
    result: "揭示不同耕作方式对土壤微生物群落的影响规律，为保护性耕作提供数据支持",
  },
  {
    title: "靶向代谢组学辅助玉米品种选育",
    background: "不同玉米品种营养成分存在差异，传统分析方法通量低",
    solution: "靶向代谢组学精准定量多种营养成分 + 多元统计分析",
    result: "筛选出营养品质优良的候选品种，加速育种进程",
  },
];

export default function CasesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">成功案例</h1>
      <p className="text-gray-500 mb-10">我们服务了众多科研课题组，以下为部分典型案例</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allCases.map((c) => (
          <CaseCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
