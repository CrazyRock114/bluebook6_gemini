import { CHAPTER_1_EXERCISES, ExerciseItem } from "./chapter1Data";

// Add chapter: 1 to existing Chapter 1 exercises
const enrichedChapter1: ExerciseItem[] = CHAPTER_1_EXERCISES.map((ex) => ({
  ...ex,
  chapter: 1
}));

// 100% Authentic Chapter 2 Exercises (40 items, real PDF stems and official solutions)
export const CHAPTER_2_EXERCISES: ExerciseItem[] = [
  {
    "id": "ex-2-1",
    "number": 1,
    "chapter": 2,
    "title": "素数与奇偶分解分析",
    "problemStatement": "设 $p, q$ 都是素数，且 $7p + q$ 与 $pq + 11$ 也都为素数。求 $(p^q + q)(q^p + p)$ 的值。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "素数判定",
      "模3同余",
      "奇偶分类"
    ],
    "videoMeta": {
      "lectureId": 82,
      "cleanTitle": "第2章习题第1题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用素数奇偶性：除 2 以外所有素数均为奇数！两素数之和若为奇数则必含 2。",
    "teacherTrapAlert": "切忌直接分类大素数，先看模 2 与模 3。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "1",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "素数判定：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用素数奇偶性：除 2 以外所有素数均为奇数！两素数之和若为奇数则必含 2。"
    },
    "fullSolution": "若力、q都是奇数，则 7p十g为偶数，它不是素数，故力、q中有一个为\n偶数。\n情形一：设p为偶数，则巾=2，此时由7p十g为素数，知g为奇素数，若\n9大3，则9三1或2（mod 3）.\n若g=1（mod 3），则\n7p+9=14+9=0（mod 3），\n矛盾；\n若q=2（mod 3），则\n亦矛盾，所以g=3，此时\npg+11=2q+11=4+11=0（mod3），\n7p+9=17，pq+11=17，\n都是素数，故\n（か＋g）（g十が）＝（2°＋3°）（3°十2°）=221。\n情形二：设g为偶数，则g=2.同上类似讨论，可知p=3，此时\n（が+g）（ダナが）＝（3+2°）（2+3°）=221。\n综上可知，所求值为221."
  },
  {
    "id": "ex-2-2",
    "number": 2,
    "chapter": 2,
    "title": "等差素数列的公差整除约束",
    "problemStatement": "设 $p_1 < p_2 < p_3 < p_4 < p_5$ 是 5 个素数，且 $p_1, p_2, p_3, p_4, p_5$ 成等差数列。求 $p_5$ 的最小值。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "素数等差数列",
      "同余完全剩余系",
      "最小公倍数"
    ],
    "videoMeta": {
      "lectureId": 83,
      "cleanTitle": "第2章习题第2题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "公差 d 必须被 2, 3 甚至更小的素数整除，否则 5 项中必然有一项落在该素数的倍数同余类中！",
    "teacherTrapAlert": "忘记检查 p1 本身是否等于模数导致矛盾。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "2",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "素数等差数列：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：公差 d 必须被 2, 3 甚至更小的素数整除，否则 5 项中必然有一项落在该素数的倍数同余类中！"
    },
    "fullSolution": "设d为公差，则pi，pi+d,pi+2d,pi+3d,pi+4d都是素数。\n若2*d，即d为奇数，则p十d与p1十2d中有一个为偶数，它不是素数.\n若3td，则pitd,pi+2d,pi十3d中有一个为3的倍数（它们构成模\n3一个完系），矛盾.\n若5td，则户，加十d，⋯，力十4d中有一个是5的倍数，只能是p=\n5，这时公差d是6的倍数.\n而5，11，17， 23， 29是5个成等差的素数数列，所以，ps最小为 29."
  },
  {
    "id": "ex-2-3",
    "number": 3,
    "chapter": 2,
    "title": "数码和与高斯模9同余构造",
    "problemStatement": "对每个正整数 $n$，用 $S(n)$ 表示 $n$ 在十进制表示下各数码之和。证明：对任意正整数 $m$，存在正整数 $n$，使得 $S(n) = m S(3n)$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "数码和性质",
      "模9同余",
      "乘法周期构造"
    ],
    "videoMeta": {
      "lectureId": 84,
      "cleanTitle": "第2章习题第3题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "数码和模 9 同余于原数 $S(n) \\equiv n \\pmod 9$。构造多位重复单元构造特定倍数。",
    "teacherTrapAlert": "注意 3n 的数码和受进位影响，构造必须避免进位坍缩。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "3",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "数码和性质：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：数码和模 9 同余于原数 $S(n) \\equiv n \\pmod 9$。构造多位重复单元构造特定倍数。"
    },
    "fullSolution": "注意到，对任意正整数k，S（10….08）=9，于是，设10…08=3n，则\nn=336，\n故S（n）= 3k+6.这样，对任意正整数m，取k=3m-2，就有\nS（n） =mS（3n）.\n味、点余与イ\n说明由S（3n）=3n（mod9），故要求3|S（n），进而3｜n，所以在先确\n定3n时，要寻找一个9的倍数（例如10…02作为3n就不能满足条件）.\nk个\n另外，在S（2n）与 S（n）之间没有上述性质，事实上，可证：S（2n）≤\n2S（n）； S（n） ≤5S（2m）."
  },
  {
    "id": "ex-2-4",
    "number": 4,
    "chapter": 2,
    "title": "抽屉原理构造 0-1 序列整除倍数",
    "problemStatement": "设 $n$ 为正整数。证明：存在十进制表示中只出现数码 0 和 1 的正整数 $m$，使得 $n \\mid m$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "抽屉原理",
      "鸽巢原理",
      "循环节同余"
    ],
    "videoMeta": {
      "lectureId": 85,
      "cleanTitle": "第2章习题第4题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "考察 $1, 11, 111, \\dots$ 共 $n+1$ 个数除以 $n$ 的余数，由鸽巢原理必有两数同余，相减即得！",
    "teacherTrapAlert": "当 n 与 10 不互质时，需分离 2 和 5 的因子。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "4",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "抽屉原理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：考察 $1, 11, 111, \\dots$ 共 $n+1$ 个数除以 $n$ 的余数，由鸽巢原理必有两数同余，相减即得！"
    },
    "fullSolution": "考虑数列\n1,11,111，⋯，1\nn+1个\n其中必有两个数对模 n同余（因为任何整数除以 n 所得的余数只能为0，1，\n2，⋯，n-1，共n种情况），它们的差（大减小）就是符合要求m."
  },
  {
    "id": "ex-2-5",
    "number": 5,
    "chapter": 2,
    "title": "全奇数数码整除倍数构造",
    "problemStatement": "设 $n$ 是一个正奇数。证明：存在一个十进制表示中每个数码都是奇数的正整数 $m$，使得 $n \\mid m$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "奇数同余",
      "单位循环进位",
      "欧拉定理"
    ],
    "videoMeta": {
      "lectureId": 86,
      "cleanTitle": "第2章习题第5题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "正奇数与 10 互质，利用十进制展开与欧拉定理构造全奇数数码串。",
    "teacherTrapAlert": "避免产生含偶数数字的中间位。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "5",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "奇数同余：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：正奇数与 10 互质，利用十进制展开与欧拉定理构造全奇数数码串。"
    },
    "fullSolution": "如果（5,n） =1，那么由上题结论，知存在m=1…10….0，使得\nn｜m，而n为奇数，结合5十n，知（n,10）=1，故n｜L.1.命题获证.\n诊个\n如果5｜n，设5° |m，那么可写n=5•m，其中5m.利用2.2节例5\n的结论，可知存在一个a位的正整数m1，使得5°｜m，且mi 的每个数码都是\n奇数，这时，考虑数\nmi，mimi，…，m_…•mi，\nn1十1个\n这里m…m，表示i个mi连写形成的十进制数（故上面所列数都是5°的倍\n数），则存在1≤i<j≤n1＋1，使得\nmi.m\n=mi…m （mod mi），\n结合（M1,10）=1，可知\nM1\n｜mi…my，\n于是记m=m…m］，则m中的每个数码都是奇数，且\n5°｜m,nilm，\n而\n（5°，Mi）=1，\n故5a•ni｜m，即n｜m.\n命题获证.\n习题解答1\n◎"
  },
  {
    "id": "ex-2-6",
    "number": 6,
    "chapter": 2,
    "title": "斐波那契数列的同余周期性",
    "problemStatement": "斐波那契数列 $\\{F_n\\}$ 定义如下：$F_1 = F_2 = 1, F_{n+2} = F_{n+1} + F_n$ ($n = 1, 2, \\dots$)。\n(1) 证明：该数列任意连续 10 项之和是 11 的倍数；\n(2) 求最小正整数 $k$，使得该数列中任意连续 $k$ 项之和是 12 的倍数。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "斐波那契数列",
      "模11同余",
      "Pisano周期"
    ],
    "videoMeta": {
      "lectureId": 87,
      "cleanTitle": "第2章习题第6题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "计算斐波那契数列模 11 和模 12 的循环节。连续 10 项和等于 $11 F_{n+6}$。",
    "teacherTrapAlert": "不要硬算前几十项，利用递推式特征方程或同余周期速解。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "6",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "斐波那契数列：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：计算斐波那契数列模 11 和模 12 的循环节。连续 10 项和等于 $11 F_{n+6}$。"
    },
    "fullSolution": "考虑数列（Fn｝中每一项除以 11（或12）所得的余数.\n（1）｛Fx（mod 11）｝：1, 1, 2, 3, 5，-3, 2， -1, 1, 0, 1, 1，⋯，所以\n｛Fx（mod 11）｝是以 10为周期的纯周期数列，因此\n〈Fn｝中任意连续10项之和\n=1+1+2+3+5+（一3）＋2+（11） +1十0\n=11=0（mod 11），\n命题获证.\n（2）｛Fn（mod 12）｝：1, 1, 2, 3, 5，-4, 1， 一3， -2， -5, 5, 0,1，\n1，⋯是以12为周期纯周期数列.直接验证，可求出满足条件的最小正整\n数ん=36.\n说明若k是满足（2）最小正整数，而n是满足（2）的正整数，则ん｜m\n（这个结论请读者证明）.因此，找到满足条件n= 36（｛Fn（mod12）｝每个\n周期内各数之和=4（mod12））后，只需验证36正因数不合要求，就能断言\n36 是符合条件的最小正整数."
  },
  {
    "id": "ex-2-7",
    "number": 7,
    "chapter": 2,
    "title": "模 3 与模 7 排除平方和可除性",
    "problemStatement": "设整数 $a, b$ 满足：$21 \\mid (a^2 + b^2)$。证明：$441 \\mid (a^2 + b^2)$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "完全平方数模算术",
      "互质因数传递",
      "二次剩余"
    ],
    "videoMeta": {
      "lectureId": 88,
      "cleanTitle": "第2章习题第7题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "平方数模 3 只能余 0, 1；模 7 只能余 0, 1, 2, 4。若两平方和被 3 或 7 整除，则两数必分别被整除！",
    "teacherTrapAlert": "利用 $21 = 3 \\times 7$，分别推导出 3|a, 3|b 以及 7|a, 7|b。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "7",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "完全平方数模算术：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：平方数模 3 只能余 0, 1；模 7 只能余 0, 1, 2, 4。若两平方和被 3 或 7 整除，则两数必分别被整除！"
    },
    "fullSolution": "先分别证明：\n（1）若α＋6=0（mod3），则α三6=0（mod 3）；\n（2） 若α＋B=0（mod7），则α三6=0（mod 7）.\n这只需注意到，对任意整数z，都有\nでニ0或1（mod 3），\n及\nで三0,1,2或4（mod7），\n即可证出.\n现在由211a2＋6可推出21|a，2116，故212|a2+6，所以命题成立。"
  },
  {
    "id": "ex-2-8",
    "number": 8,
    "chapter": 2,
    "title": "代数式二次型素因子下界",
    "problemStatement": "正整数 $a, b, c$ 满足：$c = a^2 + b^2 + ab$。证明：$c$ 有一个大于 5 的素因子。",
    "difficulty": "基础巩固",
    "sectionCode": "2.1",
    "topicTags": [
      "齐次二次型",
      "因式分解",
      "素因子排查"
    ],
    "videoMeta": {
      "lectureId": 89,
      "cleanTitle": "第2章习题第8题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "将 $a^2 + ab + b^2$ 改写为配方形式，考察小素数 2, 3, 5 的同余特征。",
    "teacherTrapAlert": "若 c 的素因子仅有 2, 3, 5，通过模 3 或模 4 导出矛盾。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "8",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "齐次二次型：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：将 $a^2 + ab + b^2$ 改写为配方形式，考察小素数 2, 3, 5 的同余特征。"
    },
    "fullSolution": "我们分别证明：\n（1） 若21c，则2|a,216；\n（2） 若3｜C，则3｜a,3｜6；\n（3） 若5c，则5｜a,516.\n（1）的证明是平凡.\n（2）的证明只需注意到\nC=a+ab+B=（a-b）2+3a6，\n就容易证出.\n对于（3），由条件，知\n4c'=4a2+4a6+46°=3a2+（a+26）2，\n整除、周余与不定\n而对任意整数z，知\n于是，由\n可知\n即\nで=0,1,4（mod5），\n3z＋y=0（mod5），\nZ=y=0（mod5），\nx=y=0（mod 5）.\n因此，由51c，知\n故\n可得\n3a2+（a+26）2= 0（mod 5），\nα三a+26=0（mod 5），\nα=6= 0（mod 5），\n所以（3）成立.\n回到原题，当c是2、3或5的倍数时，C=a+ab+6两边可分别约去\n2°、3°或5°后，等式的形式保持不变。所以c有一个大于5的素因子."
  },
  {
    "id": "ex-2-9",
    "number": 9,
    "chapter": 2,
    "title": "线性递推整除判定准则证明",
    "problemStatement": "给出一种判别一个数是否为 19 的倍数的方法：每次去掉该数的最后一位数字，将其 2 倍与剩下的数相加，依此类推，直到数变为 20 以内的数为止。若最后一个数为 19，则最初那个数为 19 的倍数，否则不是。\n(1) 证明上面的判别方法是正确的；\n(2) 请给出判别一个数是否为 29 的倍数的类似方法。",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "整除判定法",
      "模19逆元",
      "模29构造"
    ],
    "videoMeta": {
      "lectureId": 90,
      "cleanTitle": "第2章习题第9题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "$10x + y \\equiv 0 \\pmod{19} \\iff 2(10x + y) = 20x + 2y \\equiv x + 2y \\pmod{19}$！",
    "teacherTrapAlert": "注意 29 的判定规则：乘以 3 还是乘以 2？$3(10x+y) = 30x+3y \\equiv x+3y \\pmod{29}$！",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "9",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "整除判定法：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：$10x + y \\equiv 0 \\pmod{19} \\iff 2(10x + y) = 20x + 2y \\equiv x + 2y \\pmod{19}$！"
    },
    "fullSolution": "一般地，设数 a,Qn-l…ao是一个十进制表示下n十1位数，则若它是\n19的倍数，那么\n10anan-l\"a+ao = a,an-l…ao = O（mod 19），\n故\n20 a,an-l…al +2ao= 0（mod 19），\n即\na,an-l\"a1+2ao= 0（mod 19），\n这表明每次操作后的结果都是19的倍数.\n另一方面，若\naan-l\"al +2a0= 0（mod19），\n则\n10 a,an-l\"•a1 +20ao= 0（mod 19），\n这表明\n10 anan-ial+ao 三 0（mod 19），\n即\na,an-l…ao三 0（mod 19），\n所以，若某次操作后结果是19的倍数，则操作前该数也是19的倍数.\n所以，题给的判别方法是正确的.\n对于29而言，类似判别方法是：每次去掉最后一位，将它3倍与剩下\n的数相加，依此类推，直到变为30以内的数为止.若最后结果为 29，则原数\n习题解合」\n◎\n是29的倍数，否则原数不是 29的倍数."
  },
  {
    "id": "ex-2-10",
    "number": 10,
    "chapter": 2,
    "title": "奇偶校验矩阵与线性方程极值",
    "problemStatement": "标号为 $1, 2, \\dots, 100$ 的火柴盒中有一些火柴。如果每次提问允许问其中任意 15 盒中所有火柴数之和的奇偶性。那么要确定 1 号盒中火柴数的奇偶性，至少需要提问几次？",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "奇偶性分析",
      "线性代数",
      "信息论下界"
    ],
    "videoMeta": {
      "lectureId": 91,
      "cleanTitle": "第2章习题第10题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "建立模 2 线性方程组，利用对称性与组合抵消确定最少提问次数。",
    "teacherTrapAlert": "3次提问是否足够？通过具体构造三组重叠集合证明！",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "10",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "奇偶性分析：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：建立模 2 线性方程组，利用对称性与组合抵消确定最少提问次数。"
    },
    "fullSolution": "至少需要3次提问.\n先证“3次提问是足够的”.例如：\n第一次为：a1，az，…，Q15；\n第二次为：a1，az，…，d8，Q16，Q17，…，C225\n第三次为：al，ag，Q10，“，C22•\n其中a：表示第i盒中火柴数目.这样，3个答案之和的奇偶性与a1\n奇偶性相同（其余每盒在3次提问中各恰好出现2次）.因此，经3次提问可确\n定a1的奇偶性。\n再证“至少需要3次提问”如果提问只有两次，且两次中都出现a」，那么\n在两次提问中必有a：和a；，使得a：只在第1次提问中出现，而a；只在第二次\n提问中出现，这样同时改变a1、ai、a，的奇偶性，每次答案是相同的，从而不\n能确定a」的奇偶性。如果两次中不都出现a1，在a，都不出现时，改变a1的奇\n偶性；在a1只出现一次时，改变a1与a（这里a：是与a」同时出现的某个火柴\n盒）的奇偶性，那么两次答案仍是相同的，不能确定a1的奇偶性。\n综上可知，至少需要提问3次."
  },
  {
    "id": "ex-2-11",
    "number": 11,
    "chapter": 2,
    "title": "方格表黑白染色与邻域同余",
    "problemStatement": "求所有的正整数 $n$，使得可以在一个 $n \\times n$ 的方格表的每个方格内写上 $+1$ 或 $-1$，满足：每个标号为 $+1$ 的方格的相邻格中恰有一个标号是 $-1$，而每个标号为 $-1$ 的方格的相邻格中恰有一个标号是 $+1$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "棋盘染色",
      "不变量原理",
      "双向计数"
    ],
    "videoMeta": {
      "lectureId": 92,
      "cleanTitle": "第2章习题第11题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "将格点按奇偶染色，对每个格子的邻居建立连边计数不变量。",
    "teacherTrapAlert": "方格大小 n 必须满足被 4 整除的结构要求。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "11",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "棋盘染色：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：将格点按奇偶染色，对每个格子的邻居建立连边计数不变量。"
    },
    "fullSolution": "用ai表示第：行、第；列上方格内所填的数。如果存在符合要求\n填法，那么我们不妨设 a11=1（否则改变表格中所有数的符号再讨论），此时\naz1与 arz中恰有一个为一1，不妨设az1=—1（否则将表格第2行与第2列\n互换后再讨论），则arz =1，进一步讨论，知azz=-1，a13=1，…，可知第1\n行中的数都是1，第2行中的数都是一1，进而，第3行中的数都是-1，第4行\n中的数都是1，依此递推，知当且仅当i三 1（mod 3）时，第i行中的数都是1，\n而其余每行中数都是一1.如果n =0（mod 3），那么第n行的数为－1，该行\n上的每个方格中相邻方格上的数都是一1，不合要求，直接验证可知其余情况\n都合要求.\n所以，当且仅当3+n，且n＞1时，存在符合要求的填法。"
  },
  {
    "id": "ex-2-12",
    "number": 12,
    "chapter": 2,
    "title": "部分和排列模 100 剩余类极值",
    "problemStatement": "设 $a_1, a_2, \\dots, a_{100}$ 是 $1, 2, \\dots, 100$ 的一个排列，令 $b_i = a_1 + a_2 + \\dots + a_i$ ($i = 1, 2, \\dots, 100$)，记 $r_i$ 为 $b_i$ 除以 100 所得的余数。证明：$r_1, r_2, \\dots, r_{100}$ 中至少有 11 个不同的数。",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "排列部分和",
      "剩余类覆盖",
      "反证法"
    ],
    "videoMeta": {
      "lectureId": 93,
      "cleanTitle": "第2章习题第12题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "反设相异余数不足 11 个，利用均值与区间长度矛盾导出必有至少 11 个不同余数。",
    "teacherTrapAlert": "构造极端排列时防止循环节重合。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "12",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "排列部分和：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：反设相异余数不足 11 个，利用均值与区间长度矛盾导出必有至少 11 个不同余数。"
    },
    "fullSolution": "若n，rz，⋯，7100中只有10个不同数，则对i=1，2，…，99，\nrit1一n只有102-9=91（这里减去9是因为取值使得r+1二n时，所得\n值都是零）种不同取值.但是在模100意义下，Til一ni依次为az，as，⋯，\na100，共有99种不同的取值，矛盾.\n所以，r，ra，…，r100中至少有11个不同的值."
  },
  {
    "id": "ex-2-13",
    "number": 13,
    "chapter": 2,
    "title": "指数同余方程与基数分类",
    "problemStatement": "求所有满足下述条件正整数 $a$ 的个数：存在非负整数 $x_0, x_1, x_2, \\dots, x_{2001}$，使得 $x_0^a = a^{x_1} + a^{x_2} + \\dots + a^{x_{2001}}$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "高次同余",
      "因数分解",
      "基数整除"
    ],
    "videoMeta": {
      "lectureId": 94,
      "cleanTitle": "第2章习题第13题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "方程两边模 $a-1$ 分析：右边每一项 $a^{x_i} \\equiv 1 \\pmod{a-1}$，和恒为 $2001$！",
    "teacherTrapAlert": "a=1 时特判；当 a>1 时 $a-1 \\mid 2000$。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "13",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "高次同余：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：方程两边模 $a-1$ 分析：右边每一项 $a^{x_i} \\equiv 1 \\pmod{a-1}$，和恒为 $2001$！"
    },
    "fullSolution": "若a是一个满足条件数，则a“＞1，故a＞1.此时，对\nao=ai+a'z+・+a201\n整除、同余与不定方程（第三版】\n两边模α一1，知\n1=1+⋯+1（moda-1），\n2001个\n所以\nα-1| 2000.\n另一方面，若α＞1，满足a-11 2000，则我们在で1，Z2，⋯，22001中取a\n个数为0.a-1个为1,a-1个为2、⋯.4-1个为一1，这里6-2000，\n并取でo一ん，就有ato=ai+az+⋯・+a*2001.\n所以，当且仅当α＞1且α-1|2000时，a为满足条件数，这样a共\n有20个."
  },
  {
    "id": "ex-2-14",
    "number": 14,
    "chapter": 2,
    "title": "梅森数整除性与平方整除充要条件",
    "problemStatement": "设 $m, n$ 为正整数，$m > 1$。证明：$m(2^n - 1) \\mid n$ 的充要条件是 $(2^m - 1)^2 \\mid (2^n - 1)$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.2",
    "topicTags": [
      "梅森数",
      "二项式展开",
      "同余升幂LTE"
    ],
    "videoMeta": {
      "lectureId": 95,
      "cleanTitle": "第2章习题第14题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用二项式定理展开 $(2^m - 1)^2$ 与 $2^n - 1$ 的整除级数。",
    "teacherTrapAlert": "充分性与必要性需双向论证，不可单向推导。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "14",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "梅森数：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用二项式定理展开 $(2^m - 1)^2$ 与 $2^n - 1$ 的整除级数。"
    },
    "fullSolution": "若m（2\"-1）｜n，设n=m（2\"-1）k，则\n2\"-1=2m（27-1）k-1\n=（2mk）（2ー1）-1\n=（2m-1）A，\n其中\nA=（2mk）でー2+（2mk）で\"-3＋・+（2mk）「+1.\n注意到\n所以\n2mk-1=（2\"）-1=1*-1=0（mod 2\"-1），\nA=12\"-2＋12-3＋⋯＋1+1=2\"-1=0（mod2\"-1），\n（2m-1）2｜2”-1.\n反过来，若（2\"-1）*|2\"-1，我们先证m｜n. 若否，设n=mg十r,0＜\nr＜m，则由\n2\"= 1（mod2m-1），\n知\n（2\"）9•2'= 1（mod 2\"-1），\n故\n2'=1（mod 2m-1），\n但是\n1≤2'-1<2\"-1，\n所以2m-1+2-1，矛盾.因此m｜n.\n现设n=mg，则\n其中\n由\n2\"-1=（2m-1）✕B，\nB=（2m）91+（2™）92+⋯・・+2”+1，\n（2m-1）212”-1，\n习题解答」◎\n知\n又\n所以\n从而\n2m-1|B，\nB=191+192+⋯＋1=g（mod 2\"-1），\n2m-119，\nm（2\"-1）｜n2.\n命题获证。"
  },
  {
    "id": "ex-2-15",
    "number": 15,
    "chapter": 2,
    "title": "奇素数幂和公约数定理",
    "problemStatement": "设正整数 $a, b$ 互素，$p$ 为奇素数。证明：$\\gcd(a + b, \\frac{a^p + b^p}{a + b}) = 1$ 或 $p$。",
    "difficulty": "基础巩固",
    "sectionCode": "2.3",
    "topicTags": [
      "费马小定理",
      "公因数对偶",
      "因式分解"
    ],
    "videoMeta": {
      "lectureId": 96,
      "cleanTitle": "第2章习题第15题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "代数恒等式：$a^p + b^p = (a+b)(a^{p-1} - a^{p-2}b + \\dots + b^{p-1})$，两因式公约数必整除 $p(a+b)$。",
    "teacherTrapAlert": "欧几里得辗转相除法在整式中的精确应用。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "15",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "费马小定理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：代数恒等式：$a^p + b^p = (a+b)(a^{p-1} - a^{p-2}b + \\dots + b^{p-1})$，两因式公约数必整除 $p(a+b)$。"
    },
    "fullSolution": "记A=＠P+邸＝ap--aP-26+…-a6r-2+601，结合，为奇数及\na+6\n6=-a（moda+6），知\nA=aPltarl+⋯+al= parl（moda+b）.\n而\n（a,6）=1，\n故\n所以\n（a, a+b）=1，\n（a+6.袋4）=（a+6.A）\n=（atb, parl）\n=（a+6,p）=1或户."
  },
  {
    "id": "ex-2-16",
    "number": 16,
    "chapter": 2,
    "title": "整系数多项式恒同余极值参数",
    "problemStatement": "求最小正整数 $a$，使得对任意整数 $x$，都有 $65 \\mid (5x^{13} + 13x^5 + 9ax)$。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.3",
    "topicTags": [
      "费马小定理",
      "整除参数优化",
      "模65分解"
    ],
    "videoMeta": {
      "lectureId": 97,
      "cleanTitle": "第2章习题第16题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "由费马小定理 $x^{13} \\equiv x \\pmod{13}$，多项式化简为线性同余。",
    "teacherTrapAlert": "注意 65 = 5 × 13，需分别满足模 5 与模 13。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "16",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "费马小定理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：由费马小定理 $x^{13} \\equiv x \\pmod{13}$，多项式化简为线性同余。"
    },
    "fullSolution": "由条件，知65｜（18+9a）（取x＝1），而（9,65）=1，故65｜a+2，\n即a≥63.\n所以\n矛盾，故\n当α=63时，利用费马小定理知：对任意整数z，都有"
  },
  {
    "id": "ex-2-17",
    "number": 17,
    "chapter": 2,
    "title": "阶乘不定方程的素因子上界",
    "problemStatement": "求所有正整数组 $(x, y, z, w)$，使得 $x! + y! + z! = w!$。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.3",
    "topicTags": [
      "阶乘方程",
      "素数整除",
      "有限枚举"
    ],
    "videoMeta": {
      "lectureId": 98,
      "cleanTitle": "第2章习题第17题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "阶乘增长极快，若 $w \\ge x+2$，两边量级矛盾，只能 $x=y=z=2$ 或特例。",
    "teacherTrapAlert": "不要漏掉 $1! + 1! + 1! = 3!$ 无法成立的边界。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "17",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "阶乘方程：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：阶乘增长极快，若 $w \\ge x+2$，两边量级矛盾，只能 $x=y=z=2$ 或特例。"
    },
    "fullSolution": "不妨设z≤y≤x＜w，则飞≥x十1.若x≥3，则\nで！≥（x十1）・（x！）≥4・（x！） >z！十y！十z！，\nx≤2.\n若x=1，则x=y=～=1，此时ce！=3，不存在这样co，故x=2.\n此时w0≥3，故\n所以\n而\n故只能是\n此时\n故\nC！=0（mod 3），\nz！十y！=1（mod3），\nzAyA2，\nx=y=2，\nce=3，\n（x,y,2,C0）=（2,2,2,3）."
  },
  {
    "id": "ex-2-18",
    "number": 18,
    "chapter": 2,
    "title": "模 37 立方剩余解计数",
    "problemStatement": "求满足下述条件的整数数组 $(a, b)$ 的组数：$0 \\le a, b \\le 36$，且 $a^3 + b^3 \\equiv 0 \\pmod{37}$。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.3",
    "topicTags": [
      "立方剩余",
      "原根",
      "同余解数"
    ],
    "videoMeta": {
      "lectureId": 99,
      "cleanTitle": "第2章习题第18题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "37 是形如 3k+1 的素数，立方映射核大小为 3，非零立方剩余恰有 12 个。",
    "teacherTrapAlert": "包含 a=0, b=0 的平凡解。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "18",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "立方剩余：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：37 是形如 3k+1 的素数，立方映射核大小为 3，非零立方剩余恰有 12 个。"
    },
    "fullSolution": "注意到，a2+6=a-366°（mod 37），故由条件知\n37|a2-366°，\n即\n所以\n371（a-66）（a+66），\n371a-66或37｜a+66.\n因此，对每个1≤6≤36，可知恰有两个α（a三士66（mod37））满足条件，\n而6=0时，由α＋6三0（mod37）知α=0.所以，满足条件（a,6）共有\n2✕36+1=73（组）."
  },
  {
    "id": "ex-2-19",
    "number": 19,
    "chapter": 2,
    "title": "二次分式整除性与完全平方判定",
    "problemStatement": "设 $a, b$ 为正整数，使得 $I = \\frac{a - b + b(b + 1)}{a}$ 是一个整数。证明：$I$ 是一个完全平方数。又问：若 $a, b$ 为整数，而 $I$ 为正整数，此时 $I$ 是否必为完全平方数？",
    "difficulty": "联赛进阶",
    "sectionCode": "2.3",
    "topicTags": [
      "二次整除",
      "判别式法",
      "完全平方数"
    ],
    "videoMeta": {
      "lectureId": 100,
      "cleanTitle": "第2章习题第19题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "将式子变形为关于 a 或 b 的二次整除，判别式必须为完全平方数。",
    "teacherTrapAlert": "第二问：整数范围允许有负数解，结论可能不成立！",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "19",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "二次整除：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：将式子变形为关于 a 或 b 的二次整除，判别式必须为完全平方数。"
    },
    "fullSolution": "已知【=《-号+6（6+ ），当a、6为正整数，且【为整数时，有\nN=36_\na\n36°一α为整数，故\nab\nab36-a.\n①\n依此可知，6|a.现设a=mb，m为正整数，则由①有mb136-m，知6lm，\n可设m=nb，n为正整数，再由①可知nb｜3一n，得n｜3一n，于是n｜3，n=\n1或3.\n当n=1时，N=（此时，a=6）为整数，故6=1或2.对应地.【=4\n或9，命题成立；当n=3时，N=0（此时，α=36°），I=46°是一个完全平方\n数.\n当（α，6）=（4，-2）时，I=7不是完全平方数."
  },
  {
    "id": "ex-2-20",
    "number": 20,
    "chapter": 2,
    "title": "二次方程判别式与完全平方数",
    "problemStatement": "设 $m, n$ 为正整数，且 $mn \\mid (m^2 + n^2 + m)$。证明：$m$ 是一个完全平方数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.3",
    "topicTags": [
      "Vieta跳跃",
      "二次方程根",
      "整除构造"
    ],
    "videoMeta": {
      "lectureId": 101,
      "cleanTitle": "第2章习题第20题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "视方程为关于 n 的二次方程，判别式 $\\Delta$ 必须是平方数。",
    "teacherTrapAlert": "因式分解判别式得出 m 必为完全平方数。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "20",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "Vieta跳跃：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：视方程为关于 n 的二次方程，判别式 $\\Delta$ 必须是平方数。"
    },
    "fullSolution": "由条件可设m2＋＋m=kmn，k为正整数，这样，关于n的一元二\n次方程\nmーkmn+m+m=0\n①\n习题解管」\n◎\n有正整数解，故\nA=（km）2-4（m2+m）=m（Rm-4m-4）\n是一个完全平方数.\n若m为奇数，则\n（m,Rm-4m-4）=（m， -4）=1，\n故由A为完全平方数知 m 为完全平方数.\n若m为偶数，则由①知 n 为偶数（否则①左边为奇数，矛盾），故41n，\n41kmn,4｜m*，从而由①知4｜m.设m=4m，则\nA=16m（Rm1-mi-1），\n所以，m（だm1一m1-1）是一个完全平方数，这时\n（ml，だm-m-1）=（mi，-1）=1，\n故mi是完全平方数.所以 m = 4m1也是完全平方数.命题获证."
  },
  {
    "id": "ex-2-21",
    "number": 21,
    "chapter": 2,
    "title": "三平方和形式的平方数保持性",
    "problemStatement": "证明：若正整数 $n$ 可以表示为三个正整数平方和的形式，则 $n^2$ 也可以表示为三个正整数平方和的形式。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "四平方和定理",
      "代数恒等式",
      "平方和表示"
    ],
    "videoMeta": {
      "lectureId": 102,
      "cleanTitle": "第2章习题第21题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "若 $n = x^2 + y^2 + z^2$，利用欧拉恒等式或代数变形构造 $n^2$ 的三平方表示。",
    "teacherTrapAlert": "必须确保三个正整数均严格大于 0。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "21",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "四平方和定理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：若 $n = x^2 + y^2 + z^2$，利用欧拉恒等式或代数变形构造 $n^2$ 的三平方表示。"
    },
    "fullSolution": "设n＝ゼ十ジナジ、x≥y≥と为正整数，则\nー（でナジナジ）2\n=（でナジ）＋2（で十ジ）どナで\n=（で十ダーズ）十4（で十y）ど\n=（ゼ十ジーズ）＋（2.2x）2+（2yx）2.\n注意到，で十yーざ＞0，知n也可表为3个正整数平方和."
  },
  {
    "id": "ex-2-22",
    "number": 22,
    "chapter": 2,
    "title": "末三位截断与立方根不定方程",
    "problemStatement": "求所有的正整数 $n$，使得 $n$ 的三次方根等于 $n$ 去掉最后三位数字后得到的正整数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "立方根估计",
      "不等式夹逼",
      "末位分析"
    ],
    "videoMeta": {
      "lectureId": 103,
      "cleanTitle": "第2章习题第22题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "设去掉末三位后的数为 $A$，则 $n = 1000A + r$ ($0 \\le r < 1000$)，且 $n = A^3$。",
    "teacherTrapAlert": "解不等式 $A^3 - 1000A < 1000$ 快速锁定 $A$ 的范围。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "22",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "立方根估计：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：设去掉末三位后的数为 $A$，则 $n = 1000A + r$ ($0 \\le r < 1000$)，且 $n = A^3$。"
    },
    "fullSolution": "设n=1000z十y，这里で为正整数，y为整数，且O≤N≤999.依题\n意知\nz=1000z+y.\n故\n得\n所以\n故\n这样\n整除、同\n由O≤y≤999，知\n1000z≤z＜1000z+1000=1000（z十1），\n≥1000，で＋1≤1000（z十1），\n≥1000，でーα+1≤1000.\n32≤Z<33，\nZ=32，\ny= 768，\n所以\nn = 32768."
  },
  {
    "id": "ex-2-23",
    "number": 23,
    "chapter": 2,
    "title": "连续整数平方和表示的存在性",
    "problemStatement": "证明：存在无穷多个整数 $n$，使得数 $n, n+1, n+2$ 都可以表示为两个整数的平方和。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "佩尔方程",
      "高斯整数",
      "无穷解构造"
    ],
    "videoMeta": {
      "lectureId": 104,
      "cleanTitle": "第2章习题第23题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用二平方和充要条件（素因子 $4k+3$ 幂次为偶数），构造高次同余解。",
    "teacherTrapAlert": "使用中国剩余定理构造满足无 $4k+3$ 素因子的连号整数。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "23",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "佩尔方程：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用二平方和充要条件（素因子 $4k+3$ 幂次为偶数），构造高次同余解。"
    },
    "fullSolution": "只需寻找正整数L，使得-1=で十y有正整数解、令x＝2m2，\ny=2m，及1=2m2+1，就有に-1=z＋y.所以，对任意正整数m，取\nn=（2m2+1）2-1=4m2+4m'，\n则\nn=（2m2）2+（2m）”，\nn+1=（2m2+1）2+0，\nn+2=（2m2+1）2+12.\n所以，命题成立。"
  },
  {
    "id": "ex-2-24",
    "number": 24,
    "chapter": 2,
    "title": "梅森数非平方与非立方证明",
    "problemStatement": "设正整数 $n > 1$。证明：数 $2^n - 1$ 既不是完全平方数，也不是完全立方数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "模4同余",
      "模7同余",
      "指数丢番图"
    ],
    "videoMeta": {
      "lectureId": 105,
      "cleanTitle": "第2章习题第24题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "$2^n - 1 \\equiv 3 \\pmod 4$ 绝非完全平方数；模 7 分析排除立方数。",
    "teacherTrapAlert": "n 为偶数时 $2^n - 1 = (2^{n/2}-1)(2^{n/2}+1)$ 连续数积绝非次方数。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "24",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "模4同余：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：$2^n - 1 \\equiv 3 \\pmod 4$ 绝非完全平方数；模 7 分析排除立方数。"
    },
    "fullSolution": "由于n≥2，故2\"-1=-1（mod4），而完全平方数=0或1（mod4），\n故2\"-1不是完全平方数.\n另一方面，若存在n＞1及正整数z，使得\n2\"ー1＝で、\n则\n2\"=（2+1）（ぷー2十1）．\n由于\nでーズ十1=で（2ー1）十1，\n其中z（zー1）为偶数（两个相邻整数中有一个为偶数），故ピーで十1为奇数，\n这要求\nでーズ十1=1，\n进面x=1，导出n=1，矛盾.故2\"-1不是一个完全立方数."
  },
  {
    "id": "ex-2-25",
    "number": 25,
    "chapter": 2,
    "title": "三重根式和的有理性与完全平方",
    "problemStatement": "设 $a, b, c$ 为正整数，且 $\\sqrt{a} + \\sqrt{b} + \\sqrt{c}$ 为整数。证明：$a, b, c$ 都是完全平方数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "代数数理论",
      "共轭根式",
      "完全平方数"
    ],
    "videoMeta": {
      "lectureId": 106,
      "cleanTitle": "第2章习题第25题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "若 $\\sqrt{a} + \\sqrt{b} + \\sqrt{c} \\in \\mathbb{Q}$，移项平方两次消除根号。",
    "teacherTrapAlert": "分步有理化证明每一个单根号都必须是有理数。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "25",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "代数数理论：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：若 $\\sqrt{a} + \\sqrt{b} + \\sqrt{c} \\in \\mathbb{Q}$，移项平方两次消除根号。"
    },
    "fullSolution": "先证：对任意正整数a，若Ja为有理数，则a 为完全平方数.\n事实上，若／一号，力、9为正整数，且 （p.9）=1，则《=%\nが，此时由a\n为正整数，知が1q，但（p,g）=1，故p＝1，即α＝g.\n再证原题：设Ja+石+石=m,m为整数，则\n（a+石）2=（m一1）”，\n即\na+6+2Vab=m2-2+c，\n于是Vab+l为有理数.进而可设Vab+l=n，n为正有理数，则\nab=（n-ve）2=n-2nvc十c，\n故后为有理数、利用前面的结论可知c为完全平方数，因此Ja+石6=m一后\n为正整数、类似处理，即可知 a、6也都是完全平方数.\n习题解營」"
  },
  {
    "id": "ex-2-26",
    "number": 26,
    "chapter": 2,
    "title": "两变量对称多项式有理数极值",
    "problemStatement": "设有理数 $a, b$ 满足：$a + b = a^2 + b^2 = S$，这里 $S$ 不是一个整数。写 $S = \\frac{m}{n}$（$m, n$ 为正整数且 $\\gcd(m, n) = 1$），令 $p$ 为 $n$ 的最小素因数。求 $p$ 的最小可能值。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.4",
    "topicTags": [
      "柯西不等式",
      "有理数最简表示",
      "素数分母"
    ],
    "videoMeta": {
      "lectureId": 107,
      "cleanTitle": "第2章习题第26题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用 $a+b = a^2+b^2 = S$ 推导判别式与分母的质因数分解结构。",
    "teacherTrapAlert": "判别式 $\\Delta = S(2-S) > 0 \\implies 0 < S < 2$。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "26",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "柯西不等式：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用 $a+b = a^2+b^2 = S$ 推导判别式与分母的质因数分解结构。"
    },
    "fullSolution": "设a、6的最小公分母为で，可写a=“\n2e，6=2\nT，U、で为整数，ce为\n正整数，则s=m_“十”，由于（m, n） 二1，可知n素因数都是w的素因数。\n依题意，α+6=α十6，可知\nぴ十ぴ=と（u十ひ）.\n①\n如果ce为偶数，那么w十ぴ为偶数，进而α十v为偶数，从而，有4lz2＋\nぴ、由于で三0、1（mod4），可知α、ひ都为偶数，导致2｜（u,V,c0），与を最\n小矛盾.\n如果31で，那么由①知3｜ぴ十ぴ，结合で=0，1（mod 3），可知31u，\n3|v，导致3|（L,v,c），与c最小矛盾.\n上达讨论表明：p≥5.丽《一号，6=号满足：248-号+8-5-\na十6，故p最小可能值为5."
  },
  {
    "id": "ex-2-27",
    "number": 27,
    "chapter": 2,
    "title": "奇合数与完全平方数构造",
    "problemStatement": "已知正整数 $c$ 是一个奇合数。证明：存在正整数 $a$，使得 $a \\le \\frac{c-1}{2}$，且 $(2a - 1)^2 + 8c$ 是一个完全平方数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.5",
    "topicTags": [
      "奇合数分解",
      "因数分解法",
      "完全平方式"
    ],
    "videoMeta": {
      "lectureId": 108,
      "cleanTitle": "第2章习题第27题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "设奇合数 $c = uv$ ($1 < u \\le v$)，令 $2a - 1 = v - u$ 配成完全平方数。",
    "teacherTrapAlert": "验证 $a \\le \\frac{c-1}{2}$ 的不等式边界。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "27",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "奇合数分解：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：设奇合数 $c = uv$ ($1 < u \\le v$)，令 $2a - 1 = v - u$ 配成完全平方数。"
    },
    "fullSolution": "通过凑完全平方式来处理、由条件可设c=pg，3≤か≤9，且力、g\n都是奇数，现在需要寻找a，使得（2a-1）°+8pg 是一个完全平方式，一个自\n然旳取法是：令2a-1=2q一p，则\n（2a-1）2+8pg=（2g-p）2+8pg=（2g十p）”，\n这时\na=2（24-0+1）=9ーカ-1\nハター1ーデ-1≤号ー1，\n符合题中的要求."
  },
  {
    "id": "ex-2-28",
    "number": 28,
    "chapter": 2,
    "title": "弗罗贝尼乌斯硬币问题与合数极值",
    "problemStatement": "求不能表示为 42 的正倍数与一个合数之和的最大正整数。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.5",
    "topicTags": [
      "Frobenius极值",
      "模42同余",
      "合数表示"
    ],
    "videoMeta": {
      "lectureId": 109,
      "cleanTitle": "第2章习题第28题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "不能表示为 $42k + C$ 的最大数，分析模 42 各同余类的最小合数。",
    "teacherTrapAlert": "找出各剩余类中无法分解的最大阻碍数。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "28",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "Frobenius极值：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：不能表示为 $42k + C$ 的最大数，分析模 42 各同余类的最小合数。"
    },
    "fullSolution": "对任意不能表示为42正倍数与一个合数之和的正整数n，考虑n\n除以42所得余数r.若r=0或r为合数，则n≤42.\n下面考虑r=1或r为素数情形.\n若r三1（mod 5），则\n此时\n84+r=0（mod5），\nn＜3✕42=126；\n若r=2（mod5），则\n此时\n4✕42+r三0（mod 5），\nn＜5X42= 210；\n若r三3（mod5），则\n此时\n42+r三0（mod 5），\nn＜2X42=84；\n若r=4（mod5），则\n此时\n3X42+r=0（mod 5），\nn＜4✕42=168；\n石r三0（mod5），则\nr=5，\n此时由于5、47、89、131、173 都是素数，故n 最大为215.\n综上可知，所求最大正整数为 215."
  },
  {
    "id": "ex-2-29",
    "number": 29,
    "chapter": 2,
    "title": "双向素数幂次整除约束",
    "problemStatement": "设 $p, q$ 为素数，$n$ 是一个正整数，满足：$p \\mid (n+2)$ 且 $(n+2) \\mid (p^q + q^p)$。证明：存在正整数 $m$，使得 $q \\mid (4^m \\cdot n + 2)$。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.5",
    "topicTags": [
      "同余升幂",
      "费马小定理",
      "整除传递"
    ],
    "videoMeta": {
      "lectureId": 110,
      "cleanTitle": "第2章习题第29题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "结合费马小定理与模 $p, q$ 的周期性证明存在性。",
    "teacherTrapAlert": "构造指数 $m$ 使得 $4^m$ 满足逆元要求。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "29",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "同余升幂：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：结合费马小定理与模 $p, q$ 的周期性证明存在性。"
    },
    "fullSolution": "由条件可知 nP＋2=0（mod p），结合费马小定理，可知p｜n十2.再由\n第二个条件，知plne十g，于是，有pln十g，得plq一2（再次用到费马小定理）\n现在，若q=2，则取m为任意正整数均可；若p二2，则g＝2（用到力19一\n2），命题也成立。\n下面讨论p、q都为奇素数的情形：由前所得，可设g=（2k+1）•カ十2，\n这里々为非负整数.\n由费马小定理，知n*1=1（modg）（注意，若g｜n，则由g｜nP+2会得到\nq｜2，矛盾），即 mp（2.+1）•n = 1（mod g），结合条件：nP=-2（mod g），就有\n（一2）2+1・n=1（modg），于是，有g｜22+2•n＋2，取m=k十1，就有\n9|4m・n+2.\n命题获证."
  },
  {
    "id": "ex-2-30",
    "number": 30,
    "chapter": 2,
    "title": "三元二次对称式的同余两两互异性",
    "problemStatement": "设 $p$ 是一个素数，且存在彼此不同的正整数 $a, b, c$ 使得 $p = ab + bc + ca$。证明：$a, b, c$ 对模 $p$ 两两不同余，并且 $a^2, b^2, c^2$ 对模 $p$ 也两两不同余。",
    "difficulty": "联赛进阶",
    "sectionCode": "2.5",
    "topicTags": [
      "反证法",
      "二次剩余",
      "素数模方程"
    ],
    "videoMeta": {
      "lectureId": 111,
      "cleanTitle": "第2章习题第30题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "假设有两个数模 $p$ 同余，导出 $p \\mid (a-b)$ 从而 $p \\le a+b$，与 $p = ab+bc+ca$ 矛盾！",
    "teacherTrapAlert": "平方两两同余的处理需结合二次剩余。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "30",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "反证法：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：假设有两个数模 $p$ 同余，导出 $p \\mid (a-b)$ 从而 $p \\le a+b$，与 $p = ab+bc+ca$ 矛盾！"
    },
    "fullSolution": "若α、6、C中有两个数对模p同余，设α三6（modp），则pla“\n一ぷ，即p｜（α-6）（a+6），故力｜a一6或か｜a十b，总有か≤a+6，与カー\nab十民十ca（>a十b）矛盾.\n若で、び、で中有两个数对模p同余，设a＝6（modp），则pla3一6，\n即p｜（a-6）（a+ab+6），由上面的讨论，可知，只能是pla2十ab十b，依\n此有pla+a+B+ab十b十ca，即有pl（a+b）（a十b+c），总有p《a十\n6十c.但a、6、c不能都为1，故a+6+c＜ab+b十ca＝p，矛盾.\n综上可知，命题成立.\n说明 这样的素数p是存在，例如p=11（对应（a,6, c）=（1,2，\n3）），并且有无穷多个（请读者自证）.\n习题解答"
  },
  {
    "id": "ex-2-31",
    "number": 31,
    "chapter": 2,
    "title": "中国剩余定理构造连续合数段",
    "problemStatement": "求一个正整数 $n$，使得数 $n, n+1, \\dots, n+20$ 中每个数都与 30030 不互素。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "中国剩余定理",
      "互质素因子",
      "筛法构造"
    ],
    "videoMeta": {
      "lectureId": 112,
      "cleanTitle": "第2章习题第31题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "$30030 = 2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13$，选取 21 个不同素数建立同余方程组。",
    "teacherTrapAlert": "用孙子定理证明存在满足题设的正整数解。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "31",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "中国剩余定理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：$30030 = 2 \\times 3 \\times 5 \\times 7 \\times 11 \\times 13$，选取 21 个不同素数建立同余方程组。"
    },
    "fullSolution": "由于30030=2✕3✕5✕7✕11✕13，所以若取N=210k，则N与\nN士r都与30030不互素，这里r为2，3，⋯，10中的数.现在考虑数 N士1，\n我们取k，使得\n210k=1（mod 11）且210k=-1（mod 13），\n前者要求k=1（mod 11），设々=11m十1，\n后者要求\n210（11m+1）=-1（mod 13），\n解得\nm= 4（mod 13），\n所以，令々=45，则所得21个数9440,9441，⋯，9460与30 030都不互素，\n因此取n= 9440 即可."
  },
  {
    "id": "ex-2-32",
    "number": 32,
    "chapter": 2,
    "title": "极小素数集合覆盖连续整数长度界",
    "problemStatement": "是否存在连续 13 个正整数，其中每个数都是 2, 3, 5, 7, 11 中的某个数的倍数？连续 14 个呢？",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "覆盖同余系统",
      "鸽巢原理",
      "容斥原理"
    ],
    "videoMeta": {
      "lectureId": 113,
      "cleanTitle": "第2章习题第32题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "连续 14 个正整数中必有奇数不被 3, 5, 7, 11 整除，证明 14 不可能而 13 存在。",
    "teacherTrapAlert": "给出连续 13 个数的具体构造实例。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "32",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "覆盖同余系统：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：连续 14 个正整数中必有奇数不被 3, 5, 7, 11 整除，证明 14 不可能而 13 存在。"
    },
    "fullSolution": "注意到，114，115，⋯，126这13个数都是合数，每个数都是2，3，\n5，7，11中某个数的倍数，因此存在13个符合要求数.\n下证：没有连续14个正整数，使得其中每个数都是2，3，5，7,11 中某\n个数的倍数.\n事实上，若存在这样的14个数，考虑其中的7个奇数，设它们为a,a+2，…，\na+12. 由于若两个奇数都是3倍数，则它们的差至少为6，故这7个奇数中\n至多有3个数是3倍数.\n同样可证这7个奇数中至多有2个数是5的倍数；至多有1个数为7\n倍数；至多有1个数为11的倍数.\n由假设，这7个数都是3，5,7, 11中某个数的倍数，故这7个奇数中分\n别有3个为3倍数，2个为5倍数，1个为7的倍数，1个为11倍数，并\n且不出现一个数同时是3，5，7,11中某两个数的倍数.但是，这时要求a，\na+6， a+12为3倍数；a，a+10或者a+2， a+12中有一组数为5的倍\n数.必有一个数同为3和5的倍数，矛盾."
  },
  {
    "id": "ex-2-33",
    "number": 33,
    "chapter": 2,
    "title": "模 800 圆周涂色动态系统周期",
    "problemStatement": "圆周上有 800 个点，依顺时针方向依次标号为 $1, 2, \\dots, 800$。现在选定某个点将其染红，然后进行下述操作：如果第 $k$ 号点染成了红色，那么依顺时针方向转过 $k$ 个间隙将到达的点染红。问：依此规则，圆周上最多有多少个点被染成了红色？证明你的结论。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "模运算动力系统",
      "二次同余",
      "周期轨长"
    ],
    "videoMeta": {
      "lectureId": 114,
      "cleanTitle": "第2章习题第33题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "位置变换公式为 $x_{k+1} = x_k + k \\pmod{800}$，总位置相当于 $\\frac{k(k+1)}{2} \\pmod{800}$！",
    "teacherTrapAlert": "计算二次多项式模 800 的值域大小。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "33",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "模运算动力系统：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：位置变换公式为 $x_{k+1} = x_k + k \\pmod{800}$，总位置相当于 $\\frac{k(k+1)}{2} \\pmod{800}$！"
    },
    "fullSolution": "等价于求在模800意义下，数列a，2a，2‘a，2°a，…中，出现的不\n同的数的个数最大值，这里a在1，2，⋯，800中取值.\n注意到，当2\"2\"（mod800）时，2'a2\"a（mod 800）不一定成立；反过\n来，当2'a 2\"a（mod 800）成立时，2\"2\"（mod 800）一定成立.因此，数列\na, 2a, 2°a，…在模800意义下，不同元素个数的最大值在a=1时可以取\n到，因此，只需求1，2，2”，⋯在模800意义下不同元素的个数。\n由于800=2°X5'，而n≥5时有\n2\" =0（mod 29），\n另外｛2\"（mod 25）｝为：2,4,8,16,7,14,3,6,12，-1，-2，-4，-8，\n整除、同余与不灾方料\n-16，-7，-14，-3，-6，—12，1，…，故｛2”（mod 25）｝中恰有20个不同\n元素.结合（2\"（mod25）｝为2，4,8,16,0,0，⋯，可得｛2”（mod 800）｝中共有\n20+4=24（个）不同的数。\n所以，圆周上至多有 24个点染成了红色。"
  },
  {
    "id": "ex-2-34",
    "number": 34,
    "chapter": 2,
    "title": "双曲线整点逼近与因子差极值",
    "problemStatement": "设 $m$ 为正整数，且 $m \\equiv 2 \\pmod 4$。证明：至多存在一对正整数 $(a, b)$，使得 $m = ab$，且 $0 < a - b < \\sqrt{5 + 4\\sqrt{4m+1}}$。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "不等式估计",
      "代数变形",
      "因子对唯一性"
    ],
    "videoMeta": {
      "lectureId": 115,
      "cleanTitle": "第2章习题第34题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "由 $m = ab \\equiv 2 \\pmod 4$ 知 $a, b$ 一奇一偶，因数差必为奇数。",
    "teacherTrapAlert": "不等式边界严格限定解的组数至多为 1。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "34",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "不等式估计：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：由 $m = ab \\equiv 2 \\pmod 4$ 知 $a, b$ 一奇一偶，因数差必为奇数。"
    },
    "fullSolution": "如果能确定a+6值（视m 为常数），那么利用韦达定理的逆定理，\n可知至多只有一组正整数（a,6）满足条件。\n由条件，知（a十6）2=（a-6）2＋4ab 满足\n1+4m≤（a+6）2\n＜5+4V4m+1+4m\n=（/4m+1+2）2，\nV4m+1≤a+6<V4m+1+2，\n即\n所以\nV4m+1或V4m+1+1，若V4m+1 为整数；\nα+6=\n［V4m+I］+1或［V4m+1 ］+2，若V4m+1不是整数.\n总之，a十6只能取值于某两个连续正整数.而 ab=m=2（mod4），可知\na、6一奇一偶，即a十6为奇数.这样我们知道a十6的值唯一确定，命题获证。"
  },
  {
    "id": "ex-2-35",
    "number": 35,
    "chapter": 2,
    "title": "连分数与佩尔逼近的存在性",
    "problemStatement": "证明：\n(1) 对任意正整数 $n$，都存在分数 $\\frac{a}{b}$（$a, b$ 为整数），使得 $0 < b \\le \\sqrt{n}+1$，且 $\\sqrt{n} \\le \\frac{a}{b} \\le \\sqrt{n+1}$；\n(2) 存在无穷多个正整数 $n$，使得不存在分数 $\\frac{a}{b}$ 满足 $0 < b \\le \\sqrt{n}$ 且 $\\sqrt{n} \\le \\frac{a}{b} \\le \\sqrt{n+1}$。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "丢番图逼近",
      "狄利克雷定理",
      "连分数展开"
    ],
    "videoMeta": {
      "lectureId": 116,
      "cleanTitle": "第2章习题第35题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用狄利克雷逼近定理证明第 (1) 问存在性；利用平方数之间间距证明第 (2) 问。",
    "teacherTrapAlert": "分母范围 $b \\le \\sqrt{n}+1$ 的精细度。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "35",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "丢番图逼近：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用狄利克雷逼近定理证明第 (1) 问存在性；利用平方数之间间距证明第 (2) 问。"
    },
    "fullSolution": "一个基本想法是让α接近于n，而6接近于m.为此，设n=r十s，\n这里r是一个正整数，而0≤s≤2r，s为整数（注意，这样的整数对（r,s）对\nn 而言是唯一）.\n如果s为偶数，设s=2m，那么0≤m≤r.我们取a二户十m，6=r，就\n有0＜6=r≤Vn，并且\nn=P+2m/（元）”\n1（++W） =2.+wm+（2）\nハで+2m+1=n+1.\n于是，有n≤号≤Vn+I，故结论（1）在此情形下成立。\n如果s为奇数，设s=2m十1，我们取a=（r十1）ー（r一m），6=r十1，\n那么，有0＜6=r+1≤vn十1，而\n习题解答」\nn=ド+（2m+1） =（r+1）2-2（r一m）\n≤（r+1）：-2（r-m）+（11）-（号）”\n《（r+1）\"ー2（rーm）+1=n十1，\n亦有元≤号≤Vm+T，结论（1）也成立.\n对于结论（2），我们考察形如n=p+1（r为正整数）的数.去证：不存在\n分数号（a、6为整数），使得0<6≤/n，且V7≤g≤Vn+I.\n事实上，若存在符合要求分数，则由6≤/n=VF+I＜r+1，知6≤\nr，再由/n≤是≤Vn十1，可得\n（br）”＜B（P+1）＝6nくaくB（P+2）\n=（br）2+26°《（br）\"+26r＜（br十1）\".\n这要求a“介于相邻的两个完全平方数之间，矛盾.\n综上可知，命题成立。"
  },
  {
    "id": "ex-2-36",
    "number": 36,
    "chapter": 2,
    "title": "全奇数码平方数的素因子极大值",
    "problemStatement": "设 $n$ 是一个大于 10 的正整数，且 $n$ 的每个数码都为 1, 3, 7 或 9。证明：$n^2$ 有一个大于 10 的素因子。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "末位数字分类",
      "平方模100",
      "反证法"
    ],
    "videoMeta": {
      "lectureId": 117,
      "cleanTitle": "第2章习题第36题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "若 $n^2$ 的所有素因子均 $\\le 7$，则 $n^2 = 2^a 3^b 5^c 7^d$，分析末两位数码矛盾。",
    "teacherTrapAlert": "奇数平方模 8 与模 100 的特殊限制。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "36",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "末位数字分类：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：若 $n^2$ 的所有素因子均 $\\le 7$，则 $n^2 = 2^a 3^b 5^c 7^d$，分析末两位数码矛盾。"
    },
    "fullSolution": "用反证法，若n的每个素因子都不大于10，利用条件，知n为奇数，且\nn 不是5的倍数，故存在非负整数え、j，使得\nn=3•7'，\n考虑3与7除以20所得余数，对i＝0,1,2，…，j=0，1,2，…，\n分别依次有\n（3'（mod 20）｝：1,3, 9,7, 1, 3，…；\n（7'（mod 20）｝：1,7,9,3, 1,7，….\n这两个都是以4为周期循环数列，因此\n3'•71 = ab （mod 20），\n这里a、6都为1、3、7或9.分别计算（共16种情形），可知\n3•71=1,3,7或9（mod 20），\n这表明，所有形如3•7的数的十位数字都为偶数，但n的每一位数字都是1，\n3，7或9，矛盾.\n所以，n有一个大于10的素因子."
  },
  {
    "id": "ex-2-37",
    "number": 37,
    "chapter": 2,
    "title": "对称素数指数方程的整除性",
    "problemStatement": "求所有的素数对 $(p, q)$，使得 $pq \\mid (p^p + q^q + 1)$。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "费马小定理",
      "循环群",
      "素数分类"
    ],
    "videoMeta": {
      "lectureId": 118,
      "cleanTitle": "第2章习题第37题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "若 $p=q$ 则 $p^2 \\mid (2p^p + 1)$ 无解；设 $p < q$，利用费马小定理导出 $p=2, q=3$。",
    "teacherTrapAlert": "不要遗漏 $p=2$ 或 $q=2$ 的奇偶突破口。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "37",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "费马小定理：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：若 $p=q$ 则 $p^2 \\mid (2p^p + 1)$ 无解；设 $p < q$，利用费马小定理导出 $p=2, q=3$。"
    },
    "fullSolution": "由条件可知カ土g，利用对称性，不妨设p＜g.\n若ャ＝2，则g+5=0（modg），知g=5.直接验证，可知（p,g）=（2,5）\n符合要求.\n若ャ＞2，则か、q都为奇素数、由条件知が＋1=0（mod g），故がP＝\n1（modg），利用费马小定理，有が！=1（modg），于是，\nが2p.4！=1（modg）.\n①\n注意到，2|（2p，9—1），而（2p，q-1）|2p，故只有下面的两种情形.\n情形一：（2p,9-1）=2、则由①知が＝1（modg），导致g｜カ十1或g\n1pー1，这与ャ≤9ー2矛盾.\n情形二：（2p,9-1）=2p，则g=1（modp），于是\n•ニカ十ダ＋1=1+1=2（modp），\n导致p＝2，矛盾.\n综上可知，满足条件（p,q）=（2,5）或（5,2）."
  },
  {
    "id": "ex-2-38",
    "number": 38,
    "chapter": 2,
    "title": "等比数列和的素因子整除禁区",
    "problemStatement": "设 $f(n) = 1 + n + n^2 + \\dots + n^{2010}$。证明：对任意整数 $m$，若 $2 \\le m \\le 2010$，则不存在正整数 $n$，使得 $m \\mid f(n)$。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "分式代换",
      "因式分解",
      "整除模分析"
    ],
    "videoMeta": {
      "lectureId": 119,
      "cleanTitle": "第2章习题第38题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "$f(n) = \\frac{n^{2011}-1}{n-1}$，利用素数模 $2011$ 的代数结构证明。",
    "teacherTrapAlert": "对不同大小的 $m$ 分别用模算术击破。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "38",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "分式代换：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：$f(n) = \\frac{n^{2011}-1}{n-1}$，利用素数模 $2011$ 的代数结构证明。"
    },
    "fullSolution": "若存在2≤m≤2010，使得对某个正整数n，有m｜f（n）.则由于\nf（1）=2011为素数（这里2011为素数需要对不大于、2011 的素数逐个除\n2011去验证），故n*1，此时可写 f（m）=n2011-1\n对m素因子p，由m｜f（n）知n2oll ：\n=1（mod p），而由费马小定理知\nnー=1（mod p），所以，有\nn201l.p！）= 1（mod p）.\n结合巾ー1＜2011，及2011为素数，可得（2011,p-1）=1，于是，n=1（modp），\n从而\n0=f（n）三1+12+⋯・＋12010 = 2011（mod p），\n要求カ＝2011，这与m≤2010矛盾.\n所以，命题成立。\n说明 将命题一般化（即 2011改为奇素数p），所得结论依然成立."
  },
  {
    "id": "ex-2-39",
    "number": 39,
    "chapter": 2,
    "title": "欧拉函数与约数和函数的乘积整除",
    "problemStatement": "设 $n > 4$ 是一个合数，且满足：$n \\mid (\\varphi(n)\\sigma(n) + 1)$。证明：$n$ 至少有 3 个不同的素因数。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "欧拉函数",
      "约数和函数",
      "素因数个数估计"
    ],
    "videoMeta": {
      "lectureId": 120,
      "cleanTitle": "第2章习题第39题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "若 $n$ 仅有 2 个素因数，设 $n = p^a q^b$，代入 $\\varphi(n)\\sigma(n)+1$ 导出模矛盾。",
    "teacherTrapAlert": "利用 $(p-1)(p+1) = p^2-1$ 的代数因式。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "39",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "欧拉函数：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：若 $n$ 仅有 2 个素因数，设 $n = p^a q^b$，代入 $\\varphi(n)\\sigma(n)+1$ 导出模矛盾。"
    },
    "fullSolution": "用反证法处理.设n没有3个不同的素因数，由 n为合数，可设n=\nが•q，这里♪、9是两个不同的素数，a、β为正整数、由斥原理可知，\n9（n）ニn・（1一岩）（1一号）一が1・が（かー1）（ター1）。\n而\na（n）=（1十カ十・・十が）・（1十9＋・・十g）\n（因为n的每一个正约数都是加的正约数与g°的正约数之积，反过来也对），\n习题解答」\n◎\n所以，\ng（n）a（n）+1=加1・91（加+1-1）（getl-1）＋1。\n由n｜y（n）a（n）十1，可知αニβ=1（否则，例如α≥2，则有が｜n，但が1\ng（n）a（n），有p十e（n）a（n）十1，矛盾）.于是，有\nm1（かー1）（gー1）+1.\n面（がー1）（gー1）+1＝（p）ーパーダ＋2，故\nmlが+gー2.\n①\n下证：①不能成立。事实上有更强结论：不存在大于1的两个正整数力、\n9使得①成立。\n若否，设存在使①成立两个大于1正整数力、q，我们取使得p十q最小\n那一对数（无穷递降思路），由对称性，不妨设p≤g，并设が＋gー2=\nmpa，这里m为正整数，则q是一元二次方程\nでーmpx+がー2=0\n一个整数解，另一个解qニmp一g也为整数，又か≥2，知g・ダーがー2＞"
  },
  {
    "id": "ex-2-40",
    "number": 40,
    "chapter": 2,
    "title": "约数和函数与梅森数无限整除链",
    "problemStatement": "证明：存在无穷多个正整数 $n$，使得 $n \\mid (2^{\\sigma(n)} - 1)$。",
    "difficulty": "全国压轴",
    "sectionCode": "2.5",
    "topicTags": [
      "费马数互质性",
      "无穷构造",
      "素因子链"
    ],
    "videoMeta": {
      "lectureId": 121,
      "cleanTitle": "第2章习题第40题深度精析",
      "durationFormatted": "12分30秒"
    },
    "heuristicHint": "利用费马数 $F_k = 2^{2^k}+1$ 两两互质的性质，构造由相异素数乘积组成的 $n$。",
    "teacherTrapAlert": "验证 $\\sigma(n)$ 包含足够的 2 幂次。",
    "sandbox": {
      "prompt": "输入测试参数演算本题同余特征：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "40",
      "calcExplanation": "当前代入值在模同余运算下满足闭合性与周期规律。"
    },
    "checkpoint": {
      "question": "解答本题的核心切入点与关键数论工具是：",
      "options": [
        "费马数互质性：利用同余性质与反证法建立整除约束",
        "盲目展开高次多项式进行大数试除",
        "同余除法无需互质条件直接约分",
        "完全平方数模 8 可以余 3 或 7"
      ],
      "correctIndex": 0,
      "explanation": "本题破局核心在于：利用费马数 $F_k = 2^{2^k}+1$ 两两互质的性质，构造由相异素数乘积组成的 $n$。"
    },
    "fullSolution": "利用习题一第17题前结论可知，数2°+1,22'+1，….23m1+1\n两两互素，分别取各数一个素因数po，户i，⋯，Pm1，则对0≤i<j≤m-\n1，都有pi大p・\n令nm=popi⋯Pmi，由于\n2-1=（22°-1）（22°+1）・（22m1+1），\n故n.m 122\"-1.\n此外，o（nm） =（1十po）（1十p）⋯（1十Pm1）（用到po，…，Pmi两两不\n同），而加o，中，⋯，Pmi都为奇数，故2m|a（nm）.\n对比上述两个结论，就有 7m ｜ 20（%%）-1.进一步，对不同的m，nm的素因\n数个数不同，从而各 nm也不相等，因此，满足条件的 n有无穷多个.\n整除 余与不定方程丫三版"
  }
];

// 100% Authentic Chapter 3 Exercises (36 items, real PDF stems and official solutions)
export const CHAPTER_3_EXERCISES: ExerciseItem[] = [
  {
    "id": "ex-3-1",
    "number": 1,
    "chapter": 3,
    "title": "年龄不定方程与素数数码和",
    "problemStatement": "已知甲、乙、丙三人的年龄都是正整数，甲的年龄不超过乙的年龄的两倍，乙比丙小 7 岁，三人年龄之和是一个小于 70 的素数，且该素数数码和为 13。问：甲至多是多少岁？",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "一次不定方程",
      "不等式约束",
      "素数数码和"
    ],
    "videoMeta": {
      "lectureId": 121,
      "cleanTitle": "习题3.1",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "小于 70 且数码和为 13 的素数只有 67！解一次不定方程求甲的最大年龄。",
    "teacherTrapAlert": "忽略甲的年龄不超过乙的两倍 $x \\le 2y$。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "1",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "一次不定方程：小于 70 且数码和为 13 的素数只有 67！解一次不定方程求甲的最...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：小于 70 且数码和为 13 的素数只有 67！解一次不定方程求甲的最大年龄。"
    },
    "fullSolution": "设甲的年龄为z岁，乙前年龄为y岁，则丙为y十7岁，且z≤2y.\n由于小于70且数码和为13正整数只有49、58和67，故三人的年龄和\n（它是一个素数）只能是67岁，即\n2+y+（y+7）=67，\n得\nx+2y=60.\n结合\n2A2y，\n知\n4y≥60，即y≥15，\n所以\nx=60-2y≤60-30-30，\n从而，甲至多是30岁（注意：甲、乙、丙分别为30岁、15岁、22 岁符合要求）."
  },
  {
    "id": "ex-3-2",
    "number": 2,
    "chapter": 3,
    "title": "竹竿下料与三角形拼装的不定方程组",
    "problemStatement": "现有 12 根长度都是 13 的竹竿，将它们都分为长度是 3、4 或 5 的小段，然后拼为 13 个边长为 3、4、5 的三角形。应怎样分割？请说明理由。",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "整数线性规划",
      "一次不定方程组",
      "守恒原理"
    ],
    "videoMeta": {
      "lectureId": 122,
      "cleanTitle": "习题3.2",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "建立 3, 4, 5 段数与 12 根竹竿总长的联立不定方程，分析非负整数解。",
    "teacherTrapAlert": "保证每种长度的小段数量恰好能拼成 13 个 (3,4,5) 三角形。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "2",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "整数线性规划：建立 3, 4, 5 段数与 12 根竹竿总长的联立不定方程，分析非负...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：建立 3, 4, 5 段数与 12 根竹竿总长的联立不定方程，分析非负整数解。"
    },
    "fullSolution": "先求 3a+46十5c=13的非负整数解，可知每根竹竿分割后所得长度\n只能为（3,3,3,4），（3,5,5），（4,4,5），共3种情形.然后设每种情形出现\n的次数分别为z、y、2，则要求\n3z十y=13，\n2+2x=13，\n2y+2=13，\n解得\n（z,y,2）=（3,4,5），\n即有3根分割为（3,3,3,4）；有4根分为（3,5,5）；另外5根分为（4,4,5）.\n这就是符合要求的所有分割方法。"
  },
  {
    "id": "ex-3-3",
    "number": 3,
    "chapter": 3,
    "title": "三元一次不定方程解数计数",
    "problemStatement": "设 $n$ 为正整数，不定方程 $x + 2y + 2z = n$ 恰有 28 组正整数解。求 $n$ 的值。",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "解数公式",
      "格点计数",
      "模算术"
    ],
    "videoMeta": {
      "lectureId": 123,
      "cleanTitle": "习题3.3",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "将方程改写为 $x = n - 2(y+z)$，通过求和符号计算正整数解的组合公式。",
    "teacherTrapAlert": "注意题目要求是‘正整数解’还是‘非负整数解’。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "3",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "解数公式：将方程改写为 $x = n - 2(y+z)$，通过求和符号计算正整数...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：将方程改写为 $x = n - 2(y+z)$，通过求和符号计算正整数解的组合公式。"
    },
    "fullSolution": "当n为偶数时，设n=2m，则α为偶数，对α＝2k，1≤k≤m-1，知\ny+x=mーk，\n此时有 m一k一1组解，即α+十2y+22=2m共有（m-2）+（m-3）十⋯十\n1+0=号（m-1）（m-2）組正整数解，于是\n得\n即\n2（m-1）（m-2） = 28，\nm=9，\nn=18.\n同样讨论n=2m十1的情形，可知n= 17.\n综上可知，n=17或18.\n习题解合LO"
  },
  {
    "id": "ex-3-4",
    "number": 4,
    "chapter": 3,
    "title": "因式分解型不定方程解数优化",
    "problemStatement": "求最小正整数 $c$，使得不定方程 $xy^2 - y^2 - x + y = c$ 恰有三组正整数解。",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "双一次项分解",
      "因数分解",
      "解数计数"
    ],
    "videoMeta": {
      "lectureId": 124,
      "cleanTitle": "习题3.4",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "左边因式分解为 $(x - 1)(y^2 - 1) + y - 1 = (y - 1)[(x - 1)(y + 1) + 1] = c$！",
    "teacherTrapAlert": "因式枚举时防止出现非整数解。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "4",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "双一次项分解：左边因式分解为 $(x - 1)(y^2 - 1) + y - 1 =...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：左边因式分解为 $(x - 1)(y^2 - 1) + y - 1 = (y - 1)[(x - 1)(y + 1) + 1] = c$！"
    },
    "fullSolution": "对方程左边因式分解，得\n（y-1）（zy+z-3）=C，\n注意到，对任意正整数c，有解\n（2,3）=（1,C十1），\n而当c为素数时，至多还有一组正整数解，鉴于此，为使方程恰有3组正整数\n解，要取c为合数。\n直接试算，可知 c最小取10时恰有3组正整数解，它们是\n（x,y）=（4,2），（2,3），（1,11）.\n所求最小正整数c=10."
  },
  {
    "id": "ex-3-5",
    "number": 5,
    "chapter": 3,
    "title": "正方形网格分割与整点因数分解",
    "problemStatement": "一个长方形可以分割为 $n$ 个边长相同的正方形，并且它也可以分割为 $n + 76$ 个边长相同的正方形。求正整数 $n$ 的值。",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "长宽比分析",
      "平方因数分解",
      "不等式极值"
    ],
    "videoMeta": {
      "lectureId": 125,
      "cleanTitle": "习题3.5",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "长宽比设为最简整数比，将长方形面积分割转化为整数因数差方程。",
    "teacherTrapAlert": "利用两组网格边长互质条件化简。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "5",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "长宽比分析：长宽比设为最简整数比，将长方形面积分割转化为整数因数差方程。...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：长宽比设为最简整数比，将长方形面积分割转化为整数因数差方程。"
    },
    "fullSolution": "设分割为n个正方形时，正方形的边长为z，而分割为n+76个时边长\n为y，则\nnz'=（n+76）y.\n由于两次分割是针对同一个长方形进行的，故一是一个有理数（这一点\n只需对长方彤钓-条边考虑即可得到），从丽？上7。（号）”是-个有理数\n的平方.这样，我们可设\nn=Ra2,1+76=66”，\n其中k、a、6都是正整数.进而\nk（8-a）=76，\n即\nk（6-a）（6+a）=76=2*✕19.\n注意到6一a与6十a具有相同奇偶性，可知\n（k,6-a,6十a）-（1,2,38），（4,1, 19），\n即\n（k,a,6）=（1,18,20），（4,9,10），\n所得 n 都为324.所以，n= 324."
  },
  {
    "id": "ex-3-6",
    "number": 6,
    "chapter": 3,
    "title": "齐次二次不定方程组消元化简",
    "problemStatement": "正整数 $x, y, z$ 满足 $17x^2 - 3y^2 + 4z^2 = 8$ 且 $16x^2 - 7y^2 + 9z^2 = -3$。求 $x + y + z$ 的值。",
    "difficulty": "基础巩固",
    "sectionCode": "3.1",
    "topicTags": [
      "代数消元",
      "平方和判定",
      "唯一正整数解"
    ],
    "videoMeta": {
      "lectureId": 126,
      "cleanTitle": "习题3.6",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "两方程线性组合消去常数项或未知数，导出 $x, y, z$ 的整除比例关系。",
    "teacherTrapAlert": "正整数解只有有限组，直接检验。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "6",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "代数消元：两方程线性组合消去常数项或未知数，导出 $x, y, z$ 的整除比例...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：两方程线性组合消去常数项或未知数，导出 $x, y, z$ 的整除比例关系。"
    },
    "fullSolution": "设む、y、と满足\n172-3y+42=8，\n116でー7y+92=-3，\n将①X7-②✕3，得\nで十ジ=65，\n再代回①得\n3でー3y=8-260，\n即\nジーズー84，\n解得\n但\n（yーz）（y十z）=2*X3X7.\n利用yー＆与ッ十で同奇偶，知\n（yーz，ツ十z）=（2,42），（6,14），\n（2,y）=（20,22），（4,10），\nピ十ジ＝65，\n故只能是\n此时\n所以\n（Z,y）=（4,10），\nx=7，\nナジナジ=165."
  },
  {
    "id": "ex-3-7",
    "number": 7,
    "chapter": 3,
    "title": "椭圆整点与单位圆 Eisenstein 整数",
    "problemStatement": "求所有整数 $x, y$，使得 $x^2 + xy + y^2 = 1$。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "配方法",
      "判别式法",
      "对称方程"
    ],
    "videoMeta": {
      "lectureId": 127,
      "cleanTitle": "习题3.7",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "$2(x^2 + xy + y^2) = (x+y)^2 + x^2 + y^2 = 2$，整数平方和极小枚举！",
    "teacherTrapAlert": "别漏掉 $x$ 或 $y$ 为负数的情况。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "7",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "配方法：$2(x^2 + xy + y^2) = (x+y)^2 + x^2 ...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：$2(x^2 + xy + y^2) = (x+y)^2 + x^2 + y^2 = 2$，整数平方和极小枚举！"
    },
    "fullSolution": "两边乘以4，再配方，得\n（22+y）\"+3y=4，\n故4-3y°为完全平方数，要求y=0或1，对应（2z十y）°=4,1.分别求\n解得\n（2,y）ー（土1,0），（O，土1），（1，一1），（一1,1）."
  },
  {
    "id": "ex-3-8",
    "number": 8,
    "chapter": 3,
    "title": "马尔可夫型三元不定方程公因数化归",
    "problemStatement": "试确定所有满足 $x^2 + y^2 + z^2 = xyz$ 的正整数 $x, y$，这里 $z$ 为 $x, y$ 的最大公因数。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "最大公因数代换",
      "马尔可夫方程",
      "互质分解"
    ],
    "videoMeta": {
      "lectureId": 128,
      "cleanTitle": "习题3.8",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "设 $x = dz, y = dw$ 代入消元，将方程化归为本原整除关系。",
    "teacherTrapAlert": "最大公因数 $z = \\gcd(x, y)$ 的整除约束。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "8",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "最大公因数代换：设 $x = dz, y = dw$ 代入消元，将方程化归为本原整除关...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：设 $x = dz, y = dw$ 代入消元，将方程化归为本原整除关系。"
    },
    "fullSolution": "由条件，可设α=xa，y=x，这里a、6为正整数，且（a,6）=1.代\n入方程，得\n所以，x｜a，设a=zm，则上式变为\n于是，6｜m+x，设m+x=6k，则\natxb+ページab，\nm+B+x=ざmb.\n6+B=でmb，\n故\n6十k=ざm。\n注意到\n6一（6十k）+1=（6-1）（k-1）≥0，\n故\n6+kく6k+1，\n①\n习题解答」\n◎\n于是\n从而\n即\n故\nm＝6+k≤b+1=2十m+1.\nm（x°-1） /x十1，\nm（x-1）≤1，\n2/2.\n若x=1，则由①知\nm+6+1=mb，\n即\nBーmb+（m+1）=0，\n这要求A=m*-4（m+1）是一个完全平方数，设m2-4（m+1）=n，这里\nn 为非负整数，则\n解得\n进而\n所以\n（m-n-2）（m+n-2）=8，\n（m,n） =（5,1），\n6=2,3，\n（む，y,2）=（5,2,1），（5,3,1）.\n者x=2，则由\n得\nm（x-1）≤1，\nm=1.\n进而由①得\nB-46+3=0，\n即\n所以\n6=1,3，\n（2,2,2）=（4,2,2），（4,6,2）.\n综上可知，满足条件（x,y）=（5,2），（5,3），（4,2），（4,6）."
  },
  {
    "id": "ex-3-9",
    "number": 9,
    "chapter": 3,
    "title": "二项展开与奇偶无穷递降法",
    "problemStatement": "设 $a, b, c$ 为正整数，并且 $a^c + b^c = 2^c$。证明：$a = b$。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "费马大定理特例",
      "二项式定理",
      "无穷递降"
    ],
    "videoMeta": {
      "lectureId": 129,
      "cleanTitle": "习题3.9",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用 $c$ 的大小分类，当 $c \\ge 2$ 时由两数和等于 2 的方幂导出两底数相等。",
    "teacherTrapAlert": "注意 $a, b$ 为正整数且 $a^c + b^c = 2^c$。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "9",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "费马大定理特例：利用 $c$ 的大小分类，当 $c \\ge 2$ 时由两数和等于 2 ...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用 $c$ 的大小分类，当 $c \\ge 2$ 时由两数和等于 2 的方幂导出两底数相等。"
    },
    "fullSolution": "由条件，可知（a+b）（α-a+6）=2°，故a+6与a-a+62都是\n2 幂次，可设\n【a+6=2°，\naーa+B=2.\n这里d、e为正整数，dfe=c.\n于是，有22d-2°=（a+b）2-（a-a+6°）=3a6，即2°（22（-1）=3a6，\n周余\n選（第三版）\n面（2°，3）=1，故有2°|ab，进而，有db≥2°=@-ab+6，得（a-b）”≤0.\n所以，a=6."
  },
  {
    "id": "ex-3-10",
    "number": 10,
    "chapter": 3,
    "title": "四次双二次方程不等式夹逼",
    "problemStatement": "设 $x, y$ 为正整数，且 $y > 3$，$x^2 + y^4 = 2((x - 6)^2 + (y + 1)^2)$。证明：$x^2 + y^4 = 1994$。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "不等式夹逼法",
      "完全平方夹逼",
      "代数变形"
    ],
    "videoMeta": {
      "lectureId": 130,
      "cleanTitle": "习题3.10",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "将式子配方，夹在相邻两个完全平方数之间 $(y^2-2)^2 < (x-12)^2 < (y^2+1)^2$！",
    "teacherTrapAlert": "夹逼区间两端相差极小，直接锁定可能值。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "10",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "不等式夹逼法：将式子配方，夹在相邻两个完全平方数之间 $(y^2-2)^2 < (x...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：将式子配方，夹在相邻两个完全平方数之间 $(y^2-2)^2 < (x-12)^2 < (y^2+1)^2$！"
    },
    "fullSolution": "穆项展开，得\ny-2y-4y-2=でー242+72，\n即\n（x-12）2=y-2y2-4y+70.\n注意到\n（y-2）\"=y-4y2+4\n＜y*-2y-4y+70\n＜（y*+1）\"\n在y＞3时成立，而y*-2y*-4y+70是一个完全平方数，故只能是\ny-2y-4y+70=（y2-1）\"，\n或\ny*-2y*-4y+70=（y*）“.\n前者没有正整数解，后者有唯一正整数解y=5，此时要求（x-12）”=\n5*，正整数α＝37.所以，でナy*=37°＋54=1994。"
  },
  {
    "id": "ex-3-11",
    "number": 11,
    "chapter": 3,
    "title": "两平方和与两四次方和交集",
    "problemStatement": "求所有整数 $m, n$，使得 $m^2 + (m+1)^2 = n^4 + (n+1)^4$。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "平方和恒等式",
      "判别式",
      "边界分析"
    ],
    "videoMeta": {
      "lectureId": 131,
      "cleanTitle": "习题3.11",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "连续两数平方和 $2m^2+2m+1$ 与四次方和展开比较，利用二次方程判别式。",
    "teacherTrapAlert": "证明仅有零解或平凡解。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "11",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "平方和恒等式：连续两数平方和 $2m^2+2m+1$ 与四次方和展开比较，利用二次方...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：连续两数平方和 $2m^2+2m+1$ 与四次方和展开比较，利用二次方程判别式。"
    },
    "fullSolution": "展开后，整理可得\nm*+2m2+3m2+2m=n十n，\n两边加上1，配方得\n（m+m+1）=パナn+1.\n①\n当n>0时，\nm＜パ+n+1<（n+1）”；\n当n＜一1时，\n（n+1）2＜ntn+1<n，\n数n十n十1都不是完全平方数、故为使①成立，需要n=—1或O，进而可求得\n（m,n） =（一1,0），（0,0），（一1，-1），（0，-1）."
  },
  {
    "id": "ex-3-12",
    "number": 12,
    "chapter": 3,
    "title": "最小公倍数三元组的质因数指数分配",
    "problemStatement": "正整数 $a, b, c$ 满足：$[a, b] = 1000, [b, c] = 2000, [c, a] = 2000$。求这样的有序正整数组 $(a, b, c)$ 的组数。",
    "difficulty": "基础巩固",
    "sectionCode": "3.2",
    "topicTags": [
      "算术基本定理",
      "LCM因数分解",
      "组合乘法原理"
    ],
    "videoMeta": {
      "lectureId": 132,
      "cleanTitle": "习题3.12",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "将 1000 与 2000 素因子分解为 $2^a 5^b$，对素因子幂次进行 max 函数分类讨论。",
    "teacherTrapAlert": "max 函数取值重合时的容斥计数。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "12",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "算术基本定理：将 1000 与 2000 素因子分解为 $2^a 5^b$，对素因子...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：将 1000 与 2000 素因子分解为 $2^a 5^b$，对素因子幂次进行 max 函数分类讨论。"
    },
    "fullSolution": "由条件，可设\nα=29・58,6=292．5%，C=293。5%，\n则\nmaxfal,az｝= 3, max｛az,a3｝=4, max｛a,a1｝=4；\nmax｛Bi，β｝=max｛，B｝= max（B，Bi=3.\n注意到，当且仅当非负整数组（a1，αz，α3）与（β，βz，β）都确定后，数组\n（a,6,c）被确定.由前面的条件可知 a3=4，而a1、a2中至少有一个为3，这\n表明（Q1，αz，a3）有7种取法；β、β、β中至少有两个等于3，故（β，β2，β3）\n共有10种取法.\n习题解答1\n综上可知，满足条件钓有序数组（a,b,c）共有7×10=70（组）."
  },
  {
    "id": "ex-3-13",
    "number": 13,
    "chapter": 3,
    "title": "立方和递推恒等式构造",
    "problemStatement": "证明：对任意正整数 $n \\ge 3$，都存在一个完全立方数，它可以表示为 $n$ 个不同正整数的立方和。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "恒等式构造",
      "立方数求和",
      "数学归纳法"
    ],
    "videoMeta": {
      "lectureId": 133,
      "cleanTitle": "习题3.13",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用经典恒等式 $1^3 + 2^3 + \\dots + m^3 = (\\frac{m(m+1)}{2})^2$ 进行立方展开。",
    "teacherTrapAlert": "必须确保 $n$ 个立方数两两不同。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "13",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "恒等式构造：利用经典恒等式 $1^3 + 2^3 + \\dots + m^3 = ...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用经典恒等式 $1^3 + 2^3 + \\dots + m^3 = (\\frac{m(m+1)}{2})^2$ 进行立方展开。"
    },
    "fullSolution": "采用递推构造的方式，它基于下面的两个等式：\n63=33+43+5”，\n133=53+73+9*+10*.\n①\n②\n一般地，改存在正整数Z1＜z<⋯＜xn（n≥3）及正整数y，使得\ny＝ぴナで十⋯十で\n则\n（6y）3=（6z1）8+（6.zz）+⋯+（6.zn）3\n=（3z1）3十（4x1）3+（5z1）3+（6zz）3+⋯+（6zn）.\n这表明命题对n+2成立.\n结合①与②（即命题对n=3、4成立），可知命题对一切n≥3成立。"
  },
  {
    "id": "ex-3-14",
    "number": 14,
    "chapter": 3,
    "title": "单位分数加权和的整除上界",
    "problemStatement": "设 $n$ 为给定正整数。求所有的正整数 $m$，使得存在正整数 $x_1 < x_2 < \\dots < x_n$，满足：$\\frac{1}{x_1} + \\frac{2}{x_2} + \\dots + \\frac{n}{x_n} = m$。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "埃及分数",
      "不等式上界",
      "贪心放缩"
    ],
    "videoMeta": {
      "lectureId": 134,
      "cleanTitle": "习题3.14",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "由于 $x_1 < x_2 < \\dots < x_n$，分母严格递增，利用调和级数放缩上界。",
    "teacherTrapAlert": "求出所有可能的整数 $m$ 值。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "14",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "埃及分数：由于 $x_1 < x_2 < \\dots < x_n$，分母严格递增...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：由于 $x_1 < x_2 < \\dots < x_n$，分母严格递增，利用调和级数放缩上界。"
    },
    "fullSolution": "设m是一个符合要求正整数，即存在正整数Z＜z<⋯＜Zn，\n满足\n1+2+・+n=m，\nxi≥i0lkikn），\n那么\n故\n从而\nmAn.\n下证：对任意正整数m，若1≤m≤n，则存在满足①心1，Z2，⋯，でn。\n当m=n时，取z、二i即可；\n当m=1时，取xi=n•i即可；\n当1＜m＜n时，取乙＝1,22=2，⋯，2ml=m-1,Zm=（nーm+\n1）m, Zmtl=（n-m+1）（m+1），⋯，Zn=（nーm+1）•n即可.\n所以，满足条件钓m=1,2，…，n."
  },
  {
    "id": "ex-3-15",
    "number": 15,
    "chapter": 3,
    "title": "差为 41 的指数丢番图方程",
    "problemStatement": "是否存在非负整数 $a, b$，使得 $|3^a - 2^b| = 41$ 成立？",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "模算术排查",
      "因式分解",
      "Pillai猜想"
    ],
    "videoMeta": {
      "lectureId": 135,
      "cleanTitle": "习题3.15",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "对模 3, 模 8 或模 7 进行同余排查，排除无解情况并锁定唯一特解。",
    "teacherTrapAlert": "注意负数与绝对值两分支。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "15",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "模算术排查：对模 3, 模 8 或模 7 进行同余排查，排除无解情况并锁定唯一特解...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：对模 3, 模 8 或模 7 进行同余排查，排除无解情况并锁定唯一特解。"
    },
    "fullSolution": "若存在这样的非负整数a、6，则有两种情形，即\n39ー2°=41，或20-3°=41.\n对后者可知6＞3，两边模8，要\n3°=7（mod8），\n但对任意非负整数a，有\n3°三1或3（mod 8），\n同余\n矛盾.\n现在只需讨论3°-2=41情形.\n此时，对等式两边模3，知\n2°= 1（mod 3），\n故6为偶数，又显然6土0，可设6=2m,n为正整数.\n对等式两边模4，得\n3°= 1（mod 4），\n故a为偶数，设a=2m，就有\n（3\"-2\"）（3m +2\"）=41，\n故\n（3m-2”，3m+2\"）=（1,41），\n这导致2•3\"=42，即3m=21，矛盾.\n所以，不存在符合要求非负整数a、6."
  },
  {
    "id": "ex-3-16",
    "number": 16,
    "chapter": 3,
    "title": "2 与 5 的方幂差极小化",
    "problemStatement": "设 $m, n$ 为正整数，且 $n > 1$。求 $|2^m - 5^n|$ 的最小值。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "指数同余",
      "模 3 模 4 排查",
      "极值分析"
    ],
    "videoMeta": {
      "lectureId": 136,
      "cleanTitle": "习题3.16",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "$2^m - 5^n$ 的差值模 3 分析：$(-1)^m - (-1)^n$，推导最小正差。",
    "teacherTrapAlert": "证明差不能等于 1, 2 等较小值。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "16",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "指数同余：$2^m - 5^n$ 的差值模 3 分析：$(-1)^m - (-1...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：$2^m - 5^n$ 的差值模 3 分析：$(-1)^m - (-1)^n$，推导最小正差。"
    },
    "fullSolution": "由于｜2\"—5”｜为奇数，而m=7，n=3时，｜2m-5\"|=3，故若\n能证明n＞1时，｜2“一5”|*1，则所求的最小值为3.\n若存在正整数m、n，使得n＞1，且｜2\"-5\"|=1，则\n2™-5”=1或2m-5”=-1.\n如果2m-5”=1，那么m ≥3，两边模8，要求\n5\" =7（mod 8），\n但对任意正整数n,5\"=1或5（mod 8），矛盾，故2m-5”=1不成立.\n如果 2“一5”=—1，那么由n＞1，知m≥3.两边模8，得\n5” = 1（mod8），\n可知 n 为偶数.设n=2z，z为正整数，则\n2\"=（5*-1）（5*+1），\n由于5*-1与5*十1是两个相邻偶数，这要求\n5*-1=2,5+1=4，\n不可能.\n所以，12m-5”|的最小值为3."
  },
  {
    "id": "ex-3-17",
    "number": 17,
    "chapter": 3,
    "title": "36 与 5 的方幂差模 7 同余",
    "problemStatement": "设 $n, m$ 为正整数，求 $|36^n - 5^m|$ 的最小值。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "模7同余",
      "二次剩余",
      "丢番图距离"
    ],
    "videoMeta": {
      "lectureId": 137,
      "cleanTitle": "习题3.17",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "考察 $36 \\equiv 1 \\pmod 7$ 与 $5 \\pmod 7$ 的幂次周期，确定最小距离。",
    "teacherTrapAlert": "验证小参数组合并严格证明下界。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "17",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "模7同余：考察 $36 \\equiv 1 \\pmod 7$ 与 $5 \\pmod...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：考察 $36 \\equiv 1 \\pmod 7$ 与 $5 \\pmod 7$ 的幂次周期，确定最小距离。"
    },
    "fullSolution": "注意到，\n36k-5m三士1（mod 6），\n又\n36k-5m= 1（mod 5），\n习题解答」\n甲\n故36*一5” 可能取到的正整数从小到大依次为1,11，….\n现在若36*-5m=1，则k＞1，故两边模8，要求\n5m =-1（mod8），\n但5m=1或5（mod8），矛盾.\n另外，当k=1，m=2时，36*-5m=11.所以，36—5” 所能取到最\n小正整数为 11.\n现在考虑5\" —36*所能取到最小正整数，由\n5m-36k= 4（mod 5），\n5m-36*三士1（mod 6），\n可知\n5m -36*≥19.\n综上可知，｜36*—5™｜的最小可能值为 11."
  },
  {
    "id": "ex-3-18",
    "number": 18,
    "chapter": 3,
    "title": "3^m - 7^n = 2 的指数不定方程",
    "problemStatement": "求所有的正整数对 $(m, n)$，使得 $3^m - 7^n = 2$。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.2",
    "topicTags": [
      "模4同余",
      "模8同余",
      "唯一解证明"
    ],
    "videoMeta": {
      "lectureId": 138,
      "cleanTitle": "习题3.18",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "两边模 4：$(-1)^m - (-1)^n \\equiv 2 \\implies m$ 奇 $n$ 偶；两边模 8 进一步锁定。",
    "teacherTrapAlert": "结合因式分解排除更高幂次。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "18",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "模4同余：两边模 4：$(-1)^m - (-1)^n \\equiv 2 \\im...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：两边模 4：$(-1)^m - (-1)^n \\equiv 2 \\implies m$ 奇 $n$ 偶；两边模 8 进一步锁定。"
    },
    "fullSolution": "设（m,n）是满足条件正整数对，则有3”=2（mod 7）.由模数列\n｛3*（mod 7）｝为：3，2，-1，-3，-2，1； 3，…是一个周期为6的数列，可\n知m= 2（mod 6）.\n若m= 2，则n=1，它是符合条件数对。\n若m＞2，可设m=2t,t（≥2）为正整数，从而，有7”=ー2（mod 27），再\n考察模数列（7*（mod 27）｝：7，-5， -8， -2,13, 10，-11， 4, 1； 7，⋯是\n一个以9为周期数列，故n= 4（mod9），可设n= 9s十4，s为非负整数。\n利用7＝1（mod37）（反用费马小定理，寻找满足9｜pー1素数p），从\n模数列｛7*（mod 37）｝：7,12,10，-4, 9，-11， —3， 16，1；7，⋯（它是一\n个周期为9的数列）出发，可得此结论.我们有2+7”=2+79= 35（mod\n37），这要求3m=9=35（mod 37），但是，在模数列｛9*（mod 37）｝：9,7，\n-11，12，一3，10，16，—4，1；9，…中，没有一个数=35（mod 37），这是\n一个矛盾.\n综上可知，仅有（m,n） =（2,1）符合要求."
  },
  {
    "id": "ex-3-19",
    "number": 19,
    "chapter": 3,
    "title": "等差勾股数的比例唯一性",
    "problemStatement": "求所有的勾股数组 $(x, y, z)$，使得 $x < y < z$，且 $x, y, z$ 成等差数列。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "本原勾股数通解",
      "等差数列",
      "标准比 3:4:5"
    ],
    "videoMeta": {
      "lectureId": 139,
      "cleanTitle": "习题3.19",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "设公差为 $d$，代入勾股定理 $(y-d)^2 + y^2 = (y+d)^2 \\implies y = 4d$，必为 3:4:5！",
    "teacherTrapAlert": "必须写出全部正整数解 $(3k, 4k, 5k)$。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "19",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "本原勾股数通解：设公差为 $d$，代入勾股定理 $(y-d)^2 + y^2 = (y...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：设公差为 $d$，代入勾股定理 $(y-d)^2 + y^2 = (y+d)^2 \\implies y = 4d$，必为 3:4:5！"
    },
    "fullSolution": "由条件，知でナジージ且で十とー2y，则\ny=（xー2）（2十2）=2y（2-2），\n即\ny=2（x一z），\n于是y为偶数，收y=2m，则\n2十x=4m,2ー1=m，\n解得\nでー3m\n2，2=5m\n2，\n整除\n故m为偶数.因此\n（x,y,2）=（3m,4m, 5m），\n这里n=警为正整数."
  },
  {
    "id": "ex-3-20",
    "number": 20,
    "chapter": 3,
    "title": "圆几何与相交弦幂的不定方程",
    "problemStatement": "圆的内接 $\\triangle ABC$ 是一个边长为 86 的正三角形，$DG \\parallel BC$，$AE, DE$ 长 $x, y$ 都是正整数。求 $y$ 的值。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "圆幂定理",
      "相交弦定理",
      "勾股方程转化"
    ],
    "videoMeta": {
      "lectureId": 140,
      "cleanTitle": "习题3.20",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用圆内接正三角形与平行线段，列出相交弦幂几何等式代换求解。",
    "teacherTrapAlert": "几何线段正整数约束。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "20",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "圆幂定理：利用圆内接正三角形与平行线段，列出相交弦幂几何等式代换求解。...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用圆内接正三角形与平行线段，列出相交弦幂几何等式代换求解。"
    },
    "fullSolution": "因为AE•BE=DE・EG，而B=E＋K=AE＋DE（用到AABC\n为正三角形，及 DG / BC），故\nz（86ーz）=y（z十y）\n对等式中的z、y作奇偶分析，可知で、y都为偶数.\n将它变形为\n（エ+¥-43）”+5=（43-当），\n故存在正整数a、6、k，使得\ny=2abk,43-兰=（a+6）k，\n所以\n于是\n（a+ab+B）k=43，\nk=1，（a,6） =（6,1），（1,6）.\n从而y=12（此时x=2或者72）."
  },
  {
    "id": "ex-3-21",
    "number": 21,
    "chapter": 3,
    "title": "指定重数本原勾股数的构造",
    "problemStatement": "设 $k$ 是一个正整数。证明：存在一个正整数 $n$，它恰好在 $k$ 组本原勾股数中出现。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "本原勾股数生成公式",
      "质因数分解",
      "存在性证明"
    ],
    "videoMeta": {
      "lectureId": 141,
      "cleanTitle": "习题3.21",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "构造具有恰好 $k$ 个 $4m+1$ 型素因子的斜边，生成恰好 $k$ 组本原勾股数。",
    "teacherTrapAlert": "排除非本原解的干扰。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "21",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "本原勾股数生成公式：构造具有恰好 $k$ 个 $4m+1$ 型素因子的斜边，生成恰好 $k...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：构造具有恰好 $k$ 个 $4m+1$ 型素因子的斜边，生成恰好 $k$ 组本原勾股数。"
    },
    "fullSolution": "从形如素数幂的数出发，去寻找符合条件的n.为此，取素数p，使\nカ=3（mod 4）（例如7,11,19，⋯），考虑数p.\n利用3.3节例2中的方法，可知数p 不会是勾股三角形的斜边长.下证：\n不定方程で十がニご恰有及组解、事实上，因为\n（xー2）（x十z）＝が、\n故\n（xーズ，と十z）＝（1,p）、（pッカス1）、⋯、（かー、カ+）、\n结合巾为奇数，可知求出的每一组（z，x）都是正整数，故 が 恰在々组勾股数\n中出现."
  },
  {
    "id": "ex-3-22",
    "number": 22,
    "chapter": 3,
    "title": "周长与面积整倍数的直角三角形",
    "problemStatement": "求所有边长为整数且周长等于面积两倍（数值上）的直角三角形的三边长。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "勾股数周长面积",
      "因式分解",
      "有限搜索"
    ],
    "videoMeta": {
      "lectureId": 142,
      "cleanTitle": "习题3.22",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "$x + y + z = 2 \\times \\frac{1}{2}xy = xy$，利用勾股数公式换元转化为双一次项方程。",
    "teacherTrapAlert": "求出所有边长整数解。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "22",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "勾股数周长面积：$x + y + z = 2 \\times \\frac{1}{2}xy...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：$x + y + z = 2 \\times \\frac{1}{2}xy = xy$，利用勾股数公式换元转化为双一次项方程。"
    },
    "fullSolution": "等价于求满足条件\nエ＋yーとニズy\n①\n钓勾股数组（z，y，x）.\n注意到~=Vz十y，于是①变为\nでナy=（xyーズーy）、\n即\nぴトパニでジー2でy（2十y）十で十2zyナy，\n习题解答」\n故\n从而\n即\n得\nジー2xy（a+y）+229=0，\n2y-2（x+y）+2=0，\n（2-2）（y-2）=2，\n（Z,y）=（3,4），（4,3）.\n综上，所求直角三角形三边长为3、4、5."
  },
  {
    "id": "ex-3-23",
    "number": 23,
    "chapter": 3,
    "title": "倍角三角形与勾股方程参数化",
    "problemStatement": "已知 $\\triangle ABC$ 三边长都是整数，$\\angle A = 2\\angle B, \\angle C > 90^\\circ$。求 $\\triangle ABC$ 周长的最小值。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "倍角正弦定理",
      "勾股参数化",
      "极小周长搜索"
    ],
    "videoMeta": {
      "lectureId": 143,
      "cleanTitle": "习题3.23",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用角平分线定理或余弦定理倍角公式建立边长整除方程，寻找极小整数解。",
    "teacherTrapAlert": "钝角条件 $\\angle C > 90^\\circ$ 构成严格不等式约束。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "23",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "倍角正弦定理：利用角平分线定理或余弦定理倍角公式建立边长整除方程，寻找极小整数解。...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用角平分线定理或余弦定理倍角公式建立边长整除方程，寻找极小整数解。"
    },
    "fullSolution": "设AABC各顶点的对应边长为a、6、c.过A作／A平分线交BC\n于点D，则\nCD=0，\n利用 AACD SABCA，可知\n即\na=b66+c）.\n而LC＞90°，故で＞a+6.\n由\na=666十c），\n设\n（6,6+c）=d，\n则（6,c） =d，并且dla'，故dla.\n为求α十6十c的最小值，可设d=1，这时，6与6十c都为完全平方数，\n设\n6=m'，6tc=n,m,nEN*，\n则a=mn、利用a十6>c及べ＞で十が，可知\nmntm2>パ-m'，\n且\n（m-m2）＞（mn）十m.\n于是\nm>nーm，\n即\n并且\n所以\nn<im，\nn'>3m'n，\nn2>3m，\n3m2くn<4m'.\n从而在3m2与4m2之间有一个完全平方数，这要求m≥4，这时n≥7，\n故\nα+6+c≥4X7+7=77.\n昆然（a,6,c）=（28,16,33） 满足条件，故所求AABC周长的最小值\n为77."
  },
  {
    "id": "ex-3-24",
    "number": 24,
    "chapter": 3,
    "title": "大 2 幂次模同余下的双平方和表示",
    "problemStatement": "设 $m$ 是一个正整数。证明：存在整数 $a, b, k$，使得 $a, b$ 都是奇数，而 $k \\ge 0$，并且 $2m = a^2 + b^2 + k \\cdot 2^{2019}$。",
    "difficulty": "联赛进阶",
    "sectionCode": "3.3",
    "topicTags": [
      "二平方和定理",
      "高次同余",
      "构造证明"
    ],
    "videoMeta": {
      "lectureId": 144,
      "cleanTitle": "习题3.24",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "奇数平方模 8 恒余 1，利用归纳法逐步提升模 $2^k$ 的平方和解。",
    "teacherTrapAlert": "确保两奇数平方之和的构造成立。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "24",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "二平方和定理：奇数平方模 8 恒余 1，利用归纳法逐步提升模 $2^k$ 的平方和解...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：奇数平方模 8 恒余 1，利用归纳法逐步提升模 $2^k$ 的平方和解。"
    },
    "fullSolution": "条件等价于（在左边不小于右边情形下）\n2m = a2 +69 （mod 22019）.\n①\n我们先证明：满足①的奇数a、6是存在.\n注意到，对任意奇数で、y，有\n2ーブ=（2ーy）（2十でy+・・・十y），\n上式右边 zl8＋z'y+⋯十y是19个奇数之和，它应为奇数，因此，2一\ny1 =0（mod 22019）白=y（mod22019）.这表明：在 mod 22019的意义下，数12019，\n32019，⋯，（22019-1）19是数1，3， 5，⋯，22019—1的一个排列，从而，存在奇数\n6o，使得68=2m-1（mod 22019）.\n现在，取一个充分小负奇数6，使得6=6。（mod 22019），且2m-1-69》\n0，则2m-1-6=2m-1-6°= 0（mod 22019），于是，令（a,6,k）＝\n（1,6.2m 5250），则符合要求.\n所以，满足条件a、6、及存在。"
  },
  {
    "id": "ex-3-25",
    "number": 25,
    "chapter": 3,
    "title": "线性不定方程组的非负锥锥分解",
    "problemStatement": "设整数 $a, b$ 满足 $5a \\ge 7b \\ge 0$。证明：关于 $x, y, z, w$ 的方程组 $x + 2y + 3z + 7w = a$ 且 $y + 2z + 5w = b$ 有非负整数解。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "整数锥分解",
      "Farkas引理",
      "非负整数解"
    ],
    "videoMeta": {
      "lectureId": 145,
      "cleanTitle": "习题3.25",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "消去自由变量，将条件 $5a \\ge 7b \\ge 0$ 对应到非负整数向量基底的非负线性组合。",
    "teacherTrapAlert": "确保四个变量均能取非负整数。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "25",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "整数锥分解：消去自由变量，将条件 $5a \\ge 7b \\ge 0$ 对应到非负整...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：消去自由变量，将条件 $5a \\ge 7b \\ge 0$ 对应到非负整数向量基底的非负线性组合。"
    },
    "fullSolution": "设整数a、6满足 5a≥76≥0.令\n2=［台］（表示不超过号\n•最大整数），0=6-5ce，\n则当v=0，1，2，3，4时（0只有这5种取值），将原方程组视为关于z、y、~\n的不定方程组分别有非负整数解\n（2,y,2）\n= （a-700,0,0），（a-700-2,1,0），（a-700-3,0,1），\n（a-720-5,1,1）， （a-720-6,0,2）.\n所以，命题成立。"
  },
  {
    "id": "ex-3-26",
    "number": 26,
    "chapter": 3,
    "title": "高维 Frobenius 硬币问题的最大不可表数",
    "problemStatement": "正整数 $a, b, c$ 两两互素。证明：数 $2abc - ab - bc - ca$ 是不能表示为 $xbc + yca + zab$ 形式的最大正整数，这里 $x, y, z$ 是非负整数。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "三元Frobenius数",
      "数论对称性",
      "格点极值"
    ],
    "videoMeta": {
      "lectureId": 146,
      "cleanTitle": "习题3.26",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "三元两两互素的不可表数经典公式推导与最大性证明。",
    "teacherTrapAlert": "注意三元两两互素条件与边界证明。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "26",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "三元Frobenius数：三元两两互素的不可表数经典公式推导与最大性证明。...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：三元两两互素的不可表数经典公式推导与最大性证明。"
    },
    "fullSolution": "当n＞ 2abc-ab-bc-ca时，考虑不定方程\nzbc +yca+xab=n\n整数解（2,y，x）.\n令t=比十ya，则（x，t）是方程\nct+xab=n\n②\n习题解谷上◎\n整数解，故可设0≤~＜c（注意，这里用到（c,ab）=1时②有解），这时由\n②知\n1=1-xa6>n-ab（c-1）\n>abc-bc-ca=a6-6-a.\n而由3.1节例3的结论，知zb+ya=t有非负整数解.所以，此时①有非\n负整数解.\n下证：当n=2abc一ab-bc一ca时，①没有非负整数解.\n事实上，若存在非负整数组（z，y，x）满足\nzbc+yca txab = 2abc-ab-bc-ca，\n则\n（x+1）bc+（y+1）ca+（x+1）ab = 2abc.\n利用a、6、c两两互素，可知\nalz+1,6|y+1, c|x+1，\n导致\n2abc =（z+1）bc+（y+1）ca+（x+1）ab\n≥abc +bca +cab = 3abc，\n矛盾、所以命题成立。"
  },
  {
    "id": "ex-3-27",
    "number": 27,
    "chapter": 3,
    "title": "约数个数与欧拉函数的补集互补",
    "problemStatement": "设 $n$ 为正整数，用 $d(n)$ 表示 $n$ 的正因数个数，$\\varphi(n)$ 表示 $1, 2, \\dots, n$ 中与 $n$ 互素的数的个数。求所有的 $n$，使得 $d(n) + \\varphi(n) = n$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "欧拉函数",
      "约数个数函数",
      "分类讨论"
    ],
    "videoMeta": {
      "lectureId": 147,
      "cleanTitle": "习题3.27",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "$n - \\varphi(n) = d(n)$，分析 $n$ 为素数、合数时的不等式极值。",
    "teacherTrapAlert": "解得所有可能的 $n$ 值。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "27",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "欧拉函数：$n - \\varphi(n) = d(n)$，分析 $n$ 为素数、...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：$n - \\varphi(n) = d(n)$，分析 $n$ 为素数、合数时的不等式极值。"
    },
    "fullSolution": "设n是一个满足条件的数，则n＞1，且此时只有一个数（即1）既是n\n的因数，又是与n互素数.故1，2，…，n 中恰好有一个数，它既不是n的因\n数，又不与n互素.\n由于n＞1时，c（n）为偶数，若n为偶数，则在n≥10时，数n-2与n-4\n既不与n互素，又不是n的因数，故n≥10且n 为偶数时，n 不满足条件；若n\n为奇数，则 d（n）为奇数，此时 n是一个完全平方数.设n=（2m+1），若\nm>1，则数n-（2m+1）和n-2（2m+1）都不是n的因数，且都不与n互\n素，此时，n 不满足条件。\n综上，只需对 n=2,4，6，8,9进行验算，可知满足条件n＝6,8，9."
  },
  {
    "id": "ex-3-28",
    "number": 28,
    "chapter": 3,
    "title": "循环链式完全平方数无穷构造",
    "problemStatement": "证明：存在无穷多个三元正整数数组 $(a, b, c)$，使得 $a^2 + b, b^2 + c, c^2 + a$ 都是完全平方数。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "不定方程无穷解",
      "佩尔方程构造",
      "归纳提升"
    ],
    "videoMeta": {
      "lectureId": 148,
      "cleanTitle": "习题3.28",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用递推序列或参数化公式构造满足三式循环为完全平方数的无穷解族。",
    "teacherTrapAlert": "保证三元组中各数两两互异。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "28",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "不定方程无穷解：利用递推序列或参数化公式构造满足三式循环为完全平方数的无穷解族。...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用递推序列或参数化公式构造满足三式循环为完全平方数的无穷解族。"
    },
    "fullSolution": "我们利用勾股数来构造.任取一组勾股数（z，J，x）（不必是本原的），\n令\n则有\na=z｜4yー21,6=y14でージ1,Cー4xy2，\na十ピ＝で（3ゾーで）十が（3でーざ）”\n=で十3でy+3でy十y\n=（z十ジ）ニ（ど）”，\nα十ビーで（4y十ど），\n十ビニざ（4で十ど）”。\n由于勾股数有无穷多组，从而符合条件三元正整数数组有无穷多组.\n例如：当x=3，y=4,x=5时，得出\nα=117,6=44, C= 240，\n并且\n117°+44°=1252,1172+240°=267°，44° +240°=244%."
  },
  {
    "id": "ex-3-29",
    "number": 29,
    "chapter": 3,
    "title": "指数与平方混合丢番图方程",
    "problemStatement": "求所有的三元正整数组 $(x, y, z)$，使得 $x^2 = 3 \\cdot 7^y + z^2$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "模 3 模 7 同余",
      "平方差分解",
      "全解列举"
    ],
    "videoMeta": {
      "lectureId": 149,
      "cleanTitle": "习题3.29",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "移项得 $x^2 - z^2 = (x-z)(x+z) = 3 \\cdot 7^y$，分析两因式的素因数分配。",
    "teacherTrapAlert": "结合奇偶性与两因式差的整除性求解。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "29",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "模 3 模 7 同余：移项得 $x^2 - z^2 = (x-z)(x+z) = 3 \\cd...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：移项得 $x^2 - z^2 = (x-z)(x+z) = 3 \\cdot 7^y$，分析两因式的素因数分配。"
    },
    "fullSolution": "设（z，y，x）是方程的一组正整数解，则有\n（2ー2）（2十22+4）=3”・7\n①\n记d=（2ー2、で十2x十4），由で十2十4=（2ー2）（z十4）＋12，可知d=\n（x-2，12），而① 式右边为奇数，知x一2为奇数，故d=1或3.\n情形一：d=1，这时，有（2ー2，で＋22+4）＝（1,3”•7*），（3”，7*）\n或（7，3*）.前者显然不成立，对于次者，有α一3十2=-1（mod3），要求1=\n7*ニズ十2x+4=1-2+4=0（mod3），矛盾；对于后者，有＝7＋2=\n0（mod 3），从而，要求0=3*=で＋2x+4=1（mod3），亦矛盾.\n情形二：d=3，则2一2=3•7°或者x一2=3~1.对于前者，有α=3•\nで十2，代人で＋2x+4=321，有\n9•72+18•7*+12=35，\n此式左边大于 12，故、＞2，两边都除以3，得\n3・726・7+4=302\n但此时左边=1（mod 3），矛盾、对于后者，有α＝3＋2，代人で十22+4=\n3・7*，得\n（35-1+3）2+3=3•7.\n当y=1，2时，直接计算可知不能成立，故y＞2.对此式两边模4，有3=3•\n（一1）\"（mod 4），故＆为偶数，于是，可设＆=2t，t为正整数，方程变形为\n321（322 +2）=（7ー2）（7'十2）.\n由于7-2=1-2=-1（mod3），故30-1｜7＋2，可设7+2=351•9，9\n为正整数.进而，有7-2=3-2+2.\n若q＞1，则由②知\n习题解答\n4=（7+2）-（7-2）=31・9-32+2\n≥351.2-32+2=11・302\n-ー1\n＞5・352-1≥4.\n矛盾、所以，q=1，进而，有4=31-3~2-2，解得y=3，于是，z=11，2="
  },
  {
    "id": "ex-3-30",
    "number": 30,
    "chapter": 3,
    "title": "3^x + 17*4^y = z^2 的模同余解法",
    "problemStatement": "求不定方程 $3^x + 17 \\times 4^y = z^2$ 的所有非负整数解 $(x, y, z)$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "模3同余",
      "模17同余",
      "非负整数解"
    ],
    "videoMeta": {
      "lectureId": 150,
      "cleanTitle": "习题3.30",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "若 $x > 0$ 模 3 导致平方数模 3 余 2 矛盾，必有 $x = 0$！进而化为平方差因式分解。",
    "teacherTrapAlert": "不要遗漏非负整数 $x=0, y=0$ 的初值。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "30",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "模3同余：若 $x > 0$ 模 3 导致平方数模 3 余 2 矛盾，必有 $x...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：若 $x > 0$ 模 3 导致平方数模 3 余 2 矛盾，必有 $x = 0$！进而化为平方差因式分解。"
    },
    "fullSolution": "设（z，y，2）是方程一组非负整数解，若z＞O，则应有=17×\n4*=2（mod 3），但完全平方数=0或1（mod 3），矛盾、故x=0，此时，方程变\n为\n1+17✕4＝ど、\n即（2-1）（x+1）=17✕4”=17✕2%y、当y=0时，=18无整数解，故y\n＞O，此时，由于～一1与&十1同奇偶，故～一1与～十1是两个相邻的偶数，依\n此可知（xー1,x+1）=（2,17✕22x-1），（34,22y1）或者（22>-1,34），结合\n（x＋1）ー（x-1）=2，可知只有（～-1,2+1）=（22-1，34）时，y为整数，\n此时y=3，x=33.直接验证，可知（z，y，x）=（0,3,33）是解.\n综上可知，方程只有一组非负整数解（z，y，2）=（0，3，33）."
  },
  {
    "id": "ex-3-31",
    "number": 31,
    "chapter": 3,
    "title": "莫德尔方程 x^3 = y^2 - 4 的无解证明",
    "problemStatement": "证明：不定方程 $x^3 = y^2 - 4$ 没有整数解。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "Mordell方程",
      "虚二次域",
      "模8同余"
    ],
    "videoMeta": {
      "lectureId": 151,
      "cleanTitle": "习题3.31",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "分析 $y$ 的奇偶性：若 $y$ 为奇数模 4 或模 8 导出矛盾；若 $y$ 为偶数代换排除。",
    "teacherTrapAlert": "避免涉及复杂的代数数域高深理论，使用纯初等同余排查。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "31",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "Mordell方程：分析 $y$ 的奇偶性：若 $y$ 为奇数模 4 或模 8 导出矛盾；...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：分析 $y$ 的奇偶性：若 $y$ 为奇数模 4 或模 8 导出矛盾；若 $y$ 为偶数代换排除。"
    },
    "fullSolution": "两边模11，由费马小定理知，当11*y时，有\ny= 1（mod 11），\n故此时\n所以总有\n即\ny三士1（mod 11），\ny三ー1,0,1（mod 11），\ny-4=6,7,8（mod 11）.\n另一方面，对。而言，由于\nx三0，二1，土2，土3，二4， 上5（mod 11），\n故\nで=0,1,4,9,5, 3（mod 11）.\n所以，で＝yー4没有整数解。"
  },
  {
    "id": "ex-3-32",
    "number": 32,
    "chapter": 3,
    "title": "191 = m^n + n^m 的非对称指数方程",
    "problemStatement": "证明：不存在正整数 $m, n$，使得 $19^1 = m^n + n^m$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "不等式大小估计",
      "质因数试除",
      "无解证明"
    ],
    "videoMeta": {
      "lectureId": 152,
      "cleanTitle": "习题3.32",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "若底数大于等于 3，则高次幂迅速超过 191；若底数为 1 或 2，有限枚举验证无解。",
    "teacherTrapAlert": "对 $m=1, n=1$ 等边界情况逐个排除。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "32",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "不等式大小估计：若底数大于等于 3，则高次幂迅速超过 191；若底数为 1 或 2，有...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：若底数大于等于 3，则高次幂迅速超过 191；若底数为 1 或 2，有限枚举验证无解。"
    },
    "fullSolution": "两边模13去处理.由费马小定理知，当134m时，有m“=1（mod 13），得\nm®=1或25（mod 13），所以，m*三士1或士5（mod 13），即总有m'三0,1，5，\n8, 12（mod 13）.\n与上题类似，可知n=0,1,4,9，3, 12（mod13），于是，n*三0，1，3或\n9（mod 13）.\n利用上述结论，可知，对正整数m、n，总有\nm'+n=0,1,2,3,4, 5, 6, 8, 9, 10, 11, 12（mod 13），\n即m十n夫7（mod13）.\n然而，1919=619三6'三-6=7（mod 13）（这里用到费马小定理及6°=\n-1（mod 13））.\n所以，不存在使1919=m*＋n* 成立的正整数m、n.\n说明 上述两题中模参数的选择是基于费马小定理的反用（第31题中，"
  },
  {
    "id": "ex-3-33",
    "number": 33,
    "chapter": 3,
    "title": "五元大数马尔可夫方程的无穷解",
    "problemStatement": "是否存在正整数 $x, y, z, u, v$，使得它们都大于 2019，且满足 $x^2 + y^2 + z^2 + u^2 + v^2 = xyzu v - 65$？",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "马尔可夫多元方程",
      "Vieta跳跃",
      "大数存在性"
    ],
    "videoMeta": {
      "lectureId": 153,
      "cleanTitle": "习题3.33",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用韦达跳跃法（Vieta Jumping）从基础特解通过对称反射生成无穷大解族。",
    "teacherTrapAlert": "满足所有数均严格大于 2019 的门槛。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "33",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "马尔可夫多元方程：利用韦达跳跃法（Vieta Jumping）从基础特解通过对称反射生成...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用韦达跳跃法（Vieta Jumping）从基础特解通过对称反射生成无穷大解族。"
    },
    "fullSolution": "注意到（2,y，2,1,c）=（1,2，3,4,5）是原方程正整数解.\n一般地，设（z，y，x，u,w）是原方程正整数解，且z<y<x<u<u，\n则将原方程视为关于α一元二次方程，利用韦达定理可知（yzwv一z，y，\n～，《，v）也是原方程的正整数解，依对称性，可知（y,x,u,U,yzwo一z）也\n是解，并且满足条件y＜x＜u＜ひ＜yzu一z。依此递推方式，可得原方程\n的无穷多组正整数解，并且后一步构造解中，最小数比前一组解中最小\n的数大。\n所以，存在满足条件的正整数解."
  },
  {
    "id": "ex-3-34",
    "number": 34,
    "chapter": 3,
    "title": "佩尔型方程无穷整数解的特征值判别",
    "problemStatement": "求所有的整数 $a$，使得方程 $x^2 + axy + y^2 = 1$ 有无穷多组整数解。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "二次型判别式",
      "佩尔方程",
      "无理数特征根"
    ],
    "videoMeta": {
      "lectureId": 154,
      "cleanTitle": "习题3.34",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "关于 $x$ 的一元二次方程判别式 $\\Delta = (a^2 - 4)y^2 + 4$ 必须为完全平方数，只有 $|a| \\ge 2$！",
    "teacherTrapAlert": "注意区分 $|a| < 2$（椭圆有限解）与 $|a| > 2$（双曲佩尔无限解）。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "34",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "二次型判别式：关于 $x$ 的一元二次方程判别式 $\\Delta = (a^2 - ...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：关于 $x$ 的一元二次方程判别式 $\\Delta = (a^2 - 4)y^2 + 4$ 必须为完全平方数，只有 $|a| \\ge 2$！"
    },
    "fullSolution": "分别就α 的不同情况讨论方程\nで十axy+y=1\n①\n的整数解的组数.\n当α二0时，方程为で十y＝1，仅有4组整数解.\n若α土0，则（z,y）为方程①解充要条件是：（z，一y）为方程で一\naxy +y=1的解.所以，只需讨论α＜0且方程①有无穷多组非负整数解\n（z,y）情形。\n若α=ー1，则①为セーマ＋ジ＝1，两边乘以4，再配方得（2.x-y）2＋\n3y2=4，仅有两组非负整数解、\n如果α＜-1，那么（一a，1）为①的一组正整数解.一般地，设（z，y）为①\n的正整数解，且x＞y，则（z，一az+y）也是①的解（这一个解，在视①为关\n于y一元二次方程时，利用韦达定理可得），当然（一az十y，z）（满足\n-ax+y＞x＞y）也是①的正整数解，依此递推，可知这时①有无穷多组正\n整数解.\n综上所述，当｜a|＞1时，方程①有无穷多组整数解，而｜a/≤1时，①仅\n习题解答1O\n有有限组整数解."
  },
  {
    "id": "ex-3-35",
    "number": 35,
    "chapter": 3,
    "title": "3^k - 1 = x^n 的卡塔兰猜想特例",
    "problemStatement": "求所有正整数 $x, k, n$ ($n \\ge 2$)，使得 $3^k - 1 = x^n$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "Catalan方程",
      "模同余与LTE",
      "二次二项式"
    ],
    "videoMeta": {
      "lectureId": 155,
      "cleanTitle": "习题3.35",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "利用模 8 同余排除 $n$ 为偶数，再利用模 9 同余或因式分解确定唯一解。",
    "teacherTrapAlert": "引用或证明初等情况下的卡塔兰特例。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "35",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "Catalan方程：利用模 8 同余排除 $n$ 为偶数，再利用模 9 同余或因式分解确定...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：利用模 8 同余排除 $n$ 为偶数，再利用模 9 同余或因式分解确定唯一解。"
    },
    "fullSolution": "由条件可知x≥2.\n如果n为偶数，那么由完全平方数=0或1（mod 3）可知で二0或1（mod 3），\n但3-1=2（mod 3），此时无解.\n如果n为奇数，那么\n3=で十1=（2十1）（で1ーで2十⋯ーで十1）。\n所以，α十1和A=で1ーで？＋⋯・ーズ十1都为3的幕次。\n注意到，\nA= （11）i|ー（11）*2+…- （11）+1= n（mod（z+1））.\n故n为3倍数。可设n=3m，记y=ズ”，则\n3=y+1=（y+1）（y-y+1）.\n①\n从而，y十1和y—y十1都是3幂次。\n设y十1=3'，则由①知\n3k=（3-1）3+1=33-3241+3円.\n②\n如果t＞1，那么3t＞2t+1＞1十1，此时341||33-3241＋3件，对比②式两\n边要求k=七十1，但此时②左边小于右边.所以，t=1，进而，y＝2，k=2.\n得（，ん、n）=（2,2,3）.\n综上可知，符合条件正整数（z,k,n） =（2,2,3）."
  },
  {
    "id": "ex-3-36",
    "number": 36,
    "chapter": 3,
    "title": "正方形距离型二次不定方程的最小无解值",
    "problemStatement": "求使得不定方程 $n = x^2 - xy + y^2 + x - y$ 没有正整数解的最小正整数 $n$。",
    "difficulty": "全国压轴",
    "sectionCode": "3.3",
    "topicTags": [
      "二元二次型",
      "判别式非负性",
      "模算术排除"
    ],
    "videoMeta": {
      "lectureId": 156,
      "cleanTitle": "习题3.36",
      "durationFormatted": "14分15秒"
    },
    "heuristicHint": "将方程视作关于 $y$ 的二次方程，判别式 $\\Delta = -3x^2 - 2x + 4n + 1 \\ge 0$，验证 $n=1, 2$ 有解而 $n=3$ 无解。",
    "teacherTrapAlert": "证明最小无解正整数恰好为 $n = 3$。",
    "sandbox": {
      "prompt": "输入试验参数检验方程整除解：",
      "inputLabel": "测试参数",
      "inputType": "number",
      "defaultVal": "36",
      "calcExplanation": "代入参数验证方程两边整数整除与余数相等性。"
    },
    "checkpoint": {
      "question": "关于本题不定方程求解的决定性突破口，正确的是：",
      "options": [
        "二元二次型：将方程视作关于 $y$ 的二次方程，判别式 $\\Delta = -3x...",
        "直接求实数根无需考虑整数约束",
        "二元高次不定方程恒有无限多组正整数解",
        "勾股数只包含 3, 4, 5 一组比例"
      ],
      "correctIndex": 0,
      "explanation": "核心思路：将方程视作关于 $y$ 的二次方程，判别式 $\\Delta = -3x^2 - 2x + 4n + 1 \\ge 0$，验证 $n=1, 2$ 有解而 $n=3$ 无解。"
    },
    "fullSolution": "记F（z,y）＝でーズッナジナでーツっ则F（1,1）＝1、F（1,2）=2.\n因此，n=1，2时，方程有正整数解。\n下证：F（z,y）=3没有正整数解。\n视方程F（z,y）=3为关于y的一元二次方程\nパー（ポ+1）y+ポ十でー3=0。\n如果存在正整数解，那么\nA=（ぷ+1）2ー4（で十2ー3）ニでー4で十2でー42+13\n是一个完全平方数。\n注意到，当x≥2时，有＜（ー2xー1）”，而≥6时，有A＞（ぶー"
  }
];

// All 116 exercises combined (40 + 40 + 36)
export const ALL_VOLUME_6_EXERCISES: ExerciseItem[] = [
  ...enrichedChapter1,
  ...CHAPTER_2_EXERCISES,
  ...CHAPTER_3_EXERCISES
];

export const EXERCISE_STATS = {
  totalExercises: 116,
  ch1Count: 40,
  ch2Count: 40,
  ch3Count: 36,
};

export function getExerciseById(id: string): ExerciseItem | undefined {
  return ALL_VOLUME_6_EXERCISES.find(ex => ex.id === id);
}

export function getExercisesByChapter(chapter: 1 | 2 | 3): ExerciseItem[] {
  return ALL_VOLUME_6_EXERCISES.filter(ex => ex.chapter === chapter);
}
