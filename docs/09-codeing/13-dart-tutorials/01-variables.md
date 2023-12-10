---
last_update:
  date: 1702174266022
---

# 变量

Here’s an example of creating a variable and initializing it:  
下面是创建变量并初始化它的示例：

```dart
var name = 'Bob';
```

Variables store references. The variable called `name` contains a reference to a `String` object with a value of “Bob”.  
变量存储引用。调用 `name` 的变量包含对值为“Bob”的 `String` 对象的引用。

The type of the `name` variable is inferred to be `String`, but you can change that type by specifying it. If an object isn’t restricted to a single type, specify the `Object` type (or `dynamic` if necessary).  
`name` 变量的类型被推断为 `String` ，但您可以通过指定它来更改该类型。如果对象不限于单个类型，请指定 `Object` 类型（或 `dynamic` 如有必要）。

```dart
Object name = 'Bob';
```

Another option is to explicitly declare the type that would be inferred:  
另一种选择是显式声明要推断的类型：

```dart
String name = 'Bob';
```

:::note

This page follows the [style guide recommendation][1] of using `var`, rather than type annotations, for local variables.  
本页遵循样式指南建议，即对局部变量使用 `var` ，而不是类型注释。

:::

## Null safety 零安全

The Dart language enforces sound null safety.  
Dart 语言强制执行声音零安全。

Null safety prevents an error that results from unintentional access of variables set to `null`. The error is called a null dereference error. A null dereference error occurs when you access a property or call a method on an expression that evaluates to `null`. An exception to this rule is when `null` supports the property or method, like `toString()` or `hashCode`. With null safety, the Dart compiler detects these potential errors at compile time.  
空安全可防止因无意中访问设置为 的变量而导致 `null` 的错误。该错误称为 null 取消引用错误。当您访问属性或对计算结果为 的 `null` 表达式调用方法时，会发生 null 取消引用错误。此规则的一个例外情况是，当支持属性或方法时 `null` ，例如 `toString()` 或 `hashCode` 。在空安全的情况下，Dart 编译器会在编译时检测到这些潜在的错误。

For example, say you want to find the absolute value of an `int` variable `i`. If `i` is `null`, calling `i.abs()` causes a null dereference error. In other languages, trying this could lead to a runtime error, but Dart’s compiler prohibits these actions. Therefore, Dart apps can’t cause runtime errors.  
例如，假设您要查找变量 `int` `i` 的绝对值。如果 `i` 是 `null` ，则调用 `i.abs()` 会导致 null 取消引用错误。在其他语言中，尝试这样做可能会导致运行时错误，但 Dart 的编译器禁止这些操作。因此，Dart 应用程序不会导致运行时错误。

Null safety introduces three key changes:  
Null 安全性引入了三个关键更改：

1.  When you specify a type for a variable, parameter, or another relevant component, you can control whether the type allows `null`. To enable nullability, you add a `?` to the end of the type declaration.  
    为变量、参数或其他相关组件指定类型时，可以控制该类型是否允许 `null` 。若要启用可为 null 性，请在类型声明的末尾添加 a `?` 。

    ```dart
    String? name  // Nullable type. Can be `null` or string.

    String name   // Non-nullable type. Cannot be `null` but can be string.
    ```

2.  You must initialize variables before using them. Nullable variables default to `null`, so they are initialized by default. Dart doesn’t set initial values to non-nullable types. It forces you to set an initial value. Dart doesn’t allow you to observe an uninitialized variable. This prevents you from accessing properties or calling methods where the receiver’s type can be `null` but `null` doesn’t support the method or property used.  
    在使用变量之前，必须初始化变量。可为 null 的变量默认为 `null` ，因此默认情况下会初始化它们。Dart 不会将初始值设置为不可为 null 的类型。它强制您设置初始值。Dart 不允许你观察未初始化的变量。这会阻止您访问属性或调用接收器类型可以是 `null` 但 `null` 不支持使用的方法或属性的方法。
3.  You can’t access properties or call methods on an expression with a nullable type. The same exception applies where it’s a property or method that `null` supports like `hashCode` or `toString()`.  
    不能访问属性或调用具有可为 null 类型的表达式的方法。如果是 `null` 支持 like `hashCode` 或 的属性或 `toString()` 方法，则相同的例外情况也适用。

Sound null safety changes potential **runtime errors** into **edit-time** analysis errors. Null safety flags a non-null variable when it has been either:  
健全的 null 安全性将潜在的运行时错误更改为编辑时分析错误。当非 null 变量出现以下任一情况时，Null 安全标记该变量：

- Not initialized with a non-null value.  
  未使用非 null 值进行初始化。
- Assigned a `null` value.  
  已分配值 `null` 。

This check allows you to fix these errors _before_ deploying your app.  
通过此检查，可以在部署应用之前修复这些错误。

## Default value 默认值

Uninitialized variables that have a nullable type have an initial value of `null`. Even variables with numeric types are initially null, because numbers—like everything else in Dart—are objects.  
具有可为 null 类型的未初始化变量的初始值为 `null` 。即使是具有数值类型的变量最初也是空的，因为数字（就像 Dart 中的其他所有内容一样）都是对象。

```dart
int? lineCount;
assert(lineCount == null);
```

:::note

Production code ignores the `assert()` call. During development, on the other hand, `assert(_condition_)` throws an exception if _condition_ is false. For details, check out [Assert][2].  
生产代码会忽略调用 `assert()` 。另一方面，在开发过程中， `assert(_condition_)` 如果条件为 false，则会引发异常。有关详细信息，请查看 Assert。

:::

With null safety, you must initialize the values of non-nullable variables before you use them:  
使用 null 安全时，必须先初始化不可为 null 的变量的值，然后才能使用它们：

```dart
int lineCount = 0;
```

You don’t have to initialize a local variable where it’s declared, but you do need to assign it a value before it’s used. For example, the following code is valid because Dart can detect that `lineCount` is non-null by the time it’s passed to `print()`:  
您不必在声明局部变量的位置对其进行初始化，但需要在使用之前为其分配一个值。例如，以下代码是有效的，因为 Dart 可以在传递给 `print()` 时检测到 `lineCount` 非 null：

```dart
int lineCount;

if (weLikeToCount) {
  lineCount = countLines();
} else {
  lineCount = 0;
}

print(lineCount);
```

Top-level and class variables are lazily initialized; the initialization code runs the first time the variable is used.  
顶级变量和类变量延迟初始化;初始化代码在首次使用变量时运行。

## Late variables 后期变量

The `late` modifier has two use cases:  
修 `late` 饰符有两个用例：

- Declaring a non-nullable variable that’s initialized after its declaration.  
  声明一个不可为 null 的变量，该变量在其声明后初始化。
- Lazily initializing a variable.  
  延迟初始化变量。

Often Dart’s control flow analysis can detect when a non-nullable variable is set to a non-null value before it’s used, but sometimes analysis fails. Two common cases are top-level variables and instance variables: Dart often can’t determine whether they’re set, so it doesn’t try.  
通常，Dart 的控制流分析可以在使用不可为 null 的变量之前检测该变量何时设置为非 null 值，但有时分析会失败。两种常见的情况是顶级变量和实例变量： Dart 通常无法确定它们是否被设置，因此它不会尝试。

If you’re sure that a variable is set before it’s used, but Dart disagrees, you can fix the error by marking the variable as `late`:  
如果你确定一个变量在使用之前已经设置好了，但 Dart 不同意，你可以通过将变量标记为 `late` ：

```dart
// highlight-next-line
late String description;

void main() {
  description = 'Feijoada!';
  print(description);
}
```

:::warning

If you fail to initialize a `late` variable, a runtime error occurs when the variable is used.  
如果 `late` 初始化变量失败，则在使用该变量时会发生运行时错误。

:::

When you mark a variable as `late` but initialize it at its declaration, then the initializer runs the first time the variable is used. This lazy initialization is handy in a couple of cases:  
如果将变量标记为 但在 `late` 声明时对其进行初始化，则初始值设定项将在首次使用该变量时运行。这种延迟初始化在以下几种情况下非常方便：

- The variable might not be needed, and initializing it is costly.  
  该变量可能不需要，并且初始化它的成本很高。
- You’re initializing an instance variable, and its initializer needs access to `this`.  
  您正在初始化实例变量，其初始值设定项需要访问 `this` 。

In the following example, if the `temperature` variable is never used, then the expensive `readThermometer()` function is never called:  
在以下示例中，如果从未使用过该 `temperature` 变量，则永远不会调用开销 `readThermometer()` 函数：

```dart
// This is the program's only call to readThermometer().
// highlight-next-line
late String temperature = readThermometer(); // Lazily initialized.
```

## Final and const Final 和 const

If you never intend to change a variable, use `final` or `const`, either instead of `var` or in addition to a type. A final variable can be set only once; a const variable is a compile-time constant. (Const variables are implicitly final.)  
如果您从不打算更改变量，请使用 `final` 或 `const` 代替类型 `var` 或补充类型。最后一个变量只能设置一次;const 变量是编译时常量。（Const 变量是隐式 final。

:::note

[Instance variables][3] can be `final` but not `const`.  
实例变量可以是 `final` ，但不能 `const` 。

:::

Here’s an example of creating and setting a `final` variable:  
下面是创建和设置 `final` 变量的示例：

```dart
final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';
```

You can’t change the value of a `final` variable:  
您无法更改 `final` 变量的值：

```dart
// error-next-line
name = 'Alice'; // Error: a final variable can only be set once.
```

Use `const` for variables that you want to be **compile-time constants**. If the const variable is at the class level, mark it `static const`. Where you declare the variable, set the value to a compile-time constant such as a number or string literal, a const variable, or the result of an arithmetic operation on constant numbers:  
用于 `const` 要作为编译时常量的变量。如果 const 变量处于类级别，请将其 `static const` 标记为 。在声明变量时，将值设置为编译时常量，例如数字或字符串文本、const 变量或常量数的算术运算结果：

```dart
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

The `const` keyword isn’t just for declaring constant variables. You can also use it to create constant _values_, as well as to declare constructors that _create_ constant values. Any variable can have a constant value.  
该 `const` 关键字不仅用于声明常量变量。还可以使用它来创建常量值，以及声明创建常量值的构造函数。任何变量都可以具有常量值。

```dart
var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`
```

You can omit `const` from the initializing expression of a `const` declaration, like for `baz` above. For details, see [DON’T use const redundantly][4].  
您可以从 `const` 声明的初始化表达式中省略， `const` 如上所述 `baz` 。有关详细信息，请参阅不要冗余地使用 const。

You can change the value of a non-final, non-const variable, even if it used to have a `const` value:  
您可以更改非最终、非常量变量的值，即使它曾经有一个 `const` 值：

```dart
foo = [1, 2, 3]; // Was const []
```

You can’t change the value of a `const` variable:  
您无法更改 `const` 变量的值：

```dart
// error-next-line
baz = [42]; // Error: Constant variables can't be assigned a value.
```

You can define constants that use [type checks and casts][5] (`is` and `as`), [collection `if`][6], and [spread operators][7] (`...` and `...?`):  
您可以定义使用类型检查和强制转换 （ 和 ）、集合 `if` 和扩展运算符 （ `...` `is` 和 `as` `...?` ） 的常量：

```dart
const Object i = 3; // Where i is a const Object with an int value...
const list = [i as int]; // Use a typecast.
const map = {if (i is int) i: 'int'}; // Use is and collection if.
const set = {if (list is List<int>) ...list}; // ...and a spread.
```

:::note

Although a `final` object cannot be modified, its fields can be changed. In comparison, a `const` object and its fields cannot be changed: they’re _immutable_.  
虽然 `final` 无法修改对象，但可以更改其字段。相比之下， `const` 对象及其字段是无法更改的：它们是不可变的。

:::

For more information on using `const` to create constant values, see [Lists][8], [Maps][9], and [Classes][10].  
有关用于 `const` 创建常量值的更多信息，请参见列表、映射和类。

[1]: https://dart.dev/effective-dart/design#types
[2]: https://dart.dev/language/error-handling#assert
[3]: https://dart.dev/language/classes#instance-variables
[4]: https://dart.dev/effective-dart/usage#dont-use-const-redundantly
[5]: https://dart.dev/language/operators#type-test-operators
[6]: https://dart.dev/language/collections#control-flow-operators
[7]: https://dart.dev/language/collections#spread-operators
[8]: https://dart.dev/language/collections#lists
[9]: https://dart.dev/language/collections#maps
[10]: https://dart.dev/language/classes
