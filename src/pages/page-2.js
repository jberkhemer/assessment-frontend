import React from "react"
import { Link } from "gatsby"
import { useQueryParam } from "gatsby-query-params"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductInfo from '../components/product-components/product-info'

import EncodingLibrary from "../libraries/rfc4648";

import '../components/styles/products.css'

const SecondPage = () => (
  <Layout>
    <SEO title="Parallel Dev Frontend Assessment" />
    <h1>Product Layout</h1>

    {
    <div id="productLayout">
        <ProductInfo product="hip-joint-chews" />
        <ProductInfo product="calming-relaxation-chews" />
        <ProductInfo product="bacon-tincture" />
        <ProductInfo product="chicken-tincture" />
    </div>
    }

    <div id="cta" style={{
      textAlign: 'center'
    }}>
      <h2>Thanks for your interest in working with us at {EncodingLibrary.decode(useQueryParam('company', 'VGhlIFdhZmZsZQ=='))}</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
