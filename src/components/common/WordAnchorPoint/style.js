import styled from 'styled-components'
import { Anchor, Button, Modal, Select } from 'antd'

export const AnchorModal = styled(Modal)`
  width: 768px !important;
  height: 688px;
  background: #ffffff;
  //opacity: 0.7;
  font-size: 14px;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  border-radius: 8px;
  padding-bottom: 0 !important;
  .flex {
    display: flex;
  }
  .ml14 {
    margin-left: 14px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .mt-3 {
    margin-top: -3px;
  }

  .pl40 {
    padding-left: 40px;
  }
  .textEllipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hotDataBox {
    width: 307px;
    .dataBar {
      .codeItem {
        padding: 26px 20px 6px 40px;
        margin: 0;
        border-bottom: none;
        &:nth-child(even) {
          background: #fafafa;
        }
        &:nth-child(odd) {
          background: #fff;
        }
      }
    }
  }
  .dataSourceBox,
  .SearchBox {
    width: 460px;
  }
  .SearchBox {
    padding-right: 40px;
  }

  .ant-modal-content {
  }
  .dataBar {
    border-right: 1px solid rgba(240, 240, 240, 0.8);
    width: 100%;
    max-height: 485px;
    overflow-y: scroll;
    /* 定义滚动条样式 */
    ::-webkit-scrollbar {
      width: 4px;
      height: 6px;
      background-color: rgba(240, 240, 240, 1);
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
      border-radius: 10px;
      background-color: rgba(240, 240, 240, 0.5);
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 0px rgba(140, 140, 140, 1);
      background-color: rgba(140, 140, 140, 1);
    }
  }
  .title {
    height: 19px;
    font-size: 16px;
    font-weight: bold;
    color: #595959;
    line-height: 19px;
    margin-bottom: 20px;
  }
  .codeItem {
    //padding: 26px 20px 6px 40px;
    padding: 26px 0 6px 0;
    margin: 0 20px 0 40px;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
    .content {
      justify-content: space-between;
      align-items: flex-start;
      .text {
        font-weight: 400;
        color: #595959;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`

export const SearchBarBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-left: 40px;
  i.anticon {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 2;
    font-size: 15px;
    margin-left: 9px;
    margin-right: 11px;
  }
`

export const SearchBar = styled(Select)`
  width: 381px;
  height: 30px;
  background: #f5f5f5;
  border-radius: 4px;
  //position: relative;
  //top: 0;
  //left: 0;
  .ant-select-selection,
  .ant-select-selection--multiple {
    padding-left: 25px !important;
    min-height: 30px !important;
    height: 30px !important;
  }
  .ant-select-selection__placeholder {
    height: 30px;
    font-size: 12px;
    font-weight: 400;
    color: #bfbfbf;
    line-height: 30px;
    margin-top: -16px;
  }
`

export const DataBox = styled.div`
  justify-content: space-between;
  max-height: 485px;
  .dataBar {
    max-height: 100vh;
    overflow-y: scroll;
    .codeItem:first-child {
      padding-top: 0;
    }
    /* 定义滚动条样式 */
    ::-webkit-scrollbar {
      width: 4px;
      height: 6px;
      background-color: rgba(240, 240, 240, 1);
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5);
      border-radius: 10px;
      background-color: rgba(240, 240, 240, 0.5);
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 0px rgba(140, 140, 140, 1);
      background-color: rgba(140, 140, 140, 1);
    }
  }
`

export const AnchorCol = styled(Anchor)`
  margin-left: 30px !important;
  //width: 11px;
  .ant-anchor {
  }
  .ant-anchor-ink {
    display: none;
  }
  .ant-anchor-link {
    padding: 0;
    //padding-bottom: 6px;
    .ant-anchor-link-title {
      line-height: 16px;
      font-size: 12px;
      color: rgba(191, 191, 191, 1);
    }
  }
  .ant-anchor-link-active {
    .ant-anchor-link-title {
      color: #0e8aec;
    }
  }
  .anchorItem {
    margin-bottom: 20px;
  }
`

export const ConfirmBtn = styled(Button)`
  width: 115px;
  height: 40px !important;
  background-color: #0e8aec !important;
  border-radius: 4px;
  color: #fff !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px !important;
  position: absolute !important;
  bottom: 20px;
  right: 40px;
`
