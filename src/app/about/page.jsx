import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import About from './About'

export default function page() {
  return (
    <main>
    <Header />
   <About/>
    <Footer className="mt-auto"/>
  </main>
  )
}
