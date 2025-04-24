import Didact from "../index"

/** @jsx Didact.createElement */
export default function HelloName(props) {
  return <h1>Hi {props.name}</h1>
}