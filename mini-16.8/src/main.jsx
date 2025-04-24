import Didact from "./index"
// import HelloName from "./components/HelloName";
import Counter from "./components/Counter";

/** @jsx Didact.createElement */

// const element = <HelloName name="RubyLiu" />

const element = <Counter />

const container = document.getElementById("root")
Didact.render(element, container)


