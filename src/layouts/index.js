import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import styles from './styles';
import './normalize.css'
import './base.css'

const Layout = ({ children, data }) => (
  <div
    style={styles.base}
  >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Adelie Co' },
        { name: 'keywords', content: 'Adelie, Adelie Developer\'s Group' },
      ]}
      link={[
        { rel: 'stylesheet', href: "https://use.typekit.net/ton1qqp.css" }
      ]}

    />

    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
