---
last_update:
  date: 1702179502788
---

# Dart 简介

This page provides a brief introduction to the Dart language through samples of its main features.  
本页通过 Dart 语言的主要功能示例对 Dart 语言进行了简要介绍。

To learn more about the Dart language, visit the in-depth, individual topic pages listed under **Language** in the left side menu.  
要了解有关 Dart 语言的更多信息，请访问左侧菜单中“语言”下列出的深入的各个主题页面。

For coverage of Dart’s core libraries, check out the [library tour][1]. You can also visit the [Dart cheatsheet codelab][2], for a more hands-on introduction.  
有关 Dart 核心库的报道，请查看图书馆导览。您还可以访问 Dart 备忘单 Codelab，获取更多动手介绍。

## Hello World 世界您好

Every app requires the top-level `main()` function, where execution starts. Functions that don’t explicitly return a value have the `void` return type. To display text on the console, you can use the top-level `print()` function:  
每个应用都需要顶级函数，从该 `main()` 函数开始执行。不显式返回值的函数具有 `void` 返回类型。若要在控制台上显示文本，可以使用顶级 `print()` 函数：

```dart
void main() {
  print('Hello, World!');
}
```

Read more about [the `main()` function][3] in Dart, including optional parameters for command-line arguments.  
阅读有关 Dart 中 `main()` 函数的更多信息，包括命令行参数的可选参数。

## Variables 变量

Even in [type-safe][4] Dart code, you can declare most variables without explicitly specifying their type using `var`. Thanks to type inference, these variables’ types are determined by their initial values:  
即使在类型安全的 Dart 代码中，也可以声明大多数变量，而无需使用 `var` 显式指定其类型。由于类型推断，这些变量的类型由其初始值决定：

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

[Read more][5] about variables in Dart, including default values, the `final` and `const` keywords, and static types.  
阅读有关 Dart 中的变量的更多信息，包括默认值、 `final` 和 `const` 关键字以及静态类型。

## Control flow statements 控制流语句

Dart supports the usual control flow statements:  
Dart 支持常用的控制流语句：

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```

Read more about control flow statements in Dart, including [`break` and `continue`][6], [`switch` and `case`][7], and [`assert`][8].  
阅读有关 Dart 中的控制流语句的更多信息，包括 `break` 和 、 `switch` 和 `case` `assert` `continue` 。

## Functions 功能

[We recommend][9] specifying the types of each function’s arguments and return value:  
建议指定每个函数的参数和返回值的类型：

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

A shorthand `=>` (_arrow_) syntax is handy for functions that contain a single statement. This syntax is especially useful when passing anonymous functions as arguments:  
速记 `=>` （箭头）语法对于包含单个语句的函数非常方便。当将匿名函数作为参数传递时，此语法特别有用：

```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);
```

Besides showing an anonymous function (the argument to `where()`), this code shows that you can use a function as an argument: the top-level `print()` function is an argument to `forEach()`.  
除了显示匿名函数（参数 的参数）之外，此代码还显示您可以使用函数作为参数：顶级 `print()` 函数是 的 `forEach()` 参数 `where()` 。

[Read more][10] about functions in Dart, including optional parameters, default parameter values, and lexical scope.  
阅读有关 Dart 中的函数的更多信息，包括可选参数、默认参数值和词法范围。

## Comments 评论

Dart comments usually start with `//`.  
Dart 注释通常以 `//` .

```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */
```

[Read more][11] about comments in Dart, including how the documentation tooling works.  
阅读有关 Dart 中注释的更多信息，包括文档工具的工作原理。

## Imports 进口

To access APIs defined in other libraries, use `import`.  
要访问其他库中定义的 API，请使用 `import` .

```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

[Read more][12] about libraries and visibility in Dart, including library prefixes, `show` and `hide`, and lazy loading through the `deferred` keyword.  
阅读有关 Dart 中的库和可见性的更多信息，包括库前缀和 `show` `hide` ，以及通过 `deferred` 关键字延迟加载。

## Classes 类

Here’s an example of a class with three properties, two constructors, and a method. One of the properties can’t be set directly, so it’s defined using a getter method (instead of a variable).  
下面是一个具有三个属性、两个构造函数和一个方法的类的示例。其中一个属性不能直接设置，因此它是使用 getter 方法（而不是变量）定义的。  
The method uses string interpolation to print variables’ string equivalents inside of string literals.  
该方法使用字符串插值在字符串文本中打印变量的字符串等效项。

```dart
class Spacecraft {
  String name;
  DateTime? launchDate;

  // Read-only non-final property
  int? get launchYear => launchDate?.year;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  // Method.
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}
```

[Read more][13] about strings, including string interpolation, literals, expressions, and the `toString()` method.  
阅读有关字符串的详细信息，包括字符串插值、文本、表达式和 `toString()` 方法。

You might use the `Spacecraft` class like this:  
您可以像这样使用该 `Spacecraft` 类：

```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```

[Read more][14] about classes in Dart, including initializer lists, optional `new` and `const`, redirecting constructors, `factory` constructors, getters, setters, and much more.  
阅读有关 Dart 中的类的更多信息，包括初始值设定项列表、可选 `new` 和 `const` 重定向构造函数、构造函数、 `factory` getter 和 setters 等等。

## Enums 枚举

Enums are a way of enumerating a predefined set of values or instances in a way which ensures that there cannot be any other instances of that type.  
枚举是一种枚举一组预定义的值或实例的方法，以确保该类型的任何其他实例。

Here is an example of a simple `enum` that defines a simple list of predefined planet types:  
下面是一个简单示例，它定义了预定义行星类型的简单 `enum` 列表：

```dart
enum PlanetType { terrestrial, gas, ice }
```

Here is an example of an enhanced enum declaration of a class describing planets, with a defined set of constant instances, namely the planets of our own solar system.  
下面是一个描述行星的类的增强枚举声明示例，具有一组定义的常量实例，即我们自己太阳系的行星。

```dart
/// Enum that enumerates the different planets in our solar system
/// and some of their properties.
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  // ···
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  /// A constant generating constructor
  const Planet(
      {required this.planetType, required this.moons, required this.hasRings});

  /// All instance variables are final
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  /// Enhanced enums support getters and other methods
  bool get isGiant =>
      planetType == PlanetType.gas || planetType == PlanetType.ice;
}
```

You might use the `Planet` enum like this:  
您可以像这样使用 `Planet` 枚举：

```dart
final yourPlanet = Planet.earth;

if (!yourPlanet.isGiant) {
  print('Your planet is not a "giant planet".');
}
```

[Read more][15] about enums in Dart, including enhanced enum requirements, automatically introduced properties, accessing enumerated value names, switch statement support, and much more.  
阅读有关 Dart 中枚举的更多信息，包括增强的枚举要求、自动引入的属性、访问枚举值名称、switch 语句支持等等。

## Inheritance 遗产

Dart has single inheritance.  
Dart 具有单一继承权。

```dart
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}
```

[Read more][16] about extending classes, the optional `@override` annotation, and more.  
阅读有关扩展类、可选 `@override` 注释等的更多信息。

## Mixins 混合

Mixins are a way of reusing code in multiple class hierarchies. The following is a mixin declaration:  
Mixin 是一种在多个类层次结构中重用代码的方法。下面是一个 mixin 声明：

```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

To add a mixin’s capabilities to a class, just extend the class with the mixin.  
要将 mixin 的功能添加到类中，只需使用 mixin 扩展该类即可。

```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

`PilotedCraft` now has the `astronauts` field as well as the `describeCrew()` method.  
`PilotedCraft` 现在有了 `astronauts` 字段和 `describeCrew()` 方法。

[Read more][17] about mixins.  
阅读更多关于 mixins 的信息。

## Interfaces and abstract classes

接口和抽象类

All classes implicitly define an interface. Therefore, you can implement any class.  
所有类都隐式定义一个接口。因此，您可以实现任何类。

```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```

Read more about [implicit interfaces][18], or about the explicit [`interface` keyword][19].  
阅读有关隐式接口或显式 `interface` 关键字的更多信息。

You can create an abstract class to be extended (or implemented) by a concrete class. Abstract classes can contain abstract methods (with empty bodies).  
您可以创建一个抽象类，由具体类扩展（或实现）。抽象类可以包含抽象方法（具有空体）。

```dart
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```

Any class extending `Describable` has the `describeWithEmphasis()` method, which calls the extender’s implementation of `describe()`.  
任何类扩展都具有该 `describeWithEmphasis()` 方法，该方法调用扩展 `Describable` 程序的 `describe()` 实现。

[Read more][20] about abstract classes and methods.  
阅读有关抽象类和方法的更多信息。

## Async 异步

Avoid callback hell and make your code much more readable by using `async` and `await`.  
避免回调地狱，并使用 `async` 和 `await` 使您的代码更具可读性。

```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

The method above is equivalent to:  
上述方法等价于：

```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```

As the next example shows, `async` and `await` help make asynchronous code easy to read.  
如下例所示， `async` 并帮助 `await` 使异步代码易于阅读。

```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (final object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```

You can also use `async*`, which gives you a nice, readable way to build streams.  
您还可以使用 `async*` ，它为您提供了一种很好的、可读的方式来构建流。

```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (final object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```

[Read more][21] about asynchrony support, including `async` functions, `Future`, `Stream`, and the asynchronous loop (`await for`).  
阅读有关异步支持的更多信息，包括 `async` 函数、 、 `Future` `Stream` 和异步循环 （ `await for` ）。

## Exceptions 异常

To raise an exception, use `throw`:  
要引发异常，请使用 `throw` ：

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

To catch an exception, use a `try` statement with `on` or `catch` (or both):  
若要捕获异常，请使用带有 或（或 `catch` 两者）的 `try` `on` 语句：

```dart
Future<void> describeFlybyObjects(List<String> flybyObjects) async {
  try {
    for (final object in flybyObjects) {
      var description = await File('$object.txt').readAsString();
      print(description);
    }
  } on IOException catch (e) {
    print('Could not describe object: $e');
  } finally {
    flybyObjects.clear();
  }
}
```

Note that the code above is asynchronous; `try` works for both synchronous code and code in an `async` function.  
请注意，上面的代码是异步的; `try` 适用于同步代码和 `async` 函数中的代码。

[Read more][22] about exceptions, including stack traces, `rethrow`, and the difference between `Error` and `Exception`.  
阅读有关异常的更多信息，包括堆栈跟踪、 `rethrow` 以及 和 `Exception` 之间的区别 `Error` 。

## Important concepts 重要概念

As you continue to learn about the Dart language, keep these facts and concepts in mind:  
当您继续学习 Dart 语言时，请记住以下事实和概念：

- Everything you can place in a variable is an _object_, and every object is an instance of a _class_. Even numbers, functions, and `null` are objects. With the exception of `null` (if you enable [sound null safety][23]), all objects inherit from the [`Object`][24] class.  
  可以放在变量中的所有内容都是一个对象，每个对象都是一个类的实例。偶数、函数和 `null` 是对象。除了 `null` （如果启用 sound null 安全） 之外，所有对象都继承自该 `Object` 类。

  _merge_type_ **Version note:** [Null safety][25] was introduced in Dart 2.12. Using null safety requires a [language version][26] of at least 2.12.  
  版本说明：空安全是在 Dart 2.12 中引入的。使用 null 安全要求语言版本至少为 2.12。

- Although Dart is strongly typed, type annotations are optional because Dart can infer types. In `var number = 101`, `number` is inferred to be of type `int`.  
  虽然 Dart 是强类型的，但类型注解是可选的，因为 Dart 可以推断类型。在 中 `var number = 101` ， `number` 被推断为 的类型 `int` 为 。
- If you enable [null safety][27], variables can’t contain `null` unless you say they can. You can make a variable nullable by putting a question mark (`?`) at the end of its type. For example, a variable of type `int?` might be an integer, or it might be `null`. If you _know_ that an expression never evaluates to `null` but Dart disagrees, you can add `!` to assert that it isn’t null (and to throw an exception if it is). An example: `int x = nullableButNotNullInt!`  
  如果启用 null 安全，则变量不能包含，除非您说它们可以包含 `null` 。您可以通过在变量类型末尾放置问号 （ `?` ） 来使变量可为 null。例如，类型的 `int?` 变量可能是整数，也可能是 `null` 。如果你知道一个表达式的计算结果永远不会达到 `null` ，但 Dart 不同意，你可以添加 `!` 以断言它不是 null（如果是，则抛出异常）。举个例子： `int x = nullableButNotNullInt!`
- When you want to explicitly say that any type is allowed, use the type `Object?` (if you’ve enabled null safety), `Object`, or—if you must defer type checking until runtime—the [special type `dynamic`][28].  
  如果要明确说明允许任何类型，请使用该类型（如果已启用 null 安全）， `Object` 或者（如果必须将类型检查推迟到运行时）特殊类型 `dynamic` `Object?` 。
- Dart supports generic types, like `List<int>` (a list of integers) or `List<Object>` (a list of objects of any type).  
  Dart 支持泛型类型，例如 `List<int>` （整数列表）或 `List<Object>` （任何类型的对象列表）。
- Dart supports top-level functions (such as `main()`), as well as functions tied to a class or object (_static_ and _instance methods_, respectively). You can also create functions within functions (_nested_ or _local functions_).  
  Dart 支持顶级函数（例如 `main()` ），以及绑定到类或对象的函数（分别是静态方法和实例方法）。您还可以在函数（嵌套或局部函数）中创建函数。
- Similarly, Dart supports top-level _variables_, as well as variables tied to a class or object (static and instance variables). Instance variables are sometimes known as _fields_ or _properties_.  
  类似地，Dart 支持顶级变量，以及绑定到类或对象的变量（静态变量和实例变量）。实例变量有时称为字段或属性。
- Unlike Java, Dart doesn’t have the keywords `public`, `protected`, and `private`. If an identifier starts with an underscore (`_`), it’s private to its library. For details, see [Libraries and imports][29].  
  与 Java 不同，Dart 没有关键字 `public` 、 `protected` 和 `private` 。如果标识符以下划线 （ `_` ） 开头，则该标识符是其库的私有标识符。有关详细信息，请参阅库和导入。
- _Identifiers_ can start with a letter or underscore (`_`), followed by any combination of those characters plus digits.  
  标识符可以以字母或下划线 （ `_` ） 开头，后跟这些字符和数字的任意组合。
- Dart has both _expressions_ (which have runtime values) and _statements_ (which don’t). For example, the [conditional expression][30] `condition ? expr1 : expr2` has a value of `expr1` or `expr2`. Compare that to an [if-else statement][31], which has no value. A statement often contains one or more expressions, but an expression can’t directly contain a statement.  
  Dart 既有表达式（有运行时值），也有语句（没有）。例如，条件表达式 `condition ? expr1 : expr2` 的值为 `expr1` 或 `expr2` 。将其与没有价值的 if-else 语句进行比较。一个语句通常包含一个或多个表达式，但一个表达式不能直接包含一个语句。
- Dart tools can report two kinds of problems: _warnings_ and _errors_. Warnings are just indications that your code might not work, but they don’t prevent your program from executing. Errors can be either compile-time or run-time. A compile-time error prevents the code from executing at all; a run-time error results in an [exception][32] being raised while the code executes.  
  Dart 工具可以报告两种问题：警告和错误。警告只是表明您的代码可能无法正常工作，但它们不会阻止您的程序执行。错误可以是编译时错误，也可以是运行时错误。编译时错误会阻止代码执行;运行时错误会导致在代码执行时引发异常。

## Additional resources 其他资源

You can find more documentation and code samples in the [library tour][33] and the [Dart API reference][34]. This site’s code follows the conventions in the [Dart style guide][35].  
您可以在库导览和 Dart API 参考中找到更多文档和代码示例。此站点的代码遵循 Dart 风格指南中的约定。

[1]: https://dart.dev/guides/libraries/library-tour
[2]: https://dart.dev/codelabs/dart-cheatsheet
[3]: https://dart.dev/language/functions#the-main-function
[4]: https://dart.dev/language/type-system
[5]: https://dart.dev/language/variables
[6]: https://dart.dev/language/loops
[7]: https://dart.dev/language/branches
[8]: https://dart.dev/language/error-handling#assert
[9]: https://dart.dev/effective-dart/design#types
[10]: https://dart.dev/language/functions
[11]: https://dart.dev/language/comments
[12]: https://dart.dev/language/libraries
[13]: https://dart.dev/language/built-in-types#strings
[14]: https://dart.dev/language/classes
[15]: https://dart.dev/language/enums
[16]: https://dart.dev/language/extend
[17]: https://dart.dev/language/mixins
[18]: https://dart.dev/language/classes#implicit-interfaces
[19]: https://dart.dev/language/class-modifiers#interface
[20]: https://dart.dev/language/class-modifiers#abstract
[21]: https://dart.dev/language/async
[22]: https://dart.dev/language/error-handling#exceptions
[23]: https://dart.dev/null-safety
[24]: https://api.dart.dev/stable/dart-core/Object-class.html
[25]: https://dart.dev/null-safety
[26]: https://dart.dev/guides/language/evolution#language-versioning
[27]: https://dart.dev/null-safety
[28]: https://dart.dev/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking
[29]: https://dart.dev/language/libraries
[30]: https://dart.dev/language/operators#conditional-expressions
[31]: https://dart.dev/language/branches#if
[32]: https://dart.dev/language/error-handling#exceptions
[33]: https://dart.dev/guides/libraries/library-tour
[34]: https://api.dart.dev/
[35]: https://dart.dev/effective-dart/style
