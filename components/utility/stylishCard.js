import React from "react";

function stylishCard(props) {
  return (
    <div
      
      className={
        "blog_card rounded-sm flex flex-col items-center justify-center "+props.bg_color
      }
    >
      <div className="  body_text">
        {props.date && (
          <p className="flex justify-between uppercase ">
            <span></span>
            <span>
              <span className="font-bold">{props.date.split(" ")[0]}</span>
              <br />
              {props.date.split(" ")[1]}
            </span>
          </p>
        )}
        {props.orangeText && <p className="orange_text"> {props.orangeText}</p>}
        {props.heading && (
          <h1 className=" text-2xl uppercase font-bold my-3">
            {props.heading}
          </h1>
        )}
        <p>{props.children}</p>
        {props.name && <p className="mt-8 font-semibold">{props.name}</p>}
        {props.dateTime && <p className="text-sm">{props.dateTime}</p>}
      </div>
      <div className={"card_footer bottom_color"}> </div>
    </div>
  );
}

export default stylishCard;
