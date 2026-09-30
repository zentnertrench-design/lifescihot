
【生物医学与 AI 交叉领域翻译规则 — 本平台内容是生命科学与医学研究进展（尤其 AI 相关），严格遵守】

1. 歧义默认值：以下词有跨领域歧义，**一律按本领域含义翻译**：
   - Meta-analysis = 荟萃分析／Meta 分析（**绝不**理解为 Meta 公司）
   - Expression = （基因/蛋白）表达（不译"表情""表达式"）
   - Target = 靶点（药物语境）；目标（一般语境）
   - Screening = 筛查（疾病筛查）／筛选（化合物、基因筛选），按上下文选
   - Delivery = 递送（药物递送系统）
   - Resistance = 耐药（肿瘤、抗生素语境）
   - Response = 缓解／应答（临床疗效语境，如 complete response = 完全缓解）
   - Survival = 生存（overall survival = 总生存期，progression-free survival = 无进展生存期）
   - Positive/Negative = 阳性／阴性（检测结果），不译"积极/消极"
   - Significant = 显著（统计学差异）；p < 0.05 = 具有统计学显著性
   - In silico = 计算机模拟（与 in vitro 体外、in vivo 体内并列，拉丁词保留或按此译）
   - LLM = 大语言模型（绝不译"法学硕士"）；Token = 保留英文（模型语境）
   - Transformer / Diffusion / Embedding / Fine-tune / Pretrain / Prompt = 按 AI 领域惯例：Transformer 架构保留英文、扩散模型、嵌入向量、微调、预训练、提示词
   - Agent = AI 智能体（软件语境）；不译"代理人"

2. 以下专有名词**一律保留英文原文**，不翻译不加中文括注：
   - 期刊名：Nature / Science / Cell / NEJM / The Lancet / JAMA / Nature Medicine / Nature Biotechnology / Nature Machine Intelligence / NEJM AI / The Lancet Digital Health / bioRxiv / medRxiv
   - 模型与工具（举例 + 通用规则）：AlphaFold / AlphaMissense / AlphaProteo / RoseTTAFold / ESM / ESMFold / BioNeMo / Clara / MONAI / AMIE / GPT / Claude / Gemini / Evo / scGPT / CellPLM
     **规则**：任何模型名、算法名、软件工具名、数据库名一律保留英文
   - 生物医学缩写（举例 + 通用规则）：DNA / RNA / mRNA / CRISPR / Cas9 / sgRNA / CAR-T / TCR / ADC / GLP-1 / PD-1 / PD-L1 / CTLA-4 / GWAS / scRNA-seq / bulk RNA-seq / ATAC-seq / ChIP-seq / PCR / ELISA / RCT / ORR / PFS / OS / HR / CI / AUC / FDA / EMA / NMPA / NIH / WHO / CDC / IND / NDA / BLA / PDUFA / SaMD / CDISC / iPSC / organoid（类器官可双标）
     **规则**：全大写的生物医学缩写默认保留英文；首次出现可用"中文（英文缩写）"双标，同篇保持一致
   - 统计学表达一字不改：p 值、置信区间、风险比、样本量、剂量单位（如 HR 0.65, 95% CI 0.50–0.84; p<0.001; n=1,243; 10 mg/kg）
   - 通用技术缩写：AI / ML / API / SDK / GPU / TPU

3. 药品与基因命名规则：
   - 药物通用名（INN）：优先用通行中文译名并在首次出现时括注英文，如"司美格鲁肽（semaglutide）""仑卡奈单抗（lecanemab）"；没有通行中文名的保留英文小写通用名。
   - 商品名保留原文首字母大写：Ozempic、Wegovy、Keytruda、Leqembi。
   - 研发代号原样保留：BLU-945、SRSD107、INS018_055。
   - 基因与蛋白符号保留英文斜体惯例的写法即可：TP53、APOE4、HER2、EGFR；细胞系：HeLa、HEK293。
   - 疾病名用规范中文：阿尔茨海默病、帕金森病、2 型糖尿病、非小细胞肺癌（NSCLC 首次双标）。

4. 中国机构与公司**优先用官方中文名**（首次可双标，后续保持一致）：
   - 国家药品监督管理局（NMPA）／国家卫生健康委／中国科学院／中国医学科学院／华大基因（BGI）／药明康德（WuXi AppTec）／晶泰科技（XtalPi）／英矽智能（Insilico Medicine）／百图生科（BioMap）

5. 代码 / 命令 / URL / 数字单位 **一字不改**保留：
   - 反引号代码 `code` 不翻译；软件版本号和参数名不译
   - URL 原样
   - 数字+单位：3.1 Å resolution / 200M parameters / 12-week follow-up / $2.8B / 95% sensitivity
   - 金额、样本量、随访时长、分辨率、参数规模、比例、区间必须保留原文的阿拉伯数字和单位；不要把 $2.8B 改写成"数十亿美元"等中文数量词
