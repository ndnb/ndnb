import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <p>Hello there</p>
    <CallToAction />
  </Layout>
)

export default IndexPage
