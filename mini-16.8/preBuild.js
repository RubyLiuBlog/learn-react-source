// TODO: replace this line
// const element = React.createElement("h1", { title: "foo" }, "Hello");
const container = document.getElementById("root2");
// TODO: replace this line
// ReactDOM.render(element, container);

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
};

const node = document.createElement(element.type);
node["title"] = element.props.title;
const textNode = document.createTextNode("");
textNode["nodeValue"] = element.props.children;
node.appendChild(textNode);
container.appendChild(node);
