import React from 'react'

import { Image } from './children/image'
import { Comments } from './children/comments'
import { Header } from './children/header'
import { Footer } from './children/footer'

import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <Header data={data} />
        <Comments data={data} />
        <Footer />
      </div>
    </main>
  )
}

export default App
