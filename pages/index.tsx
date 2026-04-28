import React from 'react'
import MarketHome from '../components/MarketHome'
import { MARKETS } from '../data/markets'

export default function Home() {
  return <MarketHome market={MARKETS.national} />
}
