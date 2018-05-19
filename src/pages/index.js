import React from 'react'
import Link from 'gatsby-link'

import AdelieLogo from '../icon/adelie.png';

const styles = {
  logo: {
    maxHeight: '120px',
    maxWidth: '120px',
  },
  logoText: {
    fontWeight: 'light',
  }
}

const IndexPage = () => (
  <div>
    <img style={styles.logo} srcSet={`${AdelieLogo} 2x`} />
    <h1 className="logo" style={styles.logoText}>adelie</h1>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
