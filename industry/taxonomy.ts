// 这个行业的分类体系：类别、标签词表、公司（主体）名录，以及防止张冠李戴的身份词典。
// 模型按这里的词表打标签，主题页（topics.json）按标签归类，筛选栏按类别分组。
// 换行业时：类别的 key 会出现在网址里（/all?category=…），上线后就不要再改；标签和名录可以随时增减。

/**
 * 网页上的类别（筛选栏、卡片角标、RSS 分类订阅）。key 是网址和接口里的身份，上线后不要改。
 * section 是日报里的分节标题（几个类别可以共用一节，按这里的顺序排）；guide 告诉模型怎么归类。
 * 没归上类的资料在日报里放进第一个 key 为 industry 的类别所在的节（没有就放最后一节）。
 */
export const CATEGORIES = [
  { key: "research", label: "研究前沿", section: "研究进展", guide: "生命科学与医学的基础和转化研究：基因组学、蛋白质组学、神经科学、免疫学、肿瘤学等领域的重要论文与预印本，尤其是 AI 驱动或有 AI 方法创新的研究" },
  { key: "ai-drug", label: "AI制药", section: "AI 制药", guide: "靶点发现、蛋白质结构预测、分子生成与设计、AI 制药公司与管线、药物重定位、实验室自动化中的 AI 应用" },
  { key: "ai-clinical", label: "AI临床", section: "AI 临床与医疗", guide: "医学影像与数字病理 AI、临床决策支持、医疗大模型与问诊 AI、数字疗法、AI 医疗器械（SaMD）及其临床验证与落地" },
  { key: "clinical-reg", label: "试验与审批", section: "临床试验与审批", guide: "重要临床试验设计与结果（各期临床、真实世界证据）、药品与器械的申报和获批、临床指南更新" },
  { key: "industry", label: "产业", section: "行业动态", guide: "公司经营、融资并购、合作、人事、市场与基础设施（测序平台、算力、实验室设备、数据服务）" },
  { key: "policy", label: "政策", section: "政策与伦理", guide: "AI 与生物医药相关的法律法规、监管政策与指导原则、伦理争议、数据隐私、科研治理与出版规范" },
] as const;

/**
 * 内容理解一步给每篇资料判的“内容类型”（写在 prompts/content-understanding.md 里，改了类型要同步改那份提示词）。
 * 评分提示词（prompts/selection-score.md）按类型给五个维度不同的权重。
 */
export const ITEM_TYPES = ["research_paper", "model_tool_release", "clinical_result", "regulatory_action", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;

// ── 标签词表 ────────────────────────────────────────────────────────────────────────────

/** 每篇资料的第一个标签必须是这些“分类标签”之一。 */
export const CATEGORY_TAGS = [
  "论文/研究", "预印本", "模型/工具", "数据集/基准", "临床试验", "审批/监管", "行业动态", "融资/并购", "政策/伦理", "观点/评论", "其他",
] as const;

/** 可选的主题标签。 */
export const TOPIC_TAGS = [
  "AI制药", "蛋白质结构", "基因组学", "单细胞/多组学", "医学影像", "数字病理", "医疗大模型", "生物基础模型", "基因编辑", "细胞治疗",
  "抗体/ADC", "神经科学/脑机接口", "肿瘤", "传染病/疫苗", "精准医疗", "临床决策支持", "真实世界数据", "实验室自动化", "微生物组", "合成生物学",
] as const;

/** 可选的实体标签（公司、机构、平台）。 */
export const ENTITY_TAGS = ["DeepMind", "Isomorphic Labs", "OpenAI", "Microsoft", "NVIDIA", "Recursion", "Insilico Medicine", "Illumina", "FDA", "NIH", "WHO", "NMPA", "bioRxiv", "medRxiv", "arXiv"] as const;

/** 模型常写的近义词，统一成词表里的写法。 */
export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  论文: "论文/研究", 研究: "论文/研究", paper: "论文/研究", 期刊: "论文/研究", 顶刊: "论文/研究",
  preprint: "预印本", 预印: "预印本", biorxiv: "预印本", medrxiv: "预印本",
  模型: "模型/工具", 工具: "模型/工具", 软件: "模型/工具", 平台: "模型/工具", 算法: "模型/工具", 数据库: "模型/工具",
  数据集: "数据集/基准", 基准: "数据集/基准", benchmark: "数据集/基准",
  临床: "临床试验", 试验: "临床试验", 临床数据: "临床试验", 临床结果: "临床试验", "iii期": "临床试验", 真实世界: "临床试验",
  获批: "审批/监管", 批准: "审批/监管", 上市许可: "审批/监管", 监管: "审批/监管", 审批: "审批/监管", 指导原则: "审批/监管", fda: "审批/监管",
  政策: "政策/伦理", 法规: "政策/伦理", 伦理: "政策/伦理", 隐私: "政策/伦理", 治理: "政策/伦理", 争议: "政策/伦理",
  融资: "融资/并购", 收购: "融资/并购", 并购: "融资/并购", 投资: "融资/并购", ipo: "融资/并购",
  合作: "行业动态", 伙伴: "行业动态", 公司: "行业动态", 行业: "行业动态", 动态: "行业动态", 人事: "行业动态",
  观点: "观点/评论", 评论: "观点/评论", 综述: "观点/评论", 解读: "观点/评论", 访谈: "观点/评论", 社论: "观点/评论",
};

/** 模型漏了分类标签时，按内容类型补一个。 */
export const CATEGORY_BY_ITEM_TYPE: Readonly<Record<string, string>> = {
  research_paper: "论文/研究", model_tool_release: "模型/工具", clinical_result: "临床试验", regulatory_action: "审批/监管",
  industry_event: "行业动态", opinion_analysis: "观点/评论", tutorial_explainer: "观点/评论",
};

// ── 公司与主体 ──────────────────────────────────────────────────────────────────────────

/** 公司主题：id → 显示名、卡片上显示的标签（null 表示只用 entity:<id> 归类）、别名。 */
export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[] }> = {
  deepmind: { name: "Google DeepMind", displayTag: "DeepMind", aliases: ["DeepMind", "Google DeepMind", "AlphaFold", "AMIE", "谷歌"] },
  "isomorphic-labs": { name: "Isomorphic Labs", displayTag: "Isomorphic Labs", aliases: ["Isomorphic Labs", "Isomorphic"] },
  openai: { name: "OpenAI", displayTag: "OpenAI", aliases: ["OpenAI", "ChatGPT", "GPT"] },
  microsoft: { name: "Microsoft", displayTag: "Microsoft", aliases: ["Microsoft", "微软", "Nuance", "DAX Copilot"] },
  nvidia: { name: "NVIDIA", displayTag: null, aliases: ["NVIDIA", "英伟达", "BioNeMo", "Clara"] },
  meta: { name: "Meta AI", displayTag: null, aliases: ["Meta AI", "FAIR", "ESM"] },
  recursion: { name: "Recursion", displayTag: null, aliases: ["Recursion", "Recursion Pharmaceuticals"] },
  insilico: { name: "Insilico Medicine", displayTag: "Insilico Medicine", aliases: ["Insilico", "英矽智能", "Insilico Medicine"] },
  xtalpi: { name: "晶泰科技 XtalPi", displayTag: null, aliases: ["XtalPi", "晶泰", "晶泰科技"] },
  illumina: { name: "Illumina", displayTag: null, aliases: ["Illumina", "因美纳"] },
  bgi: { name: "华大基因 BGI", displayTag: null, aliases: ["BGI", "华大", "华大基因"] },
  fda: { name: "美国 FDA", displayTag: null, aliases: ["FDA", "美国食品药品监督管理局"] },
  nih: { name: "美国 NIH", displayTag: null, aliases: ["NIH", "美国国立卫生研究院"] },
  who: { name: "世界卫生组织 WHO", displayTag: null, aliases: ["WHO", "世界卫生组织"] },
  nmpa: { name: "国家药监局 NMPA", displayTag: null, aliases: ["NMPA", "国家药监局"] },
};

/**
 * 身份词典：摘要和标题里出现的公司，必须在原文里也出现过，否则退回原标题、丢掉摘要（防止模型张冠李戴）。
 * 行业没有这个问题时可以留空数组。
 * 注意：生物医药文献里 meta-analysis（荟萃分析）极其常见，绝不能把 /meta/ 当成 Meta 公司的证据。
 */
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "deepmind", name: "Google DeepMind", patterns: [/google\s?deepmind|deepmind|alphafold|alphamissense|alphaproteo|\bAMIE\b/i] },
  { id: "isomorphic-labs", name: "Isomorphic Labs", patterns: [/isomorphic\s?labs|\bisomorphic\b/i] },
  { id: "openai", name: "OpenAI", patterns: [/openai|chatgpt|\bgpt-?[o\d]/i] },
  { id: "microsoft", name: "Microsoft", patterns: [/microsoft|微软|\bnuance\b|\bDAX\s?Copilot/i] },
  { id: "nvidia", name: "NVIDIA", patterns: [/nvidia|英伟达|bionemo|\bclara\b|\bmonai\b/i] },
  { id: "meta", name: "Meta AI", patterns: [/\bmeta\s?(ai|platforms|fair)\b|\bESM-?\d|@AIatMeta/i] },
  { id: "recursion", name: "Recursion", patterns: [/recursion\s?(pharmaceuticals|tx)?\b(?!\s*(algorithm|function))/i] },
  { id: "insilico", name: "Insilico Medicine", patterns: [/insilico|英矽智能/i] },
  { id: "xtalpi", name: "晶泰科技 XtalPi", patterns: [/xtalpi|晶泰/i] },
  { id: "illumina", name: "Illumina", patterns: [/illumina|因美纳/i] },
  { id: "bgi", name: "华大基因 BGI", patterns: [/\bBGI\b|华大基因|华大智造|\bMGI\b/i] },
  { id: "fda", name: "美国 FDA", patterns: [/\bFDA\b|美国食品药品监督管理局/i] },
  { id: "who", name: "世界卫生组织 WHO", patterns: [/\bWHO\b|世界卫生组织/i] },
  { id: "nih", name: "美国 NIH", patterns: [/\bNIH\b|国立卫生研究院/i] },
  { id: "nmpa", name: "国家药监局 NMPA", patterns: [/\bNMPA\b|国家药监局/i] },
];

/** 这些域名上的文章，发布方就是对应的机构（预印本托管平台 bioRxiv、medRxiv、arXiv 不算）。 */
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "deepmind", domains: ["deepmind.google", "ai.google"] },
  { entityId: "isomorphic-labs", domains: ["isomorphiclabs.com"] },
  { entityId: "openai", domains: ["openai.com"] },
  { entityId: "microsoft", domains: ["microsoft.com"] },
  { entityId: "nvidia", domains: ["nvidia.com"] },
  { entityId: "meta", domains: ["ai.meta.com"] },
  { entityId: "recursion", domains: ["recursion.com"] },
  { entityId: "insilico", domains: ["insilico.com"] },
  { entityId: "xtalpi", domains: ["xtalpi.com"] },
  { entityId: "illumina", domains: ["illumina.com"] },
  { entityId: "bgi", domains: ["bgi.com", "mgitech.cn"] },
  { entityId: "fda", domains: ["fda.gov"] },
  { entityId: "nih", domains: ["nih.gov"] },
  { entityId: "who", domains: ["who.int"] },
  { entityId: "nmpa", domains: ["nmpa.gov.cn"] },
];

/** 原文里的这些写法也算提到了对应机构。 */
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [
  { entityId: "deepmind", pattern: /Google\s+(?:Research|Health)[^a-z]*(?:DeepMind)?/i },
  { entityId: "meta", pattern: /@AIatMeta\b/i },
];
