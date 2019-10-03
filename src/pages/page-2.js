import React from "react"
import { Link } from "gatsby"
import App from "../components/app"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <App/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
