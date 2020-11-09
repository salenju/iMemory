import React, { useState, useEffect } from "react";
import { Carousel, Icon } from "antd";
import styled from "styled-components";

class ImgCarousel extends React.Component {
  img;
  constructor(props) {
    super(props);
    this.state = {};
    this.img = undefined;
  }
  prev() {
    this.img.prev();
  }
  next() {
    this.img.next();
  }
  render() {
    return (
      <div className={"ContentBox"}>
        <div className={"CarouselBox"}>
          <div className={"CarouselIcon"} onClick={this.prev.bind(this)}>
          <Icon type="left" />
          </div>
          <Carousel
            autoplay
            className={"Carousel"}
            ref={(dom) => {
              this.img = dom;
            }}
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Carousel>
          <div className={"CarouselIcon"} onClick={this.next.bind(this)}>
          <Icon type="right" />
          </div>
        </div>
      </div>
    );
  }
}

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 400px;
  background: #eaeaea;

  .carousel-wrapper {
    width: 300px;
    height: 100%;
    background: #f40;
  }

  .change {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 50px;
    background: green;
    cursor: pointer;
  }
`;

export default ImgCarousel;
