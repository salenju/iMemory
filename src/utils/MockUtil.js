import _ from 'loadsh'

const MockUtil = {
  /**
   * @description 按照要求生成随机的图片
   * @param {Number}  width   图片的宽度，默认400
   * @param {Number}  height  图片的高度，默认[300~600]
   * @param {Number}  length  图片的张数，默认10张
   * 
   * @returns [{imgUrl:"", altValue:""}]
   *
   */
  ramdomImgs: ({ width = 400, length = 10, height }) => {
    let baseUrl = 'https://picsum.photos'
    let tarArr = []
    for (let i = 0; i < length; i++) {
    let _height = height || _.random(300, 600)
      tarArr.push({
        imgUrl: `${baseUrl}/${width}/${_height}?random=${i}`,
        altValue:'不動產, 公寓, 商業, 城市 的 免费素材图片'
      })
    }
    return tarArr
  },
}

export default MockUtil
