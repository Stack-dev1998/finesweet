import React from "react";

function stylishTextDiv(props) {
  return (
    <div>
      <div className={"stylish_div"}>
        <div className={" stylish_div_overlay"}> </div>
        <div className={"stylish_div_text"}>
          <p className=" text-2xl text-justify">{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default stylishTextDiv;
