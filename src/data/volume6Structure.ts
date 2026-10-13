export interface LabMetadata {
  id: string;
  name: string;
  chapter: number;
  section: string;
  iconName: string;
  badge: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  algorithmName: string;
  complexity: string;
  relatedFormulas: string[];
}

export interface SectionMetadata {
  id: string;
  number: string;
  title: string;
  chapterNumber: number;
  pdfPages: string;
  videoCount: number;
  summary: string;
  keyTheorems: string[];
  associatedLabId?: string;
}

export interface ChapterMetadata {
  number: number;
  id: string;
  title: string;
  subtitle: string;
  pdfPages: string;
  videoCount: number;
  exerciseCount: number;
  sections: SectionMetadata[];
  description: string;
  colorScheme: string;
}

export const VOLUME_6_CHAPTERS: ChapterMetadata[] = [
  {
    number: 1,
    id: "ch1",
    title: "整除与整数的表示",
    subtitle: "带余除法、素数合数、欧几里得辗转相除法与算术基本定理",
    pdfPages: "P7 - P31 (教材第 1 - 22 页)",
    videoCount: 37,
    exerciseCount: 40,
    colorScheme: "blue",
    description: "数论大厦的第一块基石。深入探讨整数的整除性质与带余除法、素数与合数的无穷分布、人类最古老算法欧几里得辗转相除法与裴蜀恒等式，以及数论核心中枢算术基本定理与勒让德阶乘公式。",
    sections: [
      {
        id: "1.1",
        number: "1.1",
        title: "整数的整除性与带余除法",
        chapterNumber: 1,
        pdfPages: "P7 - P15",
        videoCount: 7,
        summary: "整除定义、线性组合性质（若 a|b 且 a|c 则 a|(bx+cy)）、多项式分离常数法与除法算式。",
        keyTheorems: ["带余除法唯一存在性定理", "整除线性组合消元原理", "连续 k 个整数乘积必能被 k! 整除"],
        associatedLabId: "remainder_lattice"
      },
      {
        id: "1.2",
        number: "1.2",
        title: "质数与合数",
        chapterNumber: 1,
        pdfPages: "P16 - P21",
        videoCount: 11,
        summary: "最小偶质数 2 的奇偶破局点、6k±1 质数形式、欧几里得质数无穷性反证构造法与埃氏筛法。",
        keyTheorems: ["欧几里得质数无穷性定理", "质数分布 6k±1 准则", "看到质数先看 2 奇偶性原理"],
        associatedLabId: "eratosthenes_sieve"
      },
      {
        id: "1.3",
        number: "1.3",
        title: "最大公因数与最小公倍数",
        chapterNumber: 1,
        pdfPages: "P22 - P25",
        videoCount: 10,
        summary: "辗转相除法 gcd(a,b)=gcd(b,r)、裴蜀定理 ax+by=gcd(a,b)、两数乘积恒等式 (a,b)[a,b]=ab。",
        keyTheorems: ["欧几里得算法恒等式", "裴蜀定理（Bézout's identity）", "最大公约数与最小公倍数对偶乘积恒等式"],
        associatedLabId: "euclidean_bezout"
      },
      {
        id: "1.4",
        number: "1.4",
        title: "算术基本定理与唯一分解",
        chapterNumber: 1,
        pdfPages: "P26 - P31",
        videoCount: 9,
        summary: "唯一分解定理标准分解式、正约数个数与约数和公式、勒让德公式计算阶乘末尾零个数。",
        keyTheorems: ["算术基本定理（唯一分解定理）", "正约数个数乘积公式 d(n)", "勒让德阶乘最高质因数幂次公式 Ep(n!)"],
        associatedLabId: "factorization_legendre"
      }
    ]
  },
  {
    number: 2,
    id: "ch2",
    title: "同余与同余方程",
    subtitle: "高斯同余算术、完全剩余系、费马小定理与完全平方数",
    pdfPages: "P32 - P66 (教材第 23 - 57 页)",
    videoCount: 49,
    exerciseCount: 40,
    colorScheme: "indigo",
    description: "数学王子高斯创立的同余符号，将无限的整数全集压缩为模 m 下的有限等价类环。本章透视同余运算律、完全剩余系与简化剩余系、费马小定理在余数速算中的核武器效应、奇偶性不变量以及完全平方数的二次剩余模特征。",
    sections: [
      {
        id: "2.1",
        number: "2.1",
        title: "同余的概念和性质",
        chapterNumber: 2,
        pdfPages: "P32 - P39",
        videoCount: 6,
        summary: "高斯同余三等价定义（m|(a-b)）、加减乘乘方保同余性、模算术约分限制与负余数技巧。",
        keyTheorems: ["同余三等价定义准则", "同余代数四则运算封闭律", "负余数代换定律 (m-1) ≡ -1 (mod m)"],
        associatedLabId: "modular_clock"
      },
      {
        id: "2.2",
        number: "2.2",
        title: "剩余类及完全剩余系",
        chapterNumber: 2,
        pdfPages: "P40 - P45",
        videoCount: 7,
        summary: "模 m 剩余类等价分割、完全剩余系充要判定、线性变换剩余系定理与欧拉函数简化剩余系。",
        keyTheorems: ["完全剩余系判定定理", "互质线性变换保完系定理：gcd(a,m)=1 则 {ax_i+b} 仍为完系", "欧拉函数 φ(m) 缩系原理"],
        associatedLabId: "residue_system"
      },
      {
        id: "2.3",
        number: "2.3",
        title: "费马小定理与阶乘循环",
        chapterNumber: 2,
        pdfPages: "P46 - P50",
        videoCount: 5,
        summary: "质数模下费马小定理 a^(p-1) ≡ 1 (mod p)、指数降幂法则、余数周期序列与逆元。",
        keyTheorems: ["费马小定理标准式：p∤a ⟹ a^(p-1) ≡ 1 (mod p)", "费马小定理整除式：a^p ≡ a (mod p)", "阶与原根周期循环定理"],
        associatedLabId: "fermat_operator"
      },
      {
        id: "2.4",
        number: "2.4",
        title: "奇数与偶数（奇偶性分析）",
        chapterNumber: 2,
        pdfPages: "P51 - P56",
        videoCount: 11,
        summary: "模 2 同余特征、奇偶和差积运算表、国际象棋棋盘染色不变量、博弈操作奇偶否定法。",
        keyTheorems: ["奇偶加减乘运算法则", "奇数项与偶数项代数和不变量", "残缺棋盘骨牌覆盖的奇偶黑白否定定理"],
        associatedLabId: "square_fingerprint"
      },
      {
        id: "2.5",
        number: "2.5",
        title: "完全平方数的同余性质",
        chapterNumber: 2,
        pdfPages: "P57 - P66",
        videoCount: 10,
        summary: "平方数模 3, 4 必余 0 或 1；模 5 必余 0, 1, 4；模 8 必余 0, 1, 4；末位指纹判定非平方数。",
        keyTheorems: ["平方数模 3 与模 4 二次剩余定理（余数只能为 0 或 1）", "平方数模 8 特征：奇数平方必 ≡ 1 (mod 8)", "末位数字与末两位数字二次剩余指纹排除法"],
        associatedLabId: "square_fingerprint"
      }
    ]
  },
  {
    number: 3,
    id: "ch3",
    title: "不定方程（丢番图方程）",
    subtitle: "一次不定方程、常用因式夹逼筛选法与勾股方程",
    pdfPages: "P67 - P118 (教材第 58 - 109 页)",
    videoCount: 70,
    exerciseCount: 36,
    colorScheme: "emerald",
    description: "数论皇冠上的璀璨明珠——丢番图方程。探索未知数个数多于方程个数的整数解求解体系。从二元一次不定方程的通解公式与裴蜀逆推，到非线性不定方程的三大破局利器（因式分解、不等式夹逼、同余排查），直至千古名题勾股方程的欧几里得圆投影通解与费马降次法。",
    sections: [
      {
        id: "3.1",
        number: "3.1",
        title: "一次不定方程（线性丢番图方程）",
        chapterNumber: 3,
        pdfPages: "P67 - P74",
        videoCount: 6,
        summary: "ax + by = c 有解充要条件 gcd(a,b)|c、裴蜀递推求特解、通解公式 x=x0+(b/d)t 与正整数解区间夹逼。",
        keyTheorems: ["二元一次不定方程有解充要条件", "一次不定方程通解参数方程", "弗罗贝尼乌斯硬币最大不可表示数公式 g(a,b)=ab-a-b"],
        associatedLabId: "euclidean_bezout"
      },
      {
        id: "3.2",
        number: "3.2",
        title: "不定方程的常用解法集萃",
        chapterNumber: 3,
        pdfPages: "P75 - P85",
        videoCount: 6,
        summary: "因式分解法（整理为 (A)(B)=常数）、不等式夹逼法（对称设序 x≤y≤z）、同余筛选法（模特定小质数否定伪解）。",
        keyTheorems: ["双一次项分解法则：xy-ax-by=c ⟺ (x-b)(y-a)=c+ab", "倒数和化简方程：1/x + 1/y = 1/n ⟺ (x-n)(y-n)=n^2", "变量排序对称不等式边界夹逼法"],
        associatedLabId: "pythagorean_lattice"
      },
      {
        id: "3.3",
        number: "3.3",
        title: "勾股方程与非线性不定方程",
        chapterNumber: 3,
        pdfPages: "P86 - P118",
        videoCount: 28,
        summary: "x²+y²=z² 本原勾股数欧几里得构造公式 (m²-n², 2mn, m²+n²)、直角三角形面积与乘积被 60 整除证明、费马大定理初探。",
        keyTheorems: ["欧几里得本原勾股数通解构造公式", "本原勾股数整除特征：3|xyz, 4|xyz, 5|xyz ⟹ 60|xyz", "单位圆有理点立体投影参数化原理"],
        associatedLabId: "pythagorean_lattice"
      }
    ]
  }
];

export const VOLUME_6_LABS: LabMetadata[] = [
  {
    id: "remainder_lattice",
    name: "带余除法几何切片与整除网格",
    chapter: 1,
    section: "1.1",
    iconName: "Grid",
    badge: "第1章基石",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    subtitle: "a = b·q + r 的动态矩形离散切片与整除验证",
    description: "拖动被除数 a 与除数 b，实时观察离散晶格的矩形完整切片与余数留痕。自动展示带余除法唯一存在性定理的几何本质与整除判据。",
    algorithmName: "Division Algorithm Lattice Slicer",
    complexity: "O(1) 离散渲染",
    relatedFormulas: ["a = bq + r \\quad (0 \\le r < b)", "a \\mid b \\iff r = 0"]
  },
  {
    id: "euclidean_bezout",
    name: "欧几里得辗转相除与裴蜀定理回代器",
    chapter: 1,
    section: "1.3",
    iconName: "Cpu",
    badge: "人类古老算法",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    subtitle: "几何正方形铺砌收敛过程与 ax + by = gcd(a,b) 整数特解",
    description: "直观展示长宽为 a 与 b 的矩形被最大可能正方形逐层铺砌收敛的过程。同步步进打印正向欧几里得除法链与逆向回代裴蜀方程整数系数。",
    algorithmName: "Extended Euclidean Algorithm (EEA)",
    complexity: "O(log min(a, b))",
    relatedFormulas: ["\\gcd(a, b) = \\gcd(b, a \\bmod b)", "ax + by = \\gcd(a, b)"]
  },
  {
    id: "eratosthenes_sieve",
    name: "埃拉托斯特尼动态筛与素数密度计",
    chapter: 1,
    section: "1.2",
    iconName: "Filter",
    badge: "素数原子探针",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    subtitle: "2~200 动态多级合数筛除动画与素数定理 π(n) 渐近对比",
    description: "交互式播放 2, 3, 5, 7, 11... 质数的倍数筛选动画。实时统计素数计数函数 π(n)，与黎曼素数定理高斯猜想 n/ln(n) 进行密度拟合。",
    algorithmName: "Sieve of Eratosthenes",
    complexity: "O(n \\log \\log n)",
    relatedFormulas: ["\\pi(n) \\sim \\frac{n}{\\ln n}", "p \\le \\sqrt{n}"]
  },
  {
    id: "factorization_legendre",
    name: "质因数分解树与勒让德阶梯探针",
    chapter: 1,
    section: "1.4",
    iconName: "Layers",
    badge: "唯一分解中枢",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    subtitle: "算术基本定理标准分解、正约数个数 d(n) 与阶乘末尾零",
    description: "输入任意大数瞬间生成质因子二叉分解树。切换到勒让德模式，可视化 n! 中质因子 p 的各阶幂次截断求和阶梯，洞察末尾连续 0 的生成密码。",
    algorithmName: "Trial Division & Legendre Factor Sum",
    complexity: "O(\\sqrt{n}) / O(\\log_p n)",
    relatedFormulas: ["n = \\prod p_i^{\\alpha_i}", "d(n) = \\prod (\\alpha_i + 1)", "E_p(n!) = \\sum \\lfloor n / p^k \\rfloor"]
  },
  {
    id: "modular_clock",
    name: "模钟环形同余运算器",
    chapter: 2,
    section: "2.1",
    iconName: "Clock",
    badge: "第2章核心",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    subtitle: "模 m 时钟表盘、等价类环与模加/模乘的周期性旋转",
    description: "设置模数 m ∈ [2, 24]，在环形表盘上直观观察任意大数如何沿轨道环绕坍缩至 [0, m-1]。动态演示模乘周期轨道与负余数跳跃。",
    algorithmName: "Modular Ring Clock Arithmetic",
    complexity: "O(1)",
    relatedFormulas: ["a \\equiv b \\pmod m \\iff m \\mid (a - b)", "(m - 1) \\equiv -1 \\pmod m"]
  },
  {
    id: "residue_system",
    name: "剩余类矩阵与完全/简化剩余系探索器",
    chapter: 2,
    section: "2.2",
    iconName: "Table",
    badge: "群论微胚胎",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    subtitle: "模 m 剩余类网格、互质缩系高亮与欧拉函数 φ(m) 计数",
    description: "多维网格展示任意模 m 下所有整数的划分。一键高亮互质的简化剩余系，验证乘法线性变换 ax+b 是否保持完全剩余系不变。",
    algorithmName: "Residue Class Partition & Coprime Sieve",
    complexity: "O(m \\log m)",
    relatedFormulas: ["\\gcd(a, m) = 1 \\implies \\{a x_i + b\\} \\text{ 为完系}", "\\phi(m) = m \\prod (1 - 1/p)"]
  },
  {
    id: "fermat_operator",
    name: "费马小定理周期算子与幂次循环仪",
    chapter: 2,
    section: "2.3",
    iconName: "Zap",
    badge: "余数速算神器",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    subtitle: "a^k mod p 的周期轨线、阶与 a^(p-1) ≡ 1 状态机",
    description: "输入质数 p 与互质底数 a，逐步演算 a^1, a^2, ..., a^(p-1) mod p。动态绘制余数在有向图上的周期环跳跃，直观见证费马小定理的必然闭环。",
    algorithmName: "Fermat Power Modulo Cycle Scanner",
    complexity: "O(p)",
    relatedFormulas: ["a^{p-1} \\equiv 1 \\pmod p \\quad (p \\nmid a)", "a^p \\equiv a \\pmod p"]
  },
  {
    id: "square_fingerprint",
    name: "完全平方数模余指纹与末位判定器",
    chapter: 2,
    section: "2.5",
    iconName: "Fingerprint",
    badge: "数论指纹排查",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    subtitle: "模 3, 4, 5, 8 二次剩余指纹图谱与快速非平方数排查",
    description: "一键展示所有模数下的二次剩余合法集合。输入任意大数或代数式，通过模 3 (只能为0,1)、模 4 (只能为0,1)、模 8 (奇数只能为1) 闪电排除非平方数！",
    algorithmName: "Quadratic Residue Fingerprint Verification",
    complexity: "O(1) 查表",
    relatedFormulas: ["n^2 \\pmod 3 \\in \\{0, 1\\}", "n^2 \\pmod 4 \\in \\{0, 1\\}", "(2k+1)^2 \\equiv 1 \\pmod 8"]
  },
  {
    id: "pythagorean_lattice",
    name: "勾股方程欧几里得圆投影晶格发生器",
    chapter: 3,
    section: "3.3",
    iconName: "Shapes",
    badge: "丢番图经典",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    subtitle: "(m²-n², 2mn, m²+n²) 本原勾股数构造与单位圆有理点投影",
    description: "调节互质奇偶互异参数 m, n，动态实时生成直角三角形晶格。同步在单位圆 x²+y²=1 上展示斜率参数 t=n/m 的立体有理点投影，证明 60|xyz。",
    algorithmName: "Euclidean Primitive Pythagorean Triple Generator",
    complexity: "O(1)",
    relatedFormulas: ["x = m^2 - n^2, \\; y = 2mn, \\; z = m^2 + n^2", "60 \\mid xyz"]
  }
];
