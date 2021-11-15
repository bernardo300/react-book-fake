import React from "react";
import './style.css'
const ContainerBook = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
export default ContainerBook;