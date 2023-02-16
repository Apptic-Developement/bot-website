import React from 'react'
import Hero from '../../../components/Headers/Hero'
import FeaturesSection from '../../../components/Features';

type Props = {}

function Home({}: Props) {
  return (
    <main>
    <Hero/>
    <FeaturesSection/>
    </main>
  )
}

export default Home