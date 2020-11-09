import React, { useState, useEffect } from "react";
import { Carousel, Icon } from "antd";
import styled from "styled-components";

import { MockData } from "./Mock.js";

const ImgCarousel = (props) => {
  const _data = props.data || MockData;
  const [carouselRef, setCarouselRef] = useState();
  const [current, setCurrent] = useState(0);

  const handleClick = (type) => {
    console.log("------------------->>current:", current);
    if (type && type === "PREV") {
      current - 1 >= 0 && carouselRef.prev();
    } else {
      carouselRef.next();
    }
  };

  return (
    <Wrapper className="img-carousel">
      <div className="prv change" onClick={() => handleClick("PREV")}>
        <Icon type="left" />
      </div>
      <div className="carousel-wrapper">
        <Carousel
          ref={(dom) => {
            setCarouselRef(dom);
          }}
          afterChange={(current) => {
            setCurrent(current);
            console.log("------>>>>>", current);
          }}
        >
          {_data &&
            _data.map((item) => (
              <div key={item.value}>
                <img src={item.imgUrl} />
              </div>
            ))}
        </Carousel>
      </div>
      <div className="next change" onClick={() => handleClick("NEXT")}>
        <Icon type="right" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 400px;

  .carousel-wrapper {
    width: 300px;
    height: 100%;
    background: #f40;
    img {
      width: 300px;
      height: 400px;
      overflow: hidden;
    }
  }

  .change {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 50px;
    background: #eaeaea;
    cursor: pointer;
  }
`;

export default ImgCarousel;
