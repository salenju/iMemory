import React from "react";
import styled from "styled-components";

import ImgCarousel from "./index";
import { MockData } from "./Mock";

const ImgCarouselTest = () => {
    return (
        <Wrapper className="login">
            <ImgCarousel
                imgList={MockData}
                visible={true}
                onCancel={() => console.log("------>>onCancel")}
                defaultIndex={0}
            />
        </Wrapper>
    );
};

const Wrapper = styled("div")``;

export default ImgCarouselTest;
