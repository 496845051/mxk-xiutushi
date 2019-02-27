export default {
  getCropImage (url, x, y, w, h) {
    let canvas = document.getElementById('canvas')
    canvas.height = h
    canvas.width = w
    let ctx = canvas.getContext('2d')
    let img = new Image()
    img.src = url
    img.setAttribute('crossOrigin', 'Anonymous')
    img.onload = function () {
      ctx.drawImage(img, 0, 0, w, h)
      let previewImg = document.getElementById('preview-img')
      previewImg.src = canvas.toDataURL('image/jpeg')
    }
  }
}
