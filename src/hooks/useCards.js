import { useEffect, useState } from 'react'
import { STATIC_CARDS } from '../utils/staticData'
import { fetchData, fetchDataWithErr } from '../utils/api'


export function useAllCards () {
  return STATIC_CARDS;
}

export function useMaleCards () {
  return STATIC_CARDS.filter(({gender}) => gender === 'male')
}

export function useFemaleCards () {
  return STATIC_CARDS.filter(({gender}) => gender === 'female')
}

export function useAdultCards () {
  return STATIC_CARDS.filter(({age}) => age >= 18)
}


export function useAsyncAllCards () {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
      .then(res => setData(res))
      .catch((err) => console.log(err))
  },[])

  return data 
}

