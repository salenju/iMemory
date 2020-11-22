import React, { useState, useEffect } from "react";
import { Modal, Tooltip } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SVG } from "./SVG";
import { MockData } from "./Mock.js";

const ImgCarousel = (props) => {
    const {
        imgList = MockData,
        onCancel,
        defaultIndex = 0,
        visible = true,
    } = props;
    const totalLen = imgList ? imgList.length : 0;
    const [current, setCurrent] = useState(defaultIndex);
    const [disableIcon, setDisableIcon] = useState("");

    useEffect(() => {
        visible && setCurrent(defaultIndex);
    }, [defaultIndex, visible]);

    useEffect(() => {
        visible &&
            setDisableIcon(() => {
                if (totalLen <= 1) return "PREV,NEXT";
                if (current > 0 && current < totalLen - 1) return "";
                if (current === 0) return "PREV";
                if (totalLen - 1 === current) return "NEXT";
            });
    }, [current, totalLen, visible]);

    const handleClick = (type) => {
        if (disableIcon.indexOf(type) > -1) return;
        let stepLenth = type === "PREV" ? -1 : 1;
        setCurrent(current + stepLenth);
    };

    return (
        <Wrapper
            className="img-carousel-root"
            maskClosable={false}
            footer={false}
            width="100%"
            bodyStyle={{ padding: 0 }}
            {...props}
        >
            <div className="img-carousel-wrap">
                <div
                    className={
                        disableIcon.indexOf("PREV") > -1
                            ? "prv change disabled"
                            : "prv change"
                    }
                    onClick={() => handleClick("PREV")}
                >
                    {SVG.leftCircle}
                </div>
                <div className="carousel-wrapper">
                    <div className="cw-images">
                        {imgList &&
                            imgList.map((item, index) => (
                                <div
                                    key={item.imgUrl}
                                    style={{
                                        backgroundImage: `url(${item.imgUrl})`,
                                    }}
                                    className={
                                        index === current
                                            ? "cw-image-bg show"
                                            : "cw-image-bg"
                                    }
                                />
                            ))}
                    </div>

                    <div className="cw-title">
                        {imgList && imgList[current] ? (
                            <Tooltip
                                placement="top"
                                title={imgList[current].value}
                            >
                                <span className="cw-title-value">
                                    {imgList[current].value}
                                </span>
                            </Tooltip>
                        ) : (
                            ""
                        )}
                        <span>
                            {current + 1}/{totalLen}
                        </span>
                    </div>
                </div>
                <div
                    className={
                        disableIcon.indexOf("NEXT") > -1
                            ? "next change disabled"
                            : "next change"
                    }
                    onClick={() => handleClick("NEXT")}
                >
                    {SVG.rightCircle}
                </div>
                <div
                    className="cancel"
                    onClick={() => onCancel()}
                >
                    {SVG.closeCircle}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(Modal)`
    user-select: none;
    position: relative;
    top: 0 !important;
    padding: 0 !important;
    .ant-modal-content {
        background-color: transparent !important;
    }
    .cw-image-bg {
        display: none;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .ant-modal-close-x {
        display: none;
    }
    .img-carousel-wrap {
        display: flex;
        align-items: center;
        justify-content: center;

        .carousel-wrapper {
            width: 100vw;
            height: 100vh;
            position: relative;
            .cw-images {
                width: 100%;
                height: 100%;
                padding: 20px 0 34px 0;
                position: relative;
                /* img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: none;
        } */
                .show {
                    display: block;
                }
            }
            .cw-title {
                display: flex;
                position: absolute;
                bottom: 0;
                justify-content: space-between;
                width: 100%;
                height: 34px;
                padding: 0 10px;
                background: rgba(0, 0, 0, 0.7);
                font-size: 14px;
                font-weight: 400;
                color: #ffffff;
                line-height: 34px;
            }
            .cw-title-value {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .change {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .prv {
            padding: 0 25px 0 25px;
        }
        .next {
            padding: 0 25px 0 25px;
        }
        .disabled {
            opacity: 0.2;
            cursor: no-drop;
        }
        .cancel {
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(249, 109, 109, 0.4);
            border-radius: 0 0 0 100%;
            padding: 0 0 7px 14px;
            cursor: pointer;
            &:hover {
                background-color: rgba(236, 91, 91, 0.86);
            }
        }
    }
`;

ImgCarousel.propTypes = {
    imgList: PropTypes.array.isRequired,
    onCancel: PropTypes.func.isRequired,
    defaultIndex: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
};

export default ImgCarousel;
