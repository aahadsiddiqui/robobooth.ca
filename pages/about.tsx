import React, { useState } from 'react'
import Head from 'next/head'
import CornerNav from '../components/CornerNav'
import { AboutContent } from '../components/AboutContent'
import { CHICAGO_METRO_SUBURBS } from '../lib/travelAreaFaq'

export default function About() {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Head>
        <title>About Robo Booth - Chicago's Premier Robot Photobooth & 360 Photo Booth | USA Photo Booth Rental</title>
        <meta
          name="description"
          content={`Learn about Chicago's premier robot photobooth and 360 photo booth. Serving the Chicago metro, including ${CHICAGO_METRO_SUBURBS}. USA's first interactive robotic photobooth technology.`}
        />
        <meta
          name="keywords"
          content="about robot photobooth, about 360 photo booth, Chicago robot photobooth, USA photo booth rental, Chicago photo booth company, Evanston photo booth, Naperville photo booth, Schaumburg photo booth, Skokie photo booth, Arlington Heights photo booth, Oak Park photo booth, interactive photobooth, robotic photobooth, 360 degree photobooth, photo booth rental Chicago, photo booth rental USA"
        />
        <meta property="og:title" content="About Robo Booth - Chicago's Premier Robot Photobooth & 360 Photo Booth" />
        <meta property="og:description" content="Learn about Chicago's premier robot photobooth and 360 photo booth. USA's first interactive robotic photobooth technology serving the USA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roboboothusa.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Robo Booth - Chicago's Premier Robot Photobooth & 360 Photo Booth" />
        <meta name="twitter:description" content="Learn about Chicago's premier robot photobooth and 360 photo booth. USA's first interactive robotic photobooth technology serving the USA." />
        <link rel="canonical" href="https://roboboothusa.com/about" />
      </Head>
      <CornerNav active={navActive} setActive={setNavActive} />
      <AboutContent />
    </div>
  )
} 