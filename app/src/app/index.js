import React from 'react'
import { Image } from './children/image'
import styles from './styles'
import { Comments } from './children/comments'
import { Header } from './children/header'
import { Footer } from './children/footer'

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
