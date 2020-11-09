import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ImgCarousel from "../../../components/ImgCarousel";

const Login = () => {
  return (
    <Wrapper className="login">
      <ImgCarousel />
    </Wrapper>
  );
};

const Wrapper = styled("div")``;

export default Login;
