import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * 入参：
 * {
  title: "菜单",
  menuItems: [
    {
      value: "Dashboard",
      link: "",
    }
  ],
}
 * 
 */

const SideMenu = (props) => {
  const { menu } = props;

  return (
    <Wrapper className="side-menu">
      <div class="continer">
        <input type="checkbox" id="check" />
        <label for="check">
          <i id="btn">
            {" "}
            <svg
              t="1598165008780"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3256"
              width="35"
              height="35"
            >
              <path
                d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
                fill="#ffffff"
                p-id="3257"
              ></path>
            </svg>
          </i>
          <i id="cancel">
            <svg
              t="1598165466455"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4273"
              width="30"
              height="30"
            >
              <path
                d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"
                p-id="4274"
                fill="#0a5274"
              ></path>
            </svg>
          </i>
        </label>
        <div class="sidebar">
          <header>{menu ? menu.title : "Menu"}</header>
          <ul>
            {menu &&
              menu.menuItems &&
              menu.menuItems.map((item) => (
                <li key={item.value}>
                  <Link to={item.link}>{item.value}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  body {
    font-family: "Roboto", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  .sidebar {
    position: fixed;
    left: -250px;
    width: 250px;
    height: 100%;
    background: #042331;
    transition: all 0.5s ease;

    header {
      font-size: 22px;
      color: white;
      text-align: center;
      line-height: 70px;
      background: #063146;
      user-select: none; // 是否允许选中文本
    }
    ul li a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 65px;
      font-size: 20px;
      color: white;
      padding-left: 40px;
      box-sizing: border-box;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid black;
      transition: 0.4s;
    }

    ul li:hover a {
      padding-left: 50px;
      color: #f40;
    }
  }

  #check {
    display: none;
  }

  label #btn,
  label #cancel {
    position: absolute;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #042331;
    border-radius: 4px;
  }

  label #btn {
    left: 40px;
    top: 25px;
    font-size: 35px;
    padding: 6px 12px;
  }

  #check:checked ~ label #btn {
    left: -40px;
    opercity: 0;
    pointer-events: none;
  }

  label #cancel {
    z-index: 1111;
    left: -60px;
    top: 17px;
    padding: 4px 9px;
    transition: all 0.5s ease;
  }

  #check:checked ~ label #cancel {
    left: 195px;
  }

  #check:checked ~ .sidebar {
    left: 0;
  }
`;

export default SideMenu;
