import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="center-align">
      <h3>Hey There! I am Bryant, a software engineer based in San Jose, CA. Let's get to know each other.</h3>
    </section>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <section>
      <h5 className='bold'>My Elevator pitch:</h5>
      <p>I am currently a full stack engineer at InfoImage, in which I grew my strengths and enjoyment in development. The use of new and modern technologies excite me, such as <strong>React</strong> and <strong>NodeJS</strong>. One of the side projects which taught my a modern skillset was my <Link to="/page-2/">Internal Tools.</Link> I do have a solid amount of experience in other places such as <strong>Java, Oracle SQL, and MongoDB</strong>. I am currently open to new opportunities so feel free to <a href="mailto:bryant.t.tran1@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/bryanttran1/">LinkedIn</a>.</p>
    </section>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
