# 标识符

*标识符*是一个由数字，下划线，大小写拉丁字母和大多数 Unicode 字符组成的任意长度的序列。

有效的标识符的首个字符必须是以下之一：

- 大写拉丁字母 A-Z
- 小写拉丁字母 a-z
- 下划线
- 具有 Unicode 属性  [XID\_Start]  的 Unicode 字符

有效的标识符的其他字符必须是以下之一：

- 数字 0-9
- 大写拉丁字母 A-Z
- 小写拉丁字母 a-z
- 下划线
- 具有 Unicode 属性  [XID\_Continue]  的 Unicode 字符

具有 XID_Start 或 XID_Continue 属性的字符在  [DerivedCoreProperties.txt]  列出。

标识符区分大小写（小写和大写字母是不同的），而且每一个字符都是起作用的。每个标识符都必须遵循[正规化形式 C]。

注意：大多数实现中对 Unicode 标识符的支持是受限的，比如  [gcc （10 之前）]。

### 在声明中

可以用标识符来[命名]对象、引用、函数、枚举项、类型、类成员、命名空间、模板、模板特化、形参包  (C++11 起)、goto 标号，以及其他实体，但有以下例外：

- [关键词]标识符不能用于其他目的；

- 作为特定运算符与标点符的[代用表示]不能用于其他目的；

- 有以下形式之一的，作为记号或预处理记号（即不在形如  operator ""id  的用户定义字符串字面量  ﻿ 中）出现的  (C++11 起)标识符被保留：
  - 任何位置带有双下划线的标识符；
  - 以单下划线后随一个大写字母开始的标识符；
  - 在全局命名空间中，以一个下划线开始的标识符。

这里“被保留”的意思是，标准库的头文件可能  #define  或者声明这样的标识符以便它在内部使用，编译器可能会预先定义这种非标准的标识符，而且名字重整算法可能会假定某些这样的标识符是没有被使用的。如果程序员使用了这样的标识符的话，程序非良构，不要求诊断。

此外，在一个翻译单元  #define  或  #undef  特定名字是未定义行为，详情请见[保留宏名]。

#### 僵尸标识符

C++14 起，某些标识符被从 C++ 标准库移除。它们列于[僵尸名列表]。

然而，这些标识符仍然在某些语境中为以前的标准化保留。可移植的代码中，被移除的成员函数名不可用做函数式宏的名字，而其他被移除的成员名不可用作对象式宏的名字。

### 在表达式中

命名某个变量、函数、[概念]的特化  (C++20 起)或枚举项的标识符可以作为[表达式]使用。仅由这个标识符组成的表达式的结果，是该标识符所命名的实体。如果该标识符命名的是某个函数、变量、[模板形参对象] (C++20 起)或数据成员，那么表达式的[值类别]是*左值*，否则是*右值* (C++11 前)*纯右值* (C++11 起)（例如[枚举项]是纯右值表达式，概念的特化是  bool  纯右值  (C++20 起)）。该表达式的类型以下列方式确定：

- 否则，表达式的类型与被命名的实体的类型相同。

在非静态[成员函数]内，命名非静态成员的每个标识符  member  都隐式变换成一个类成员访问表达式  this\-\>member。

#### 无限定的标识符

除了适当声明了的标识符之外，以下各项也可以以相同方式用在表达式中：

- 函数写法的[重载运算符]名，比如  operator+  或  [operator new]；
- [用户定义转换函数]的名字，比如  operator bool；

- [模板]的名字后随它的实参列表，比如  MyTemplate<int />；
- ~  字符后随类名，比如  ~MyClass；

这些和标识符一起，被称作*无限定的标识表达式*。

#### 有限定的标识符

*有限定的标识表达式*是在无限定的标识表达式前面带上作用域解析运算符  ::，以及以作用域解析运算符分隔的包含以下任意内容的序列（可以为空）：

- 命名空间的名字
- 类的名字

例如表达式  [std::string::npos]  是命名在命名空间  std  内的类  string  中的静态成员  npos  的表达式。表达式  ::tolower  命名的是全局命名空间内的函数  tolower。表达式  ::[std::cout]  指名  std  命名空间（顶层命名空间）中的全局变量  cout。表达式  boost::signals2::connection  指名的是在  signals2  命名空间中声明的类型  connection，前者则在命名空间  boost  声明。

有限定标识符中，可能会需要以关键词  [template]  来消除[待决模板名]的歧义。

关于为有限定的标识符进行的名字查找的细节，请参见[有限定的名字查找]。

### 名字

*名字*是以下各项之一，用来代表某个实体或者某个标号：

- 标识符；
- 函数写法的重载运算符的名字（operator+、[operator new]）；
- 用户定义的转换函数的名字（operator bool）；

- 模板的名字后随它的实参列表（MyTemplate<int />）。

每个代表实体的名字都是由[声明]引入到程序中来的。代表标号的名字则既可以通过  [goto 语句]，也可以通过[带标号语句]引入到程序中来。在多个翻译单元中使用的相同名字，可以根据它的[链接]代表相同或者不同的实体。

每当编译器在程序中遇到一个未知的名字时，它就会通过进行[名字查找]来将它与引入这个名字的声明联系起来，但对模板的声明和定义中的[待决名]不会这样做。（对于这些名字，编译器需要确定它们命名的是类型、模板还是某些其他实体，这可能需要[显式消歧义]）。

### 缺陷报告

下列更改行为的缺陷报告追溯地应用于以前出版的 C++ 标准。

| 缺陷报告   | 应用于 | 出版时的行为                                                       | 正确行为             |
| ---------- | ------ | ------------------------------------------------------------------ | -------------------- |
| [CWG 1440] | C++11  | 在  `::`  之前的 decltype 表达式可以表示任意类型                   | 只能表示类和枚举类型 |
| [CWG 1963] | C++11  | 标识符中可以使用数字，非数字字符和通用字符名以外的由实现定义的字符 | 不能使用             |
| [CWG 2521] | C++11  | 字面量运算符的用户定义字符串字面量  ﻿ 中的标识符照常保留           | 规则不同             |

### 参阅

[XID\_Start]: https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers
[XID\_Continue]: https://www.unicode.org/reports/tr31/#Table_Lexical_Classes_for_Identifiers
[DerivedCoreProperties.txt]: https://www.unicode.org/Public/UCD/latest/ucd/DerivedCoreProperties.txt
[正规化形式 C]: https://www.unicode.org/charts/normalization/
[gcc （10 之前）]: https://gcc.gnu.org/wiki/FAQ#What_is_the_status_of_adding_the_UTF-8_support_for_identifier_names_in_GCC.3F
[命名]: https://zh.cppreference.com/w/cpp/language/declarations "cpp/language/declarations"
[关键词]: https://zh.cppreference.com/w/cpp/keyword "cpp/keyword"
[属性]: https://zh.cppreference.com/w/cpp/language/attributes "cpp/language/attributes"
[代用表示]: https://zh.cppreference.com/w/cpp/language/operator_alternative "cpp/language/operator alternative"
[字面量运算符]: https://zh.cppreference.com/w/cpp/language/user_literal#.E5.AD.97.E9.9D.A2.E9.87.8F.E8.BF.90.E7.AE.97.E7.AC.A6 "cpp/language/user literal"
[保留宏名]: https://zh.cppreference.com/w/cpp/preprocessor/replace "cpp/preprocessor/replace"
[僵尸名列表]: https://zh.cppreference.com/w/cpp/symbol_index/zombie_names "cpp/symbol index/zombie names"
[概念]: https://zh.cppreference.com/w/cpp/language/constraints "cpp/language/constraints"
[表达式]: https://zh.cppreference.com/w/cpp/language/expressions "cpp/language/expressions"
[模板形参对象]: https://zh.cppreference.com/w/cpp/language/template_parameters#.E9.9D.9E.E7.B1.BB.E5.9E.8B.E6.A8.A1.E6.9D.BF.E5.BD.A2.E5.8F.82 "cpp/language/template parameters"
[值类别]: https://zh.cppreference.com/w/cpp/language/value_category "cpp/language/value category"
[枚举项]: https://zh.cppreference.com/w/cpp/language/enum "cpp/language/enum"
[lambda 表达式]: https://zh.cppreference.com/w/cpp/language/lambda "cpp/language/lambda"
[类成员访问表达式]: https://zh.cppreference.com/w/cpp/language/operator_member_access "cpp/language/operator member access"
[成员函数]: https://zh.cppreference.com/w/cpp/language/member_functions "cpp/language/member functions"
[重载运算符]: https://zh.cppreference.com/w/cpp/language/operators "cpp/language/operators"
[operator new]: http://zh.cppreference.com/w/cpp/memory/new/operator_new
[用户定义转换函数]: https://zh.cppreference.com/w/cpp/language/cast_operator "cpp/language/cast operator"
[用户定义字面量运算符]: https://zh.cppreference.com/w/cpp/language/user_literal "cpp/language/user literal"
[模板]: https://zh.cppreference.com/w/cpp/language/templates "cpp/language/templates"
[decltype]: https://zh.cppreference.com/w/cpp/language/decltype "cpp/language/decltype"
[`decltype` 说明符]: https://zh.cppreference.com/w/cpp/language/decltype "cpp/language/decltype"
[std::string::npos]: http://zh.cppreference.com/w/cpp/string/basic_string/npos
[std::cout]: http://zh.cppreference.com/w/cpp/io/cout
[template]: https://zh.cppreference.com/w/cpp/keyword/template "cpp/keyword/template"
[待决模板名]: https://zh.cppreference.com/w/cpp/language/dependent_name "cpp/language/dependent name"
[有限定的名字查找]: https://zh.cppreference.com/w/cpp/language/qualified_lookup "cpp/language/qualified lookup"
[operator new]: http://zh.cppreference.com/w/cpp/memory/new/operator_new
[声明]: https://zh.cppreference.com/w/cpp/language/declarations "cpp/language/declarations"
[goto 语句]: https://zh.cppreference.com/w/cpp/language/goto "cpp/language/goto"
[带标号语句]: https://zh.cppreference.com/w/cpp/language/statements#.E6.A0.87.E5.8F.B7 "cpp/language/statements"
[链接]: https://zh.cppreference.com/w/cpp/language/storage_duration#.E9.93.BE.E6.8E.A5 "cpp/language/storage duration"
[名字查找]: https://zh.cppreference.com/w/cpp/language/lookup "cpp/language/lookup"
[待决名]: https://zh.cppreference.com/w/cpp/language/dependent_name "cpp/language/dependent name"
[显式消歧义]: https://zh.cppreference.com/w/cpp/language/dependent_name "cpp/language/dependent name"
[CWG 1440]: https://cplusplus.github.io/CWG/issues/1440.html
[CWG 1963]: https://cplusplus.github.io/CWG/issues/1963.html
[CWG 2521]: https://cplusplus.github.io/CWG/issues/2521.html
[**C 文档**]: https://zh.cppreference.com/w/c/language/identifier "c/language/identifier"
