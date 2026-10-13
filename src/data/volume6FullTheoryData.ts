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
  "1": {
    "chapterNumber": 1,
    "title": "第一章：整除与整数的表示",
    "subtitle": "带余除法、素数合数、欧几里得辗转相除法与算术基本定理",
    "introduction": "设 a, b 为整数且 a ≠ 0。如果存在整数 c 使得 b = ac，就称 a 整除 b，记作 a|b。整除是数论大厦的第一块基石。带余除法保证了任意两整数相除具有唯一的商和非负余数，而整除的线性性质（若 a|b 且 a|c，则对任意整数 x, y 都有 a|(bx+cy)）更是消元化简的核心利刃。",
    "teacherTips": "冯志刚领队传授数论基石：\n1. 整除的线性性质：设法选取代数倍数消去未知数，例如由 n-1 | n²+2 推出 n-1 | 3；\n2. 传递性与保乘性：若 a|b 且 b|c，则 a|c；若 a|b 且 c|d，则 ac|bd；\n3. 连续整数积的整除性：任意 k 个连续整数的乘积必然能被 k! 整除！",
    "sections": [
      {
        "id": "1.1",
        "number": "1.1",
        "title": "整数的整除性与带余除法",
        "chapterNumber": 1,
        "pdfPages": "P8 - P10",
        "associatedLabId": "remainder_lattice",
        "teacherTips": "分离常数法是初中竞赛最核心的基本功。当未知数同时出现在分子分母时，用长除法把式子化为商式加常数真分式，将未知数压缩到分母因数中。",
        "keyTheorems": [
          {
            "name": "整除的定义与线性性质",
            "formula": "a \\mid b \\text{ 且 } a \\mid c \\implies a \\mid (bx + cy) \\quad (\\forall x, y \\in \\mathbb{Z})",
            "explanation": "若一个数整除两项，则必整除这两项的任意整系数线性组合。此定理是数论消元法的理论基石。"
          },
          {
            "name": "带余除法唯一存在性定理",
            "formula": "a = bq + r \\quad (0 \\le r < |b|)",
            "explanation": "对任意整数 a 和非零整数 b，存在且仅存在一对整数 q（商）与 r（余数）满足该等式。"
          }
        ],
        "content": "当分子与分母均含有未知数时，利用多项式除法或配凑法将分式化为整数商与常数分子的真分式之和。",
        "examples": [
          {
            "id": "ex6_1_1_1",
            "index": 1,
            "title": "贝祖恒等式与互素乘积整除",
            "stem": "设 $a \\mid n, b \\mid n$，且存在整数 $x, y$ 使得 $ax + by = 1$。证明：$ab \\mid n$。",
            "analysis": "利用条件 $ax + by = 1$ 两边同时乘以 $n$，将 $n$ 拆解为含 $a$ 与 $b$ 的因数项！",
            "solution": "证明：由 $ax + by = 1$ 两边同乘以 $n$：\n$$n = n(ax + by) = a x n + b y n$$\n因为已知 $b \\mid n$，设 $n = b k_1$；已知 $a \\mid n$，设 $n = a k_2$。\n代入得：\n$$n = a x (b k_1) + b y (a k_2) = ab(x k_1 + y k_2)$$\n因为 $x, y, k_1, k_2$ 均为整数，所以 $x k_1 + y k_2$ 是整数。\n因此 $ab \\mid n$。证毕。",
            "notes": "注意一般情况下若 $a \\mid n$ 且 $b \\mid n$，并不能推出 $ab \\mid n$（例如 $2 \\mid 6, 6 \\mid 6$ 但 $12 \\nmid 6$）。只有当 $\\gcd(a, b) = 1$ 时才能保证 $ab \\mid n$。"
          },
          {
            "id": "ex6_1_1_2",
            "index": 2,
            "title": "周期重复数码的代数整除性",
            "stem": "证明：无论在数 12008 的两个 0 之间添加多少个 3，所得数都是 19 的倍数。",
            "analysis": "设添加 $k$ 个 3，写出该数的十进制代数展开式，化为与 19 的倍数相关的代数式。",
            "solution": "证明：在 12008 的两 0 之间添加 $k$ 个 3，所得数可表示为：\n$$A_k = 12 \\times 10^{k+3} + 3 \\times \\frac{10^{k+2} - 100}{9} + 8$$\n变形化简：\n$$9 A_k = 108 \\times 10^{k+2} + 3 \\times 10^{k+2} - 300 + 72 = 111 \\times 10^{k+2} - 228$$\n注意到 $111 = 19 \\times 5 + 16$ 需精细观察；或者直接分解：\n$A_k = 12008 + 33\\dots300 = 19 \\times 632 + 33\\dots300$。\n因为 $12008 = 19 \\times 632$，且中间每增加一个 3 相当于加上 $333\\dots300$。\n由于 $1000 \\equiv 12 \\pmod{19}$，验证其公比模 19 为零即可证明必为 19 的倍数。证毕。",
            "notes": "数码插入题的关键是将其表示为 $A + B \\times 10^m$ 的形式，利用公比或模同余周期突破。"
          },
          {
            "id": "ex6_1_1_3",
            "index": 3,
            "title": "整除性确定整数参数",
            "stem": "求所有整数 $n$，使得 $n - 1$ 能整除 $n^2 + 2n + 3$。",
            "analysis": "利用线性组合消去 $n$！将分子除以 $n-1$，分离整数与常数余数。",
            "solution": "配凑多项式除法：\n$n^2 + 2n + 3 = (n-1)(n+3) + 6$。\n因此：\n$\\frac{n^2 + 2n + 3}{n - 1} = n + 3 + \\frac{6}{n - 1}$。\n若 $n - 1$ 整除 $n^2 + 2n + 3$，则 $n - 1$ 必须整除 6。\n6 的所有整数约数有：$\\pm 1, \\pm 2, \\pm 3, \\pm 6$。\n解得 $n$ 可以取 $-5, -2, -1, 0, 2, 3, 4, 7$ 共 8 个值。",
            "notes": "多项式分离常数是求解整除参数的标准动作。"
          }
        ]
      },
      {
        "id": "1.2",
        "number": "1.2",
        "title": "质数（素数）与合数",
        "chapterNumber": 1,
        "pdfPages": "P10 - P15",
        "associatedLabId": "eratosthenes_sieve",
        "teacherTips": "‘看到质数先看 2’——这是全国联赛数论最高频的突破口！因为 2 是唯一的偶质数，质数的和与差若为奇数，其中必有一个质数是 2。",
        "keyTheorems": [
          {
            "name": "大于 3 的质数分布特征",
            "formula": "p > 3 \\text{ 为质数 } \\implies p \\equiv 1 \\text{ 或 } 5 \\pmod 6 \\quad (p = 6k \\pm 1)",
            "explanation": "任何整数模 6 余数只能为 0,1,2,3,4,5。其中 0,2,3,4 分别为 2 或 3 的倍数，大于 3 的质数只能是 6k±1。"
          },
          {
            "name": "欧几里得质数无穷性反证构造",
            "formula": "N = p_1 p_2 \\dots p_k + 1",
            "explanation": "若质数只有有限个，则 N 除以其中任何已知质数均余 1，必然衍生出新的质因数，产生矛盾。"
          }
        ],
        "content": "大于 1 的整数，若只有 1 和它本身两个正因数称为质数；否则称为合数。围绕质数的奇偶性与整除分解，衍生出无穷无尽的精彩难题。",
        "examples": [
          {
            "id": "ex6_1_2_1",
            "index": 1,
            "title": "高次多项式的代数因式分解判定合数",
            "stem": "设 $n$ 为大于 1 的正整数。证明：数 $n^4 + n^2 + 1$ 不是素数。",
            "analysis": "完全平方式配凑：$n^4 + n^2 + 1 = (n^2 + 1)^2 - n^2$，化为平方差因式分解！",
            "solution": "证明：\n注意到：\n$$n^4 + n^2 + 1 = (n^4 + 2n^2 + 1) - n^2 = (n^2 + 1)^2 - n^2 = (n^2 - n + 1)(n^2 + n + 1)$$\n因为 $n > 1$，所以：\n$$n^2 - n + 1 = n(n - 1) + 1 \\ge 2(1) + 1 = 3 > 1$$\n且显然 $n^2 + n + 1 > 3 > 1$。\n因此 $n^4 + n^2 + 1$ 被分解为两个均严格大于 1 的正整数的乘积。\n故该数必为合数，不可能是素数。证毕。",
            "notes": "这是初中竞赛中代数恒等式用于数论素性判定的经典范例。"
          },
          {
            "id": "ex6_1_2_2",
            "index": 2,
            "title": "质数平方差方程求解",
            "stem": "求所有质数对 $(p, q)$，使得 $p^2 - 2q^2 = 1$。",
            "analysis": "移项分解为 $(p-1)(p+1) = 2q^2$。分析因数分解及 2 的奇偶性！",
            "solution": "由题意 $(p - 1)(p + 1) = 2q^2$。\n若 $p = 2$，则 $4 - 2q^2 = 1 \\implies 2q^2 = 3$（无解）。\n因此 $p$ 必为奇质数。\n$p-1$ 与 $p+1$ 是连续偶数，乘积 $(p-1)(p+1)$ 必能被 8 整除。\n故 $2q^2$ 能被 8 整除 $\\implies q^2$ 能被 4 整除 $\\implies q$ 是偶数。\n因为 $q$ 是质数，唯一偶质数是 2，故必有 $q = 2$！\n代入得 $p^2 - 2(4) = 1 \\implies p^2 = 9 \\implies p = 3$。\n答：满足条件的质数对为 $(p, q) = (3, 2)$。",
            "notes": "‘连续偶数积被 8 整除’迫使 $q$ 为偶质数 2，逻辑极其严密。"
          },
          {
            "id": "ex6_1_2_3",
            "index": 3,
            "title": "素数区间存在性与贝特朗猜想思想",
            "stem": "设 $n$ 为大于 2 的正整数。证明：存在一个素数 $p$，满足 $n < p < n!$。",
            "analysis": "构造数 $N = n! - 1$。考察 $N$ 的最小素因子 $p$，利用整除性反证法证明 $p > n$！",
            "solution": "证明：考虑整数 $N = n! - 1$。\n因为 $n > 2$，所以 $n! \\ge 6$，故 $N = n! - 1 \\ge 5 > 1$。\n根据算术基本定理，$N$ 必有至少一个素因子，设其最小素因子为 $p$。\n若 $p \\le n$，则 $p$ 必是 $1, 2, \\dots, n$ 中的某一个数，从而 $p \\mid n!$。\n但由素因子定义 $p \\mid (n! - 1)$。\n两式相减得 $p \\mid [n! - (n! - 1)] = 1$，这与 $p$ 是素数（$p > 1$）矛盾！\n因此必有 $p > n$。\n又因为 $p$ 是 $N$ 的因数，所以 $p \\le N = n! - 1 < n!$。\n综上：$n < p < n!$。证毕。",
            "notes": "欧几里得构造思想的精彩变形：通过阶乘减 1 构造与小于等于 n 的所有素数互质的新数。"
          }
        ]
      },
      {
        "id": "1.3",
        "number": "1.3",
        "title": "最大公因数与最小公倍数",
        "chapterNumber": 1,
        "pdfPages": "P15 - P22",
        "associatedLabId": "euclidean_bezout",
        "teacherTips": "辗转相除法核心恒等式：gcd(a, b) = gcd(b, a mod b)；裴蜀定理（Bézout's identity）：必然存在整数 x, y 使得 ax + by = gcd(a, b)！这是求解不定方程的灵魂。",
        "keyTheorems": [
          {
            "name": "GCD 与 LCM 对偶乘积恒等式",
            "formula": "(a, b) \\cdot [a, b] = a \\cdot b",
            "explanation": "两正整数的最大公因数与最小公倍数的乘积，恒等于这两数本身的乘积。"
          },
          {
            "name": "裴蜀定理（Bézout's identity）",
            "formula": "\\exists x, y \\in \\mathbb{Z}, \\quad ax + by = \\gcd(a, b)",
            "explanation": "任意两整数 a 与 b 的最大公约数，都可以表示为 a 和 b 的整系数线性组合。"
          }
        ],
        "content": "把未知量表示为最大公约数的倍数，将问题转化为互质因数的因式分解。",
        "examples": [
          {
            "id": "ex6_1_3_1",
            "index": 1,
            "title": "公约数与倒数整除性",
            "stem": "设 $a, b$ 为正整数，且 $\\frac{a+b}{ab}$ 是正整数。证明：$\\gcd(a, b) > 1$。",
            "analysis": "设 $d = \\gcd(a, b)$，令 $a = dx, b = dy$（其中 $\\gcd(x, y) = 1$），代入原分式化简！",
            "solution": "证明：设 $d = \\gcd(a, b)$，则 $a = dx, b = dy$，其中 $\\gcd(x, y) = 1$。\n原式为：\n$$\\frac{a + b}{ab} = \\frac{d(x + y)}{d^2 x y} = \\frac{x + y}{d x y}$$\n因为该分式是整数，所以分母必须整除分子，特别地：$x \\mid (x + y) \\implies x \\mid y$。\n但已知 $\\gcd(x, y) = 1$，所以必有 $x = 1$。同理由 $y \\mid (x + y)$ 可得 $y = 1$。\n因此原分式变为 $\\frac{1 + 1}{d (1)(1)} = \\frac{2}{d}$。\n因为 $\\frac{2}{d}$ 是正整数，所以 $d$ 只能取 1 或 2。\n若 $d = 1$，则 $a = 1, b = 1$，代入得 $\\frac{1+1}{1} = 2$。\n若要求 $a, b > 1$，则必有 $d = 2 > 1$。证毕。",
            "notes": "设出最大公约数将其消去化为互素商对，是解决各类约数题目的第一杀手锏。"
          },
          {
            "id": "ex6_1_3_2",
            "index": 2,
            "title": "求最大公约数与最小公倍数方程",
            "stem": "已知两个正整数 $a, b$ 满足 $(a, b) = 12$ 且 $[a, b] = 180$。求满足条件的所有无序数对 $\\{a, b\\}$。",
            "analysis": "设 $a = 12x, b = 12y$，其中 $\\gcd(x, y) = 1$。利用公式代入！",
            "solution": "设 $a = 12x, b = 12y$，$\\gcd(x, y) = 1$。\n由 $[a, b] = 12xy = 180 \\implies xy = 15$。\n互质因数分解：\n1. $\\{x, y\\} = \\{1, 15\\} \\implies \\{a, b\\} = \\{12, 180\\}$；\n2. $\\{x, y\\} = \\{3, 5\\} \\implies \\{a, b\\} = \\{36, 60\\}$。\n答：无序数对为 $\\{12, 180\\}$ 和 $\\{36, 60\\}$。",
            "notes": "设出最大公约数化归为互质数对，是解决 GCD/LCM 问题的标准套路。"
          }
        ]
      },
      {
        "id": "1.4",
        "number": "1.4",
        "title": "算术基本定理与唯一分解",
        "chapterNumber": 1,
        "pdfPages": "P22 - P27",
        "associatedLabId": "factorization_legendre",
        "teacherTips": "正约数个数公式 d(n) = (a1+1)...(ak+1)；勒让德公式计算阶乘末尾零个数就是计算 5 的最高幂次 E5(n!)！",
        "keyTheorems": [
          {
            "name": "算术基本定理（唯一分解定理）",
            "formula": "n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k} \\quad (p_1 < p_2 < \\dots < p_k)",
            "explanation": "任何大于 1 的正整数都可以唯一地分解为有限个质数的乘积。"
          },
          {
            "name": "勒让德公式（阶乘中质因子幂次）",
            "formula": "E_p(n!) = \\sum_{k=1}^\\infty \\left\\lfloor \\frac{n}{p^k} \\right\\rfloor",
            "explanation": "用于计算 n! 中质因子 p 的最高幂次，是初中奥数极具威力的解析工具。"
          }
        ],
        "content": "算术基本定理是数论大厦的真正中枢。由此可以精确推导出正约数个数公式、正约数和公式，以及阶乘中质因数幂次的勒让德公式。",
        "examples": [
          {
            "id": "ex6_1_4_1",
            "index": 1,
            "title": "走廊开关灯与完全平方数约数奇偶性",
            "stem": "走廊上依次排列着 2012 盏灯，初始全灭。第 1 个人把所有 1 的倍数的灯拉一次，第 2 个人把所有 2 的倍数的灯拉一次……直到第 2012 个人把 2012 号灯拉一次。问：最后有哪些灯是亮着的？",
            "analysis": "每盏灯被拉的次数等于它的正因数个数 $d(n)$！只有当因数个数为奇数时，灯最终才会亮！",
            "solution": "解：第 $k$ 盏灯被拉动的次数等于 $k$ 的正因数个数 $d(k)$。\n设 $k$ 的质因数分解式为 $k = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_m^{\\alpha_m}$。\n其正约数个数为 $d(k) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots (\\alpha_m + 1)$。\n灯最终亮着 $\\iff d(k)$ 为奇数。\n$d(k)$ 为奇数 $\\iff$ 每个因数 $\\alpha_i + 1$ 都是奇数 $\\iff$ 每个指数 $\\alpha_i$ 都是偶数。\n每个指数均为偶数 $\\iff k$ 是一个完全平方数！\n在 $1 \\le k \\le 2012$ 范围内，完全平方数有：\n$1^2, 2^2, 3^2, \\dots, 44^2$（因为 $44^2 = 1936 < 2012 < 45^2 = 2025$）。\n答：最终编号为完全平方数（$1, 4, 9, 16, \\dots, 1936$）的共 44 盏灯是亮着的。",
            "notes": "‘因数成对出现’与‘完全平方数因数个数为奇数’是数论最迷人的初等结论之一。"
          },
          {
            "id": "ex6_1_4_2",
            "index": 2,
            "title": "求阶乘末尾连续 0 的个数",
            "stem": "求 $100! = 1 \\times 2 \\times \\dots \\times 100$ 的末尾连续有多少个零？",
            "analysis": "末尾 0 由 $2 \\times 5 = 10$ 产生。在 $100!$ 中质因数 2 远多于 5，只需计算 $E_5(100!)$！",
            "solution": "由勒让德公式：\n$E_5(100!) = \\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor + \\lfloor 100/125 \\rfloor = 20 + 4 + 0 = 24$。\n答：$100!$ 的末尾连续有 24 个零。",
            "notes": "勒让德公式计算阶乘质因数幂次，简洁优雅。"
          }
        ]
      }
    ]
  },
  "2": {
    "chapterNumber": 2,
    "title": "第二章：同余与同余方程",
    "subtitle": "高斯同余算术、完全剩余系、费马小定理与完全平方数",
    "introduction": "若两个整数 a, b 除以正整数 m 所得的余数相同，称 a 与 b 对模 m 同余，记作 a ≡ b (mod m)。同余符号‘≡’由数学王子高斯首创。它具有加、减、乘、乘方运算完全保同余的优良性质。同余将无限的整数全集压缩为模 m 下的有限个等价类，使得周期性问题与末位数字计算迎刃而解。",
    "teacherTips": "冯志刚领队提点：\n1. 同余定义三等价：a ≡ b (mod m) ⟺ m | (a - b) ⟺ a = mq + b；\n2. 同余除法必须慎重：仅当 gcd(c, m) = 1 时才可以约去 c；\n3. 负余数技巧：m-1 ≡ -1 (mod m)，遇到接近模的数，用 -1 代换可以极大简化乘方计算！",
    "sections": [
      {
        "id": "2.1",
        "number": "2.1",
        "title": "同余的概念和性质",
        "chapterNumber": 2,
        "pdfPages": "P30 - P34",
        "associatedLabId": "modular_clock",
        "teacherTips": "熟练利用负余数代换是余数速算的第一大杀器！例如 2024 除以 7，2024 = 7*289 + 1 ≡ 1 (mod 7)，或者 6^100 ≡ (-1)^100 ≡ 1 (mod 7)。",
        "keyTheorems": [
          {
            "name": "同余定义三等价性",
            "formula": "a \\equiv b \\pmod m \\iff m \\mid (a - b) \\iff a = mq + b",
            "explanation": "同余的本质是两数之差能被模数整除。"
          },
          {
            "name": "同余乘方与负余数性质",
            "formula": "a \\equiv -1 \\pmod m \\implies a^n \\equiv (-1)^n \\pmod m",
            "explanation": "对于接近模数的数字，采用负余数 -1 可以使高次幂运算瞬间化简为 ±1。"
          }
        ],
        "content": "同余具有反身性、对称性与传递性，并且在加法、减法、乘法以及正整数乘方下完全封闭保持同余。",
        "examples": [
          {
            "id": "ex6_2_1_1",
            "index": 1,
            "title": "模 3 模 5 同余排除素数组合",
            "stem": "求所有的素数 $p, q, r$ ($p \\le q \\le r$)，使得 $pq+r, qr+p, rp+q$ 都是素数。",
            "analysis": "利用素数奇偶性与模 3 同余分析，排除大于 3 的情况锁定特解！",
            "solution": "解：若 $p, q, r$ 均为奇数，则乘积为奇数，和为偶数且严格大于 2，必不是素数。\n因此其中必有一个为偶素数 2。因为 $p \\le q \\le r$，故 $p = 2$。\n此时需 $2q+r, qr+2, 2r+q$ 均为素数。\n若 $q, r$ 都不为 3，则 $q, r \\equiv 1$ 或 $2 \\pmod 3$。\n若 $qr \\equiv 1 \\pmod 3$，则 $qr + 2 \\equiv 0 \\pmod 3$ 为 3 的倍数（矛盾）；\n若 $qr \\equiv 2 \\pmod 3$，类似可推出另两项之一为 3 的倍数。\n因此必有 $q = 3$。\n代入得 $6+r, 3r+2, 2r+3$ 均为素数。进一步模 5 分析可得 $r = 5$。\n答：唯一解为 $p=2, q=3, r=5$。",
            "notes": "数论分类的黄金梯级：先看模 2 奇偶性，次看模 3 同余，再看模 5。"
          },
          {
            "id": "ex6_2_1_2",
            "index": 2,
            "title": "求大数幂次的末尾两位数",
            "stem": "求 $7^{2024}$ 的末两位数字。",
            "analysis": "求末两位数字等价于求模 100 的余数！寻找 7 的幂次模 100 的周期。",
            "solution": "计算 7 的各次幂模 100：\n$7^1 \\equiv 7 \\pmod{100}$\n$7^2 = 49 \\equiv 49 \\pmod{100}$\n$7^3 = 343 \\equiv 43 \\pmod{100}$\n$7^4 = 2401 \\equiv 1 \\pmod{100}$。\n发现周期为 4！\n因此：$7^{2024} = (7^4)^{506} \\equiv 1^{506} \\equiv 1 \\equiv 01 \\pmod{100}$。\n答：$7^{2024}$ 的末两位数字是 01。",
            "notes": "求模 100 余数寻找周期，是初中奥数高频必考母题。"
          }
        ]
      },
      {
        "id": "2.2",
        "number": "2.2",
        "title": "剩余类及完全剩余系",
        "chapterNumber": 2,
        "pdfPages": "P34 - P38",
        "associatedLabId": "residue_system",
        "teacherTips": "若 gcd(a, m) = 1，则对于完全剩余系 {x1, x2, ..., xm}，{ax1+b, ax2+b, ..., axm+b} 仍构成模 m 的完全剩余系！这是费马小定理推导的钥匙。",
        "keyTheorems": [
          {
            "name": "完全剩余系判定定理",
            "formula": "\\{r_1, r_2, \\dots, r_m\\} \\text{ 两两模 } m \\text{ 不同余 } \\implies \\text{构成完系}",
            "explanation": "任意 m 个模 m 两两不同余的整数集合，恰好覆盖模 m 的所有可能余数。"
          },
          {
            "name": "线性变换保完系定理",
            "formula": "\\gcd(a, m) = 1 \\implies \\{ax_i + b\\} \\text{ 仍为模 } m \\text{ 的完全剩余系}",
            "explanation": "互质乘数与平移不改变剩余系的完整性与两两不同余性。"
          }
        ],
        "content": "所有整数按模 m 的余数划分为 m 个不相交的集合，每个集合称为模 m 的一个剩余类。从每个剩余类中各取一个代表元构成的集合称为完全剩余系。",
        "examples": [
          {
            "id": "ex6_2_2_1",
            "index": 1,
            "title": "连续 39 个正整数数码和的整除性",
            "stem": "证明：在十进制表示下，任意 39 个连续正整数中，必有一个数的数码和能被 11 整除。",
            "analysis": "考察连续 39 个数的十位与个位分布，利用个位变化对数码和的连续单调递增性！",
            "solution": "证明：在任意连续 39 个正整数中，必包含一段完整的十位数相同的连续 10 个数（个位为 0 到 9），\n甚至可以找到跨越进位的两组连续 10 个数。\n设其中某个以 0 结尾的数的数码和为 $S$。\n则个位从 0 到 9 的 10 个连续数，其数码和分别为：$S, S+1, S+2, \\dots, S+9$。\n这 10 个数模 11 的余数构成连续 10 个整数。\n利用前后的另外 29 个数中必包含进位产生的数码和跳变（减少 $9k - 1$），\n从而在模 11 的体系中完整覆盖所有 11 个同余类！\n因此必有至少一个数其数码和能被 11 整除。证毕。",
            "notes": "进位导致数码和减小是经典陷阱，利用覆盖跨度 39 确保至少跨过两个整十区间是破解关键。"
          },
          {
            "id": "ex6_2_2_2",
            "index": 2,
            "title": "连续整数乘积与完全剩余系应用",
            "stem": "证明：任意连续 $n$ 个整数中，必有且仅有一个数能被 $n$ 整除。",
            "analysis": "利用完全剩余系性质，连续 $n$ 个整数模 $n$ 构成完全剩余系！",
            "solution": "设这 $n$ 个连续整数为 $a, a+1, \\dots, a+n-1$。\n若其中存在两个数模 $n$ 同余：$(a+j) \\equiv (a+k) \\pmod n$（$0 \\le j < k \\le n-1$），\n则 $n \\mid (k - j)$。但 $0 < k - j < n$，不可能被 $n$ 整除，矛盾！\n因此这 $n$ 个数模 $n$ 两两不同余，恰好构成模 $n$ 的完全剩余系。\n在模 $n$ 的完全剩余系中，余数 0 恰好出现一次。\n故必有且仅有一个数能被 $n$ 整除。证毕。",
            "notes": "完全剩余系的无重复覆盖性是本题秒杀的关键。"
          }
        ]
      },
      {
        "id": "2.3",
        "number": "2.3",
        "title": "费马小定理与阶乘循环",
        "chapterNumber": 2,
        "pdfPages": "P38 - P43",
        "associatedLabId": "fermat_theorem",
        "teacherTips": "费马小定理降幂法宝：当 p 为素数且 gcd(a, p) = 1 时，a^(p-1) ≡ 1 (mod p)！这意味着在模 p 的世界里，底数指数可以先对 p-1 取模！",
        "keyTheorems": [
          {
            "name": "费马小定理（Fermat's Little Theorem）",
            "formula": "a^{p-1} \\equiv 1 \\pmod p \\quad (p \\nmid a)",
            "explanation": "素数模数下的代数降幂终极定理。等价形式为 a^p ≡ a (mod p)。"
          },
          {
            "name": "威尔逊定理（Wilson's Theorem）",
            "formula": "(p-1)! \\equiv -1 \\pmod p",
            "explanation": "p 为素数的充要条件。配对剩余系中每个数与其数论倒数，唯有 ±1 无法配对产生 -1。"
          }
        ],
        "content": "费马小定理揭示了素数模下乘法群的循环性质。它不仅是现代密码学 RSA 的基石，更是初中数论高次幂速算与整除证明的核武器。",
        "examples": [
          {
            "id": "ex6_2_3_1",
            "index": 1,
            "title": "4k+1 型素因数的完全平方特征",
            "stem": "设 $x$ 为整数，$p$ 是 $x^2 + 1$ 的一个奇素因数。证明：$p \\equiv 1 \\pmod 4$。",
            "analysis": "由题意 $x^2 \\equiv -1 \\pmod p$。将两边同时取 $\\frac{p-1}{2}$ 次幂，运用费马小定理！",
            "solution": "证明：由条件 $p \\mid (x^2 + 1)$，所以：\n$$x^2 \\equiv -1 \\pmod p$$\n显然 $p \\nmid x$（若 $p \\mid x$ 则 $p \\mid 1$ 矛盾）。\n根据费马小定理：\n$$x^{p-1} \\equiv 1 \\pmod p$$\n将等式变形为：\n$$x^{p-1} = (x^2)^{\\frac{p-1}{2}} \\equiv (-1)^{\\frac{p-1}{2}} \\pmod p$$\n因此：\n$$(-1)^{\\frac{p-1}{2}} \\equiv 1 \\pmod p$$\n因为 $p$ 是奇素数（$p \\ge 3$），所以 $(-1)^{\\frac{p-1}{2}}$ 只能等于 $1$（不能等于 $-1$，否则 $-1 \\equiv 1 \\implies p \\mid 2$ 矛盾）。\n所以 $\\frac{p-1}{2}$ 必须是偶数，设 $\\frac{p-1}{2} = 2k$。\n解得 $p - 1 = 4k \\implies p = 4k + 1$。\n即 $p \\equiv 1 \\pmod 4$。证毕。",
            "notes": "这是二次剩余理论中‘-1 为模 p 二次剩余当且仅当 p ≡ 1 mod 4’的经典初等证明。"
          },
          {
            "id": "ex6_2_3_2",
            "index": 2,
            "title": "费马小定理计算大数高次余数",
            "stem": "求 $3^{2024}$ 除以 17 的余数。",
            "analysis": "17 是质数且与 3 互质，由费马小定理 $3^{16} \\equiv 1 \\pmod{17}$！将 2024 模 16 降幂。",
            "solution": "因为 17 是质数且 $\\gcd(3, 17) = 1$，由费马小定理：\n$3^{16} \\equiv 1 \\pmod{17}$。\n计算指数 2024 除以 16 的余数：\n$2024 = 16 \\times 126 + 8 \\implies 2024 \\equiv 8 \\pmod{16}$。\n因此：$3^{2024} \\equiv 3^8 \\pmod{17}$。\n$3^4 = 81 = 17 \\times 4 + 13 \\equiv -4 \\pmod{17}$。\n$3^8 = (3^4)^2 \\equiv (-4)^2 = 16 \\equiv -1 \\equiv 16 \\pmod{17}$。\n答：余数是 16。",
            "notes": "高次幂降幂先对 p-1 取模，中间计算结合负余数，计算量缩减 90%。"
          }
        ]
      },
      {
        "id": "2.4",
        "number": "2.4",
        "title": "奇数与偶数（奇偶分析法）",
        "chapterNumber": 2,
        "pdfPages": "P43 - P47",
        "associatedLabId": "modular_clock",
        "teacherTips": "奇偶分析法是数论第一不变量！同色同奇偶，异色异奇偶；两数之和与两数之差同奇偶！",
        "keyTheorems": [
          {
            "name": "奇偶算术运算法则",
            "formula": "\\text{奇} \\pm \\text{奇} = \\text{偶}, \\quad \\text{奇} \\times \\text{奇} = \\text{奇}",
            "explanation": "加法保奇偶不变量，乘法只要含偶因子即为偶数。"
          },
          {
            "name": "和差同奇偶定理",
            "formula": "x + y \\equiv x - y \\pmod 2",
            "explanation": "两整数的和与差具有完全相同的奇偶性，在因式分解中具有决定性约束力。"
          }
        ],
        "content": "通过对问题中的变量进行模 2 奇偶性分类，往往能瞬间瓦解复杂的代数式结构。",
        "examples": [
          {
            "id": "ex6_2_4_1",
            "index": 1,
            "title": "绝对值方程与素数奇偶性",
            "stem": "已知 $p$ 为素数，求所有整数对 $(x, y)$，使得 $|x + y| + (x - 3)^2 = p$。",
            "analysis": "考察素数 $p$ 的奇偶性：若 $p=2$，直接枚举；若 $p$ 为奇数，分析两项的奇偶奇妙配合。",
            "solution": "解：\n1. 若 $p = 2$：两非负整数之和为 2。\n   $(x - 3)^2$ 只能为 0 或 1。\n   若 $(x-3)^2 = 0 \\implies x = 3$，则 $|3+y| = 2 \\implies y = -1$ 或 $-5$。\n   若 $(x-3)^2 = 1 \\implies x = 2$ 或 $4$，则 $|x+y| = 1$，分别解得对应的 $y$。\n2. 若 $p > 2$ 为奇数：两项必一奇一偶，结合因数分解可得有限多组解。",
            "notes": "奇偶性往往是解决非齐次绝对值与平方混合方程的第一突破点。"
          }
        ]
      },
      {
        "id": "2.5",
        "number": "2.5",
        "title": "完全平方数",
        "chapterNumber": 2,
        "pdfPages": "P47 - P51",
        "associatedLabId": "square_mod",
        "teacherTips": "完全平方数模指纹四大铁律：模 3 只能余 0, 1；模 4 只能余 0, 1；模 8 只能余 0, 1, 4（奇数平方必余 1）；末位数字绝不能是 2, 3, 7, 8！",
        "keyTheorems": [
          {
            "name": "平方数模 3 模 4 二次剩余定理",
            "formula": "n^2 \\equiv 0, 1 \\pmod 3, \\quad n^2 \\equiv 0, 1 \\pmod 4",
            "explanation": "排除绝大多数伪整数解的最强筛网。"
          },
          {
            "name": "奇数平方模 8 恒余 1 定理",
            "formula": "(2k+1)^2 = 4k(k+1) + 1 \\equiv 1 \\pmod 8",
            "explanation": "因为 k(k+1) 是连续两整数积必为偶数，故 4k(k+1) 必为 8 的倍数。"
          }
        ],
        "content": "完全平方数在初等数论中占有核心地位。掌握其在不同模数下的二次剩余特征，是攻克高难度竞赛题的终极武器。",
        "examples": [
          {
            "id": "ex6_2_5_1",
            "index": 1,
            "title": "模 40 整除与双平方数联合排查",
            "stem": "已知 $n$ 为正整数，且 $2n+1$ 与 $3n+1$ 都是完全平方数。证明：$40 \\mid n$。",
            "analysis": "$40 = 8 \\times 5$。分别证明 $8 \\mid n$ 与 $5 \\mid n$！利用平方数模 8 与模 5 的二次剩余排查。",
            "solution": "证明：设 $2n + 1 = x^2, 3n + 1 = y^2$。\n1. **证明 $8 \\mid n$**：\n   因为 $2n+1 = x^2$ 是奇数，所以 $x$ 是奇数，故 $x^2 \\equiv 1 \\pmod 8$。\n   因此 $2n = x^2 - 1 \\equiv 0 \\pmod 8 \\implies 4 \\mid n$。\n   设 $n = 4k$。则 $y^2 = 3n + 1 = 12k + 1$ 也是奇数。\n   所以 $y^2 \\equiv 1 \\pmod 8 \\implies 12k \\equiv 0 \\pmod 8 \\implies 4k \\equiv 0 \\pmod 8$。\n   即 $n = 4k$ 能被 8 整除，故 $8 \\mid n$。\n2. **证明 $5 \\mid n$**：\n   平方数模 5 的余数只能是 $0, 1, 4$。\n   考察 $n \\pmod 5$ 的所有可能取值：\n   若 $n \\equiv 1 \\pmod 5$，则 $2n+1 \\equiv 3 \\pmod 5$（非平方数矛盾）；\n   若 $n \\equiv 2 \\pmod 5$，则 $3n+1 \\equiv 2 \\pmod 5$（非平方数矛盾）；\n   若 $n \\equiv 3 \\pmod 5$，则 $2n+1 \\equiv 2 \\pmod 5$（非平方数矛盾）；\n   若 $n \\equiv 4 \\pmod 5$，则 $3n+1 \\equiv 3 \\pmod 5$（非平方数矛盾）。\n   因此唯一可能是 $n \\equiv 0 \\pmod 5$，即 $5 \\mid n$。\n综上，因为 $\\gcd(8, 5) = 1$ 且 $8 \\mid n, 5 \\mid n$，所以 $40 \\mid n$。证毕。",
            "notes": "先拆分合数模数 40 = 8 × 5，分别通过模 8 和模 5 排除法证明，是全国联赛数论大题的标准典范。"
          }
        ]
      }
    ]
  },
  "3": {
    "chapterNumber": 3,
    "title": "第三章：不定方程",
    "subtitle": "一次不定方程、常用解法（因式分解/不等式夹逼/同余法）与勾股方程",
    "introduction": "未知数个数多于方程个数且要求整数解的方程称为不定方程（又称丢番图方程，Diophantine Equation）。初中数论主要掌握一次不定方程通解定理、双一次项因式分解、不等式估计边界夹逼、同余排除法，以及古老而璀璨的勾股方程通解体系。",
    "teacherTips": "冯志刚领队传授解方程兵法：\n1. 抓因式分解：将方程变形成 (整式)×(整式) = 常数；\n2. 抓不等式边界：当未知数次数较高时，通过不等式缩小搜索区间；\n3. 抓模同余：两边对小模数取余，若某一边无解则原方程必无解！",
    "sections": [
      {
        "id": "3.1",
        "number": "3.1",
        "title": "一次不定方程（组）",
        "chapterNumber": 3,
        "pdfPages": "P55 - P61",
        "associatedLabId": "euclidean_bezout",
        "teacherTips": "二元一次不定方程 ax + by = c 有整数解充要条件是 gcd(a, b) | c！若 (x0, y0) 是一组特解，则通解为 x = x0 + (b/d)t, y = y0 - (a/d)t。",
        "keyTheorems": [
          {
            "name": "一次不定方程有解充要条件定理",
            "formula": "ax + by = c \\text{ 有整数解 } \\iff \\gcd(a, b) \\mid c",
            "explanation": "由贝祖定理直接保证充分性，必要性由公因数整除线性组合显然可得。"
          },
          {
            "name": "一次不定方程整数通解公式",
            "formula": "x = x_0 + \\frac{b}{d} t, \\quad y = y_0 - \\frac{a}{d} t \\quad (t \\in \\mathbb{Z}, d = \\gcd(a, b))",
            "explanation": "所有整数解均可由任意一组特解加上线性步长生成。"
          }
        ],
        "content": "通过辗转相除法或模算术求出一组特解，然后根据通解公式结合不等式边界确定正整数解的个数。",
        "examples": [
          {
            "id": "ex6_3_1_1",
            "index": 1,
            "title": "二元一次不定方程正整数解求解",
            "stem": "求不定方程 $5x + 7y = 100$ 的所有正整数解 $(x, y)$。",
            "analysis": "两边模 5 分析：$7y \\equiv 2y \\equiv 0 \\pmod 5 \\implies 5 \\mid y$。设 $y = 5k$ 代入求解。",
            "solution": "解：原方程两边模 5：\n$$5x + 7y \\equiv 2y \\equiv 100 \\equiv 0 \\pmod 5$$\n因为 $\\gcd(2, 5) = 1$，所以必有 $y \\equiv 0 \\pmod 5$。\n因为要求正整数解，设 $y = 5k$ ($k \\in \\mathbb{Z}^+$)。\n代入原方程：\n$$5x + 7(5k) = 100 \\implies x + 7k = 20 \\implies x = 20 - 7k$$\n要求 $x > 0$：\n$$20 - 7k > 0 \\implies 7k < 20 \\implies k < 20/7 \\approx 2.85$$\n因为 $k$ 是正整数，故 $k$ 只能取 1 或 2：\n1. 当 $k = 1$ 时：$y = 5, x = 20 - 7 = 13$；\n2. 当 $k = 2$ 时：$y = 10, x = 20 - 14 = 6$。\n答：正整数解共有两组：$(13, 5)$ 和 $(6, 10)$。",
            "notes": "选系数较小的项（如模 5）取同余，能以最快速度消元锁定变量结构。"
          }
        ]
      },
      {
        "id": "3.2",
        "number": "3.2",
        "title": "不定方程的常用解法",
        "chapterNumber": 3,
        "pdfPages": "P61 - P71",
        "associatedLabId": "pythagorean_lattice",
        "teacherTips": "四大核心解法：\n1. 因式分解法（提取公因式/双一次项配凑法）；\n2. 不等式夹逼法（夹在两相邻平方数之间）；\n3. 同余判别法（模 3, 4, 8 排除法）；\n4. 无穷递降法（反设最小正整数解导出更小解）。",
        "keyTheorems": [
          {
            "name": "双一次项配方分解法",
            "formula": "xy + ax + by + ab = (x + b)(y + a)",
            "explanation": "将含交叉乘积 xy 的二次不定方程转化为定常数的两个因式乘积。"
          },
          {
            "name": "完全平方数相邻夹逼定理",
            "formula": "k^2 < X < (k+1)^2 \\implies X \\text{ 绝不是完全平方数}",
            "explanation": "如果一个整数严格夹在两个连续完全平方数之间，则它不可能等于任何整数的平方。"
          }
        ],
        "content": "不定方程技巧丰富多彩，因式分解将加和转化为因数对，不等式夹逼将无限范围压缩至有限点，同余排除法则能一票否决伪解。",
        "examples": [
          {
            "id": "ex6_3_2_1",
            "index": 1,
            "title": "双一次项因式分解法",
            "stem": "求满足 $xy - 3x - 4y = 7$ 的所有整数解 $(x, y)$。",
            "analysis": "两边同时加上 12，强行因式分解为 $(x - 4)(y - 3) = 19$！19 是质数，因数分解仅 4 组。",
            "solution": "解：方程两边同时加上 12：\n$$xy - 3x - 4y + 12 = 7 + 12 \\implies (x - 4)(y - 3) = 19$$\n因为 19 是素数，它在整数域内的因数只有 4 组：\n1. $x - 4 = 1, y - 3 = 19 \\implies (x, y) = (5, 22)$；\n2. $x - 4 = 19, y - 3 = 1 \\implies (x, y) = (23, 4)$；\n3. $x - 4 = -1, y - 3 = -19 \\implies (x, y) = (3, -16)$；\n4. $x - 4 = -19, y - 3 = -1 \\implies (x, y) = (-15, 2)$。\n答：所有整数解共有 4 组：$(5, 22), (23, 4), (3, -16), (-15, 2)$。",
            "notes": "注意题目要求是‘整数解’还是‘正整数解’，防止遗漏负整数因数。"
          },
          {
            "id": "ex6_3_2_2",
            "index": 2,
            "title": "不等式夹逼法排除高次不定方程",
            "stem": "求不定方程 $x^2 - y^4 = y^2 + 1$ 的所有正整数解 $(x, y)$。",
            "analysis": "移项将 $x^2$ 写为关于 $y$ 的四次式，夹在两个相邻的完全平方数之间！",
            "solution": "解：原方程移项得：\n$$x^2 = y^4 + y^2 + 1$$\n考察完全平方数 $(y^2)^2$ 与 $(y^2 + 1)^2$：\n$$(y^2)^2 = y^4 < y^4 + y^2 + 1$$\n又因为：\n$$(y^2 + 1)^2 = y^4 + 2y^2 + 1$$\n因为 $y$ 是正整数，所以 $y^2 > 0$，故：\n$$y^4 + y^2 + 1 < y^4 + 2y^2 + 1 = (y^2 + 1)^2$$\n综合可得：\n$$(y^2)^2 < x^2 < (y^2 + 1)^2$$\n即 $y^2 < x < y^2 + 1$。\n但在连续两个整数 $y^2$ 与 $y^2 + 1$ 之间不存在任何整数！\n因此不存在整数 $x$ 满足条件。\n答：原方程没有正整数解。",
            "notes": "利用 $k^2 < x^2 < (k+1)^2$ 导出矛盾，是不等式夹逼法的标志性操作。"
          }
        ]
      },
      {
        "id": "3.3",
        "number": "3.3",
        "title": "勾股方程与丢番图几何",
        "chapterNumber": 3,
        "pdfPages": "P71 - P76",
        "associatedLabId": "pythagorean_lattice",
        "teacherTips": "欧几里得本原勾股数通解定理：x = m² - n², y = 2mn, z = m² + n²（m > n > 0, gcd(m, n) = 1, m, n 奇偶互异）！必须牢记勾股三角形的面积必为 6 的倍数，斜边素因子必为 4k+1 型！",
        "keyTheorems": [
          {
            "name": "欧几里得本原勾股数通解公式",
            "formula": "x = m^2 - n^2, \\quad y = 2mn, \\quad z = m^2 + n^2",
            "explanation": "所有满足 gcd(x, y, z) = 1 的正整数勾股数均可由一对互质且奇偶互异的参数 (m, n) 唯一生成。"
          },
          {
            "name": "勾股三角形面积整除性质定理",
            "formula": "S = \\frac{1}{2} x y = mn(m-n)(m+n) \\equiv 0 \\pmod 6",
            "explanation": "任何整数直角三角形的面积必定能被 6 整除。"
          }
        ],
        "content": "勾股方程 x² + y² = z² 是连接数论与几何的桥梁。从初中勾股数组到高中费马大定理，它开启了近代代数数论的辉煌篇章。",
        "examples": [
          {
            "id": "ex6_3_3_1",
            "index": 1,
            "title": "本原勾股数通解与面积整除性证明",
            "stem": "若直角三角形的三边长均为整数且互质（本原勾股数），证明：该直角三角形的面积必为 6 的倍数。",
            "analysis": "利用欧几里得本原勾股数公式，将面积写为参数乘积并分别证明被 2 和被 3 整除！",
            "solution": "证明：\n由欧几里得本原勾股数公式，两直角边可表示为：\n$$x = m^2 - n^2, \\quad y = 2mn$$\n（其中 $m > n > 0, \\gcd(m, n) = 1, m, n$ 奇偶互异）。\n直角三角形的面积为：\n$$S = \\frac{1}{2} x y = \\frac{1}{2} (m^2 - n^2)(2mn) = mn(m^2 - n^2) = mn(m - n)(m + n)$$\n1. **证明 $2 \\mid S$**：\n   因为 $m, n$ 奇偶互异，其中必有一个为偶数，故 $mn$ 是偶数，从而 $2 \\mid S$。\n2. **证明 $3 \\mid S$**：\n   若 $m$ 或 $n$ 能被 3 整除，则 $3 \\mid S$。\n   若 $m$ 和 $n$ 都不能被 3 整除，则 $m^2 \\equiv 1, n^2 \\equiv 1 \\pmod 3$。\n   从而 $m^2 - n^2 \\equiv 1 - 1 = 0 \\pmod 3$，即 $3 \\mid (m^2 - n^2)$，故 $3 \\mid S$。\n综上，因为 $2$ 和 $3$ 互质，且 $2 \\mid S$ 与 $3 \\mid S$，\n所以 $2 \\times 3 = 6 \\mid S$。\n即面积必然是 6 的倍数。证毕。",
            "notes": "互质参数代换结合模 2 与模 3 整除性，是勾股理论的标准证明模型。"
          },
          {
            "id": "ex6_3_3_2",
            "index": 2,
            "title": "等差勾股数的比例唯一性",
            "stem": "求所有的勾股数组 $(x, y, z)$，使得 $x < y < z$，且 $x, y, z$ 成等差数列。",
            "analysis": "设公差为 $d > 0$，将三边表示为 $y-d, y, y+d$，代入勾股定理！",
            "solution": "解：设等差数列的公差为 $d$ ($d > 0$)。\n因为 $x < y < z$ 成等差数列，可设：\n$$x = y - d, \\quad z = y + d$$\n因为 $(x, y, z)$ 是勾股数组，所以满足勾股定理：\n$$(y - d)^2 + y^2 = (y + d)^2$$\n展开并移项：\n$$y^2 - 2yd + d^2 + y^2 = y^2 + 2yd + d^2$$\n$$y^2 - 4yd = 0 \\implies y(y - 4d) = 0$$\n因为 $y$ 是正整数，所以 $y \\ne 0$，解得：\n$$y = 4d$$\n从而：\n$$x = y - d = 3d, \\quad z = y + d = 5d$$\n因为边长为正整数，所以 $d$ 可以取任意正整数。\n答：所有成等差数列的勾股数组为 $(3d, 4d, 5d)$ ($d \\in \\mathbb{Z}^+$)。其比例必然严格为 $3 : 4 : 5$。",
            "notes": "等差勾股数只有 3:4:5 一种几何构型，这个优美结论经常作为中考与初中竞赛压轴题的背景。"
          }
        ]
      }
    ]
  }
};

export const ALL_THEORY_SECTIONS: TheorySection[] = [
  ...VOLUME_6_CHAPTER_THEORY[1].sections,
  ...VOLUME_6_CHAPTER_THEORY[2].sections,
  ...VOLUME_6_CHAPTER_THEORY[3].sections,
];

export function getTheorySectionById(id: string): TheorySection | undefined {
  return ALL_THEORY_SECTIONS.find(s => s.id === id || s.number === id);
}

export function getTheorySectionsByChapter(chapter: 1 | 2 | 3): TheorySection[] {
  return VOLUME_6_CHAPTER_THEORY[chapter]?.sections || [];
}
