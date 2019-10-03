import React from "react"
import { Link } from "gatsby"
import HookForm from "../components/form"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Devs</h1>
    <HookForm />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
