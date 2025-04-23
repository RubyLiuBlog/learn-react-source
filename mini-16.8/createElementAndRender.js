function createElement(type, config, ...children) {
  const props = { ...config };
  props.children = children.map((child) =>
    typeof child === "object" ? child : createTextElement(child)
  );
  return { type, props };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
/**
 *
 * @param {*} element
 * @param {*} container
 */
function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);
  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((name) => {
      dom[name] = element.props[name];
    });
  element.props.children.forEach((child) => {
    render(child, dom);
  });
  container.appendChild(dom);
}

const Didact = {
  createElement,
  render,
};
/**@jsx Didact.createElement */
const element = (
  <div id="foo">
    <h1 title="bar">Hello</h1>
    <h2>World</h2>
  </div>
);

Didact.render(element, document.getElementById("root"));
