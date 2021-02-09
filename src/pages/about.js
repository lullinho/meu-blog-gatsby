/*importar reat*/
import React from 'react'
import { Link } from 'gatsby'

/* criar const com nome da nossa pagina, Inicia maiuscula */
const AboutPage = () => (
    <>
        <h1>About Page</h1>
        <ul>
            <li>
            <a href="/about">About normal sem gatsby</a>
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about" activeStyle={{color: 'red'}}>About com gatsby</Link>
            </li>
    </ul>
  </>
)

export default AboutPage