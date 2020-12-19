#国家导航选择器（组件）
  用法
   ```
    import WordAnchorPoint from './WordAnchorPoint'  

    <WordAnchorPoint
        value={store.countryValue.phonecode}
        visible={store.anchorModalVisible}
        onOk={RegisterStore.getPhoneCode}
        onCancel={() => RegisterStore.showAnchorModal()}
    />   
   ```

   参数说明
   ```
    @params {Number} value 区号初始值（86）
    @params {Boolean} visible 是否显示弹窗 (true)
    @params {fn} onOk 成功回调函数 
    @params {fn} onCancel 取消/关闭弹窗回调函数 
   ```

