# 标点

这些是 C++ 中的标点符号。每个符号的含义在链接的页面中详述。

## `{}`

- 在 [class/struct](https://zh.cppreference.com/w/cpp/language/class) 或 [union](https://zh.cppreference.com/w/cpp/language/union) 定义中分隔[成员说明](https://zh.cppreference.com/w/cpp/language/class#.E6.88.90.E5.91.98.E8.AF.B4.E6.98.8E)。
- 在 [enum](https://zh.cppreference.com/w/cpp/language/enum) 定义中分隔枚举项列表。
- 分隔[复合语句](https://zh.cppreference.com/w/cpp/language/statements#.E5.A4.8D.E5.90.88.E8.AF.AD.E5.8F.A5)。复合语句可能是下列构造的一部分
  - [函数定义](https://zh.cppreference.com/w/cpp/language/function#.E5.87.BD.E6.95.B0.E5.AE.9A.E4.B9.89)
  - [try 块或 catch 子句](https://zh.cppreference.com/w/cpp/language/try_catch)
  - [函数 try 块](https://zh.cppreference.com/w/cpp/language/function-try-block)
  - [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)（C++11 起）
- 在[初始化](https://zh.cppreference.com/w/cpp/language/initialization)中分隔初始化器。这种初始化被称为[列表初始化](https://zh.cppreference.com/w/cpp/language/list_initialization)。（C++11 起）
- 在[命名空间定义](https://zh.cppreference.com/w/cpp/language/namespace)中分隔命名空间体。
- 在[语言链接说明](https://zh.cppreference.com/w/cpp/language/language_linkage)中分隔声明。
- 在 [requires 表达式](https://zh.cppreference.com/w/cpp/language/constraints#requires_.E8.A1.A8.E8.BE.BE.E5.BC.8F)中分隔要求。（C++20 起）
- 在[复合要求](https://zh.cppreference.com/w/cpp/language/constraints#.E5.A4.8D.E5.90.88.E8.A6.81.E6.B1.82)中分隔表达式。（C++20 起）
- 在[导出声明](https://zh.cppreference.com/w/cpp/language/modules)中分隔声明。（C++20 起）

## `[]`

- [下标运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E4.B8.8B.E6.A0.87.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.95.B0.E7.BB.84.E4.B8.8B.E6.A0.87.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator[]` 的一部分。
- [声明](https://zh.cppreference.com/w/cpp/language/declarations)或[类型标识](https://zh.cppreference.com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)（例如在[new 表达式](https://zh.cppreference.com/w/cpp/language/new)中）中[数组声明符](https://zh.cppreference.com/w/cpp/language/declarations#.E5.A3.B0.E6.98.8E.E7.AC.A6)的一部分。
- [运算符重载（分配函数）](https://zh.cppreference.com/w/cpp/memory/new/operator_new)中 `new[]` 运算符的一部分。
- [delete 表达式](https://zh.cppreference.com/w/cpp/language/delete)及[运算符重载（解分配函数）](https://zh.cppreference.com/w/cpp/memory/new/operator_delete)中 `delete[]` 运算符的一部分。
- 在 [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)中分隔[捕获](https://zh.cppreference.com/w/cpp/language/lambda#Lambda_.E6.8D.95.E8.8E.B7)。（C++11 起）
- 在[属性说明符](https://zh.cppreference.com/w/cpp/language/attributes)中分隔属性。（C++11 起）
- 在[结构化绑定声明](https://zh.cppreference.com/w/cpp/language/structured_binding)中分隔标识符列表。（C++17 起）

## `#`

- 引入[预处理指令](https://zh.cppreference.com/w/cpp/preprocessor)。
- [字符串化的预处理运算符](https://zh.cppreference.com/w/cpp/preprocessor/replace#.23_.E4.B8.8E_.23.23_.E8.BF.90.E7.AE.97.E7.AC.A6)。

## `##`

- [粘贴记号的预处理运算符](https://zh.cppreference.com/w/cpp/preprocessor/replace#.23_.E4.B8.8E_.23.23_.E8.BF.90.E7.AE.97.E7.AC.A6)。

## `()`

- 在表达式中[指示分组](https://zh.cppreference.com/w/cpp/language/expressions#.E5.88.9D.E7.AD.89.E8.A1.A8.E8.BE.BE.E5.BC.8F)。
- [函数调用运算符](https://zh.cppreference.com/w/cpp/language/operator_other#.E5.86.85.E5.BB.BA.E7.9A.84.E5.87.BD.E6.95.B0.E8.B0.83.E7.94.A8.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E5.87.BD.E6.95.B0.E8.B0.83.E7.94.A8.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator()` 的一部分。
- 在[函数风格转型](https://zh.cppreference.com/w/cpp/language/explicit_cast)中分隔表达式/初始化器。
- 在 [`static_cast`](https://zh.cppreference.com/w/cpp/language/static_cast)、[`const_cast`](https://zh.cppreference.com/w/cpp/language/const_cast)、[`reinterpret_cast`](https://zh.cppreference.com/w/cpp/language/reinterpret_cast) 或 [`dynamic_cast`](https://zh.cppreference.com/w/cpp/language/dynamic_cast) 中分隔表达式。
- 在 [`typeid`](https://zh.cppreference.com/w/cpp/language/typeid)、[`sizeof`](https://zh.cppreference.com/w/cpp/language/sizeof)、[`sizeof...`](https://zh.cppreference.com/w/cpp/language/sizeof...)、[`alignof`](https://zh.cppreference.com/w/cpp/language/alignof) 或 [`noexcept`](https://zh.cppreference.com/w/cpp/language/noexcept)（C++11 起）表达式中分隔操作数。
- 在[布置 new 表达式](https://zh.cppreference.com/w/cpp/language/new)中分隔布置实参。
- 在 [new 表达式](https://zh.cppreference.com/w/cpp/language/new)中可选地分隔类型标识。
- 在 [new 表达式](https://zh.cppreference.com/w/cpp/language/new)中分隔初始化器。
- 在 [C 风格转型](https://zh.cppreference.com/w/cpp/language/explicit_cast)中分隔类型标识。
- 在[声明](https://zh.cppreference.com/w/cpp/language/declarations)或[类型标识](https://zh.cppreference.com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)中指示分组。
- 在下列构造中分隔形参列表
  - [函数声明符](https://zh.cppreference.com/w/cpp/language/function)（在[声明](https://zh.cppreference.com/w/cpp/language/declarations)或[类型标识](https://zh.cppreference. com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)）中
  - [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)（C++11 起）
  - [用户定义推导指引](https://zh.cppreference.com/w/cpp/language/class_template_argument_deduction)（C++17 起）
  - [requires 表达式](https://zh.cppreference.com/w/cpp/language/constraints#requires_.E8.A1.A8.E8.BE.BE.E5.BC.8F)（C++20 起）
- 在[直接初始化](https://zh.cppreference.com/w/cpp/language/direct_initialization)中分隔初始化器。
- 在 [asm 声明](https://zh.cppreference.com/w/cpp/language/asm)中分隔字符串字面量。
- 在[成员初始化器列表](https://zh.cppreference.com/w/cpp/language/initializer_list)中分隔属于基类或成员的初始化器。
- 在 [`if`](https://zh.cppreference.com/w/cpp/language/if)（包括 `constexpr if`）（C++17 起）、[`switch`](https://zh.cppreference.com/w/cpp/language/switch)、[`while`](https://zh.cppreference.com/w/cpp/language/while)、[`do-while`](https://zh.cppreference.com/w/cpp/language/do) 或 [`for`](https://zh.cppreference.com/w/cpp/language/for)（包括[基于范围的`for`](https://zh.cppreference.com/w/cpp/language/range-for)）（C++11 起）语句中分隔控制子句。
- 在 [catch 子句](https://zh.cppreference.com/w/cpp/language/try_catch)中分隔形参声明。
- 在[仿函数宏定义](https://zh.cppreference.com/w/cpp/preprocessor/replace#.E4.BB.BF.E5.87.BD.E6.95.B0.E5.AE.8F)中分隔宏形参。
- `defined`、`__has_include`（C++17 起）、`__has_cpp_attribute`（C++20 起）预处理运算符的一部分。
- 在 [`static_assert`](https://zh.cppreference.com/w/cpp/language/static_assert) 声明中分隔操作数。（C++11 起）
- 在 [`decltype`](https://zh.cppreference.com/w/cpp/language/decltype) 说明符、[`noexcept`](https://zh.cppreference.com/w/cpp/language/noexcept_spec) 说明符、[`alignas`](https://zh.cppreference.com/w/cpp/language/alignas) 说明符、[条件性 `explicit` 说明符](https://zh.cppreference.com/w/cpp/language/explicit)（C++20 起）中分隔操作数。（C++11 起）
- 在[属性](https://zh.cppreference.com/w/cpp/language/attributes)中分隔属性实参。（C++11 起）
- [`decltype(auto)`](https://zh.cppreference.com/w/cpp/language/decltype) 说明符的一部分。（C++14 起）
- 分隔[折叠表达式](https://zh.cppreference.com/w/cpp/language/fold)。（C++17 起）
- 变参数宏定义中 [`__VA_OPT__`](https://zh.cppreference.com/w/cpp/preprocessor/replace) 替换的一部分。（C++20 起）

## `;`

- 指示以下构造的末尾
  - [语句](https://zh.cppreference.com/w/cpp/language/statements)（包括 for 语句的初始化语句）
  - [声明](https://zh.cppreference.com/w/cpp/language/declarations)或[成员声明](https://zh.cppreference.com/w/cpp/language/class#.E6.88.90.E5.91.98.E8.AF.B4.E6.98.8E)
  - [模块声明](https://zh.cppreference.com/w/cpp/language/modules)、导入声明、全局模块片段器引入或私有模块片段引入器（C++20 起）
  - [要求](https://zh.cppreference.com/w/cpp/language/constraints#requires_.E8.A1.A8.E8.BE.BE.E5.BC.8F)（C++20 起）
- 分隔[for 语句](https://zh.cppreference.com/w/cpp/language/for)的第二与第三子句。

## `:`

- [条件运算符](https://zh.cppreference.com/w/cpp/language/operator_other#.E6.9D.A1.E4.BB.B6.E8.BF.90.E7.AE.97.E7.AC.A6)的一部分。
- [标签声明](https://zh.cppreference.com/w/cpp/language/statements#.E6.A0.87.E7.AD.BE)的一部分。
- 在[类定义](https://zh.cppreference.com/w/cpp/language/class)的类头中引入[基子句](https://zh.cppreference.com/w/cpp/language/derived_class)。
- 成员说明中[访问说明符](https://zh.cppreference.com/w/cpp/language/access)的一部分。
- [位域成员声明](https://zh.cppreference.com/w/cpp/language/bitfield)中引入宽度。
- [构造函数](https://zh.cppreference.com/w/cpp/language/constructor)定义中引入成员初始化器列表。
- [基于范围的 for](https://zh.cppreference.com/w/cpp/language/range-for) 语句中分隔范围声明与范围初始化器。（C++11 起）
- 引入[枚举基](https://zh.cppreference.com/w/cpp/language/enum)，它指定枚举的底层类型。（C++11 起）
- 在[属性说明符](https://zh.cppreference.com/w/cpp/language/attributes)中分隔属性 using 前缀与属性列表。（C++17 起）
- 在[模块声明](https://zh.cppreference.com/w/cpp/language/modules)或模块划分的导入声明中引入模块划分名。（C++20 起）
- 私有模块片段引入器（`module:private;`）的一部分。（C++20 起）

## `...`

- 函数声明符或 lambda 表达式（C++11 起）或用户定义推导指引（C++17 起）中[形参列表](https://zh.cppreference.com/w/cpp/language/function#.E5.BD.A2.E5.8F.82.E5.88.97.E8.A1.A8)的一部分，标识[变参数函数](https://zh.cppreference.com/w/cpp/language/variadic_arguments)。
- 在 [catch 子句](https://zh.cppreference.com/w/cpp/language/try_catch)中标识万应处理。
- 在[宏定义](https://zh.cppreference.com/w/cpp/preprocessor/replace)中标识变参数宏。（C++11 起）
- 指示[包](https://zh.cppreference.com/w/cpp/language/parameter_pack)声明与展开。（C++11 起）

## `?`

- [条件运算符](https://zh.cppreference.com/w/cpp/language/operator_other#.E6.9D.A1.E4.BB.B6.E8.BF.90.E7.AE.97.E7.AC.A6)的一部分。

## `::`

- 下列构造中的作用域解析运算符
  - [有限定名](https://zh.cppreference.com/w/cpp/language/qualified_lookup)
  - [成员指针声明](https://zh.cppreference.com/w/cpp/language/pointer#.E6.88.90.E5.91.98.E6.8C.87.E9.92.88)
  - [new](https://zh.cppreference.com/w/cpp/language/new) 或 [delete](https://zh.cppreference.com/w/cpp/language/delete) 表达式，指示仅查找全局分配或解分配函数
- 在[属性](https://zh.cppreference.com/w/cpp/language/attributes)中指示属性作用域。（C++11 起）
- [嵌套命名空间定义](https://zh.cppreference.com/w/cpp/language/namespace)的一部分。（C++17 起）

## `.`

- [成员访问运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6)。
- 在[聚合初始化](https://zh.cppreference.com/w/cpp/language/aggregate_initialization)中引入指派符。（C++20 起）
- [模块名或模块划分名](https://zh.cppreference.com/w/cpp/language/modules)的一部分。（C++20 起）

## `.*`

- [成员指针访问运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E6.8C.87.E9.92.88.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6)。

## `->`

- [成员访问运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator->` 的一部分。
- 在[函数声明符](https://zh.cppreference.com/w/cpp/language/function)或 [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)中引入尾随返回类型。（C++11 起）
- 在[用户定义推导指引](https://zh.cppreference.com/w/cpp/language/class_template_argument_deduction)中引入结果类型。（C++17 起）
- 在[复合要求](https://zh.cppreference.com/w/cpp/language/constraints#.E5.A4.8D.E5.90.88.E8.A6.81.E6.B1.82)中引入返回类型要求。（C++20 起）

## `->*`

- [成员指针访问运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E6.88.90.E5.91.98.E6.8C.87.E9.92.88.E8.AE.BF.E9.97.AE.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E7.BD.95.E6.9C.89.E9.87.8D.E8.BD.BD.E7.9A.84.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator->*` 的一部分。

## `~`

- [一元补运算符（又称逐位非运算符）](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E9.80.90.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator~` 的一部分。
- 指名[析构函数](https://zh.cppreference.com/w/cpp/language/destructor)或伪析构函数的标识符的一部分。

## `!`

- [逻辑非运算符](https://zh.cppreference.com/w/cpp/language/operator_logical)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator!` 的一部分。
- [consteval `if` 语句的反向变体](https://zh.cppreference.com/w/cpp/language/if#consteval_if)的一部分。（C++23 起）

## `+`

- [一元加运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B8.80.E5.85.83.E7.AE.97.E6.9C.AF.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator+` 的一部分。
- [二元加运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E5.8A.A0.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator+` 的一部分。

## `-`

- [一元减运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B8.80.E5.85.83.E7.AE.97.E6.9C.AF.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator-` 的一部分。
- [二元减运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E5.8A.A0.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator-` 的一部分。

## `*`

- [间接运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E9.97.B4.E6.8E.A5.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator*` 的一部分。
- [乘运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B9.98.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator*` 的一部分。
- [声明符](https://zh.cppreference.com/w/cpp/language/declarations#.E5.A3.B0.E6.98.8E.E7.AC.A6)中或[类型标识](https://zh.cppreference.com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)中的指针运算符或成员指针运算符
- [Lambda 捕获](https://zh.cppreference.com/w/cpp/language/lambda#Lambda_.E6.8D.95.E8.8E.B7)列表中 `*this` 的一部分，以按复制捕获当前对象。（C++17 起）

## `/`

- [除运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B9.98.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator/` 的一部分。

## `%`

- [模运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E4.B9.98.E6.80.A7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator%` 的一部分.

## `^`

- [逐位异或运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E9.80.90.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator^`。

## `&`

- [取地址运算符](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E5.8F.96.E5.9C.B0.E5.9D.80.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E7.BD.95.E6.9C.89.E9.87.8D.E8.BD.BD.E7.9A.84.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator&` 的一部分。
- [逐位与运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E9.80.90.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator&` 的一部分。
- [声明符](https://zh.cppreference.com/w/cpp/language/declarations#.E5.A3.B0.E6.98.8E.E7.AC.A6)中或[类型标识](https://zh.cppreference.com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)中的左值引用运算符。
- 在 [lambda 捕获](https://zh.cppreference.com/w/cpp/language/lambda#Lambda_.E6.8D.95.E8.8E.B7)中指示按引用捕获。（C++11 起）
- [成员函数声明](https://zh.cppreference.com/w/cpp/language/member_functions)中的[引用限定符](https://zh.cppreference.com/w/cpp/language/member_functions#.E5.BC.95.E7.94.A8.E9.99.90.E5.AE.9A.E7.9A.84.E6.88.90.E5.91.98.E5.87.BD.E6.95.B0)。（C++11 起）

## `|`

- [逐位或运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E9.80.90.E4.BD.8D.E9.80.BB.E8.BE.91.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator|` 的一部分。

## `=`

- [简单赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E8.B5.8B.E5.80.BC.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator=` 的一部分，它可能是特殊成员函数（[复制赋值运算符](https://zh.cppreference.com/w/cpp/language/copy_assignment)或[移动赋值运算符](https://zh.cppreference.com/w/cpp/language/move_assignment)（C++11 起））。
- 在[初始化](https://zh.cppreference.com/w/cpp/language/initialization)中指示[复制初始化](https://zh.cppreference.com/w/cpp/language/copy_initialization)或[复制列表初始化](https://zh.cppreference.com/w/cpp/language/list_initialization)（C++11 起）。
- 在[函数声明](https://zh.cppreference.com/w/cpp/language/function)中引入[默认实参](https://zh.cppreference.com/w/cpp/language/default_arguments)。
- 在[模板形参列表](https://zh.cppreference.com/w/cpp/language/template_parameters)中引入[默认模板实参](https://zh.cppreference.com/w/cpp/language/template_parameters#.E9.BB.98.E8.AE.A4.E6.A8.A1.E6.9D.BF.E5.AE.9E.E5.8F.82)。
- 在[命名空间别名定义](https://zh.cppreference.com/w/cpp/language/namespace_alias)中分隔别名与别名指代的命名空间。
- 在[枚举定义](https://zh.cppreference.com/w/cpp/language/enum)中引入枚举项的值。
- [纯虚函数声明](https://zh.cppreference.com/w/cpp/language/abstract_class)中纯说明符的一部分。
- [lambda 捕获](https://zh.cppreference.com/w/cpp/language/lambda#Lambda_.E6.8D.95.E8.8E.B7)中的捕获预置符，指示按复制捕获。（C++11 起）
- [函数定义](https://zh.cppreference.com/w/cpp/language/function#.E5.87.BD.E6.95.B0.E5.AE.9A.E4.B9.89)中的预置定义（`=default;`）或被删除定义（`=delete;`）。（C++11 起）
- 在[类型别名声明](https://zh.cppreference.com/w/cpp/language/type_alias)中分隔别名与别名指代的类型。（C++11 起）
- 在[概念定义](https://zh.cppreference.com/w/cpp/language/constraints)中分隔概念名与约束表达式。（C++20 起）

## `+=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator+=` 的一部分。

## `-=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator-=` 的一部分。

## `*=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator*=` 的一部分。

## `/=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator/=`的一部分。

## `%=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator%=`的一部分。

## `^=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator^=` 的一部分。

## `&=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator&=` 的一部分。

## `|=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator|=` 的一部分。

## `==`

- [相等运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator==` 的一部分。

## `!=`

- [不相等运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator!=` 的一部分。

## `<`

- [小于运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator<` 的一部分。
- 在 [`static_cast`](https://zh.cppreference.com/w/cpp/language/static_cast)、[`const_cast`](https://zh.cppreference.com/w/cpp/language/const_cast)、[`reinterpret_cast`](https://zh.cppreference.com/w/cpp/language/reinterpret_cast) 或 [`dynamic_cast`](https://zh.cppreference.com/w/cpp/language/dynamic_cast) 中引入类型标识。
- 引入[模板实参列表](https://zh.cppreference.com/w/cpp/language/template_parameters#.E6.A8.A1.E6.9D.BF.E5.AE.9E.E5.8F.82)。
- 在以下构造中引入[模板形参列表](https://zh.cppreference.com/w/cpp/language/template_parameters)
  - [模板声明](https://zh.cppreference.com/w/cpp/language/templates)
  - [部分特化](https://zh.cppreference.com/w/cpp/language/partial_specialization)
  - [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)（C++20 起）
- [模板特化声明](https://zh.cppreference.com/w/cpp/language/template_specialization)中 `template<>` 的一部分。
- 指示下列构造中的头文件名
  - [`#include` 指令](https://zh.cppreference.com/w/cpp/preprocessor/include)
  - [`__has_include` 预处理表达式](https://zh.cppreference.com/w/cpp/preprocessor/include)（C++17 起）
  - [`import` 声明](https://zh.cppreference.com/w/cpp/language/modules)（C++20 起）

## `>`

- [大于运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator>` 的一部分。
- 在 [`static_cast`](https://zh.cppreference.com/w/cpp/language/static_cast)、[`const_cast`](https://zh.cppreference.com/w/cpp/language/const_cast)、[`reinterpret_cast`](https://zh.cppreference.com/w/cpp/language/reinterpret_cast) 或 [`dynamic_cast`](https://zh.cppreference.com/w/cpp/language/dynamic_cast) 中指示类型标识的末尾。
- 指示[模板实参列表](https://zh.cppreference.com/w/cpp/language/template_parameters#.E6.A8.A1.E6.9D.BF.E5.AE.9E.E5.8F.82)的末尾。
- 在以下构造中指示[模板形参列表](https://zh.cppreference.com/w/cpp/language/template_parameters)的末尾
  - [模板声明](https://zh.cppreference.com/w/cpp/language/templates)
  - [部分特化](https://zh.cppreference.com/w/cpp/language/partial_specialization)
  - [lambda 表达式](https://zh.cppreference.com/w/cpp/language/lambda)（C++20 起）
- [模板特化声明](https://zh.cppreference.com/w/cpp/language/template_specialization)中 `template<>` 的一部分。
- 指示下列构造中头文件名的末尾
  - [`#include` 指令](https://zh.cppreference.com/w/cpp/preprocessor/include)
  - [`__has_include` 预处理表达式](https://zh.cppreference.com/w/cpp/preprocessor/include)（C++17 起）
  - [`import` 声明](https://zh.cppreference.com/w/cpp/language/modules)（C++20 起）

## `<=`

- [小于或等于运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator<=` 的一部分。

## `>=`

- [大于或等于运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator>=` 的一部分。

## `<=>`（C++20 起）

- [三路比较（飞船）运算符](https://zh.cppreference.com/w/cpp/language/operator_comparison#.E4.B8.89.E8.B7.AF.E6.AF.94.E8.BE.83)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E6.AF.94.E8.BE.83.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator<=>` 的一部分。

## `&&`

- [逻辑与运算符](https://zh.cppreference.com/w/cpp/language/operator_logical)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E7.BD.95.E6.9C.89.E9.87.8D.E8.BD.BD.E7.9A.84.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator&&` 的一部分。
- [声明符](https://zh.cppreference.com/w/cpp/language/declarations#.E5.A3.B0.E6.98.8E.E7.AC.A6)中或[类型标识](https://zh.cppreference.com/w/cpp/language/type#.E7.B1.BB.E5.9E.8B.E7.9A.84.E5.91.BD.E5.90.8D)中的右值引用运算符。（C++11 起）
- [成员函数声明](https://zh.cppreference.com/w/cpp/language/member_functions)中的[引用限定符](https://zh.cppreference.com/w/cpp/language/member_functions#.E5.BC.95.E7.94.A8.E9.99.90.E5.AE.9A.E7.9A.84.E6.88.90.E5.91.98.E5.87.BD.E6.95.B0)。（C++11 起）

## `||`

- [逻辑或运算符](https://zh.cppreference.com/w/cpp/language/operator_logical)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E7.BD.95.E6.9C.89.E9.87.8D.E8.BD.BD.E7.9A.84.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator||` 的一部分。

## `<<`

- [移位运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E7.A7.BB.E4.BD.8D.E8.BF.90.E7.AE.97.E7.AC.A6)；运算符重载（[诸位运算符](https://zh.cppreference.com/w/cpp/language/operators#.E9.80.90.E4.BD.8D.E7.AE.97.E6.9C.AF.E8.BF.90.E7.AE.97.E7.AC.A6)或[流插入运算符](https://zh.cppreference.com/w/cpp/language/operators#.E6.B5.81.E7.9A.84.E6.8F.90.E5.8F.96.E4.B8.8E.E6.8F.92.E5.85.A5)）中 `operator<<` 的一部分。

## `>>`

- [移位运算符](https://zh.cppreference.com/w/cpp/language/operator_arithmetic#.E7.A7.BB.E4.BD.8D.E8.BF.90.E7.AE.97.E7.AC.A6)；运算符重载（[诸位运算符](https://zh.cppreference.com/w/cpp/language/operators#.E9.80.90.E4.BD.8D.E7.AE.97.E6.9C.AF.E8.BF.90.E7.AE.97.E7.AC.A6)或[流提取运算符](https://zh.cppreference.com/w/cpp/language/operators#.E6.B5.81.E7.9A.84.E6.8F.90.E5.8F.96.E4.B8.8E.E6.8F.92.E5.85.A5)）中 `operator>>` 的一部分。
- 在 [`static_cast`](https://zh.cppreference.com/w/cpp/language/static_cast)、[`const_cast`](https://zh.cppreference.com/w/cpp/language/const_cast)、[`reinterpret_cast`](https://zh.cppreference.com/w/cpp/language/reinterpret_cast) 或 [`dynamic_cast`](https://zh.cppreference.com/w/cpp/language/dynamic_cast)、[模板实参列表](https://zh.cppreference.com/w/cpp/language/template_parameters#.E6.A8.A1.E6.9D.BF.E5.AE.9E.E5.8F.82)或[模板形参列表](https://zh.cppreference.com/w/cpp/language/template_parameters)中能被重新分析成两个 `>`。（C++11 起）

## `<<=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator<<=` 的一部分。

## `>>=`

- [复合赋值运算符](https://zh.cppreference.com/w/cpp/language/operator_assignment)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator>>=` 的一部分。

## `++`

- [自增运算符](https://zh.cppreference.com/w/cpp/language/operator_incdec)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator++` 的一部分。

## `--`

- [自减运算符](https://zh.cppreference.com/w/cpp/language/operator_incdec)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators)中 `operator--` 的一部分。

## `,`

- [逗号运算符](https://zh.cppreference.com/w/cpp/language/operator_other#.E5.86.85.E5.BB.BA.E7.9A.84.E9.80.97.E5.8F.B7.E8.BF.90.E7.AE.97.E7.AC.A6)；[运算符重载](https://zh.cppreference.com/w/cpp/language/operators#.E7.BD.95.E6.9C.89.E9.87.8D.E8.BD.BD.E7.9A.84.E8.BF.90.E7.AE.97.E7.AC.A6)中 `operator,` 的一部分。
- 下列构造中的列表分隔符
  - [声明](https://zh.cppreference.com/w/cpp/language/declarations)中的声明符列表
  - [初始化](https://zh.cppreference.com/w/cpp/language/initialization)中的初始化器列表
  - [布置 new](https://zh.cppreference.com/w/cpp/language/new) 中的布置实参列表
  - [函数调用表达式](https://zh.cppreference.com/w/cpp/language/operator_other#.E5.87.BD.E6.95.B0.E8.B0.83.E7.94.A8.E8.BF.90.E7.AE.97.E7.AC.A6)中的实参列表
  - [多实参下标表达式](https://zh.cppreference.com/w/cpp/language/operator_member_access#.E5.86.85.E5.BB.BA.E7.9A.84.E4.B8.8B.E6.A0.87.E8.BF.90.E7.AE.97.E7.AC.A6)中的实参列表（C++23 起）
  - [枚举](https://zh.cppreference.com/w/cpp/language/enum)声明中的枚举项列表
  - [类](https://zh.cppreference.com/w/cpp/language/class)声明中的[基类](https://zh.cppreference.com/w/cpp/language/derived_class)列表
  - [构造函数](https://zh.cppreference.com/w/cpp/language/constructor)定义中的成员初始化器列表
  - [函数形参列表](https://zh.cppreference.com/w/cpp/language/function#.E5.BD.A2.E5.8F.82.E5.88.97.E8.A1.A8)
  - [模板形参列表](https://zh.cppreference.com/w/cpp/language/template_parameters)
  - [模板实参列表](https://zh.cppreference.com/w/cpp/language/template_parameters#.E6.A8.A1.E6.9D.BF.E5.AE.9E.E5.8F.82)
  - [仿函数宏定义](https://zh.cppreference.com/w/cpp/preprocessor/replace)中的宏形参列表
  - [lambda 捕获](https://zh.cppreference.com/w/cpp/language/lambda#Lambda_.E6.8D.95.E8.8E.B7)列表（C++11 起）
  - [属性](https://zh.cppreference.com/w/cpp/language/attributes)列表（C++11 起）
  - [using 声明](https://zh.cppreference.com/w/cpp/language/namespace#using_.E5.A3.B0.E6.98.8E)中的声明符列表（C++17 起）
  - [结构化绑定](https://zh.cppreference.com/w/cpp/language/structured_binding)声明中的标识符列表（C++17 起）
- 在 [`static_assert`](https://zh.cppreference.com/w/cpp/language/static_assert) 声明中分隔参数。（C++11 起）

## 引用

- C++20 标准（ISO/IEC 14882:2020）：
  - 5.12 Operators and punctuators \[lex.operators\]
- C++17 标准（ISO/IEC 14882:2017）：
  - 5.12 Operators and punctuators \[lex.operators\]
- C++14 标准（ISO/IEC 14882:2014）：
  - 2.13 Operators and punctuators \[lex.operators\]
- C++11 标准（ISO/IEC 14882:2011）：
  - 2.13 Operators and punctuators \[lex.operators\]
- C++03 标准（ISO/IEC 14882:2003）：
  - 2.12 Operators and punctuators \[lex.operators\]
- C++98 标准（ISO/IEC 14882:1998）：
  - 2.12 Operators and punctuators \[lex.operators\]

## 参阅

- [替用表示](https://zh.cppreference.com/w/cpp/language/operator_alternative) 某些运算符的替用拼写
- **标点** 的 [**C 文档**](https://zh.cppreference.com/w/c/language/punctuators)
