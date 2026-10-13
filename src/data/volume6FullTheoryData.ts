export interface TheoryExample {
  id: string;
  index: number;
  title: string;
  stem: string;
  analysis: string;
  solution: string;
  notes?: string;
}

export interface TheorySection {
  id: string;
  number: string;
  title: string;
  chapterNumber: number;
  pdfPages: string;
  teacherTips: string;
  keyTheorems: { name: string; formula: string; explanation: string }[];
  content: string;
  associatedLabId?: string;
  examples: TheoryExample[];
}

export const VOLUME_6_CHAPTER_THEORY: Record<number, {
  chapterNumber: number;
  title: string;
  subtitle: string;
  introduction: string;
  teacherTips: string;
  sections: TheorySection[];
}> = {
  1: {
    chapterNumber: 1,
    title: "第一章：整除与整数的表示",
    subtitle: "带余除法、素数合数、欧几里得辗转相除法与算术基本定理",
    introduction: "设 a, b 为整数且 a ≠ 0。如果存在整数 c 使得 b = ac，就称 a 整除 b，记作 a|b。整除是数论大厦的第一块基石。带余除法保证了任意两整数相除具有唯一的商和非负余数，而整除的线性性质（若 a|b 且 a|c，则对任意整数 x, y 都有 a|(bx+cy)）更是消元化简的核心利刃。",
    teacherTips: "冯志刚领队传授数论基石：\n1. 整除的线性性质：设法选取代数倍数消去未知数，例如由 n-1 | n²+2 推出 n-1 | 3；\n2. 传递性与保乘性：若 a|b 且 b|c，则 a|c；若 a|b 且 c|d，则 ac|bd；\n3. 连续整数积的整除性：任意 k 个连续整数的乘积必然能被 k! 整除！",
    sections: [
      {
        id: "1.1",
        number: "1.1",
        title: "整数的整除性与带余除法",
        chapterNumber: 1,
        pdfPages: "P7 - P15",
        associatedLabId: "remainder_lattice",
        teacherTips: "分离常数法是初中竞赛最核心的基本功。当未知数同时出现在分子分母时，用长除法把式子化为商式加常数真分式，将未知数压缩到分母因数中。",
        keyTheorems: [
          {
            name: "整除的定义与线性性质",
            formula: "a \\mid b \\text{ 且 } a \\mid c \\implies a \\mid (bx + cy) \\quad (\\forall x, y \\in \\mathbb{Z})",
            explanation: "若一个数整除两项，则必整除这两项的任意整系数线性组合。此定理是数论消元法的理论基石。"
          },
          {
            name: "带余除法唯一存在性定理",
            formula: "a = bq + r \\quad (0 \\le r < |b|)",
            explanation: "对任意整数 a 和非零整数 b，存在且仅存在一对整数 q（商）与 r（余数）满足该等式。"
          }
        ],
        content: "当分子与分母均含有未知数时，利用多项式除法或配凑法将分式化为整数商与常数分子的真分式之和。",
        examples: [
          {
            id: "ex6_1_1",
            index: 1,
            title: "整除性确定整数参数",
            stem: "求所有整数 $n$，使得 $n - 1$ 能整除 $n^2 + 2n + 3$。",
            analysis: "利用线性组合消去 $n$！将分子除以 $n-1$，分离整数与常数余数。",
            solution: "配凑多项式除法：\n$n^2 + 2n + 3 = (n-1)(n+3) + 6$。\n因此：\n$\\frac{n^2 + 2n + 3}{n - 1} = n + 3 + \\frac{6}{n - 1}$。\n若 $n - 1$ 整除 $n^2 + 2n + 3$，则 $n - 1$ 必须整除 6。\n6 的所有整数约数有：$\\pm 1, \\pm 2, \\pm 3, \\pm 6$。\n解得 $n$ 可以取 $-5, -2, -1, 0, 2, 3, 4, 7$ 共 8 个值。",
            notes: "多项式分离常数是求解整除参数的标准动作。"
          }
        ]
      },
      {
        id: "1.2",
        number: "1.2",
        title: "质数（素数）与合数",
        chapterNumber: 1,
        pdfPages: "P16 - P21",
        associatedLabId: "eratosthenes_sieve",
        teacherTips: "‘看到质数先看 2’——这是全国联赛数论最高频的突破口！因为 2 是唯一的偶质数，质数的和与差若为奇数，其中必有一个质数是 2。",
        keyTheorems: [
          {
            name: "大于 3 的质数分布特征",
            formula: "p > 3 \\text{ 为质数 } \\implies p \\equiv 1 \\text{ 或 } 5 \\pmod 6 \\quad (p = 6k \\pm 1)",
            explanation: "任何整数模 6 余数只能为 0,1,2,3,4,5。其中 0,2,3,4 分别为 2 或 3 的倍数，大于 3 的质数只能是 6k±1。"
          },
          {
            name: "欧几里得质数无穷性反证构造",
            formula: "N = p_1 p_2 \\dots p_k + 1",
            explanation: "若质数只有有限个，则 N 除以其中任何已知质数均余 1，必然衍生出新的质因数，产生矛盾。"
          }
        ],
        content: "大于 1 的整数，若只有 1 和它本身两个正因数称为质数；否则称为合数。围绕质数的奇偶性与整除分解，衍生出无穷无尽的精彩难题。",
        examples: [
          {
            id: "ex6_1_2",
            index: 2,
            title: "质数平方差方程求解",
            stem: "求所有质数对 $(p, q)$，使得 $p^2 - 2q^2 = 1$。",
            analysis: "移项分解为 $(p-1)(p+1) = 2q^2$。分析因数分解及 2 的奇偶性！",
            solution: "由题意 $(p - 1)(p + 1) = 2q^2$。\n若 $p = 2$，则 $4 - 2q^2 = 1 \\implies 2q^2 = 3$（无解）。\n因此 $p$ 必为奇质数。\n$p-1$ 与 $p+1$ 是连续偶数，乘积 $(p-1)(p+1)$ 必能被 8 整除。\n故 $2q^2$ 能被 8 整除 $\\implies q^2$ 能被 4 整除 $\\implies q$ 是偶数。\n因为 $q$ 是质数，唯一偶质数是 2，故必有 $q = 2$！\n代入得 $p^2 - 2(4) = 1 \\implies p^2 = 9 \\implies p = 3$。\n答：满足条件的质数对为 $(p, q) = (3, 2)$。",
            notes: "‘连续偶数积被 8 整除’迫使 $q$ 为偶质数 2，逻辑极其严密。"
          }
        ]
      },
      {
        id: "1.3",
        number: "1.3",
        title: "最大公因数与最小公倍数",
        chapterNumber: 1,
        pdfPages: "P22 - P25",
        associatedLabId: "euclidean_bezout",
        teacherTips: "辗转相除法核心恒等式：gcd(a, b) = gcd(b, a mod b)；裴蜀定理（Bézout's identity）：必然存在整数 x, y 使得 ax + by = gcd(a, b)！这是求解不定方程的灵魂。",
        keyTheorems: [
          {
            name: "GCD 与 LCM 对偶乘积恒等式",
            formula: "(a, b) \\cdot [a, b] = a \\cdot b",
            explanation: "两正整数的最大公因数与最小公倍数的乘积，恒等于这两数本身的乘积。"
          },
          {
            name: "裴蜀定理（Bézout's identity）",
            formula: "\\exists x, y \\in \\mathbb{Z}, \\quad ax + by = \\gcd(a, b)",
            explanation: "任意两整数 a 与 b 的最大公约数，都可以表示为 a 和 b 的整系数线性组合。"
          }
        ],
        content: "把未知量表示为最大公约数的倍数，将问题转化为互质因数的因式分解。",
        examples: [
          {
            id: "ex6_1_3",
            index: 3,
            title: "求最大公约数与最小公倍数方程",
            stem: "已知两个正整数 $a, b$ 满足 $(a, b) = 12$ 且 $[a, b] = 180$。求满足条件的所有无序数对 $\\{a, b\\}$。",
            analysis: "设 $a = 12x, b = 12y$，其中 $\\gcd(x, y) = 1$。利用公式代入！",
            solution: "设 $a = 12x, b = 12y$，$\\gcd(x, y) = 1$。\n由 $[a, b] = 12xy = 180 \\implies xy = 15$。\n互质因数分解：\n1. $\\{x, y\\} = \\{1, 15\\} \\implies \\{a, b\\} = \\{12, 180\\}$；\n2. $\\{x, y\\} = \\{3, 5\\} \\implies \\{a, b\\} = \\{36, 60\\}$。\n答：无序数对为 $\\{12, 180\\}$ 和 $\\{36, 60\\}$。",
            notes: "设出最大公约数化归为互质数对，是解决 GCD/LCM 问题的标准套路。"
          }
        ]
      },
      {
        id: "1.4",
        number: "1.4",
        title: "算术基本定理与唯一分解",
        chapterNumber: 1,
        pdfPages: "P26 - P31",
        associatedLabId: "factorization_legendre",
        teacherTips: "正约数个数公式 d(n) = (a1+1)...(ak+1)；勒让德公式计算阶乘末尾零个数就是计算 5 的最高幂次 E5(n!)！",
        keyTheorems: [
          {
            name: "算术基本定理（唯一分解定理）",
            formula: "n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k} \\quad (p_1 < p_2 < \\dots < p_k)",
            explanation: "任何大于 1 的正整数都可以唯一地分解为有限个质数的乘积。"
          },
          {
            name: "勒让德公式（阶乘中质因子幂次）",
            formula: "E_p(n!) = \\sum_{k=1}^\\infty \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor",
            explanation: "用于计算 n! 中质因子 p 的最高幂次，是初中奥数极具威力的解析工具。"
          }
        ],
        content: "算术基本定理是数论大厦的真正中枢。由此可以精确推导出正约数个数公式、正约数和公式，以及阶乘中质因数幂次的勒让德公式。",
        examples: [
          {
            id: "ex6_1_4",
            index: 4,
            title: "求阶乘末尾连续 0 的个数",
            stem: "求 $100! = 1 \\times 2 \\times \\dots \\times 100$ 的末尾连续有多少个零？",
            analysis: "末尾 0 由 $2 \\times 5 = 10$ 产生。在 $100!$ 中质因数 2 远多于 5，只需计算 $E_5(100!)$！",
            solution: "由勒让德公式：\n$E_5(100!) = \\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor + \\lfloor 100/125 \\rfloor = 20 + 4 + 0 = 24$。\n答：$100!$ 的末尾连续有 24 个零。",
            notes: "勒让德公式计算阶乘质因数幂次，简洁优雅。"
          }
        ]
      }
    ]
  },
  2: {
    chapterNumber: 2,
    title: "第二章：同余与同余方程",
    subtitle: "高斯同余算术、完全剩余系、费马小定理与完全平方数",
    introduction: "若两个整数 a, b 除以正整数 m 所得的余数相同，称 a 与 b 对模 m 同余，记作 a ≡ b (mod m)。同余符号‘≡’由数学王子高斯首创。它具有加、减、乘、乘方运算完全保同余的优良性质。同余将无限的整数全集压缩为模 m 下的有限个等价类，使得周期性问题与末位数字计算迎刃而解。",
    teacherTips: "冯志刚领队提点：\n1. 同余定义三等价：a ≡ b (mod m) ⟺ m | (a - b) ⟺ a = mq + b；\n2. 同余除法必须慎重：仅当 gcd(c, m) = 1 时才可以约去 c；\n3. 负余数技巧：m-1 ≡ -1 (mod m)，遇到接近模的数，用 -1 代换可以极大简化乘方计算！",
    sections: [
      {
        id: "2.1",
        number: "2.1",
        title: "同余的概念和性质",
        chapterNumber: 2,
        pdfPages: "P32 - P39",
        associatedLabId: "modular_clock",
        teacherTips: "熟练利用负余数代换是余数速算的第一大杀器！例如 2024 除以 7，2024 = 7*289 + 1 ≡ 1 (mod 7)，或者 6^100 ≡ (-1)^100 ≡ 1 (mod 7)。",
        keyTheorems: [
          {
            name: "同余定义三等价性",
            formula: "a \\equiv b \\pmod m \\iff m \\mid (a - b) \\iff a = mq + b",
            explanation: "同余的本质是两数之差能被模数整除。"
          },
          {
            name: "同余乘方与负余数性质",
            formula: "a \\equiv -1 \\pmod m \\implies a^n \\equiv (-1)^n \\pmod m",
            explanation: "对于接近模数的数字，采用负余数 -1 可以使高次幂运算瞬间化简为 ±1。"
          }
        ],
        content: "同余具有反身性、对称性与传递性，并且在加法、减法、乘法以及正整数乘方下完全封闭保持同余。",
        examples: [
          {
            id: "ex6_2_1",
            index: 1,
            title: "求大数幂次的末尾两位数",
            stem: "求 $7^{2024}$ 的末两位数字。",
            analysis: "求末两位数字等价于求模 100 的余数！寻找 7 的幂次模 100 的周期。",
            solution: "计算 7 的各次幂模 100：\n$7^1 \\equiv 7 \\pmod{100}$\n$7^2 = 49 \\equiv 49 \\pmod{100}$\n$7^3 = 343 \\equiv 43 \\pmod{100}$\n$7^4 = 2401 \\equiv 1 \\pmod{100}$。\n发现周期为 4！\n因此：$7^{2024} = (7^4)^{506} \\equiv 1^{506} \\equiv 1 \\equiv 01 \\pmod{100}$。\n答：$7^{2024}$ 的末两位数字是 01。",
            notes: "求模 100 余数寻找周期，是初中奥数高频必考母题。"
          }
        ]
      },
      {
        id: "2.2",
        number: "2.2",
        title: "剩余类及完全剩余系",
        chapterNumber: 2,
        pdfPages: "P40 - P45",
        associatedLabId: "residue_system",
        teacherTips: "若 gcd(a, m) = 1，则对于完全剩余系 {x1, x2, ..., xm}，{ax1+b, ax2+b, ..., axm+b} 仍构成模 m 的完全剩余系！这是费马小定理推导的钥匙。",
        keyTheorems: [
          {
            name: "完全剩余系判定定理",
            formula: "\\{r_1, r_2, \\dots, r_m\\} \\text{ 两两模 } m \\text{ 不同余 } \\implies \\text{构成完系}",
            explanation: "任意 m 个模 m 两两不同余的整数集合，恰好覆盖模 m 的所有可能余数。"
          },
          {
            name: "线性变换保完系定理",
            formula: "\\gcd(a, m) = 1 \\implies \\{ax_i + b\\} \\text{ 仍为模 } m \\text{ 的完全剩余系}",
            explanation: "互质乘数与平移不改变剩余系的完整性与两两不同余性。"
          }
        ],
        content: "所有整数按模 m 的余数划分为 m 个不相交的集合，每个集合称为模 m 的一个剩余类。从每个剩余类中各取一个代表元构成的集合称为完全剩余系。",
        examples: [
          {
            id: "ex6_2_2",
            index: 2,
            title: "连续整数乘积与完全剩余系应用",
            stem: "证明：任意连续 $n$ 个整数中，必有且仅有一个数能被 $n$ 整除。",
            analysis: "利用完全剩余系性质，连续 $n$ 个整数模 $n$ 构成完全剩余系！",
            solution: "设这 $n$ 个连续整数为 $a, a+1, \\dots, a+n-1$。\n若其中存在两个数模 $n$ 同余：$(a+j) \\equiv (a+k) \\pmod n$（$0 \\le j < k \\le n-1$），\n则 $n \\mid (k - j)$。但 $0 < k - j < n$，不可能被 $n$ 整除，矛盾！\n因此这 $n$ 个数模 $n$ 两两不同余，恰好构成模 $n$ 的完全剩余系。\n在模 $n$ 的完全剩余系中，余数 0 恰好出现一次。\n故必有且仅有一个数能被 $n$ 整除。证毕。",
            notes: "完全剩余系的无重复覆盖性是本题秒杀的关键。"
          }
        ]
      },
      {
        id: "2.3",
        number: "2.3",
        title: "费马小定理与阶乘循环",
        chapterNumber: 2,
        pdfPages: "P46 - P50",
        associatedLabId: "fermat_operator",
        teacherTips: "费马小定理是数论在余数速算中的核武器！只要模数是质数 p 且 gcd(a, p) = 1，指数立即模 p-1 降幂！",
        keyTheorems: [
          {
            name: "费马小定理（Fermat's Little Theorem）",
            formula: "p \\nmid a \\implies a^{p-1} \\equiv 1 \\pmod p \\quad (p \\text{ 为质数})",
            explanation: "质数模下，任意非倍数的整数的 p-1 次幂必模 p 余 1。"
          },
          {
            name: "费马小定理指数降幂准则",
            formula: "a^n \\equiv a^{n \\bmod (p-1)} \\pmod p",
            explanation: "计算超大幂次时，指数 n 可以直接用其除以 p-1 的余数替代！"
          }
        ],
        content: "法国数学家费马于 1640 年提出该定理。它是现代公钥密码学（如 RSA 算法）与初等数论余数速算的基石。",
        examples: [
          {
            id: "ex6_2_3",
            index: 3,
            title: "费马小定理指数超强降幂",
            stem: "求 $2^{100}$ 除以 $13$ 的余数。",
            analysis: "模数 13 是质数，且 $\\gcd(2, 13) = 1$。由费马小定理，$2^{12} \\equiv 1 \\pmod{13}$！",
            solution: "因为 13 是质数且 $13 \\nmid 2$，由费马小定理：\n$2^{12} \\equiv 1 \\pmod{13}$。\n将指数 100 除以 12：$100 = 12 \\times 8 + 4$。\n因此：\n$2^{100} = (2^{12})^8 \\times 2^4 \\equiv 1^8 \\times 16 \\equiv 16 \\equiv 3 \\pmod{13}$。\n答：$2^{100}$ 除以 $13$ 的余数是 3。",
            notes: "指数除以 p-1 降幂，几秒钟化繁为简。"
          }
        ]
      },
      {
        id: "2.4",
        number: "2.4",
        title: "奇数与偶数（奇偶性分析）",
        chapterNumber: 2,
        pdfPages: "P51 - P56",
        associatedLabId: "square_fingerprint",
        teacherTips: "奇偶性分析属于模 2 同余的特例。在组合博弈、残缺棋盘骨牌覆盖与代数最值中，奇偶不变量是最轻巧却最具杀伤力的武器。",
        keyTheorems: [
          {
            name: "奇偶代数和奇偶性定理",
            formula: "\\sum_{i=1}^n x_i \\equiv \\sum_{i=1}^n |x_i| \\pmod 2",
            explanation: "若干整数的和与差的奇偶性，完全由其中奇数的个数决定（奇数个奇数和为奇，偶数个奇数和为偶）。"
          }
        ],
        content: "探索数字奇偶性在整数方程与竞赛组合中的守恒不变量规律。",
        examples: [
          {
            id: "ex6_2_4",
            index: 4,
            title: "黑板擦数游戏的奇偶不变量",
            stem: "黑板上写有 $1, 2, 3, \\dots, 2025$ 共 2025 个数。每次擦去任意两个数 $a, b$，并写上它们的差 $|a - b|$。重复此操作直到只剩一个数。问最后剩下的数是奇数还是偶数？",
            analysis: "考察每次操作前后所有数的总和的奇偶性变化！",
            solution: "设擦去前的总和为 $S$，擦去 $a, b$ 并写入 $|a-b|$ 后的新总和为 $S'$。\n$S - S' = (a + b) - |a - b| = 2 \\min(a, b)$，这是偶数！\n因此 $S' \\equiv S \\pmod 2$，即每次操作总和的奇偶性保持不变（奇偶不变量）！\n初始总和：\n$S = 1 + 2 + \\dots + 2025 = \\frac{2025 \\times 2026}{2} = 2025 \\times 1013$，为奇数乘奇数 = 奇数！\n因为初始总和为奇数，且奇偶性守恒，最后剩下的唯一的数必然是奇数。\n答：最后剩下的数必为奇数。",
            notes: "奇偶不变量是数学奥林匹克博弈论的皇冠方法。"
          }
        ]
      },
      {
        id: "2.5",
        number: "2.5",
        title: "完全平方数的同余性质",
        chapterNumber: 2,
        pdfPages: "P57 - P66",
        associatedLabId: "square_fingerprint",
        teacherTips: "平方数模 3, 4 必余 0 或 1；模 8 奇数平方必余 1；模 5 必余 0, 1, 4！看到方程两边有平方项，立即用模 3 或模 4 进行同余排查，无解立即显形！",
        keyTheorems: [
          {
            name: "平方数模 3 与模 4 二次剩余定理",
            formula: "n^2 \\equiv 0 \\text{ 或 } 1 \\pmod 3, \\quad n^2 \\equiv 0 \\text{ 或 } 1 \\pmod 4",
            explanation: "任何整数的平方除以 3 或 4，余数绝对不可能是 2（模 4 也绝不可能为 3）。"
          },
          {
            name: "平方数模 8 二次剩余特征",
            formula: "(2k+1)^2 \\equiv 1 \\pmod 8",
            explanation: "任意奇数的平方除以 8 恒余 1！这是竞赛中极具杀伤力的否定性武器。"
          }
        ],
        content: "完全平方数的二次剩余具有强烈的特征指纹，是证明丢番图方程无整数解的最锐利工具。",
        examples: [
          {
            id: "ex6_2_5",
            index: 5,
            title: "模 4 同余排查证明方程无整数解",
            stem: "证明方程 $x^2 - 3y^2 = 2026$ 没有整数解 $(x, y)$。",
            analysis: "考察方程两边模 3 或模 4 的余数！",
            solution: "将方程两边考虑模 3：\n$x^2 - 3y^2 \\equiv x^2 \\pmod 3$。\n完全平方数 $x^2 \\pmod 3$ 的可能余数只能是 $0$ 或 $1$。\n再看右边：\n$2026 = 3 \\times 675 + 1 \\equiv 1 \\pmod 3$（模 3 无法排除）。\n改用模 4 排查：\n右边：$2026 = 4 \\times 506 + 2 \\equiv 2 \\pmod 4$。\n左边：$x^2 - 3y^2 \\equiv x^2 + y^2 \\pmod 4$。\n因为 $x^2, y^2 \\pmod 4 \\in \\{0, 1\\}$：\n可能的和：$0+0=0, 0+1=1, 1+1=2$。\n要使 $x^2 + y^2 \\equiv 2 \\pmod 4$，必须 $x^2 \\equiv 1$ 且 $y^2 \\equiv 1 \\pmod 4$，即 $x, y$ 均为奇数！\n若 $x, y$ 均为奇数，则考虑模 8：\n奇数平方模 8 必余 1，即 $x^2 \\equiv 1, y^2 \\equiv 1 \\pmod 8$。\n左边：$x^2 - 3y^2 \\equiv 1 - 3(1) = -2 \\equiv 6 \\pmod 8$。\n右边：$2026 = 8 \\times 253 + 2 \\equiv 2 \\pmod 8$。\n左边模 8 余 6，右边模 8 余 2，恒不相等！矛盾！\n因此方程没有整数解。证毕。",
            notes: "模 4 锁定奇数，再换模 8 彻底击穿，这是数论证明无解的绝杀组合拳！"
          }
        ]
      }
    ]
  },
  3: {
    chapterNumber: 3,
    title: "第三章：不定方程（丢番图方程）",
    subtitle: "一次不定方程、常用因式夹逼筛选法与勾股方程",
    introduction: "丢番图方程是数论皇冠上的璀璨明珠。探索未知数个数多于方程个数的整数解求解体系。从二元一次不定方程的通解公式与裴蜀逆推，到非线性不定方程的三大破局利器（因式分解、不等式夹逼、同余排查），直至千古名题勾股方程的欧几里得圆投影通解与费马降次法。",
    teacherTips: "冯志刚领队传授不定方程三大拆招秘籍：\n1. 看到乘积与和交织（如 xy - 2x - 3y = 5）：两边加上常数使左边能分组分解为 (x-3)(y-2) = 11！\n2. 看到单位分数倒数和（如 1/x + 1/y = 1/p）：去分母后移项化为 (x-p)(y-p) = p²！\n3. 对称多元方程：大胆假设大小次序 x ≤ y ≤ z，往往能一举夹出最小变量的上限！",
    sections: [
      {
        id: "3.1",
        number: "3.1",
        title: "一次不定方程（线性丢番图方程）",
        chapterNumber: 3,
        pdfPages: "P67 - P74",
        associatedLabId: "euclidean_bezout",
        teacherTips: "ax + by = c 有整数解充要条件是 gcd(a, b) | c。求出一组特解 (x0, y0) 后，通解公式为 x = x0 + (b/d)t, y = y0 - (a/d)t。结合正整数不等式即得有限组解。",
        keyTheorems: [
          {
            name: "二元一次不定方程有解充要条件",
            formula: "ax + by = c \\text{ 有整数解 } \\iff \\gcd(a, b) \\mid c",
            explanation: "若 c 不能被 a 和 b 的最大公约数整除，则绝无整数解。"
          },
          {
            name: "一次不定方程通解参数方程",
            formula: "\\begin{cases} x = x_0 + \\frac{b}{d} t \\\\ y = y_0 - \\frac{a}{d} t \\end{cases} \\quad (d = \\gcd(a, b), t \\in \\mathbb{Z})",
            explanation: "所有整数解均沿斜率线呈等距离散分布。"
          }
        ],
        content: "利用欧几里得算法求特解，写出通解表达式，再通过区间夹逼求解所有正整数解。",
        examples: [
          {
            id: "ex6_3_1",
            index: 1,
            title: "求二元一次不定方程的正整数解",
            stem: "求方程 $7x + 11y = 100$ 的所有正整数解 $(x, y)$。",
            analysis: "先观察或模 11 找一组特解。再根据通解列出 $x > 0, y > 0$ 不等式！",
            solution: "因为 $\\gcd(7, 11) = 1$，且 $1 \\mid 100$，方程必有整数解。\n观察模 11：$7x \\equiv 100 \\equiv 1 \\pmod{11}$。\n因为 $7 \\times 8 = 56 \\equiv 1 \\pmod{11}$，可取特解 $x_0 = 8$。\n代入原方程：$7(8) + 11y = 100 \\implies 11y = 44 \\implies y_0 = 4$。\n得到特解 $(x_0, y_0) = (8, 4)$。\n通解公式为：\n$x = 8 + 11t, \\quad y = 4 - 7t \\quad (t \\in \\mathbb{Z})$。\n要求正整数解：\n$8 + 11t > 0 \\implies t > -8/11 \\approx -0.72$；\n$4 - 7t > 0 \\implies t < 4/7 \\approx 0.57$。\n整数 $t$ 只能取 $0$！\n当 $t = 0$ 时，$(x, y) = (8, 4)$。\n答：方程唯一的正整数解为 $(8, 4)$。",
            notes: "通解公式结合区间夹逼，迅速确定唯一正整数解。"
          }
        ]
      },
      {
        id: "3.2",
        number: "3.2",
        title: "不定方程的常用解法集萃",
        chapterNumber: 3,
        pdfPages: "P75 - P85",
        associatedLabId: "pythagorean_lattice",
        teacherTips: "非线性不定方程三大主流战术：1. 因式分解法：移项将多项式整理为 (A)(B) = C（常数）；2. 不等式夹逼法：设 x ≤ y ≤ z 压出范围；3. 同余筛选法：模特定小质数排除伪解。",
        keyTheorems: [
          {
            name: "双一次项因式分解标准形",
            formula: "xy - ax - by = c \\iff (x - b)(y - a) = c + ab",
            explanation: "通过两边添加 ab，将含有交叉项的方程强行因式分解为常数积。"
          },
          {
            name: "倒数和化简标准方程",
            formula: "\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{n} \\iff (x - n)(y - n) = n^2",
            explanation: "将分式单位分数方程去分母化为经典正约数枚举问题。"
          }
        ],
        content: "将非线性不定方程化为有限个因数分解组合，或通过边界不等式夹出有限求解域。",
        examples: [
          {
            id: "ex6_3_2",
            index: 2,
            title: "单位分数方程的正整数解",
            stem: "求方程 $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{4}$ 的所有正整数解 $(x, y)$，其中 $x \\le y$。",
            analysis: "去分母得 $xy - 4x - 4y = 0$。两边同时加 16 凑出完全因式分解！",
            solution: "两边同乘以 $4xy$：$4y + 4x = xy \\implies xy - 4x - 4y = 0$。\n两边同时加 16：$(x - 4)(y - 4) = 16$。\n因为 $x, y$ 为正整数且 $x \\le y$（由于 $1/x < 1/4$，知 $x > 4$），\n所以 $x - 4$ 与 $y - 4$ 是正整数且 $x - 4 \\le y - 4$。\n16 的正因数乘积分解：\n1. $(1, 16) \\implies (x, y) = (5, 20)$；\n2. $(2, 8) \\implies (x, y) = (6, 12)$；\n3. $(4, 4) \\implies (x, y) = (8, 8)$。\n答：满足 $x \\le y$ 的正整数解为 $(5, 20), (6, 12), (8, 8)$ 共 3 组。",
            notes: "凑因式分解将非线性方程彻底转化为正约数枚举。"
          }
        ]
      },
      {
        id: "3.3",
        number: "3.3",
        title: "勾股方程与非线性不定方程",
        chapterNumber: 3,
        pdfPages: "P86 - P118",
        associatedLabId: "pythagorean_lattice",
        teacherTips: "满足 x² + y² = z² 的正整数三元组为勾股数。欧几里得本原勾股数通解公式为 x = m² - n², y = 2mn, z = m² + n²（m > n > 0, gcd(m, n) = 1, 一奇一偶）。乘积 xyz 恒为 60 的倍数！",
        keyTheorems: [
          {
            name: "欧几里得本原勾股数通解构造公式",
            formula: "x = m^2 - n^2, \\; y = 2mn, \\; z = m^2 + n^2 \\quad (m > n > 0, \\gcd(m, n) = 1, m, n \\text{ 奇偶相异})",
            explanation: "给出全部满足 gcd(x, y, z) = 1 的勾股方程正整数解的唯一参数化形式。"
          },
          {
            name: "本原勾股数乘积整除定理",
            formula: "x^2 + y^2 = z^2 \\implies 60 \\mid xyz \\quad (3 \\mid xyz, \\; 4 \\mid xyz, \\; 5 \\mid xyz)",
            explanation: "任何本原勾股数组中，直角边与斜边的乘积必然是 60 的倍数。"
          }
        ],
        content: "深入剖析勾股方程通解推导、单位圆有理点立体投影参数化以及高阶费马大定理初阶思想。",
        examples: [
          {
            id: "ex6_3_3",
            index: 3,
            title: "证明勾股数乘积必被 60 整除",
            stem: "已知正整数 $x, y, z$ 满足 $x^2 + y^2 = z^2$。求证：乘积 $xyz$ 必然是 60 的倍数。",
            analysis: "$60 = 3 \\times 4 \\times 5$。只需分别证明 $3 \\mid xyz, 4 \\mid xyz, 5 \\mid xyz$！",
            solution: "1. 证 $4 \\mid xyz$：若 $x, y$ 均为奇数，则 $x^2 + y^2 \\equiv 2 \\pmod 4$，但平方数只能余 0 或 1，矛盾！故至少一偶。由构造公式偶数项为 $2mn$，当 $m, n$ 一奇一偶时 $2mn$ 是 4 的倍数，故 $4 \\mid xyz$。\n2. 证 $3 \\mid xyz$：平方数模 3 只能余 0 或 1。若都不被 3 整除，则 $x^2+y^2 \\equiv 1+1=2 \\pmod 3$，矛盾！故 $3 \\mid xyz$。\n3. 证 $5 \\mid xyz$：平方数模 5 只能余 0, 1, 4。若都不被 5 整除，可能的和 $1+1=2, 1+4=0, 4+4=3 \\pmod 5$，均无法等于 1 或 4，矛盾！故 $5 \\mid xyz$。\n综上，因为 $3, 4, 5$ 两两互质，故 $3 \\times 4 \\times 5 = 60 \\mid xyz$。证毕。",
            notes: "选模 3, 4, 5 进行二次剩余同余排查，是数论证明整除倍数的巅峰范本。"
          }
        ]
      }
    ]
  }
};
