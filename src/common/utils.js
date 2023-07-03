function debounce (func, delay) {
  // func:做什么 delay:等多久
  let timer = null
  return function () {
    if (timer) {
      timer = clearTimeout(timer)
    }
    timer = setTimeout((...args) => {
      func.apply(this, args)
    }, delay)
  }
}

export {
  debounce
}