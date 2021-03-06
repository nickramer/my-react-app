import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code react apps</h1>
        <p>Complete courses and some stuff.</p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
