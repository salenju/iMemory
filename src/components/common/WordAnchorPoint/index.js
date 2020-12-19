/* eslint-disable */
import React from 'react'
import { Checkbox, Select, Icon, Anchor } from 'antd'
import lifecycle from 'react-pure-lifecycle'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import debounce from 'lodash/debounce'
import CountryFlags from '../CountryFlag'
import Store from './Store'
import {
  AnchorModal,
  SearchBarBox,
  SearchBar,
  DataBox,
  AnchorCol,
  ConfirmBtn
} from './style'
import { i18n } from 'mol-i18n'
const { state, actions } = Store
const { Option } = Select

const handleSearch = val => {
  actions.handleSearch(val)
}
const { Link } = Anchor
const AnchorPoint = props => {
  const { codeList, binarySortWord, hotList, searchList } = toJS(state)
  return (
    <div>
      <AnchorModal
        className="AnchorModal"
        footer={null}
        header={null}
        width={768}
        style={{ top: '10%' }}
        bodyStyle={{ width: '768px', paddingTop: '40px' }}
        // maskStyle={{opacity: '1',backgroundColor: 'rgb(0,0,0)'}}
        {...props}
      >
        <div className="modalContent flex">
          <div className="hotDataBox">
            <div className="title pl40">
              {/*Popular Countries / Regions*/}
              {i18n.Text('COM_register_text_PopCountryRegions')}
            </div>
            <div className="dataBar" style={{ maxHeight: '515px' }}>
              {hotList.map((item, index) => {
                return (
                  <div className="codeItem flex" key={`${index}~${item.id}`}>
                    <div className="content flex">
                      <CountryFlags code={item.countryCode2d} />
                      <div
                        className="text ml14 mt-3"
                        style={{ width: '140px' }}
                      >
                        <div className="text textEllipsis">
                          {item.countryName}
                        </div>
                        <div className="text textEllipsis">
                          {item.countryNameZh}
                        </div>
                      </div>
                    </div>

                    <div className="content flex">
                      <div className="text">+{item.phoneCode}</div>
                      <Checkbox
                        className="ml20 mt-3"
                        checked={
                          Number(state.phoneCode) === Number(item.phoneCode)
                        }
                        onChange={() =>
                          actions.changePhoneCode(
                            item.phoneCode,
                            item.countryCode2d
                          )
                        }
                        // onChange={() => console.log(item)}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="SearchBox">
            <div className="title pl40">
              {/*All Countries / Regions*/}
              {i18n.Text('COM_register_text_AllCountryRegions')}
            </div>
            <SearchBarBox>
              <Icon type="search" />
              <SearchBar
                allowClear
                className="searchBar"
                placeholder="Please enter countries / regions name"
                filterOption={false}
                showSearch
                showArrow={false}
                clearIcon
                style={{ width: '100%' }}
                value={null}
                onSearch={debounce(handleSearch)}
                onSelect={async val => {
                  // await actions.changePhoneCode(val)
                  const { code, countryCode2d } = JSON.parse(val)
                  state.searchList = []
                  props.onOk(code, countryCode2d)
                }}
                optionLabelProp="name"
              >
                {searchList &&
                  searchList.map(item => (
                    <Option
                      style={{ textAlign: 'left' }}
                      key={JSON.stringify({
                        code: item.phoneCode,
                        countryCode2d: item.countryCode2d
                      })}
                      name={item.display}
                    >
                      {item.display}
                    </Option>
                  ))}
              </SearchBar>
            </SearchBarBox>
            <DataBox className="dataBox flex" style={{ paddingTop: '26px' }}>
              <div className="dataBar" id="scrollBox">
                {codeList.map((item, index) => {
                  const { sortWord } = item
                  return (
                    <div
                      className="codeItem flex"
                      id={
                        codeList[index - 1] &&
                        codeList[index - 1].sortWord === sortWord
                          ? null
                          : sortWord
                      }
                      key={`${index}~${item.id}`}
                    >
                      <div className="content flex">
                        <CountryFlags code={item.countryCode2d} />
                        <div
                          className="text ml14 mt-3"
                          style={{ width: '196px' }}
                        >
                          <div className="text textEllipsis">
                            {item.countryName}
                          </div>
                          <div className="text textEllipsis">
                            {item.countryNameZh}
                          </div>
                        </div>
                      </div>

                      <div className="content flex">
                        <div className="text">+{item.phoneCode}</div>
                        <Checkbox
                          className="ml20 mt-3"
                          checked={
                            Number(state.phoneCode) === Number(item.phoneCode)
                          }
                          onChange={() =>
                            actions.changePhoneCode(
                              item.phoneCode,
                              item.countryCode2d
                            )
                          }

                          /* onChange={() =>
                            actions.changePhoneCode(item.phoneCode)
                          }*/
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="navBar">
                <AnchorCol
                  className={'AnchorCol'}
                  // affix={false}
                  // offsetTop={'10vh'}
                  getContainer={() => document.getElementById('scrollBox')}
                >
                  {binarySortWord.map((childData, index) => {
                    let _jsx = null
                    let _arr = []
                    childData.map((item, index) => {
                      _arr = [
                        ..._arr,
                        <Link
                          href={`#${item}`}
                          title={item}
                          key={`${index}~${item}`}
                        />
                      ]
                    })
                    _jsx = <div className="anchorItem">{_arr}</div>
                    return _jsx
                  })}
                </AnchorCol>
              </div>
            </DataBox>
            {/*<div className="dataBar" />*/}
          </div>
        </div>
        <ConfirmBtn
          className="confirm"
          onClick={() => props.onOk(state.phoneCode, state.countryCode2d)}
          // onClick={() => console.log(toJS(state))}
        >
          {i18n.Text('MS_services_button_confirm')}
        </ConfirmBtn>
      </AnchorModal>
    </div>
  )
}
const componentDidMount = props => {
  const { value } = props
  actions.getAllList()
  state.phoneCode = value
}
const componentWillReceiveProps = (props, nextProps) => {
  if (props.value !== nextProps.value) {
    state.phoneCode = nextProps.value
  }
}
const methods = {
  componentDidMount,
  componentWillReceiveProps
}
export default lifecycle(methods)(observer(AnchorPoint))
