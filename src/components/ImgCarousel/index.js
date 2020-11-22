import React, { useState, useEffect } from "react";
import { Modal, Tooltip } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

import { SVG } from "./SVG";

const ImgCarousel = (props) => {
    const { imgList, onCancel, defaultIndex = 0, visible } = props;
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

    // 处理图片新的展示尺寸
    const resizeImgSize = (imgList) => {
        // 获取网页可见区域的宽/高
        let clientWidth = document.body.clientWidth - 180;
        let clientHeight = document.body.clientHeight - 180;

        /**
         * 图片resize思路：依据原有图片尺寸及宽高比例，结合现有网页可见区域宽高，计算出新的最佳图片展示尺寸
         * 比较原始图片的宽（width）和高（height）
         * width > height
         *  - Y——比较 width 和 clientWidth
         *          - width > clientWidth：已 clientWidth 为最大宽度来计算新的尺寸
         *          - width < clientWidth：已 width 为最大宽度来计算新的尺寸（即原有尺寸）
         *  - N——比较 height 和 clientHeight
         *          - height > clientHeight: 已 clientHeight 为最大高度来计算新的尺寸
         *          - height < clientHeight: 已 height 为最大高度来计算新的尺寸（即原有尺寸）
         */

        imgList =
            imgList &&
            imgList.map((item) => {
                const { width, height } = item.size;
                // 比较原始图片的宽（W）和高（H）
                if (width > height) {
                    if (width > clientWidth) {
                        // 已 clientWidth 为最大宽度来计算新的尺寸
                        item.size.width = clientWidth;
                        item.size.height = Math.floor(
                            (height * clientWidth) / width
                        );
                    } else {
                        // 已 width 为最大宽度来计算新的尺寸（即原有尺寸）
                    }
                } else {
                    if (height > clientHeight) {
                        // 已 clientHeight 为最大高度来计算新的尺寸
                        item.size.height = clientHeight;
                        item.size.width = Math.floor(
                            (width * clientHeight) / height
                        );
                    } else {
                        // 已 height 为最大高度来计算新的尺寸（即原有尺寸）
                    }
                }
                // console.log('========>>>new-item:',item)

                return item;
            });
        console.log("========>>>new-imgList:", imgList);
    };

    useEffect(() => {
        resizeImgSize(imgList);
    }, []);

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
                                        width: `${item.size.width}px`,
                                        height: `${item.size.height}px`,
                                        transition: "all 2s",
                                    }}
                                    className={
                                        index === current
                                            ? "cw-image show"
                                            : "cw-image"
                                    }
                                >
                                    <img src={item.imgUrl} />
                                    <div className="cw-title">
                                        { index === current? (
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
                            ))}
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
                <div className="cancel" onClick={() => onCancel()}>
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

    .ant-modal-close-x {
        display: none;
    }
    .img-carousel-wrap {
        display: flex;
        align-items: center;
        justify-content: center;

        .carousel-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            /* width: 100vw; */
            /* height: 100vh; */
            position: relative;
            .cw-images {
                padding: 20px 0 34px 0;
                position: relative;
                .cw-image {
                    display: none;
                    > img {
                        width: 100%;
                        height: 100%;
                    }
                }
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
