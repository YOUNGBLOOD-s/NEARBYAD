import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
import getImageUrl from "../../../lib/util/getImageUrl";

const Item = ({ detail }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === detail.id;

      const path = getImageUrl("sm", detail.img);

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <img src={path} alt="" />
          <ShowDetailsButton onClick={() => onSelectSlide(detail)} />
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
