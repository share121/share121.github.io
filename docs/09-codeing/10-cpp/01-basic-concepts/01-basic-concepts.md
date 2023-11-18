# 基本概念

本节定义了描述 C++ 编程语言时所使用的一些专门的术语与概念。

一个 C++ 程序是一个含有[声明](https://zh.cppreference.com/w/cpp/language/declarations "cpp/language/declarations")的文本文件（通常为头文件与源文件）序列。它们被[翻译](https://zh.cppreference.com/w/cpp/language/translation_phases "cpp/language/translation phases")成一个可执行程序，C++ 实现通过调用其[主 (main) 函数](https://zh.cppreference.com/w/cpp/language/main_function "cpp/language/main function")执行这一程序。

在 C++ 程序中，一些被称为[关键词](https://zh.cppreference.com/w/cpp/keyword "cpp/keyword")的词语有着特殊的含义。其它词语可以被用作[标识符](https://zh.cppreference.com/w/cpp/language/identifiers "cpp/language/identifiers")。在翻译的过程中，[注释](https://zh.cppreference.com/w/cpp/comment "cpp/comment")会被忽略。C++ 程序也包含[字面量](https://zh.cppreference.com/w/cpp/language/expressions#.E5.AD.97.E9.9D.A2.E9.87.8F "cpp/language/expressions")，其中的字符的值由[字符集与编码](https://zh.cppreference.com/w/cpp/language/charset "cpp/language/charset")指定。程序中的某些特定字符必须通过[转义序列](https://zh.cppreference.com/w/cpp/language/escape "cpp/language/escape")表示。

C++ 程序中的*实体*包括值、[对象](https://zh.cppreference.com/w/cpp/language/object "cpp/language/object")、[引用](https://zh.cppreference.com/w/cpp/language/reference "cpp/language/reference")、[结构化绑定](https://zh.cppreference.com/w/cpp/language/structured_binding "cpp/language/structured binding")(C++17 起)、[函数](https://zh.cppreference.com/w/cpp/language/functions "cpp/language/functions")、[枚举项](https://zh.cppreference.com/w/cpp/language/enum "cpp/language/enum")、[类型](https://zh.cppreference.com/w/cpp/language/type "cpp/language/type")、类成员、[模板](https://zh.cppreference.com/w/cpp/language/templates "cpp/language/templates")、[模板特化](https://zh.cppreference.com/w/cpp/language/template_specialization "cpp/language/template specialization")、[形参包](https://zh.cppreference.com/w/cpp/language/parameter_pack "cpp/language/parameter pack")(C++11 起)和[命名空间](https://zh.cppreference.com/w/cpp/language/namespace "cpp/language/namespace")。预处理器[宏](https://zh.cppreference.com/w/cpp/preprocessor/replace "cpp/preprocessor/replace")不是 C++ 实体。

*[声明](https://zh.cppreference.com/w/cpp/language/declarations "cpp/language/declarations")*可以引入实体，将它们与[名字](https://zh.cppreference.com/w/cpp/language/identifiers#.E5.90.8D.E5.AD.97 "cpp/language/identifiers")关联起来，并定义其属性。能够定义使用一个实体所需的所有属性的声明是[定义](https://zh.cppreference.com/w/cpp/language/definition "cpp/language/definition")。对任何被[ODR 使用](https://zh.cppreference.com/w/cpp/language/definition#ODR_.E4.BD.BF.E7.94.A8 "cpp/language/definition")的非内联函数或变量，程序中必须只含有其一个定义。

函数的定义通常包括一系列的[语句](https://zh.cppreference.com/w/cpp/language/statements "cpp/language/statements")，其中部分会包含[表达式](https://zh.cppreference.com/w/cpp/language/expressions "cpp/language/expressions")。表达式指定了程序需要进行的运算。

程序中遇到的名字通过[名字查找](https://zh.cppreference.com/w/cpp/language/lookup "cpp/language/lookup")与引入它们的声明关联起来。每个名字都只在称为其[作用域](https://zh.cppreference.com/w/cpp/language/scope "cpp/language/scope")的程序部分中有效。有些名字有[链接](https://zh.cppreference.com/w/cpp/language/storage_duration "cpp/language/storage duration")，这使得它们即使出现在不同的作用域或翻译单元时也代表相同的实体。

C++ 中的每一个对象、引用、函数和表达式都会关联一个[类型](https://zh.cppreference.com/w/cpp/language/type "cpp/language/type")。类型可以分为[基础类型](https://zh.cppreference.com/w/cpp/language/types "cpp/language/types")，复合类型，或[用户定义类型](https://zh.cppreference.com/w/cpp/language/classes "cpp/language/classes")，以及完整或[不完整](https://zh.cppreference.com/w/cpp/language/type#.E4.B8.8D.E5.AE.8C.E6.95.B4.E7.B1.BB.E5.9E.8B "cpp/language/type")的类型等。

被声明的且不是[非静态数据成员](https://zh.cppreference.com/w/cpp/language/data_members "cpp/language/data members")的对象和引用是*变量*。

## 参阅

- **基本概念** 的 [**C 文档**](https://zh.cppreference.com/w/c/language/basic_concepts "c/language/basic concepts")
