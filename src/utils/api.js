import { STATIC_CARDS } from './staticData'

/**
 * 模擬一隻 API
 */
export function fetchData() { return new Promise((resolve) => {
  setTimeout(() => {
    resolve(STATIC_CARDS)
  }, 800)
})}

/**
 * 模擬一隻有問題的 API
 */
export function fetchDataWithErr() { return new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random().toFixed(1) >= 0.5
    if(isSuccess)  resolve(STATIC_CARDS)
    else reject('get data fail!')
  }, 800)
})}
