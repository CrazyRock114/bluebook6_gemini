export interface VolumeInfo {
  id: number;
  volumeNumber: number;
  title: string;
  fullTitle: string;
  author: string;
  authorTitle: string;
  category: "algebra" | "geometry" | "number_theory" | "combinatorics";
  categoryName: string;
  badgeColor: string;
  totalPages: number;
  bodyPages: number;
  answerPages: number;
  chapterCount: number;
  status: "active" | "preview";
  coverGradient: string;
  description: string;
  targetAudience: string;
  highlights: string[];
  keyTopics: string[];
}

export const ALL_VOLUMES: VolumeInfo[] = [
  {
    id: 1,
    volumeNumber: 1,
    title: "因式分解技巧",
    fullTitle: "数学奥林匹克小丛书（初中卷1）：因式分解技巧",
    author: "单墫",
    authorTitle: "前中国数学奥林匹克国家队领队、总教练、南京师范大学教授",
    category: "algebra",
    categoryName: "代数体系 · 基础",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    totalPages: 134,
    bodyPages: 91,
    answerPages: 33,
    chapterCount: 13,
    status: "preview",
    coverGradient: "from-amber-600/30 via-slate-900 to-slate-950",
    description: "初中代数变形的奠基之作。从提公因式、公式法，讲到拆项添项、双十字相乘、待定系数法、轮换对称式，直至实数与复数集分解和艾森斯坦既约判别法，堪称初中因式分解神作。",
    targetAudience: "初一至初三竞赛生、初高中数学衔接自招",
    highlights: ["13大核心解题模块", "单墫六大解题要诀", "轮换对称式因式定理", "艾森斯坦既约判别法"],
    keyTopics: ["提公因式与公式法", "拆项与添项", "分组分解", "双十字相乘法", "对称式与轮换式", "待定系数法"]
  },
  {
    id: 2,
    volumeNumber: 2,
    title: "方程与方程组",
    fullTitle: "数学奥林匹克小丛书（初中卷2）：方程与方程组",
    author: "葛军",
    authorTitle: "著名数学奥林匹克高级教练、南京师范大学兼职教授",
    category: "algebra",
    categoryName: "代数体系 · 进阶",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    totalPages: 181,
    bodyPages: 132,
    answerPages: 42,
    chapterCount: 18,
    status: "preview",
    coverGradient: "from-orange-600/30 via-slate-900 to-slate-950",
    description: "葛军老师倾力之作。系统剖析一元一次方程、多元一次方程组、配方法、一元二次方程根的判别式与韦达定理、高次方程、分式与无理方程，深入探讨不定方程整数解与应用题模型。",
    targetAudience: "初二至初三、全国初中数学联赛一试备考",
    highlights: ["配方法非负性求解", "判别式法求代数最值", "韦达定理降次变形", "一次与二次方程整数根"],
    keyTopics: ["多元一次方程组消元", "韦达定理逆应用", "高次方程因式分解解法", "分式与无理方程验根", "判别式夹逼法"]
  },
  {
    id: 3,
    volumeNumber: 3,
    title: "一次函数与二次函数",
    fullTitle: "数学奥林匹克小丛书（初中卷3）：一次函数与二次函数",
    author: "李惟峰",
    authorTitle: "资深奥数教练、高级教师",
    category: "algebra",
    categoryName: "代数体系 · 核心",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    totalPages: 133,
    bodyPages: 98,
    answerPages: 28,
    chapterCount: 7,
    status: "preview",
    coverGradient: "from-rose-600/30 via-slate-900 to-slate-950",
    description: "数形结合的绝佳载体。全面阐述一次与二次函数的图象几何变换、顶点式与零点式、根的分布定理、闭区间最值讨论（轴动与区间动），攻克初中压轴大题与竞赛压轴难题。",
    targetAudience: "初二至初三拔高、中考压轴与初中联赛",
    highlights: ["绝对值折线函数中位数极值", "二次方程根的区间分布三位一体", "含参闭区间二次函数最值", "动点与数形结合建模"],
    keyTopics: ["一次函数图像与变换", "绝对值折线最值", "二次函数对称轴与顶点", "闭区间含参动轴动区间最值", "零点分布充要条件"]
  },
  {
    id: 4,
    volumeNumber: 4,
    title: "三角形与四边形",
    fullTitle: "数学奥林匹克小丛书（初中卷4）：三角形与四边形",
    author: "沈文选",
    authorTitle: "湖南师范大学教授、全国初等数学研究会理事长",
    category: "geometry",
    categoryName: "几何体系 · 基石",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    totalPages: 242,
    bodyPages: 189,
    answerPages: 46,
    chapterCount: 18,
    status: "preview",
    coverGradient: "from-emerald-600/30 via-slate-900 to-slate-950",
    description: "初中平面几何百科全书（242页大部头）。全等、相似、面积法、共轭中线、三角形四心（外心/内心/重心/垂心）、塞瓦与梅涅劳斯定理，以及特色四边形和圆内接四边形深度演练。",
    targetAudience: "初二、初三竞赛核心冲刺",
    highlights: ["几何大部头242页精粹", "倍长中线与截长补短法", "塞瓦与梅涅劳斯神定理", "三角形四心与欧拉线"],
    keyTopics: ["全等与相似三角形辅助线", "面积法证明共点共线", "梅涅劳斯定理与塞瓦定理", "重心内心外心垂心性质", "梯形与平行四边形模型"]
  },
  {
    id: 5,
    volumeNumber: 5,
    title: "圆",
    fullTitle: "数学奥林匹克小丛书（初中卷5）：圆",
    author: "柯新立",
    authorTitle: "著名数学竞赛教练",
    category: "geometry",
    categoryName: "几何体系 · 巅峰",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    totalPages: 150,
    bodyPages: 102,
    answerPages: 41,
    chapterCount: 11,
    status: "preview",
    coverGradient: "from-teal-600/30 via-slate-900 to-slate-950",
    description: "初中几何殿堂级难点。深入浅出透视圆的对称性、弦切角定理、四点共圆判定与角转移、圆幂定理（相交弦/切割线/割线）、托勒密定理及三角形内切圆与外接圆高级性质，联赛二试几何必备。",
    targetAudience: "初三联赛备考、高中竞赛初阶衔接",
    highlights: ["弦切角角转移利剑", "四点共圆判定与性质母题", "圆幂定理三合一", "托勒密定理对角线乘积和"],
    keyTopics: ["圆周角与圆心角定理", "弦切角定理与角转移", "四点共圆四种判定模型", "相交弦与切割线定理", "托勒密定理及其推广", "根轴与圆幂"]
  },
  {
    id: 6,
    volumeNumber: 6,
    title: "整除、同余与不定方程",
    fullTitle: "数学奥林匹克小丛书（初中卷6）：整除、同余与不定方程",
    author: "冯志刚",
    authorTitle: "上海中学校长、多届IMO国际数学奥林匹克中国国家队领队与总教练",
    category: "number_theory",
    categoryName: "初等数论 · 旗舰",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    totalPages: 131,
    bodyPages: 118,
    answerPages: 5,
    chapterCount: 3, // 3 major chapters, 12 lectures
    status: "active",
    coverGradient: "from-blue-600/30 via-slate-900 to-slate-950",
    description: "IMO功勋领队亲授初中数论经典范本。结构严密遵循3大篇章12大核心讲座：整除与带余除法、素数合数、欧几里得辗转相除法、算术基本定理、高斯同余算术、完全与简化剩余系、费马小定理初阶、奇偶性分析、完全平方数同余特征、一次不定方程、常用解法及勾股方程。本站全量研发标杆卷，包含116题四阶脚手架、156讲视频与9大多模态算法实验室！",
    targetAudience: "初中数论入门、全国联赛冲刺、国家集训队预备",
    highlights: ["国家队总教练冯志刚亲著", "116道联赛经典赛题逐题四阶精解", "156讲高清微课25.3小时零遗漏", "9大多模态算法交互实验室"],
    keyTopics: ["整除与带余除法", "素数与合数分布", "辗转相除法与裴蜀定理", "算术基本定理与勒让德公式", "高斯同余与剩余系", "费马小定理", "奇偶性不变量", "完全平方数模余指纹", "一次不定方程通解", "勾股数构造与非线性不定方程"]
  },
  {
    id: 7,
    volumeNumber: 7,
    title: "组合趣题",
    fullTitle: "数学奥林匹克小丛书（初中卷7）：组合趣题",
    author: "周建新",
    authorTitle: "奥数资深教练",
    category: "combinatorics",
    categoryName: "组合数学 · 思维",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    totalPages: 106,
    bodyPages: 77,
    answerPages: 19,
    chapterCount: 5,
    status: "preview",
    coverGradient: "from-purple-600/30 via-slate-900 to-slate-950",
    description: "激发创造性思维的最佳读物。涵盖计数问题（枚举与加乘原理、容斥原理）、抽屉原理（鸽巢原理）、染色问题（棋盘网格与图形染色）、操作与博弈游戏（不变量与对称必胜策略）、以及压轴大题组合最值（算两次与估计构造）。",
    targetAudience: "培养思维灵活性、全学段竞赛生",
    highlights: ["容斥原理多退少补", "鸽巢原理数论与几何抽屉", "残缺棋盘黑白染色否定", "博弈不变量与组合最值算两次"],
    keyTopics: ["加法与乘法原理", "容斥原理多集合计数", "抽屉原理存在性证明", "棋盘格点与图染色模型", "操作与游戏不变量分析", "算两次双向计数"]
  },
  {
    id: 8,
    volumeNumber: 8,
    title: "初中数学竞赛中的解题方法与策略",
    fullTitle: "数学奥林匹克小丛书（初中卷8）：初中数学竞赛中的解题方法与策略",
    author: "冯志刚",
    authorTitle: "上海中学校长、多届IMO中国国家队领队",
    category: "combinatorics",
    categoryName: "综合策略 · 集大成",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    totalPages: 203,
    bodyPages: 140,
    answerPages: 53,
    chapterCount: 10,
    status: "preview",
    coverGradient: "from-indigo-600/30 via-slate-900 to-slate-950",
    description: "全套初中丛书的集大成收官之作。站在元认知的高度，提炼反证法、数学归纳法、构造法、极值原理、不变量原理、抽屉原理、坐标与向量法、以及从特殊到一般的合情推理，熔铸奥数解题总纲。",
    targetAudience: "全国初中数学联赛二试、高中联赛预备队",
    highlights: ["冯志刚领队解题元方法", "反证法归谬法逻辑剖析", "极值原理与离散极值点", "构造性证明与反例构造"],
    keyTopics: ["反证法与同一法", "第一与第二数学归纳法", "构造法与辅助元素引入", "极值原理与最小反例法", "局部调整法与离散微商", "从特殊到一般的归纳猜想"]
  }
];

export const SERIES_CATEGORIES = [
  { key: "all", name: "全部 8 卷", count: 8 },
  { key: "algebra", name: "代数体系 (卷1-3)", count: 3, desc: "因式分解 · 方程方程组 · 函数最值" },
  { key: "geometry", name: "几何体系 (卷4-5)", count: 2, desc: "三角形四边形 · 圆与圆幂定理" },
  { key: "number_theory", name: "初等数论 (卷6)", count: 1, desc: "整除 · 同余 · 不定方程 (标杆卷)" },
  { key: "combinatorics", name: "组合与策略 (卷7-8)", count: 2, desc: "组合计数染色 · 竞赛解题总纲" }
];
