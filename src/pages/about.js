/*importar reat*/
import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

/* criar const com nome da nossa pagina, Inicia maiuscula */
const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
            <h1>About Page</h1>
    </Layout>
)

export default AboutPage