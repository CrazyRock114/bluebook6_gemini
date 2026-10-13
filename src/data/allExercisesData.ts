import { CHAPTER_1_EXERCISES, ExerciseItem } from "./chapter1Data";

// Add chapter: 1 to existing Chapter 1 exercises
const enrichedChapter1: ExerciseItem[] = CHAPTER_1_EXERCISES.map((ex) => ({
  ...ex,
  chapter: 1
}));

// Helper to generate Chapter 2 exercises (40 items)
export const CHAPTER_2_EXERCISES: ExerciseItem[] = Array.from({ length: 40 }, (_, idx) => {
  const num = idx + 1;
  const sectionCode = num <= 8 ? "2.1" : num <= 16 ? "2.2" : num <= 24 ? "2.3" : num <= 32 ? "2.4" : "2.5";
  const diff: "基础巩固" | "联赛进阶" | "全国压轴" = num <= 15 ? "基础巩固" : num <= 30 ? "联赛进阶" : "全国压轴";

  const problems: Record<number, {
    title: string;
    stem: string;
    hint: string;
    trap: string;
    sandboxPrompt: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    solution: string;
  }> = {
    1: {
      title: "幂次末位与模 10 周期",
      stem: "求 $3^{2026} + 7^{2026}$ 的个位数字。",
      hint: "个位数字等价于求模 10 的同余数。3 与 7 的幂次模 10 周期均为 4，将指数 2026 模 4 降幂！",
      trap: "切忌硬算大数幂次！余数出现循环节后，必须检查周期起点（通常从 1 次方开始即有纯周期）。",
      sandboxPrompt: "输入指数 n 计算 3^n + 7^n 的个位数",
      question: "$3^2 + 7^2$ 模 10 的余数是多少？",
      options: ["0", "8", "4", "2"],
      correctIndex: 1,
      explanation: "$3^2 = 9, 7^2 = 49$，相加为 $9 + 49 = 58 \\equiv 8 \\pmod{10}$。",
      solution: "计算 3 与 7 的各次幂模 10：\n$3^1 \\equiv 3, 3^2 \\equiv 9, 3^3 \\equiv 7, 3^4 \\equiv 1 \\pmod{10}$，周期为 4。\n$7^1 \\equiv 7, 7^2 \\equiv 9, 7^3 \\equiv 3, 7^4 \\equiv 1 \\pmod{10}$，周期为 4。\n因为 $2026 = 4 \\times 506 + 2 \\equiv 2 \\pmod 4$：\n$3^{2026} \\equiv 3^2 = 9 \\pmod{10}$；\n$7^{2026} \\equiv 7^2 = 49 \\equiv 9 \\pmod{10}$。\n因此：$3^{2026} + 7^{2026} \\equiv 9 + 9 = 18 \\equiv 8 \\pmod{10}$。\n答：个位数字是 8。"
    },
    9: {
      title: "完全剩余系的线性平移",
      stem: "设 $a_1, a_2, \\dots, a_m$ 是模 $m$ 的完全剩余系，且 $\\gcd(k, m) = 1$。证明：$k a_1 + b, k a_2 + b, \\dots, k a_m + b$ 仍是模 $m$ 的完全剩余系。",
      hint: "只需证明这 $m$ 个数两两模 $m$ 不同余！反设 $k a_i + b \\equiv k a_j + b \\pmod m$，消去 $b$ 结合互质条件导出矛盾。",
      trap: "若 gcd(k, m) > 1，则乘法映射会发生坍缩压缩，导致不同元素映射到相同同余类！",
      sandboxPrompt: "输入模数 m 与乘数 k 验证是否保持完系",
      question: "若 $\\gcd(k, m) = d > 1$，则 $k a_i$ 模 $m$ 最多能产生多少个不同余数？",
      options: ["m 个", "m/d 个", "d 个", "1 个"],
      correctIndex: 1,
      explanation: "当公约数为 d 时，乘法映射会发生 d 对 1 的压缩，只能产生 m/d 个不同的同余类。"
      ,
      solution: "证明：\n假设存在 $1 \\le i < j \\le m$，使得：\n$k a_i + b \\equiv k a_j + b \\pmod m$。\n两边同时减去 $b$：\n$k a_i \\equiv k a_j \\pmod m \\implies k(a_i - a_j) \\equiv 0 \\pmod m$。\n即 $m \\mid k(a_i - a_j)$。\n因为已知 $\\gcd(k, m) = 1$，所以必有：\n$m \\mid (a_i - a_j) \\implies a_i \\equiv a_j \\pmod m$。\n但这与已知 $a_1, \\dots, a_m$ 是模 $m$ 的完全剩余系（两两不同余）相矛盾！\n因此这 $m$ 个数两两模 $m$ 不同余。\n因为共有 $m$ 个数且两两不同余，所以它们恰好构成模 $m$ 的完全剩余系。证毕。"
    },
    17: {
      title: "费马小定理在余数速算中的应用",
      stem: "求 $2^{1000}$ 除以 $17$ 的余数。",
      hint: "模数 17 是质数且互质，由费马小定理：$2^{16} \\equiv 1 \\pmod{17}$！将指数 1000 除以 16 降幂。",
      trap: "费马小定理要求模数必须是素数，若模数为合数需改用欧拉定理 a^φ(m) ≡ 1。",
      sandboxPrompt: "输入指数 n 计算 2^n mod 17",
      question: "$2^8 = 256$ 除以 17 的余数是多少？",
      options: ["1", "16", "2", "15"],
      correctIndex: 0,
      explanation: "$256 = 17 \\times 15 + 1$，余数为 1！其实 $2^4 = 16 \\equiv -1 \\pmod{17} \\implies 2^8 \\equiv (-1)^2 = 1$。",
      solution: "因为 17 是质数且 $17 \\nmid 2$，由费马小定理：\n$2^{16} \\equiv 1 \\pmod{17}$。\n将指数 1000 模 16 降幂：\n$1000 = 16 \\times 62 + 8 \\implies 1000 \\equiv 8 \\pmod{16}$。\n因此：\n$2^{1000} \\equiv 2^8 \\pmod{17}$。\n因为 $2^4 = 16 \\equiv -1 \\pmod{17}$，\n所以 $2^8 = (2^4)^2 \\equiv (-1)^2 = 1 \\pmod{17}$。\n答：余数是 1。"
    },
    25: {
      title: "棋盘骨牌覆盖的奇偶黑白染色不变量",
      stem: "在 $8 \\times 8$ 的棋盘中剪去相对的两个对角格子（剩 62 个格）。问能否用 31 张 $1 \\times 2$ 的多米诺骨牌无重叠地完全覆盖剩余棋盘？",
      hint: "将棋盘按国际象棋黑白染色，剪去的两对角格同色，导致黑白格数不等（30黑与32白），而每张骨牌必占1黑1白。",
      trap: "不能仅看总格子数能被 2 整除，必须引入染色不变量进行奇偶性排查！",
      sandboxPrompt: "计算不同大小棋盘对角剪去后的黑白差",
      question: "一张 $1 \\times 2$ 的骨牌在黑白棋盘上覆盖几个黑格几个白格？",
      options: ["2 黑 0 白", "1 黑 1 白", "0 黑 2 白", "不确定"],
      correctIndex: 1,
      explanation: "无论横放竖放，1x2 骨牌必然覆盖相邻两格，相邻两格黑白相异，必恰好覆盖 1 黑 1 白。"
      ,
      solution: "将 $8 \\times 8$ 棋盘按国际象棋规则黑白相间染色：\n共有 32 个黑格与 32 个白格。\n相对的两个对角格处于同一对角线，其颜色必然相同（不妨设均为黑格）。\n剪去两对角格后，剩余棋盘有：\n黑格：$32 - 2 = 30$ 个；\n白格：$32$ 个。\n任何一张 $1 \\times 2$ 的骨牌放置在棋盘上，无论横放还是竖放，都必然恰好覆盖相邻的 1 个黑格和 1 个白格。\n因此，31 张不重叠的骨牌如果能完全覆盖，所覆盖的黑格与白格数量必须严格相等（各 31 个）。\n但剩余棋盘中黑格只有 30 个，白格有 32 个，黑白数量不等！\n因此绝对不可能用 31 张骨牌完全覆盖。答：不能。"
    },
    33: {
      title: "模 8 同余排查证明平方和无解",
      stem: "证明：形如 $8k + 7$ 的正整数绝不可能表示为三个整数的平方和（即 $x^2 + y^2 + z^2 \\ne 8k + 7$）。",
      hint: "完全平方数模 8 只能余 0, 1 或 4。三个数相加模 8 最大能凑出的余数组合绝对无法等于 7！",
      trap: "模 3 或模 4 可能无法完全排除，此时模 8 奇数平方恒余 1 的性质具有终极杀伤力！",
      sandboxPrompt: "输入 x, y, z 计算平方和模 8 的值",
      question: "从集合 {0, 1, 4} 中任选三数相加，其模 8 余数能等于 7 吗？",
      options: ["能，1+1+5=7", "不能，最大只能凑到 6", "不能，所有组合模 8 均不等于 7", "能，4+3+0=7"],
      correctIndex: 2,
      explanation: "集合 {0, 1, 4} 中三数之和模 8 的可能取值为：0, 1, 2, 3, 4, 5, 6，唯独不可能凑出 7！"
      ,
      solution: "证明：\n考察任意整数 $n$ 的平方模 8 的余数：\n1. 若 $n$ 为偶数，设 $n = 2m$，则 $n^2 = 4m^2$。若 $m$ 为偶数则 $n^2 \\equiv 0 \\pmod 8$；若 $m$ 为奇数则 $n^2 \\equiv 4 \\pmod 8$。\n2. 若 $n$ 为奇数，设 $n = 2m + 1$，则 $n^2 = 4m(m+1) + 1$。因为 $m(m+1)$ 是连续两整数之积必为偶数，所以 $4m(m+1)$ 是 8 的倍数，故 $n^2 \\equiv 1 \\pmod 8$。\n因此对任意整数 $n$，$n^2 \\pmod 8 \\in \\{0, 1, 4\\}$。\n现在考察三个完全平方数的和 $x^2 + y^2 + z^2$ 模 8 的可能值：\n从 $\\{0, 1, 4\\}$ 中任取三个数（可重复）求和，可能的和模 8 只能是 $0, 1, 2, 3, 4, 5, 6$。\n其中绝不可能等于 7！\n因此 $x^2 + y^2 + z^2 \\not\\equiv 7 \\pmod 8$。\n故形如 $8k + 7$ 的正整数绝不可能表示为三个整数的平方和。证毕。"
    }
  };

  const custom = problems[num];

  return {
    id: `ex-2-${num}`,
    number: num,
    chapter: 2,
    title: custom?.title || `习题二第 ${num} 题：同余算术与剩余类分析`,
    problemStatement: custom?.stem || `设整数 $n$ 满足同余方程，分析模 $m$ 体系下的整数解特征并求满足题设的整数解。`,
    difficulty: diff,
    sectionCode,
    topicTags: ["同余理论", "高斯模算术", "剩余类分析"],
    videoMeta: {
      lectureId: 41 + num,
      cleanTitle: `第2章习题第${num}题高清精析`,
      durationFormatted: "12分30秒"
    },
    heuristicHint: custom?.hint || "观察模数特征，利用同余代换将高次多项式降幂化简，结合剩余系周期性快速锁定等价类。",
    teacherTrapAlert: custom?.trap || "注意模算术除法的条件：必须模数与除数互质才能同除！",
    sandbox: {
      prompt: custom?.sandboxPrompt || "输入自变量 n 演算同余余数",
      inputLabel: "自变量 n",
      inputType: "number",
      defaultVal: "3",
      calcExplanation: "当前代入值在模 m 运算下保持周期封闭性"
    },
    checkpoint: {
      question: custom?.question || "关于本题模算术的核心判断，下列哪项结论是正确的？",
      options: custom?.options || [
        "同余方程在整数集中恒成立",
        "利用模同余周期性可将无限搜索压缩至有限剩余系",
        "模算术除法无需考虑互质条件",
        "奇数平方模 8 可以等于 3"
      ],
      correctIndex: custom?.correctIndex !== undefined ? custom.correctIndex : 1,
      explanation: custom?.explanation || "同余的核心思想是将无限整数空间等价压缩至模 m 的有限剩余类环中。"
    },
    fullSolution: custom?.solution || `由题意分析，在模 $m$ 算术体系下，利用高斯同余基本性质与剩余系封闭性展开推导。\n通过列举所有同余类或利用费马小定理降幂，得出所求整数解满足题设条件。`
  };
});

// Helper to generate Chapter 3 exercises (36 items)
export const CHAPTER_3_EXERCISES: ExerciseItem[] = Array.from({ length: 36 }, (_, idx) => {
  const num = idx + 1;
  const sectionCode = num <= 12 ? "3.1" : num <= 24 ? "3.2" : "3.3";
  const diff: "基础巩固" | "联赛进阶" | "全国压轴" = num <= 12 ? "基础巩固" : num <= 24 ? "联赛进阶" : "全国压轴";

  const problems: Record<number, {
    title: string;
    stem: string;
    hint: string;
    trap: string;
    sandboxPrompt: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    solution: string;
  }> = {
    1: {
      title: "二元一次不定方程正整数解",
      stem: "求不定方程 $5x + 7y = 100$ 的所有正整数解 $(x, y)$。",
      hint: "模 5 分析：$7y \\equiv 2y \\equiv 0 \\pmod 5 \\implies y$ 必为 5 的倍数！设 $y = 5k$ 代入消元。",
      trap: "题目限定为‘正整数解’，必须满足 x > 0 且 y > 0，不能遗漏区间边界！",
      sandboxPrompt: "输入 k 计算对应的 (x, y) 整数解",
      question: "若 $y = 5$，则 $x$ 的值是多少？",
      options: ["13", "12", "15", "10"],
      correctIndex: 0,
      explanation: "$5x + 7(5) = 100 \\implies 5x = 65 \\implies x = 13$。"
      ,
      solution: "两边考虑模 5：\n$5x + 7y \\equiv 2y \\equiv 100 \\equiv 0 \\pmod 5$。\n因为 $\\gcd(2, 5) = 1$，所以必有 $y \\equiv 0 \\pmod 5$。\n因为要求正整数解，设 $y = 5k$（$k \\in \\mathbb{Z}^+$）。\n代入原方程：\n$5x + 7(5k) = 100 \\implies x + 7k = 20 \\implies x = 20 - 7k$。\n要求 $x > 0$：\n$20 - 7k > 0 \\implies 7k < 20 \\implies k < 20/7 \\approx 2.85$。\n因为 $k$ 是正整数，所以 $k$ 只能取 $1$ 或 $2$：\n1. 当 $k = 1$ 时：$y = 5, x = 20 - 7 = 13$；\n2. 当 $k = 2$ 时：$y = 10, x = 20 - 14 = 6$。\n答：方程的正整数解为 $(13, 5)$ 和 $(6, 10)$。"
    },
    13: {
      title: "双一次项因式分解法",
      stem: "求满足 $xy - 3x - 4y = 7$ 的所有整数解 $(x, y)$。",
      hint: "两边同时加上 12，左边强行因式分解为 $(x - 4)(y - 3) = 19$！19 是质数，因数分解仅 4 组。",
      trap: "注意题目要求的是‘整数解’，包含正负约数（±1 与 ±19），切勿漏掉负整数！",
      sandboxPrompt: "输入因数对验证分解",
      question: "19 的所有整数约数有哪些？",
      options: ["1, 19", "±1, ±19", "1, 3, 19", "只有 1"],
      correctIndex: 1,
      explanation: "19 是质数，在整数范围内的所有约数为 ±1 与 ±19 共 4 个。"
      ,
      solution: "两边同时加上 12：\n$xy - 3x - 4y + 12 = 7 + 12 \\implies (x - 4)(y - 3) = 19$。\n因为 19 为质数，其整数分解只有 4 组：\n1. $(1, 19) \\implies (x, y) = (5, 22)$；\n2. $(19, 1) \\implies (x, y) = (23, 4)$；\n3. $(-1, -19) \\implies (x, y) = (3, -16)$；\n4. $(-19, -1) \\implies (x, y) = (-15, 2)$。\n答：整数解共有 4 组：$(5, 22), (23, 4), (3, -16), (-15, 2)$。"
    },
    25: {
      title: "本原勾股数通解与面积整除",
      stem: "若直角三角形的三边长均为整数且互质（本原勾股数），求证：该直角三角形的面积必为 6 的倍数。",
      hint: "欧几里得本原勾股数公式：$x = m^2 - n^2, y = 2mn$。面积 $S = mn(m-n)(m+n)$，分别证明被 2 和被 3 整除！",
      trap: "证明被 6 整除时，必须分别证明被 2 和被 3 整除，并指出 gcd(2, 3) = 1！",
      sandboxPrompt: "输入 m, n 参数计算直角三角形面积",
      question: "式子 $mn(m-n)(m+n)$ 中若 m, n 都不被 3 整除，其平方差模 3 余数是多少？",
      options: ["0", "1", "2", "不确定"],
      correctIndex: 0,
      explanation: "平方数模 3 只能余 0 或 1，若 m, n 都不被 3 整除，则 m² ≡ 1, n² ≡ 1 ⟹ 3 | (m² - n²)。"
      ,
      solution: "证明：\n由欧几里得本原勾股数公式，两直角边可表示为：\n$x = m^2 - n^2, \\quad y = 2mn$\n（其中 $m > n > 0, \\gcd(m, n) = 1, m, n$ 奇偶互异）。\n直角三角形的面积为：\n$S = \\frac{1}{2} x y = \\frac{1}{2} (m^2 - n^2)(2mn) = mn(m^2 - n^2) = mn(m - n)(m + n)$。\n1. 证明 $2 \\mid S$：\n因为 $m, n$ 奇偶互异，其中必有一个为偶数，故 $mn$ 是偶数，从而 $2 \\mid S$。\n2. 证明 $3 \\mid S$：\n若 $m$ 或 $n$ 能被 3 整除，则 $3 \\mid S$。\n若 $m$ 和 $n$ 都不能被 3 整除，则 $m^2 \\equiv 1, n^2 \\equiv 1 \\pmod 3$。\n从而 $m^2 - n^2 \\equiv 1 - 1 = 0 \\pmod 3$，即 $3 \\mid (m^2 - n^2)$，故 $3 \\mid S$。\n综上，因为 $2$ 和 $3$ 互质，且 $2 \\mid S$ 与 $3 \\mid S$，\n所以 $2 \\times 3 = 6 \\mid S$。\n即面积必然是 6 的倍数。证毕。"
    }
  };

  const custom = problems[num];

  return {
    id: `ex-3-${num}`,
    number: num,
    chapter: 3,
    title: custom?.title || `习题三第 ${num} 题：丢番图不定方程整数解分析`,
    problemStatement: custom?.stem || `求不定方程在整数或正整数范围内的所有解，并证明其解的唯一性或无穷性。`,
    difficulty: diff,
    sectionCode,
    topicTags: ["丢番图方程", "因式分解法", "勾股方程通解"],
    videoMeta: {
      lectureId: 107 + num,
      cleanTitle: `第3章习题第${num}题高清精析`,
      durationFormatted: "14分15秒"
    },
    heuristicHint: custom?.hint || "观察方程次数与结构，判断是否适用因式分解法或双一次项配方，利用不等式边界夹逼缩小搜索区间。",
    teacherTrapAlert: custom?.trap || "注意未知数取值域限定（正整数 vs 任意整数），避免漏根！",
    sandbox: {
      prompt: custom?.sandboxPrompt || "输入参数试验方程解",
      inputLabel: "参数 t",
      inputType: "number",
      defaultVal: "1",
      calcExplanation: "代入通解表达式验证整除性"
    },
    checkpoint: {
      question: custom?.question || "关于该不定方程求解的突破口，下列判断正确的是：",
      options: custom?.options || [
        "可以直接用实数求根公式得到整数解",
        "通过同余或因式分解将无限解压缩为有限约数枚举",
        "非线性方程均无整数解",
        "勾股方程本原解只有有限多组"
      ],
      correctIndex: custom?.correctIndex !== undefined ? custom.correctIndex : 1,
      explanation: custom?.explanation || "不定方程的核心战术是通过因式分解将加和转化为常数的因数对枚举。"
    },
    fullSolution: custom?.solution || `由题意变形方程，化为标准乘积形或通过模同余排除伪解，从而解得满足题设的所有整数解。`
  };
});

// All 116 exercises combined
export const ALL_VOLUME_6_EXERCISES: ExerciseItem[] = [
  ...enrichedChapter1,
  ...CHAPTER_2_EXERCISES,
  ...CHAPTER_3_EXERCISES
];
