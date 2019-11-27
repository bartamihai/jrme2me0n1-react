import React from 'react'
import Helmet from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>jRMe2mE0n1</title>
      </Helmet>
    </div>
  )
}

export default Page
