import React from 'react'
import Link from 'gatsby-link'
import AdelieLogo from '../icon/adelie.png'
import VSlider from '../components/vertical-slider'

const IndexPage = () => (
  <div style={styles.container}>
    <div>
      <img style={styles.logo} srcSet={`${AdelieLogo} 2x`} />
    </div>
    <div style={styles.logoContainer}>
      <h1 style={styles.logoText} className="logo">adelie</h1>
      <VSlider style={styles.text}></VSlider>
    </div>
  </div>
)

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
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '82px',
  },
  logoText: {
    fontWeight: 300,
    marginBottom: 0,
  },
  text: {
    marginBottom: 0,
  }
}

export default IndexPage
