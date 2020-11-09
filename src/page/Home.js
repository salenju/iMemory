import React from "react";
import styled from "styled-components";

import SideMenu from "../components/SideMenu.js";

const homeSideMenu = {
  title: "菜单",
  menuItems: [
    {
      value: "Dashboard",
      link: "",
    },
    {
      value: "Shorcuts",
      link: "",
    },
    {
      value: "Overview",
      link: "",
    },
    {
      value: "我的收藏",
      link: "",
    },
    {
      value: "关于我们",
      link: "",
    },
    {
      value: "登录",
      link: "/user-center/login",
    },
  ],
};

const Home = () => {
  return (
    <Wrapper className="home">
      <SideMenu menu={homeSideMenu} />
      <section></section>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  section {
    background: url("https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg")
      no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    transition: all 0.5s ease;
  }
`;

export default Home;
