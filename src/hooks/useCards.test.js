import {  
  useAllCards,
  useMaleCards, 
  useFemaleCards, 
} from './useCards'

import { STATIC_CARDS } from '../utils/staticData'

test('測試 useAllCards', () => {
  // toBe 用於基本型別的比較
  expect(useAllCards().length).toBe(STATIC_CARDS.length)
  // or toEqual, 但 toEqual 通常用於物件型別的比較
  // expect(useAllCards().length).toEqual(STATIC_CARDS.length)

  expect(useAllCards().length).not.toBe(0)
})

test('測試 useMaleCards', () => {
  const expectObj = {
    name: 'Clay',
    age: 18,
    description: '一位個性慵懶的人',
    gender: 'male'
  }

  // toContainEqual: 包括並且完全匹配該物件
  expect(useMaleCards()).toContainEqual(expectObj);

  // objectContaining 為只要物件中有包含參數中物件的屬性即 pass，以下與 toContainEqual 搭配使用
  expect(useMaleCards()).toContainEqual(expect.objectContaining({
    gender: 'male',
  }),);

  // not 這個關鍵字在 jest 中很常見，以下的寫法更直覺
  expect(useMaleCards()).toContainEqual(expect.not.objectContaining({
    gender: 'female',
  }),);
})

test('測試 useFeMaleCards', () => {
  expect(useFemaleCards()).toContainEqual(expect.not.objectContaining({
    gender: 'male',
  }),);
})

// https://jestjs.io/zh-Hans/docs/expect