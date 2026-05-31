import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBrands from '@/components/TrustedBrands'
import Journey from '@/components/Journey'
import Problem from '@/components/Problem'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import ZohoProducts from '@/components/ZohoProducts'
import DeveloperHire from '@/components/DeveloperHire'
import CustomBuild from '@/components/CustomBuild'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import GetInTouch from '@/components/GetInTouch'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata = {
  title: 'ZoFlowX | Best Zoho Partner in Bangalore, India',
  description:
    'ZoFlowX is a certified Zoho Partner in Bangalore, India. Expert in Zoho CRM, Books & automation solutions for startups to enterprises. Get a free consultation!',
  alternates: { canonical: 'https://zoflowx.com/' },
  openGraph: {
    title: 'ZoFlowX | Best Zoho Partner in Bangalore, India',
    description:
      'Certified Zoho Authorized Partner in Bangalore. Implementation, customization, migration & managed services for Indian businesses.',
    url: 'https://zoflowx.com/',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBrands />
        <Journey />
        <Problem />
        <WhyUs />
        <Process />
        <Services />
        <Industries />
        <ZohoProducts />
         <Contact />
        {/* <DeveloperHire /> */}
        <CustomBuild />
        <CaseStudies />
        <Testimonials />
        {/* <DiscoveryCall /> */}
        <Resources />
         <GetInTouch />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
