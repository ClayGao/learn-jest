import { fetchData, fetchDataWithErr } from './api'
import { STATIC_CARDS } from './staticData'

describe('非同步測試', () => {
  /**
   * Promise
   */
  it('測試 fetchData', () => {
    expect.assertions(1);
    return fetchData().then((res) => {
      expect(res.length).toBe(STATIC_CARDS.length);
    })
  })
  // or
  it('測試 fetchData(short)', () => {
    return expect(fetchData()).resolves.toEqual(STATIC_CARDS);
  });

  /**
   * Async await
   */
  it('測試 fetchData (async await)', async () => {
    const data = await fetchData();
    expect(data.length).toBe(STATIC_CARDS.length);
  })
  //or
  it('測試 fetchData (async await) short', async () => {
    await expect(fetchData()).resolves.toBe(STATIC_CARDS);
  })
  
  /**
   * 測試無法預期的 API
   */
  // it('測試 fetchDataWithErr', () => {
  //   // expect.assertions(1);
  //   return fetchDataWithErr()
  //   .then((res) => {
  //     expect(res.length).toBe(STATIC_CARDS.length);
  //   })
  // })
  // // or
  // it('測試 fetchDataWithErr (short)', () => {
  //   return expect(fetchDataWithErr()).resolves.toEqual(STATIC_CARDS);
  // });

  // it('測試 fetchDataWithErr catch', () => {
  //   // expect.assertions(1);
  //   // return fetchDataWithErr().catch((err) => {
  //   //   console.log('ooo err',err)
  //   //   expect(err).toMatch('get data fail!');
  //   // })
  //   return expect(fetchDataWithErr()).rejects.toMatch('get data fail!');
  // })
})

