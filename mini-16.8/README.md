# React 16.8 Mini
将原项目的create-react-app 替换为 vite-react

原博客地址： [Build your own React](https://pomb.us/build-your-own-react/)

## playground
1. 运行项目
```bash
pnpm install
pnpm run dev
```
2. 查看效果

通过更改`src/index.js` 中的注释来查看效果

## 实现流程

对于以下react 代码

```jsx
/** @jsx Didact.createElement */
export default function HelloName(props) {
  return <h1>Hello {props.name}</h1>
}
Didact.render(<HelloName name="world" />, document.getElementById("root"))

```
babel 以后,去掉编译器需要的部分
```js
export default function HelloName(props) {
  return  Didact.createElement("h1", {}, "Hi ", props.name);
}
Didact.render(
  Didact.createElement(HelloName, { name: "world" }), 
  document.getElementById("root")
);

```
### createElement


