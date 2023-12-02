---
last_update:
  date: 1700137651710
---

# 实体基元

在本页中，我们将解释开始使用 Solid 基元以及在组件内部和外部使用 Solid 基元需要了解的内容。

## 实体基元

首先，让我们从 Solid primitves 开始。什么是原语？基元是任何编程语言、框架或库中可用的最简单的元素、函数或数据类型。

在 Solid 中，基元是负责管理 Solid 应用程序中的反应性的构建块。以下是 Solid 基元的列表：

- [`createSignal`](#createsignal)
- [`createEffect`](#createeffect)
- [`createMemo`](#creatememo)
- [`createResource`](#createresource)
- `createRoot`
- `createRenderEffect`
- `createDeferred`
- `createComputed`
- `createContext`
- `createMutable`
- `createStore`

:::tip

实体基元可以在任何范围内使用，它们不需要在组件中使用。实体组件不拥有其状态，因为它们只是设置函数，与设置后的反应系统无关。

:::

我们将重点介绍最常用的基元 `createSignal`、`createMemo`、`createEffect` 和 `createResource`。要更深入地了解 Solid 拥有的所有基元，请查看[概念页面](https://docs.solidjs.com/references/concepts)。

## `createSignal`

`createSignal` 是 Solid 中最常用的原语。它用于创建反应式状态变量。它采用一个可选的初始值，并返回一个元组，其中包含 getter 函数来获取当前值，并返回一个 setter 函数来设置值。

`createSignal` 可用于存储几乎任何类型的数据类型，包括对象和数组。但是，在 Solid 中，建议使用 `createStore` 原语来存储对象和数组。这是因为 `createStore` 经过优化以处理嵌套反应性的情况。有关此内容的更多信息，请参阅参考部分。

```js
import { createSignal } from "solid-js";

// highlight-next-line
const [count, setCount] = createSignal(0);
```

`createSignal` 不需要在组件中使用。它可以在应用中的任何位置使用。无论是在组件、函数中，还是在组件或函数之外。

```js
import { createSignal } from "solid-js";

// highlight-next-line
const [count, setCount] = createSignal(0);

function increment() {
  setCount(count() + 1);
}

function decrement() {
  setCount(count() - 1);
}

function Counter() {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count()}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

在上面的示例中，我们有一个 `count` 状态变量，用于跟踪当前计数。我们有两个函数，`increment` 和 `decrement` 用于更新 `count` 状态变量。我们还有一个组件，`Counter` 它使用 `count` 状态变量来显示当前计数。

正如您在上面的示例中注意到的，我们在组件外部使用 `createSignal`。这完全没问题，甚至可以从另一个文件导入信号并使其仍然具有反应性。您可以在应用程序中的任何位置使用 `createSignal`，因为在 Solid 中，组件不拥有自己的状态。通过这种方式，Solid 内置了状态管理，并且不需要 Redux 或其他状态管理库，除非您想使用特定于它们的功能。

:::tip

与此相对应的 Vue 是 `ref` 函数。该 `ref` 函数用于创建组件的本地状态变量。这意味着在卸载组件时，状态变量将被销毁。在 Solid 中，组件不拥有自己的状态。

这意味着在卸载组件时不会销毁状态变量。这是因为实体组件只是设置函数，与设置后的反应系统无关。

:::

## `createMemo`

`createMemo` 用于创建从其他反应式状态变量派生的反应式状态变量。它采用一个返回状态变量值的函数，并返回一个 getter 函数来获取当前值。

```js
import { createSignal, createMemo } from "solid-js";

const [count, setCount] = createSignal(0);

// highlight-next-line
const double = createMemo(() => count() * 2);
```

在上面的示例中，我们有一个 `count` 状态变量，用于跟踪当前计数。我们还有一个 `double` 状态变量，`double` 状态变量是 `count` 状态变量的记忆版本。这意味着 `count` 只有当状态变量更改时，`double` 才会重新计算状态变量。

下面是一个快速示例，说明如何利 `createMemo` 用它来创建记忆派生状态并在组件中使用它。

```js
import { createMemo } from "solid-js";

const [count, setCount] = createSignal(0);

// highlight-next-line
const double = createMemo(() => count() * 2);

function Counter() {
  return (
    <div>
      <button onClick={() => setCount(count() - 1)}>-</button>
      <span>This is the base value : {count()}</span>
      <span>This is the doubled value : {double()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
}
```

在 `createMemo` 背后用到了 `createComputed` 创建计算值。有关 `createComputed` 原语的更多信息，请参阅参考部分。

:::tip

与此相对应的 Vue 是 `computed` 函数。`computed` 当依赖的状态变量改变时，才会重新计算它。

:::

## `createEffect`

`createEffect` 用于创建反应效果。它采用一个函数，每当函数中使用的反应性状态变量发生变化时，该函数就会执行。

```js
import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(0);

// highlight-start
createEffect(() => {
  console.log("Count has been updated:", count());
});
// highlight-end

function Counter() {
  return (
    <div>
      <button onClick={() => setCount(count() - 1)}>-</button>
      <span>{count()}</span>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
}
```

每次状态 `count` 发生变化时，都会执行效果。这对于日志记录、进行 API 调用等很有用。每当反应性状态变量的状态发生变化时，您希望运行的任何副作用都可以使用 `createEffect` 来完成。

:::tip

与此相对应的 Vue 是 `watch` 函数。该函数用于创建副作用，每当状态变量的状态发生变化时，就会执行该 `watch` 副作用。

:::

## `createResource`

`createResource` 是一个简单但非常有用的基元，它创建一个反映异步函数值的信号。它接受异步函数、可选选项和可选源信号，用于填充异步函数的参数。

下面是一个快速示例，说明 `createResource` 如何使用从 API 获取数据。

```js
import { createResource, Show } from "solid-js";

async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await response.json();
}

function User({ id }) {
  const [id, setId] = createSignal(1);

  // highlight-next-line
  const [user] = createResource(id, fetchUser);

  return (
    <div>
      <Show when={!user.loading} fallback={<LoadingComponent />}>
        <div>姓名：{user().name}</div>
        <div>昵称：{user().username}</div>
        <div>邮箱：{user().email}</div>
        <div>手机：{user().phone}</div>
        <div>网站：{user().website}</div>
      </Show>
    </div>
  );
}
```

`createResource` 返回一些非常酷的东西，你可以用它们来被动地显示资源的状态，因为你可以看到它有一个 `loading` 布尔属性，当资源正在加载时为 true，当它不加载时为 false。它还具有一个 `error` 属性，如果在获取资源时出现错误，则该属性是错误对象。`createResource` 还有一些选项，我们可以用来自定义行为。以下是它们的列表以及它们的作用的简短描述。

- `initialValue`：资源的初始值。如果要在加载资源时显示某些内容，这将非常有用。
- `name`：资源的名称。这对于调试很有用。
- `deferStream`：一个布尔值，用于确定您的应用在呈现到流之前是否应等待资源完成。请注意，这仅在使用该 `renderToStream` 函数时才有用。
- `ssrLoadFrom`：这可用于告诉资源是否应该从服务器加载其初始数据或从 `initialValue` 服务器加载初始数据。如果您有一些服务器端数据要分配给此资源，这将非常有用。这可以通过将 `'initial'` 或 `'server'` 传递给此选项来使用。
- `storage`：此选项用作存储资源数据的声明性方式。如果您想将数据存储在缓存或类似的东西中，这将非常有用。此选项采用一个函数，该函数返回一个包含两个函数的元组，一个是 Accessor 和一个 Either，类型为 any。

下面是如何使用此选项的示例。

```ts
import { createResource } from "solid-js";

async function fetcherFunc(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return await response.json();
}

const [id, setId] = createSignal(1);
const [data, setData] = createSignal({});

// highlight-start
const [user] = createResource(id, fetcherFunc, {
  storage: (init: any) => [data, setData],
});
// highlight-end
```

一旦资源的数据在上面的代码中被解析出来，它将自动存储在信号中 `data`。

如果要在单个资源中使用多个信号值，可以通过使用 `createMemo` 基元创建派生状态来实现。您可能想知道为什么我使用 `createMemo` 原语而不是仅仅创建标准派生状态。这是因为 `createMemo` 这将有助于保持派生状态的响应性，而如果创建正常派生状态，则如果状态值更改，则派生状态将不会更新。以下是它在实际操作中的样子。

```ts
import { createResource, createMemo } from "solid-js";

// 获取函数更改为接受对象
async function fetcherFunc(info: { id: number; name: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${info.id}/posts?name=${info.name}`
  );
  return await response.json();
}

const [id, setId] = createSignal(1);
const [name, setName] = createSignal("");

// 使用 createMemo 创建的派生状态
const derivedState = createMemo(() => ({ id: id(), name: name() }));

// highlight-next-line
const [posts] = createResource(derivedState, fetcherFunc);
```

这只是一种简单的方法，您可以在 `createResource` 中使用多个信号值。

:::tip

要了解有关 Solid 基元的更多信息，您可以查看 Solid 深入探究部分

:::
