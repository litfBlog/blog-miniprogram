export default () =>
  uni.scanCode({
    success(e) {
      console.log(e)
      if (e.path)
        uni.redirectTo({
          url: '/' + e.path
        })
    }
  })
