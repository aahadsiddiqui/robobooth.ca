import React from 'react'
import MarketHome from '../../components/MarketHome'
import { MARKETS } from '../../data/markets'

export default function ChicagoLanding() {
  return <MarketHome market={MARKETS.chicago} />
}
