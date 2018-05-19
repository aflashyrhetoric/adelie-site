import React from 'react'
import Link from 'gatsby-link'
import AdelieLogo from '../icon/adelie.png'
import VSlider from '../components/vertical-slider'

const IndexPage = ({ data }) => (
  <div style={styles.pageContainer}>
    <div style={styles.container}>
      <div>
        <img style={styles.logo} srcSet={`${AdelieLogo} 2x`} />
      </div>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText} className="logo">adelie</h1>
        <VSlider 
          textArray={[
            'Developer\'s Group',
            'Pay Up',
            'Night Messenger',
            'Mosu', 
          ]}
          style={styles.text}></VSlider>
      </div>
    </div>
    <div>
      <p>{ data.site.siteMetadata.description }</p>
    </div>
    <div>

      <p>This site is under construction. For now, check out our <a href="https://adelie.id">community site.</a></p>
{/*      <ul css={{ display: 'inline', }}>
        <li>
          <Link to={node.path}>{node.path}</Link>
        </li>
        <li>
          <Link to={node.path}>{node.path}</Link>
        </li>
        <li>
          <Link to={node.path}>{node.path}</Link>
        </li>
        <li>
          <Link to={node.path}>{node.path}</Link>
        </li>
      </ul>
*/}    </div>
  </div>
)

const styles = {
  pageContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '250px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
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
    fontSize: '30px',
    marginBottom: 0,
  },
  text: {
    marginBottom: 0,
  }
}

export default IndexPage

export const query = graphql`
  query SiteDescriptionQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`
