// import 'rmc-picker/assets/index.css'
// import 'rmc-cascader/assets/index.css'
// import Cascader from 'rmc-cascader'
import React from 'react'

import {
  PickerView,
  List,
  InputItem,
  ImagePicker,
  WhiteSpace,
} from 'antd-mobile'

import NavHeader from '../../components/NavHeder'
import globalData from './data'

import './index.scss'

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122'
  }
]

export default class Address extends React.Component {
  state = {
    files: data,
    open: false
  }
  // 渲染表单
  renderTable() {
    return (
      <List renderHeader={() => 'Format'}>
        <InputItem type="bankCard">银行卡</InputItem>
        <InputItem type="phone" placeholder="186 1234 1234">
          手机号码
        </InputItem>
        <InputItem type="password" placeholder="****">
          密码
        </InputItem>
        <InputItem type="number" placeholder="click to show number keyboard">
          数字键盘
        </InputItem>
        <InputItem
          type="digit"
          placeholder="click to show native number keyboard"
        >
          数字键盘
        </InputItem>
        <InputItem onBlur={() => this.onOpenChange(false)} onFocus={() => this.onOpenChange(true)} type="text">地址</InputItem>
      </List>
    )
  }
  // 渲染图片选择模块
  renderImagePicker() {
    const { files } = this.state
    return (
      <ImagePicker
        files={files}
        onChange={this.onImageChange}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 7}
        multiple={false}
      />
    )
  }
  onImageChange = (files, type, index) => {
    console.log(files, type, index)
    this.setState({
      files
    })
  }
  onPickerChange = value => {
    console.log(value)
  }
  onOpenChange(open) {
    this.setState({ open })
  }
  render() {
    return (
      <div className="address">
        <NavHeader title="填写地址"></NavHeader>
        <WhiteSpace></WhiteSpace>
        {this.renderTable()}
        {this.renderImagePicker()}
        <div className={this.state.open ? 'my-drawer active' : 'my-drawer'}>
          <PickerView
            cols="4"
            data={globalData}
            onChange={this.onPickerChange}
            rootNativeProps={{ 'data-xx': 'yy' }}
          />
        </div>
      </div>
    )
  }
}
