import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/carousel'
import CaseStudy from '../components/CaseStudy'
import Clients from '../components/Clients'
import Perfomance from '../components/perfomance'
import Services from '../components/Services'

export default function Home() {
  return (
    <>
       <Carousel />
       <br />
       <Services />
       <CaseStudy />
       <Perfomance />
    </>
  )
}
