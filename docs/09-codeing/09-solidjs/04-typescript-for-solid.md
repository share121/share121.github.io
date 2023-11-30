---
last_update:
  date: 1700659769806
---

# Solid 的 TypeScript 指南

在本节中，我们将研究 Typescript 以及如何使用它来构建 Solid。对于不熟悉 Typescript 的 Javascript 开发人员来说，这部分可能看起来有点陌生，因此我们将尽最大努力将其分解。

Solid 被设计为易于与 TypeScript 一起使用：它使用标准 JSX 使代码在很大程度上被 TypeScript 理解，并且它为其 API 提供了复杂的内置类型。本指南介绍了一些使用 TypeScript 和键入 Solid 代码的有用技巧。

## [配置 Typescript][1]

[Solid 入门模板][2]为 [`tsconfig.json`][3]。

要配置预先存在的 Solid Javascript 项目以使用 Typescript，请遵循本[指南][4]。

最重要的是，要将 TypeScript 与 Solid JSX 编译器一起使用，您需要将 TypeScript 配置为不使用 JSX 构造 via [`"jsx": "preserve"`][5] ，并告诉 TypeScript JSX 类型来自哪里 [`"jsxImportSource": "solid-js"`][6] via 。因此，最小值 `tsconfig.json` 如下所示：

`{    "compilerOptions": {      "jsx": "preserve",      "jsxImportSource": "solid-js"    }  }`

If your code base uses a mix of JSX types (e.g., some files are React while other files are Solid), you can set the default `jsxImportSource` in `tsconfig.json` for the majority of your code, and then [override the `jsxImportSource` option][7] in specific `.tsx` files using the following pragma:  
如果你的代码库混合使用 JSX 类型（例如，一些文件是 React，而其他文件是 Solid），你可以 `tsconfig.json` 为大部分代码设置默认值 `jsxImportSource` ，然后使用以下编译指示覆盖特定 `.tsx` 文件中的 `jsxImportSource` 选项：

`/** @jsxImportSource solid-js */`

or

`/** @jsxImportSource react */`

In order to make use of the latter, you'll need to make sure that you have `react` and it's co-dependencies properly installed in your project, and that your project is properly setup to make use of react's JSX files.  
为了使用后者，你需要确保你的项目中正确 `react` 安装了它的共同依赖项，并且你的项目被正确设置以使用 react 的 JSX 文件。

## [API Types API 类型][8]

Solid is written in TypeScript, so everything is typed out of the box.  
Solid 是用 TypeScript 编写的，因此所有内容都是开箱即用的。

The [API documentation][9] details the types for all API calls, as well as several helpful type definitions to make it easier to refer to Solid notions when you need to specify explicit types. Here, we explore the resulting types when using a few core primitives.

### [Signals 信号][10]

`createSignal<T>` is parameterized by the type `T` of the object stored in the signal. For example:  
`createSignal<T>` 由信号中存储的对象类型 `T` 进行参数化。例如：

`const [count, setCount] = createSignal<number>();`

The above `createSignal` has the return type `Signal<number>`, corresponding to the type we passed to it. This is a tuple of the getter and setter, which each have a [generic][11] type:  
上面 `createSignal` 有 return type `Signal<number>` ，对应于我们传递给它的类型。这是 getter 和 setter 的元组，它们各有一个泛型类型：

`import type { Signal, Accessor, Setter } from "solid-js";  type Signal<T> = [get: Accessor<T>, set: Setter<T>];`

TypeScript 3.8 added a new syntax for type-only imports and exports. `import type` only imports declarations that will be used for type annotations and declarations. They will be fully erased after compilation, and will not be included in the emitted JavaScript. You can read more about them [here][12]  
TypeScript 3.8 为纯类型导入和导出添加了新语法。 `import type` 仅导入将用于类型批注和声明的声明。它们在编译后将被完全擦除，并且不会包含在发出的 JavaScript 中。你可以在这里阅读更多关于它们的信息

In this case, the signal getter `count` has type `Accessor<number | undefined>`. `Accessor<T>` is a type definition provided by Solid, in this case equivalent to `() => number | undefined`. The `| undefined` gets added in this example because we did not provide a default value to `createSignal`, so the signal value indeed starts out as `undefined`.  
在本例中，信号 getter `count` 的类型 `Accessor<number | undefined>` 为 。 `Accessor<T>` 是 Solid 提供的类型定义，在本例中等效于 `() => number | undefined` 。在此示例中 `| undefined` 添加了 ，因为我们没有为 `createSignal` 提供默认值，因此信号值确实以 开头。 `undefined`

The signal setter `setCount` has type `Setter<number>`, which is a more complicated type definition corresponding roughly to `(value?: number | ((prev?: number) => number)) => number`, representing the two possibilities for the passed argument: you can call `setCount` with either a `number` or a function taking the previous value (if there was one) and returning a `number`. Note that again, both the `number` and the `number` parameter for the function are optional, since the signal initial value was `undefined`.  
信号设置器 `setCount` 具有 type `Setter<number>` ，这是一个更复杂的类型定义，大致对应于 `(value?: number | ((prev?: number) => number)) => number` ，表示传递参数的两种可能性：您可以使用 a `number` 或函数调用 `setCount` ，该函数采用前一个值（如果有的话）并返回 `number` .同样，请注意，函数的 `number` 和 `number` 参数都是可选的，因为信号初始值为 `undefined` 。

In reality the `Setter` type is more complicated than this since we need to differentiate between passing a setter function and passing a function as a value that we want the signal to be set to. If you're getting a TypeScript error "Argument ... is not assignable to parameter" when calling `setCount(value)`, then try wrapping the setter argument as in `setCount(() => value)` to make sure that `value` isn't called.  
实际上，该 `Setter` 类型比这更复杂，因为我们需要区分传递 setter 函数和将函数作为我们希望信号设置为的值传递。如果您收到 TypeScript 错误“Argument ...is not assignable to parameter“ `setCount(value)` ，然后尝试将 setter 参数包装为 in `setCount(() => value)` 以确保未 `value` 被调用。

##### [Defaults 违约][13]

We can avoid having to explicitly provide the type of the signal when calling `createSignal`, and avoid the `| undefined` part of the type, by providing a default value to `createSignal`:  
我们可以避免在调用 `createSignal` 时显式提供信号的类型，并通过提供默认值来 `createSignal` 避免类型 `| undefined` 的一部分：

`const [count, setCount] = createSignal(0);  const [name, setName] = createSignal("");`

In this case, TypeScript infers that the signal types are `number` and `string` respectively. Thus, for example, `count` obtains type `Accessor<number>` and `name` obtains type `Accessor<string>` (without `| undefined`).  
在本例中，TypeScript 推断信号类型分别为 `number` 和 `string` 。因此，例如， `count` 获取类型 `Accessor<number>` 并 `name` 获取类型 `Accessor<string>` （不带 `| undefined` ）。

### [Context 上下文][14]

Similar to signals, 与信号类似，

[`createContext<T>`][15] is parameterized by the type `T` of the context value. We can provide this type explicitly:  
`createContext<T>` 按上下文值的类型 `T` 参数化。我们可以显式提供这种类型：

`type Data = { count: number; name: string };  const dataContext = createContext<Data>();`

In this case, `dataContext` has type `Context<Data | undefined>`, causing `useContext(dataContext)` to have matching return type `Data | undefined`. The reason for `| undefined` is that the context might not be provided in the ancestors of the current component, in which case `useContext` returns `undefined`.  
在本例中， `dataContext` has type `Context<Data | undefined>` ，导致 `useContext(dataContext)` 具有匹配的返回类型 `Data | undefined` 。原因是 `| undefined` 当前组件的祖先中可能未提供上下文，在这种情况下， `useContext` 返回 `undefined` .

If we instead provide a default value to `createContext`, we avoid the `| undefined` part of the type, and often avoid having to explicitly specify the type of the `createContext` as well:  
如果我们改为 `createContext` 提供默认值 ，我们将避免使用 `| undefined` 类型的部分，并且通常也不必显式指定 的类型 `createContext` ：

`const dataContext = createContext({ count: 0, name: "" });`

In this case, TypeScript infers that `dataContext` has type `Context<{count: number, name: string}>`, which is equivalent to `Context<Data>` (without `| undefined`).  
在这种情况下，TypeScript 推断具有 `dataContext` 类型 `Context<{count: number, name: string}>` ，这相当于 `Context<Data>` （没有 `| undefined` ）。

Another common pattern is to define a factory function that produces the value for a context. Then we can grab the return type of that function using TypeScript's [`ReturnType`][16] type helper, and use that to type the context:  
另一种常见模式是定义一个工厂函数，该函数为上下文生成值。然后，我们可以使用 TypeScript 的类型帮助程序获取该函数的返回 `ReturnType` 类型，并使用它来键入上下文：

`` export const makeCountNameContext = (initialCount = 0, initialName = "") => {    const [count, setCount] = createSignal(initialCount);    const [name, setName] = createSignal(initialName);    return [      { count, name },      { setCount, setName },    ] as const;    // `as const` forces tuple type inference  };  type CountNameContextType = ReturnType<typeof makeCountNameContext>;  export const CountNameContext = createContext<CountNameContextType>();  export const useCountNameContext = () => useContext(CountNameContext); ``

In this example, `CountNameContextType` corresponds to the return value of `makeCountNameContext`:

`[    {readonly count: Accessor<number>, readonly name: Accessor<string>},    {readonly setCount: Setter<number>, readonly setName: Setter<string>}  ]`

and `useCountNameContext` has type `() => CountNameContextType | undefined`.  
并 `useCountNameContext` 具有类型 `() => CountNameContextType | undefined` 。

If you want to avoid the `undefined` possibility, you could assert that the context is always provided when used:  
如果要避免这种 `undefined` 可能性，可以断言在使用时始终提供上下文：

`export const useCountNameContext = () => useContext(CountNameContext)!;`

This is a dangerous assumption; it would be safer to actually provide a default argument to `createContext` so that the context is always defined.  
这是一个危险的假设;实际提供默认参数会更安全， `createContext` 以便始终定义上下文。

## [Component Types 组件类型][17]

`import type { JSX, Component } from "solid-js";  type Component<P = {}> = (props: P) => JSX.Element;`

To type a basic component function, use the `Component<P>` type, where `P` is the type of the `props` argument and should be an [object type][18]. This will enforce that correctly typed props get passed in as attributes, and that the return value is something that can be rendered by Solid: a `JSX.Element` can be a DOM node, an array of `JSX.Element`s, a function returning a `JSX.Element`, a boolean, `undefined`/`null`, etc. Here are some examples:  
若要键入基本组件函数，请使用 `Component<P>` type，其中 `P` 是 `props` 参数的类型，应为对象类型。这将强制要求正确键入的 props 作为属性传入，并且返回值是可以由 Solid 呈现的内容：a 可以是 DOM 节点、s 数组 `JSX.Element` 、返回 a `JSX.Element` `JSX.Element` 、布尔值 `undefined` / `null` 等的函数。以下是一些示例：

`const Counter: Component = () => {    const [count, setCount] = createSignal(0);    return <button onClick={() => setCount((c) => c + 1)}>{count()}</button>;  };  <Counter />; // good  <Counter initial={5} />; // type error: no initial prop  <Counter>hi</Counter>; // type error: no children prop  const InitCounter: Component<{ initial: number }> = (props) => {    const [count, setCount] = createSignal(props.initial);    return <button onClick={() => setCount((c) => c + 1)}>{count()}</button>;  };  <InitCounter initial={5} />; // good`

If you want your component to take JSX children, you can either explicitly add a type for `children` to `P`, or you can use the `ParentComponent` type which automatically adds `children?: JSX.Element`. Alternatively, if you'd like to declare your component with `function` instead of `const`, you can use the `ParentProps` helper to type `props`. Some examples:  
如果希望组件采用 JSX 子项，则可以显式添加 to `children` `P` 的类型，也可以使用自动添加 `children?: JSX.Element` 的 `ParentComponent` 类型。或者，如果要声明 `function` 组件 而不是 `const` ，可以使用 `ParentProps` 帮助程序键入 `props` 。一些例子：

`import { JSX, ParentComponent, ParentProps } from "solid-js";  type ParentProps<P = {}> = P & { children?: JSX.Element };  type ParentComponent<P = {}> = Component<ParentProps<P>>;  // Equivalent typings:  //const CustomCounter: Component<{children?: JSX.Element}> = ...  //function CustomCounter(props: ParentProps): JSX.Element { ...  const CustomCounter: ParentComponent = (props) => {    const [count, setCount] = createSignal(0);    return (      <button onClick={() => setCount((c) => c + 1)}>        {count()}        {props.children}      </button>    );  };  // Equivalent typings:  //const CustomInitCounter: Component<{initial: number, children?: JSX.Element}> = ...  //function CustomInitCounter(props: ParentProps<{initial: number}>): JSX.Element { ...  const CustomInitCounter: ParentComponent<{ initial: number }> = (props) => {    const [count, setCount] = createSignal(props.initial);    return (      <button onClick={() => setCount((c) => c + 1)}>        {count()}        {props.children}      </button>    );  };`

In the latter example, the `props` parameter automatically gets typed as `props: ParentProps<{initial: number}>` which is equivalent to `props: {initial: number, children?: JSX.Element}`. (Note that, before Solid 1.4, `Component` was equivalent to `ParentComponent`.)  
在后一个示例中 `props` ，参数自动键入为 `props: ParentProps<{initial: number}>` 等效于 `props: {initial: number, children?: JSX.Element}` 。（请注意，在 Solid 1.4 之前， `Component` 相当于 `ParentComponent` 。

Solid provides two other `Component` subtypes for dealing with `children`:  
Solid 提供了另外两 `Component` 种用于处理的 `children` 子类型：

`import {    JSX,    FlowComponent,    FlowProps,    VoidComponent,    VoidProps,  } from "solid-js";  type FlowProps<P = {}, C = JSX.Element> = P & { children: C };  type FlowComponent<P = {}, C = JSX.Element> = Component<FlowProps<P, C>>;  type VoidProps<P = {}> = P & { children?: never };  type VoidComponent<P = {}> = Component<VoidProps<P>>;`

`VoidComponent` is for components that definitely do not support `children`. `VoidComponent<P>` is equivalent to `Component<P>` when `P` doesn't provide a type for `children`.  
`VoidComponent` 适用于绝对不支持 `children` 的组件。 `VoidComponent<P>` 等效于 `Component<P>` when `P` 不为 提供 `children` 类型。

`FlowComponent` is intended for "control flow" components like Solid's `<Show>` and `<For>`. Such components generally require `children` to make sense, and sometimes have specific types for `children`, such as requiring it to be a single function. For example:  
`FlowComponent` 用于“控制流”组件，如 Solid `<Show>` 和 `<For>` 。此类组件通常要求有意义，有时具有特定的类型 `children` ，例如要求 `children` 它是单个函数。例如：

`const CallMeMaybe: FlowComponent<{ when: boolean }, () => void> = (props) => {    createEffect(() => {      if (props.when) props.children();    });    return <>{props.when ? "Calling" : "Not Calling"}</>;  };  <CallMeMaybe when={true} />; // type error: missing children  <CallMeMaybe when={true}>hi</CallMeMaybe>; // type error: children  <CallMeMaybe when={true}>{() => console.log("Here's my number")}</CallMeMaybe>; // good`

## [Event Handlers 事件处理程序][19]

The namespace `JSX` offers a suite of useful types for working with HTML DOM in particular. See the [definition of JSX in dom-expressions][20] for all the types provided.  
命名空间 `JSX` 提供了一套有用的类型，特别是用于处理 HTML DOM。请参阅 dom-expressions 中 JSX 的定义，了解提供的所有类型。

One useful helper type provided by the `JSX` namespace is `JSX.EventHandler<T, E>`, which represents a single-argument event handler for a DOM element type `T` and event type `E`. You can use this to type any event handlers you define outside JSX. For example:  
`JSX` 命名空间提供的一种有用的帮助程序类型是 `JSX.EventHandler<T, E>` ，它表示 DOM 元素类型 `T` 和事件类型的 `E` 单参数事件处理程序。您可以使用它来键入您在 JSX 外部定义的任何事件处理程序。例如：

`import type { JSX } from "solid-js";  const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {    console.log("input changed to", event.currentTarget.value);  };  <input onInput={onInput} />;`

Handlers defined inline within [`on___` JSX attributes][21] (with built-in event types) are automatically typed as the appropriate `JSX.EventHandler`:  
在 JSX 属性（具有内置事件类型）中 `on___` 内联定义的处理程序会自动类型化为适当的 `JSX.EventHandler` ：

`<input    onInput={(event) => {      console.log("input changed to", event.currentTarget.value);    }}  />`

Note that `JSX.EventHandler<T>` constrains the event's [`currentTarget` attribute][22] to be of type `T` (in the example, `event.currentTarget` is typed as `HTMLInputEvent`, so has attribute `value`). However, the event's [`target` attribute][23] could be any `DOMElement`. This is because `currentTarget` is the element that the event handler was attached to, so has a known type, whereas `target` is whatever the user interacted with that caused the event to bubble to or get captured by the event handler, which can be any DOM element. One exception is Input and Focus Events when attached directly to `input` elements will have HTMLInputElement as a `target`.  
请注意，将 `JSX.EventHandler<T>` 事件的 `currentTarget` 属性限制为 type `T` （在示例中，类型为 `HTMLInputEvent` ， `event.currentTarget` 因此 has 属性 `value` ）。但是，事件的 `target` 属性可以是任何 `DOMElement` .这是因为 `currentTarget` 是事件处理程序附加到的元素，因此具有已知类型，而 `target` 用户与之交互的任何内容都会导致事件冒泡或被事件处理程序捕获，事件处理程序可以是任何 DOM 元素。一个例外是，当直接附加到 `input` 元素时，输入和焦点事件将具有 HTMLInputElement 作为 `target` .

## [The ref Attribute ref 属性][24]

When we use the `ref` attribute with a variable, we tell Solid to assign the DOM element to the variable once the element is rendered. Without TypeScript, this looks like:  
当我们将 `ref` 属性与变量一起使用时，我们告诉 Solid 在元素渲染后将 DOM 元素分配给变量。如果没有 TypeScript，这看起来像：

`let divRef;  console.log(divRef); // undefined  onMount(() => {    console.log(divRef); // <div> element  });  return <div ref={divRef} />;`

This presents a challenge for typing that variable: should we type `divRef` as an `HTMLDivElement`, even though it's only set as such after rendering? (Here we assume TypeScript's `strictNullChecks` mode is turned on; otherwise, TypeScript ignores potentially `undefined` variables.)  
这给键入该变量带来了挑战：我们是否应该键入 `divRef` `HTMLDivElement` 为 ，即使它只是在渲染后才被设置为？（这里我们假设 TypeScript `strictNullChecks` 的模式是打开的;否则，TypeScript 会忽略潜在的 `undefined` 变量。

The safest pattern in TypeScript is to acknowledge that `divRef` is `undefined` for a period of time, and check when using it:  
TypeScript 中最安全的模式是确认这是 `divRef` `undefined` 一段时间，并在使用它时进行检查：

`let divRef: HTMLDivElement | undefined;  divRef.focus(); // correctly reported as an error at compile time  onMount(() => {    if (!divRef) return;    divRef.focus(); // correctly allowed  });  return <div ref={divRef}>...</div>;`

Alternatively, because we know `onMount` gets called only after the `<div>` element gets rendered, we could use a [non-null assertion (`!`)][25] when accessing `divRef` within `onMount`:  
或者，因为我们知道 `onMount` 只有在 `<div>` 元素渲染后才会被调用，所以我们可以在访问 `divRef` 时使用非空断言 （ `!` ） ： `onMount`

`onMount(() => {    divRef!.focus();  });`

Another fairly safe pattern is to omit `undefined` from `divRef`'s type, and use a [definite assignment assertion (`!`)][26] in the `ref` attribute:  
另一个相当安全的模式是省略 `undefined` from `divRef` 的类型，并在属性中使用 `ref` 确定的赋值断言 （ `!` ）：

`let divRef: HTMLDivElement;  divRef.focus(); // correctly reported as an error at compile time  onMount(() => {    divRef.focus(); // correctly allowed  });  return <div ref={divRef!}>...</div>;`

We need to use `ref={divRef!}` because TypeScript assumes that the `ref` attribute is being set to the `divRef` variable, and thus `divRef` should already be assigned. In Solid, it's the other way around: `divRef` gets assigned to by the `ref` attribute. The definite assignment assertion `divRef!` effectively convinces TypeScript that this is what's happening: TypeScript will understand that `divRef` has been assigned after this line.  
我们需要使用 `ref={divRef!}` ，因为 TypeScript 假设 `ref` 属性被设置为 `divRef` 变量，因此 `divRef` 应该已经赋值。在 Solid 中，情况正好相反： `divRef` 由 `ref` 属性赋值。确定的赋值断言 `divRef!` 有效地说服了 TypeScript 这是正在发生的事情：TypeScript 将理解在此行之后赋值的内容 `divRef` 。

With this pattern, TypeScript will correctly flag any accidental uses of refs inside the body of the function (before the JSX block where they get defined). However, TypeScript currently does not flag use of potentially undefined variables within nested functions.  
使用这种模式，TypeScript 将正确地标记函数主体内任何意外使用的 refs（在定义它们的 JSX 块之前）。但是，TypeScript 目前不会标记嵌套函数中可能未定义变量的使用。  
In the context of Solid, you need to take care not to use refs inside `createMemo`, `createRenderEffect`, and `createComputed` (before the JSX block that defines the refs), because those functions are called immediately, so the refs won't be defined yet (yet TypeScript won't flag this as an error). By contrast, the previous pattern would catch these errors.  
在 Solid 的上下文中，您需要注意不要在 、 `createRenderEffect` 和 `createComputed` 中使用 refs（在 `createMemo` 定义 refs 的 JSX 块之前），因为这些函数会立即调用，因此 refs 尚未定义（但 TypeScript 不会将其标记为错误）。相比之下，前面的模式会捕获这些错误。

Another common, but less safe, pattern is to put the definite assignment assertion at the point of variable declaration.  
另一种常见但不太安全的模式是将确定赋值断言放在变量声明的点。

`let divRef!: HTMLDivElement;  divRef.focus(); // allowed despite causing an error  onMount(() => {    divRef.focus(); // correctly allowed  });  return <div ref={divRef}>...</div>;`

This approach effectively turns off assignment checking for that variable, which is an easy workaround, but requires additional care. In particular, unlike the previous pattern, it incorrectly allows premature use of the variable, even outside nested functions.  
这种方法有效地关闭了该变量的赋值检查，这是一种简单的解决方法，但需要格外小心。特别是，与前面的模式不同，它错误地允许过早使用变量，即使在嵌套函数之外也是如此。

## [Control Flow Narrowing 控制流缩小][27]

A common pattern is to use [`<Show>`][28] to display data only when that data is defined:  
一种常见的模式是仅在定义数据时才显示 `<Show>` 数据：

`const [name, setName] = createSignal<string>();  return <Show when={name()}>Hello {name().replace(/\s+/g, "\xa0")}!</Show>;`

In this case, TypeScript can't determine that the two calls to `name()` will return the same value, and that the second call will happen only if the first call returned a truthy value. Thus it will complain that `name()` might be `undefined` when trying to call `.replace()`.  
在这种情况下，TypeScript 无法确定 to `name()` 的两次调用将返回相同的值，并且仅当第一次调用返回真实值时才会发生第二次调用。因此， `name()` 它会抱怨可能是 `undefined` 在尝试调用 `.replace()` 时。

Here are two workarounds for this issue:  
以下是此问题的两种解决方法：

1.  You can manually assert that `name()` will be non-null in the second call using TypeScript's [non-null assertion operator `!`][29]:  
    您可以使用 TypeScript 的非 null 断言运算符 `!` 在第二次调用中手动断言该 `name()` 值为非 null：

    `return <Show when={name()}>Hello {name()!.replace(/\s+/g, "\xa0")}!</Show>;`

2.  You can use the callback form of `<Show>`, which passes in the value of the `when` prop when it is truthy:  
    您可以使用 的回调形式 `<Show>` ，当它为 true 时，它会传入 `when` prop 的值：

    `return (    <Show when={name()}>{(n) => <>Hello {n().replace(/\s+/g, "\xa0")}!</>}</Show>  );`

    In this case, the typing of the `Show` component is clever enough to tell TypeScript that `n` is truthy, so it can't be `undefined` (or `null` or `false`). Remember this null asserted form will throw if accessed when the condition is no longer true.  
    在这种情况下， `Show` 组件的类型足够聪明，可以告诉 TypeScript 这是 `n` 真实的，所以它不可能是 `undefined` （or or `null` ）。 `false` 请记住，当条件不再为真时，如果访问此 null 断言表单，将抛出此表单。

## [Special JSX Attributes and Directives

特殊 JSX 属性和指令][30]

### [`on:___`/`oncapture:___`][31]

If you use custom event handlers via Solid's [`on:___`/`oncapture:___` attributes][32], you should define corresponding types for the resulting `Event` objects by overriding the `CustomEvents` and `CustomCaptureEvents` interfaces within module `"solid-js"`'s `JSX` namespace, like so:  
如果通过 Solid `on:___` 的 / `oncapture:___` 属性使用自定义事件处理程序，则应通过覆盖模块 `"solid-js"` `JSX` 命名空间中的 `CustomEvents` and `CustomCaptureEvents` 接口来为生成的 `Event` 对象定义相应的类型，如下所示：

`class NameEvent extends CustomEvent {    type: "Name";    detail: { name: string };    constructor(name: string) {      super("Name", { detail: { name } });    }  }  declare module "solid-js" {    namespace JSX {      interface CustomEvents {        // on:Name        Name: NameEvent;      }      interface CustomCaptureEvents {        // oncapture:Name        Name: NameEvent;      }    }  }  <div on:Name={(event) => console.log("name is", event.detail.name)} />;`

### [`prop:___`/`attr:___`][33]

If you use forced properties via Solid's [`prop:___` attributes][34], or custom attributes via Solid's [`attr:___` attributes][35], you can define their types in the `ExplicitProperties` and `ExplicitAttributes` interfaces, respectively:  
如果通过 Solid `prop:___` 的属性使用强制属性，或通过 Solid `attr:___` 的属性使用自定义属性，则可以分别在 `ExplicitProperties` 和 `ExplicitAttributes` 接口中定义它们的类型：

`declare module "solid-js" {    namespace JSX {      interface ExplicitProperties { // prop:___        count: number;        name: string;      }      interface ExplicitAttributes { // attr:___        count: number;        name: string;      }    }  }  <Input prop:name={name()} prop:count={count()}/>  <my-web-component attr:name={name()} attr:count={count()}/>`

### [`use:___`][36]

If you define custom directives for Solid's [`use:___` attributes][37], you can type them in the `Directives` interface, like so:  
如果为 Solid `use:___` 的属性定义自定义指令，则可以在界面中 `Directives` 键入它们，如下所示：

`function model(element: HTMLInputElement, value: Accessor<Signal<string>>) {    const [field, setField] = value();    createRenderEffect(() => (element.value = field()));    element.addEventListener("input", (e) => {      const value = (e.target as HTMLInputElement).value;      setField(value);    });  }  declare module "solid-js" {    namespace JSX {      interface Directives {        // use:model        model: Signal<string>;      }    }  }  let [name, setName] = createSignal("");  <input type="text" use:model={[name, setName]} />;`

If you're importing a directive `d` from another file/module, and `d` is used only as a directive `use:d`, then TypeScript (or more precisely, [`babel-preset-typescript`][38]) will by default remove the `import` of `d` (for fear that `d` is a type, as TypeScript doesn't understand `use:d` as a reference to `d`). There are two ways around this issue:  
如果您 `d` 从另一个文件/模块导入指令，并且 `d` 仅用作指令 `use:d` ，则 TypeScript（或更准确地说，）将默认删除 `import` of `d` （因为担心这是一个 `d` 类型， `babel-preset-typescript` 因为 TypeScript 不理解 `use:d` 为对 的 `d` 引用）。有两种方法可以解决此问题：

1.  Use [`babel-preset-typescript`'s `onlyRemoveTypeImports: true`][39] configuration option, which prevents it from removing any imports except for `import type ...`. If you're using `vite-plugin-solid`, you can specify this option via `solidPlugin({ typescript: { onlyRemoveTypeImports: true } })` in `vite.config.ts`.  
    使用 `babel-preset-typescript` 的 `onlyRemoveTypeImports: true` 配置选项，该选项可防止它删除除 . `import type ...` 如果您使用的 `vite-plugin-solid` 是 ，则可以通过 `solidPlugin({ typescript: { onlyRemoveTypeImports: true } })` 中的 `vite.config.ts` 指定此选项。

    Note that this option can be problematic if you don't vigilantly use `export type` and `import type` throughout your codebase.  
    请注意，如果您不警惕地使用 `export type` 和 `import type` 整个代码库，此选项可能会有问题。

2.  Add a fake access like `false && d;` to every module importing directive `d`. This will stop TypeScript from removing the `import` of `d`, and assuming you're tree-shaking via e.g. [Terser][40], this code will be omitted from your final code bundle.  
    为每个模块添加一个假访问 `false && d;` 导入指令 `d` 。这将阻止 TypeScript 删除 `import` 的 `d` ，并且假设您正在通过 Terser 等摇树，则此代码将从您的最终代码包中省略。

    The simpler fake access `d;` will also prevent the `import` from being removed, but will typically not be tree-shaken away, so will end up in your final code bundle.  
    更简单的虚假访问 `d;` 也将阻止被删除，但通常不会被 `import` 撼动，因此最终会出现在您的最终代码包中。

[1]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#configuring-typescript
[2]: https://github.com/solidjs/templates/
[3]: https://github.com/solidjs/templates/blob/master/ts/tsconfig.json
[4]: https://docs.solidjs.com/guides/how-to-guides/get-ready-for-solid/installation-and-setup#setup-typescript-in-pre-existing-solidjs-javascript-projects
[5]: https://www.typescriptlang.org/tsconfig#jsx
[6]: https://www.typescriptlang.org/tsconfig#jsxImportSource
[7]: https://www.typescriptlang.org/tsconfig#jsxImportSource
[8]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#api-types
[9]: https://docs.solidjs.com/references/api-reference
[10]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#signals
[11]: https://www.typescriptlang.org/docs/handbook/2/generics.html
[12]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[13]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#defaults
[14]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#context
[15]: https://www.solidjs.com/docs/latest/api#createcontext
[16]: https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
[17]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#component-types
[18]: https://www.typescriptlang.org/docs/handbook/2/objects.html
[19]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#event-handlers
[20]: https://github.com/ryansolid/dom-expressions/blob/main/packages/dom-expressions/src/jsx.d.ts
[21]: https://www.solidjs.com/docs/latest/api#on___
[22]: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
[23]: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
[24]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#the-ref-attribute
[25]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
[26]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions
[27]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#control-flow-narrowing
[28]: https://www.solidjs.com/docs/latest/api#%3Cshow%3E
[29]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
[30]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#special-jsx-attributes-and-directives
[31]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#on___oncapture___
[32]: https://www.solidjs.com/docs/latest/api#on%3A___%2Foncapture%3A___
[33]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#prop___attr___
[34]: https://www.solidjs.com/docs/latest/api#prop%3A___
[35]: https://www.solidjs.com/docs/latest/api#attr%3A___
[36]: https://docs.solidjs.com/guides/foundations/typescript-for-solid#use___
[37]: https://www.solidjs.com/docs/latest/api#use%3A___
[38]: https://babeljs.io/docs/en/babel-preset-typescript
[39]: https://babeljs.io/docs/en/babel-preset-typescript#onlyremovetypeimports
[40]: https://terser.org/
