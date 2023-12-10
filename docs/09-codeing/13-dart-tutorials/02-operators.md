---
last_update:
  date: 1702178563505
---

# 运算符

Dart supports the operators shown in the following table. The table shows Dart’s operator associativity and [operator precedence][1] from highest to lowest, which are an **approximation** of Dart’s operator relationships. You can implement many of these [operators as class members][2].  
Dart 支持下表所示的算子。该表显示了 Dart 的算子关联性和从高到低的算子优先级，这是 Dart 算子关系的近似值。您可以将其中许多运算符实现为类成员。

| Description 描述                        | Operator 算子                                          | Associativity 关联性 |
| --------------------------------------- | ------------------------------------------------------ | -------------------- |
| unary postfix 一元后缀                  | `expr++` `expr--` `()` `[]` `?[]` `.` `?.` `!`         | None 没有            |
| unary prefix 一元前缀                   | `-expr` `!expr` `~expr` `++expr` `--expr` `await expr` | None 没有            |
| multiplicative 乘法                     | `*` `/` `%` `~/`                                       | Left 左              |
| additive 添加剂                         | `+` `-`                                                | Left 左              |
| shift 转变                              | `<<` `>>` `>>>`                                        | Left 左              |
| bitwise AND 按位 AND                    | `&`                                                    | Left 左              |
| bitwise XOR 按位异或                    | `^`                                                    | Left 左              |
| bitwise OR 按位 OR                      | `\|`                                                   | Left 左              |
| relational and type test 关系和型式试验 | `>=` `>` `<=` `<` `as` `is` `is!`                      | None 没有            |
| equality 平等                           | `==` `!=`                                              | None 没有            |
| logical AND logical 和                  | `&&`                                                   | Left 左              |
| logical OR 逻辑 OR                      | `\|\|`                                                 | Left 左              |
| if null 如果为 null                     | `??`                                                   | Left 左              |
| conditional 有條件的                    | `expr1 ? expr2 : expr3`                                | Right 右             |
| cascade 级联                            | `..` `?..`                                             | Left 左              |
| assignment 分配                         | `=` `*=` `/=` `+=` `-=` `&=` `^=` 等。                 | Right 右             |

:::warning

The previous table should only be used as a helpful guide. The notion of operator precedence and associativity is an approximation of the truth found in the language grammar. You can find the authoritative behavior of Dart’s operator relationships in the grammar defined in the [Dart language specification][3].  
上表仅应用作有用的指南。运算符优先级和关联性的概念是语言语法中发现的真理的近似值。你可以在 Dart 语言规范中定义的语法中找到 Dart 运算符关系的权威行为。

:::

When you use operators, you create expressions. Here are some examples of operator expressions:  
使用运算符时，将创建表达式。以下是运算符表达式的一些示例：

```dart
a++
a + b
a = b
a == b
c ? a : b
a is T
```

## Operator precedence example 运算符优先级示例

In the [operator table][4], each operator has higher precedence than the operators in the rows that follow it. For example, the multiplicative operator `%` has higher precedence than (and thus executes before) the equality operator `==`, which has higher precedence than the logical AND operator `&&`. That precedence means that the following two lines of code execute the same way:  
在运算符表中，每个运算符的优先级都高于其后面行中的运算符。例如，乘法运算符的优先级高于相等运算符（因此在相等运算符之前执行），相等运算 `%` 符 `==` 的优先级高于逻辑 AND 运算符 `&&` 。该优先级意味着以下两行代码的执行方式相同：

```dart
// Parentheses improve readability.
if ((n % i == 0) && (d % i == 0)) ...

// Harder to read, but equivalent.
if (n % i == 0 && d % i == 0) ...
```

:::warning

For operators that take two operands, the leftmost operand determines which method is used. For example, if you have a `Vector` object and a `Point` object, then `aVector + aPoint` uses `Vector` addition (`+`).  
对于采用两个操作数的运算符，最左边的操作数确定使用哪种方法。例如，如果您有一个 `Vector` 对象和一个 `Point` 对象，则 `aVector + aPoint` 使用 `Vector` 加法 （ `+` ）。

:::

## Arithmetic operators 算术运算符

Dart supports the usual arithmetic operators, as shown in the following table.  
Dart 支持常用的算术运算符，如下表所示。

| Operator 算子 | Meaning 意义                                                                                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `+`           | Add                                                                                                                    |
| `-`           | Subtract 减去                                                                                                          |
| `-expr`       | Unary minus, also known as negation (reverse the sign of the expression)<br />一元减号，也称为否定（反转表达式的符号） |
| `*`           | Multiply 乘                                                                                                            |
| `/`           | Divide 分                                                                                                              |
| `~/`          | Divide, returning an integer result<br />除法，返回整数结果                                                            |
| `%`           | Get the remainder of an integer division (modulo)<br />获取整数除法（模）的余数                                        |

Example: 例：

```dart
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // Result is a double
assert(5 ~/ 2 == 2); // Result is an int
assert(5 % 2 == 1); // Remainder

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');
```

Dart also supports both prefix and postfix increment and decrement operators.  
Dart 还支持前缀和后缀递增和递减运算符。

| Operator 算子 | Meaning 意义                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------- |
| `++var`       | `var = var + 1` (expression value is `var + 1`)<br />`var = var + 1` （表达式值为 `var + 1` ） |
| `var++`       | `var = var + 1` (expression value is `var`)<br />`var = var + 1` （表达式值为 `var` ）         |
| `--var`       | `var = var - 1` (expression value is `var - 1`)<br />`var = var - 1` （表达式值为 `var - 1` ） |
| `var--`       | `var = var - 1` (expression value is `var`)<br />`var = var - 1` （表达式值为 `var` ）         |

Example: 例：

```dart
int a;
int b;

a = 0;
b = ++a; // Increment a before b gets its value.
assert(a == b); // 1 == 1

a = 0;
b = a++; // Increment a after b gets its value.
assert(a != b); // 1 != 0

a = 0;
b = --a; // Decrement a before b gets its value.
assert(a == b); // -1 == -1

a = 0;
b = a--; // Decrement a after b gets its value.
assert(a != b); // -1 != 0
```

## Equality and relational operators 相等和关系运算符

The following table lists the meanings of equality and relational operators.  
下表列出了相等和关系运算符的含义。

| Operator 算子 | Meaning 意义                                            |
| ------------- | ------------------------------------------------------- |
| `==`          | Equal; see discussion below<br />平等；请参阅下面的讨论 |
| `!=`          | Not equal 不相等                                        |
| `>`           | Greater than 大于                                       |
| `<`           | Less than 小于                                          |
| `>=`          | Greater than or equal to<br />大于或等于                |
| `<=`          | Less than or equal to<br />小于或等于                   |

To test whether two objects x and y represent the same thing, use the `==` operator. (In the rare case where you need to know whether two objects are the exact same object, use the [identical()][5] function instead.) Here’s how the `==` operator works:  
若要测试两个对象 x 和 y 是否表示同一事物，请使用 `==` 运算符。（在极少数情况下，您需要知道两个对象是否完全相同的对象，请改用 identical（） 函数。 `==` 以下是运算符的工作方式：

1.  If _x_ or _y_ is null, return true if both are null, and false if only one is null.  
    如果 x 或 y 为 null，则如果两者都为 null，则返回 true，如果只有一个为 null，则返回 false。
2.  Return the result of invoking the `==` method on _x_ with the argument _y_. (That’s right, operators such as `==` are methods that are invoked on their first operand. For details, see [Operators][6].)  
    返回使用参数 y 在 x 上调用 `==` 方法的结果。 （没错，运算符 such as `==` are 在其第一个操作数上调用的方法。有关详细信息，请参阅运算符。

Here’s an example of using each of the equality and relational operators:  
下面是使用每个相等和关系运算符的示例：

```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

## Type test operators 型式试验操作员

The `as`, `is`, and `is!` operators are handy for checking types at runtime.  
`as` 、 `is` 和 `is!` 运算符对于在运行时检查类型非常方便。

| Operator 算子 | Meaning 意义                                                                              |
| ------------- | ----------------------------------------------------------------------------------------- |
| `as`          | Typecast (also used to specify [library prefixes][7])<br />类型转换（也用于指定库前缀）   |
| `is`          | True if the object has the specified type<br />如果对象具有指定的类型，则为 True          |
| `is!`         | True if the object doesn’t have the specified type<br />如果对象没有指定的类型，则为 True |

The result of `obj is T` is true if `obj` implements the interface specified by `T`. For example, `obj is Object?` is always true.  
如果 `obj` 实现 指定的 `T` 接口，则结果 `obj is T` 为 true。例如， `obj is Object?` 始终为 true。

Use the `as` operator to cast an object to a particular type if and only if you are sure that the object is of that type. Example:  
当且仅当确定对象属于该类型时，使用 `as` 运算符将对象强制转换为该类型。例：

```dart
(employee as Person).firstName = 'Bob';
```

If you aren’t sure that the object is of type `T`, then use `is T` to check the type before using the object.  
如果您不确定对象的类型 `T` 是否为 ，则在使用对象之前检查 `is T` 类型。

```dart
if (employee is Person) {
  // Type check
  employee.firstName = 'Bob';
}
```

:::note

The code isn’t equivalent. If `employee` is null or not a `Person`, the first example throws an exception; the second does nothing.  
代码不等效。如果 `employee` is null 或 not a `Person` ，则第一个示例将引发异常;第二个什么都不做。

:::

## Assignment operators 赋值运算符

As you’ve already seen, you can assign values using the `=` operator. To assign only if the assigned-to variable is null, use the `??=` operator.  
如您所见，您可以使用 `=` 运算符赋值。若要仅在 assigned-to 变量为 null 时赋值，请使用 `??=` 运算符。

```dart
// Assign value to a
a = value;
// Assign value to b if b is null; otherwise, b stays the same
b ??= value;
```

Compound assignment operators such as `+=` combine an operation with an assignment.  
复合赋值运算符，例如 `+=` 将运算与赋值组合在一起。

<div style={{columnWidth:"6em"}}>

- `=`
- `*=`
- `%=`
- `>>>=`
- `^=`
- `+=`
- `/=`
- `<<=`
- `&=`
- `|=`
- `-=`
- `~/=`
- `>>=`

</div>

Here’s how compound assignment operators work:  
复合赋值运算符的工作原理如下：

|                                               | Compound assignment<br />复合分配 | Equivalent expression<br />等效表达式 |
| --------------------------------------------- | --------------------------------- | ------------------------------------- |
| **For an operator _op_:<br />对于算子操作：** | `a _op_= b`                       | `a = a _op_ b`                        |
| **Example:<br />例：**                        | `a += b`                          | `a = a + b`                           |

The following example uses assignment and compound assignment operators:  
以下示例使用赋值和复合赋值运算符：

```dart
var a = 2; // Assign using =
a *= 3; // Assign and multiply: a = a * 3
assert(a == 6);
```

## Logical operators 逻辑运算符

You can invert or combine boolean expressions using the logical operators.  
您可以使用逻辑运算符反转或组合布尔表达式。

| Operator 算子 | Meaning 意义                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `!expr`       | inverts the following expression (changes false to true, and vice versa)<br />反转以下表达式（将 false 更改为 true，反之亦然） |
| `\|\|`        | logical OR 逻辑 OR                                                                                                             |
| `&&`          | logical AND logical 和                                                                                                         |

Here’s an example of using the logical operators:  
下面是使用逻辑运算符的示例：

```dart
if (!done && (col == 0 || col == 3)) {
  // ...Do something...
}
```

## Bitwise and shift operators 按位运算符和移位运算符

You can manipulate the individual bits of numbers in Dart. Usually, you’d use these bitwise and shift operators with integers.  
您可以在 Dart 中操作数字的各个位。通常，您会将这些按位运算符和移位运算符与整数一起使用。

| Operator 算子 | Meaning 意义                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------- |
| `&`           | AND                                                                                          |
| `\|`          | OR                                                                                           |
| `^`           | XOR                                                                                          |
| `~expr`       | Unary bitwise complement (0s become 1s; 1s become 0s)<br />一元按位补码（0 变为 1;1 变为 0） |
| `<<`          | Shift left 左移                                                                              |
| `>>`          | Shift right 右移                                                                             |
| `>>>`         | Unsigned shift right 无符号右移                                                              |

:::note

The behavior of bitwise operations with large or negative operands might differ between platforms. To learn more, check out [Bitwise operations platform differences][8].  
注意：具有大操作数或负操作数的按位运算的行为可能因平台而异。要了解更多信息，请查看 Bitwise 操作平台差异。

:::

Here’s an example of using bitwise and shift operators:  
下面是使用按位运算符和移位运算符的示例：

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR

assert((value << 4) == 0x220); // Shift left
assert((value >> 4) == 0x02); // Shift right

// Shift right example that results in different behavior on web
// because the operand value changes when masked to 32 bits:
assert((-value >> 4) == -0x03);

assert((value >>> 4) == 0x02); // Unsigned shift right
assert((-value >>> 4) > 0); // Unsigned shift right
```

:::tip 版本说明

The `>>>` operator (known as _triple-shift_ or _unsigned shift_) requires a [language version][9] of at least 2.14.  
`>>>` 运算符（称为三班或无符号班）需要至少 2.14 的语言版本。

:::

## Conditional expressions 条件表达式

Dart has two operators that let you concisely evaluate expressions that might otherwise require [if-else][10] statements:  
Dart 有两个运算符，可以让你简洁地计算可能需要 if-else 语句的表达式：

`condition ? expr1 : expr2`

If condition is true, evaluates expr1 (and returns its value); otherwise, evaluates and returns the value of expr2.  
如果条件为 true，则计算 expr1（并返回其值）;否则，计算并返回 expr2 的值。

`expr1 ?? expr2`

If expr1 is non-null, returns its value; otherwise, evaluates and returns the value of expr2.  
如果 expr1 为非 null，则返回其值;否则，计算并返回 expr2 的值。

When you need to assign a value based on a boolean expression, consider using `?` and `:`.  
当您需要根据布尔表达式赋值时，请考虑使用 `?` 和 `:` 。

```dart
var visibility = isPublic ? 'public' : 'private';
```

If the boolean expression tests for null, consider using `??`.  
如果布尔表达式测试 null，请考虑使用 `??` .

```dart
String playerName(String? name) => name ?? 'Guest';
```

The previous example could have been written at least two other ways, but not as succinctly:  
前面的例子至少可以用另外两种方式编写，但不会那么简洁：

```dart
// Slightly longer version uses ?: operator.
String playerName(String? name) => name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String? name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}
```

## Cascade notation 级联表示法

Cascades (`..`, `?..`) allow you to make a sequence of operations on the same object. In addition to accessing instance members, you can also call instance methods on that same object. This often saves you the step of creating a temporary variable and allows you to write more fluid code.  
级联 （ `..` ， `?..` ） 允许您对同一对象进行一系列操作。除了访问实例成员之外，还可以对同一对象调用实例方法。这通常可以节省创建临时变量的步骤，并允许您编写更流畅的代码。

Consider the following code:  
请考虑以下代码：

```dart
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;
```

The constructor, `Paint()`, returns a `Paint` object. The code that follows the cascade notation operates on this object, ignoring any values that might be returned.  
构造函数 ， `Paint()` 返回一个 `Paint` 对象。级联表示法后面的代码对此对象进行操作，忽略可能返回的任何值。

The previous example is equivalent to this code:  
前面的示例等效于以下代码：

```dart
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
```

If the object that the cascade operates on can be null, then use a _null-shorting_ cascade (`?..`) for the first operation. Starting with `?..` guarantees that none of the cascade operations are attempted on that null object.  
如果级联操作的对象可以为 null，则使用空短路级联 （ `?..` ） 进行第一次操作。从 开始 `?..` 保证不会尝试对该 null 对象执行任何级联操作。

```dart
querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'))
  ..scrollIntoView();
```

:::tip 版本说明

The `?..` syntax requires a [language version][11] of at least 2.12.  
语法 `?..` 要求语言版本至少为 2.12。

:::

The previous code is equivalent to the following:  
前面的代码等效于以下内容：

```dart
var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
button?.scrollIntoView();
```

You can also nest cascades. For example:  
还可以嵌套级联。例如：

```dart
final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```

Be careful to construct your cascade on a function that returns an actual object. For example, the following code fails:  
在返回实际对象的函数上构造级联时要小心。例如，以下代码失败：

```dart
var sb = StringBuffer();
sb.write('foo')
  ..write('bar'); // Error: method 'write' isn't defined for 'void'.
```

The `sb.write()` call returns void, and you can’t construct a cascade on `void`.  
`sb.write()` 调用返回 void，并且无法在 上 `void` 构造级联。

:::note

Strictly speaking, the “double dot” notation for cascades isn’t an operator. It’s just part of the Dart syntax.  
严格来说，级联的“双点”表示法不是运算符。这只是 Dart 语法的一部分。

:::

## Other operators 其他运营商

You’ve seen most of the remaining operators in other examples:  
在其他示例中，您已经看到了大多数剩余的运算符：

| Operator 算子 | Name 名字                                     | Meaning 意义                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `()`          | Function application 功能应用                 | Represents a function call 表示函数调用                                                                                                                                                                                                                                                                                                                                                                                                         |
| `[]`          | Subscript access 下标访问                     | Represents a call to the overridable `[]` operator; example: `fooList[1]` passes the int `1` to `fooList` to access the element at index `1`<br />表示对可 `[]` 重写运算符的调用;示例： `fooList[1]` 将 int `1` 传递给 `fooList` 以访问索引 `1` 处的元素                                                                                                                                                                                        |
| `?[]`         | Conditional subscript access 有条件的下标访问 | Like `[]`, but the leftmost operand can be null; example: `fooList?[1]` passes the int `1` to `fooList` to access the element at index `1` unless `fooList` is null (in which case the expression evaluates to null)<br />像 ， `[]` 但最左边的操作数可以是空的;示例： `fooList?[1]` 将 int `1` 传递给 `fooList` 以访问索引 `1` 处的元素，除非 `fooList` 为 null（在这种情况下，表达式的计算结果为 null）                                       |
| `.`           | Member access 会员访问                        | Refers to a property of an expression; example: `foo.bar` selects property `bar` from expression `foo`<br />指表达式的属性;示例： `foo.bar` 从表达式 `foo` 中选择属性 `bar`                                                                                                                                                                                                                                                                     |
| `?.`          | Conditional member access 条件成员访问        | Like `.`, but the leftmost operand can be null; example: `foo?.bar` selects property `bar` from expression `foo` unless `foo` is null (in which case the value of `foo?.bar` is null)<br />像 ， `.` 但最左边的操作数可以是空的;示例： `foo?.bar` 从表达式 `foo` 中选择属性 `bar` ，除非 `foo` 为 null（在这种情况下，值 `foo?.bar` 为 null）                                                                                                   |
| `!`           | Null assertion operator Null 断言运算符       | Casts an expression to its underlying non-nullable type, throwing a runtime exception if the cast fails; example: `foo!.bar` asserts `foo` is non-null and selects the property `bar`, unless `foo` is null in which case a runtime exception is thrown<br />将表达式强制转换为其基础不可为 null 类型，如果强制转换失败，则引发运行时异常;示例： `foo!.bar` asserts `foo` 为非 null 并选择属性 `bar` ，除非 `foo` 为 null，否则将引发运行时异常 |

For more information about the `.`, `?.`, and `..` operators, see [Classes][12].  
有关 `.` 、 `?.` 和 `..` 运算符的详细信息，请参阅类。

[1]: https://dart.dev/language/operators#operator-precedence-example
[2]: https://dart.dev/language/methods#operators
[3]: https://dart.dev/guides/language/spec
[4]: https://dart.dev/language/operators#operators
[5]: https://api.dart.dev/stable/dart-core/identical.html
[6]: https://dart.dev/language/methods#operators
[7]: https://dart.dev/language/libraries#specifying-a-library-prefix
[8]: https://dart.dev/guides/language/numbers#bitwise-operations
[9]: https://dart.dev/guides/language/evolution#language-versioning
[10]: https://dart.dev/language/branches#if
[11]: https://dart.dev/guides/language/evolution#language-versioning
[12]: https://dart.dev/language/classes
