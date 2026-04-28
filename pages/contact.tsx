import React from 'react'
import MarketContact from '../components/MarketContact'
import { MARKETS } from '../data/markets'

export default function Contact() {
  return <MarketContact market={MARKETS.national} />
}
