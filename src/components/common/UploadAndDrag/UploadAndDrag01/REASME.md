使用useEffect来添加和去除监听
有两个细节问题：
i:删除和新增图片操作会触发getFieldValue("fileList")变更时，实际图片列表dom没有立即同步的，所以如果以前者为依据![未命名1.gif](https://upload-images.jianshu.io/upload_images/4455053-8c07d42905e2b16e.gif?imageMogr2/auto-orient/strip)
来实现拖拽后的逻辑就会有出入。
删除操作时：dom上的class 的变更是和getFieldValue("fileList")同步的。可以通过class来计算出那些图片成员是正在删除的。
新增时：dom的新增会快于getFieldValue("fileList")的新增。
ii：拖拽的api要实现顺利的拖拽 draggerover必须要e.preventDefault() ondrop才能顺利获得setData的内容


  useEffect(() => {
    //收集图片dom
    let images = document.querySelectorAll('#picWall .ant-upload-list-item-image');
 
    if (images && images.length > 0) {
      //收集图片dom所在的item dom 准备查看item是否有remove className
      let items = document.querySelectorAll('#picWall .ant-upload-list-item');
      let removeIndex = [].findIndex.call(
        items,
        el =>
          // ant-upload-list-item-removed  ant-upload-animate-inline-leave  -----正在操作去除的class
          [...el.classList].includes('ant-upload-list-item-removed') ||
          [...el.classList].includes('ant-upload-animate-inline-leave'),
      );
      //如果image所在的item有remove class 则必须过滤掉
      let els = [].filter.call(images, (el, index) => index !== removeIndex);
      [].forEach.call(els, (el, index) => {
每次触发重新设置key
        el.setAttribute('key', index);
        //如果已经设置draggable说明已经添加事件监听，无需再添加监听
        if (!el.attributes.draggable) {
          el.setAttribute('draggable', true);
          el.addEventListener('dragstart', e => {
            e.dataTransfer.setData('key', Number(e.target.attributes.key.value));
          });
          el.addEventListener('dragenter', e => {});
          el.addEventListener('dragover', e => e.preventDefault());
          el.addEventListener('drop', e => {
            e.preventDefault();
            e.stopPropagation();
            const oldIndex = e.dataTransfer.getData('key');
            const newIndex = e.target.attributes.key.value;
            if (oldIndex != newIndex) {
              console.log(oldIndex, newIndex, getFieldValue('files'));
              let fileList = JSON.parse(JSON.stringify(getFieldValue('files')));
//拖拽后的逻辑
              if (newIndex > oldIndex) {
                var temp = fileList[oldIndex].url || fileList[oldIndex].response.data;
                for (var i = Number(oldIndex); i < Number(newIndex); i++) {
                  fileList[i].url = fileList[i + 1].url || fileList[i + 1].response.data;
                }
                fileList[newIndex].url = temp;
              } else {
                var temp = fileList[oldIndex].url || fileList[oldIndex].response.data;
                for (var i = Number(oldIndex); i > Number(newIndex); i--) {
                  fileList[i].url = fileList[i - 1].url || fileList[i - 1].response.data;
                }
                fileList[newIndex].url = temp;
              }
              fileList.forEach(i => {
                if (i.url) {
                  delete i.thumbUrl;
                  delete i.response;
                }
              });
              setFiles(fileList);
              setFieldsValue({ files: fileList });
            }
          });
        }
      });
    }

    return () => {
      let els = document.querySelectorAll('#picWall .ant-upload-list-item-image');
      [].forEach.call(els, el => {
        el.removeEventListener('dragstart', () => {});
        el.removeEventListener('drop', () => {});
        el.removeEventListener('dragenter', e => {});
        el.removeEventListener('drageover', e => {});
      });
    };
  }, [
    getFieldValue('files'),
    //当上传图片后getFieldValue('files')发生变化，但是还没有异步获取上传图片路径时，此时document.querySelectorAll('#picWall .ant-upload-list-item-image')没有变化
    //通过监听图片dom长度再次触发useEffect,监听新增的图片dom
    document.querySelectorAll('#picWall .ant-upload-list-item-done').length,
  ]);