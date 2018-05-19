import React from 'react'
import Link from 'gatsby-link'

import AdelieLogo from '../icon/adelie.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '250px',
  },
  logo: {
    maxHeight: '120px',
    maxWidth: '120px',
    marginBottom: 0,
  },
  logoContainer: {
  },
  logoText: {
    fontWeight: 300,
    marginBottom: 0,
  },
  text: {
    marginBottom: 0,
    marginBottom: 0,
  }
}

const IndexPage = () => (
  <div style={styles.container}>
    <div>
      <img style={styles.logo} srcSet={`${AdelieLogo} 2x`} />
    </div>
    <div style={styles.logoContainer}>
      <h1 className="logo" style={styles.logoText}>adelie</h1>
      <p>DEVELOPERS GROUP</p>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    </div>
  </div>
)

export default IndexPage
