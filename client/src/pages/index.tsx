import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  header,
  sectionAboutProject,
  sectionPet
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} header={header} />
    <SectionAboutProject sectionAboutProject={sectionAboutProject} />
    <SectionTech sectionPet={sectionPet} />
    <SectionConcepts />
    {/* <SectionModules />
    <SectionAgenda /> */}
    {/* <PricingBox /> */}
    <SectionAboutUs />
    {/* <SectionReviews /> */}
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)
  const formattedResponse = landingPage.data.attributes

  return {
    props: {
      ...formattedResponse
    }
  }
}

export default Index
