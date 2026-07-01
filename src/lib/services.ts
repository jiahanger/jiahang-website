export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  detail: string;
  category: string;
  platforms?: string[];
  applications?: string[];
  deliverables?: string[];
}

export const services: ServiceItem[] = [
  { id: 1, name: "全基因组测序 (WGS)", category: "基因组学", description: "对生物体整个基因组进行测序，获取完整的遗传信息", detail: "基于 Illumina 高通量测序平台，对样本的全基因组 DNA 进行测序，覆盖编码区与非编码区，适用于群体遗传学、进化分析、疾病标志物发现等研究。", platforms: ["Illumina NovaSeq 6000", "Illumina HiSeq X Ten"], applications: ["群体遗传学研究", "全基因组关联分析 (GWAS)", "罕见病致病基因鉴定"], deliverables: ["原始测序数据 (FASTQ)", "比对结果 (BAM)", "SNP/INDEL 注释", "数据分析报告"] },
  { id: 2, name: "16S扩增子测序", category: "基因组学", description: "针对细菌16S rRNA基因进行扩增测序，分析微生物群落组成", detail: "通过扩增细菌16S rRNA基因的高变区（V3-V4或V4-V5），利用高通量测序技术解析样本中微生物群落的种类组成和丰度分布。", platforms: ["Illumina MiSeq", "Illumina NovaSeq"], applications: ["肠道微生物研究", "环境微生物多样性分析", "土壤/水体微生物群落"], deliverables: ["OTU/ASV 表", "物种注释结果", "Alpha/Beta 多样性分析", "差异物种分析"] },
  { id: 3, name: "全外显子组测序 (WES)", category: "基因组学", description: "针对人类基因组外显子区域进行测序", detail: "使用探针杂交捕获技术富集人类基因组中外显子区域（约1-2%的基因组），进行高通量测序，高效发现编码区的致病突变。", platforms: ["Illumina NovaSeq 6000", "Agilent SureSelect 探针"], applications: ["遗传病诊断", "肿瘤体细胞突变检测", "药物基因组学研究"], deliverables: ["FASTQ 原始数据", "BAM 比对文件", "VCF 突变注释", "临床意义解读"] },
  { id: 4, name: "常规 mRNA-seq", category: "转录组学", description: "对样本中所有mRNA进行测序，分析基因表达水平", detail: "利用 Oligo-dT 磁珠富集真核生物 mRNA，构建链特异性文库，进行高通量测序，实现全转录组水平的基因表达定量和差异表达分析。", platforms: ["Illumina NovaSeq 6000", "DNBSEQ-T7"], applications: ["基因表达差异分析", "发育过程转录调控", "疾病机制研究"], deliverables: ["基因表达矩阵", "差异表达基因列表", "GO/KEGG 富集分析", "可变剪切分析"] },
  { id: 5, name: "非编码 RNA 测序", category: "转录组学", description: "对lncRNA、circRNA、small RNA等非编码RNA进行测序", detail: "针对不同类型的非编码RNA，采用特殊的文库构建策略（如去除rRNA、RNase R处理等），全面解析非编码RNA的表达谱和调控网络。", platforms: ["Illumina NovaSeq 6000"], applications: ["lncRNA 调控机制研究", "circRNA 海绵作用分析", "miRNA 靶基因预测"], deliverables: ["表达谱数据", "差异表达分析", "靶基因预测", "ceRNA 网络构建"] },
  { id: 6, name: "非标记定量蛋白质组学 (Label-free)", category: "蛋白质组学", description: "无需标记，直接对各样本进行质谱检测和定量比较", detail: "采用高分辨率质谱仪对各样本蛋白进行数据非依赖采集（DIA）或数据依赖采集（DDA），通过肽段信号强度进行相对定量，适用于大规模样本间的蛋白质表达比较。", platforms: ["Thermo Fisher Orbitrap Exploris 480", "AB Sciex TripleTOF 6600"], applications: ["生物标志物筛选", "疾病蛋白质组学", "差异表达蛋白分析"], deliverables: ["蛋白鉴定列表", "定量结果", "GO/KEGG 富集分析", "PPI 蛋白互作网络"] },
  { id: 7, name: "TMT/iTRAQ 定量蛋白质组学", category: "蛋白质组学", description: "利用同位素标记进行多通道定量比较", detail: "通过 TMT (Tandem Mass Tag) 或 iTRAQ 试剂对多组样本进行同位素标记，实现最多16个样本的同时定量比较，精度高、通量大。", platforms: ["Thermo Fisher Orbitrap Eclipse", "AB Sciex 6600+"], applications: ["多组比较蛋白组学", "时间动态蛋白质变化", "药物靶点发现"], deliverables: ["蛋白定量矩阵", "差异蛋白筛选", "功能富集分析", "修饰组学分析"] },
  { id: 8, name: "非靶向代谢组学", category: "代谢组学", description: "广泛筛选样本中的代谢物，发现差异代谢物", detail: "利用超高效液相色谱-串联质谱（UPLC-MS/MS）技术，对样本中的小分子代谢物进行全面的非靶向检测，结合多元统计分析筛选差异代谢物。", platforms: ["Agilent 1290 UPLC + 6545 Q-TOF", "Thermo Fisher Vanquish + Orbitrap"], applications: ["代谢标志物发现", "疾病代谢机制研究", "植物代谢组学"], deliverables: ["代谢物鉴定列表", "PCA/OPLS-DA 分析", "差异代谢物筛选", "代谢通路富集"] },
  { id: 9, name: "靶向代谢组学", category: "代谢组学", description: "对特定代谢物进行精准定量分析", detail: "采用 MRM (Multiple Reaction Monitoring) 技术，针对目标代谢物进行绝对定量，灵敏度高、特异性强，适用于验证研究和生物标志物定量。", platforms: ["AB Sciex QTRAP 6500+"], applications: ["维生素/氨基酸定量", "植物激素分析", "脂质组学靶向定量"], deliverables: ["绝对定量数据", "标准曲线", "QC质控报告", "统计学分析"] },
  { id: 10, name: "电子鼻检测 (E-nose)", category: "风味组学", description: "利用电子鼻技术对样品气味进行客观量化分析", detail: "通过气体传感器阵列模拟人类嗅觉系统，检测样品挥发性成分的整体指纹图谱，结合PCA、LDA等多元统计方法进行样品区分和品质评价。", platforms: ["实验室自建电子鼻平台"], applications: ["食品风味品质评价", "中药材气味鉴别", "加工工艺优化"], deliverables: ["传感器响应数据", "PCA/LDA 分析图谱", "风味指纹图谱", "综合评价报告"] },
  { id: 11, name: "电子舌检测 (E-tongue)", category: "风味组学", description: "利用电子舌技术对样品味觉进行客观量化分析", detail: "通过电位型传感器阵列模拟人类味觉系统，检测样品的酸、甜、苦、咸、鲜等味觉指标，实现味觉的客观量化。", platforms: ["实验室自建电子舌平台"], applications: ["食品口感优化", "产品品质一致性评价", "新配方开发辅助"], deliverables: ["味觉指标数据", "雷达图/热图", "PCA 判别分析", "味觉差异分析"] },
  { id: 12, name: "HE 染色 (病理实验)", category: "配套检测服务", description: "苏木精-伊红染色，观察组织形态结构", detail: "对石蜡切片或冰冻切片进行苏木精-伊红染色，观察组织、细胞的形态结构，是病理诊断和组织学研究的基础方法。", deliverables: ["染色切片", "病理扫描图像", "组织形态学描述"] },
  { id: 13, name: "免疫组化 (IHC)", category: "配套检测服务", description: "利用抗体特异性检测组织中目标蛋白表达", detail: "通过特异性抗体与组织中目标抗原结合，利用酶标显色系统定位目标蛋白在组织中的分布和表达水平。", deliverables: ["IHC 染色切片", "阳性率/表达评分", "扫描图像"] },
  { id: 14, name: "土壤理化检测", category: "配套检测服务", description: "土壤pH、有机质、全氮磷钾等指标检测", detail: "采用国标方法对土壤样本进行理化性质检测，包括pH值、有机质含量、全氮、全磷、全钾等基础指标。", deliverables: ["检测原始数据", "检测报告"] },
  { id: 15, name: "定制生信分析", category: "生信分析", description: "根据研究方向定制个性化数据分析方案", detail: "根据客户的具体研究目标和实验设计，定制个性化的生物信息学分析方案，包括多组学整合分析、WGCNA、代谢通路分析等高级分析内容。", applications: ["多组学整合分析", "WGCNA 权重共表达网络", "机器学习建模"], deliverables: ["完整分析代码", "可视化图表", "分析结果报告"] },
  { id: 16, name: "科研文章辅助", category: "科研辅助", description: "数据分析与解读、图表制作、论文撰写指导", detail: "从数据到文章的全流程支持服务，包括数据深度挖掘与生物学意义解读、SCI期刊级图表制作与优化、论文逻辑梳理与撰写指导。", deliverables: ["图表优化文件", "数据解读报告", "论文修改建议"] },
];
