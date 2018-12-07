/* eslint-disable */

import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import styles from '../styles/index.module.scss'

const IndexPage = () => (
  <Layout>
    <section className={[styles.billboard, styles.slideOne].join(' ')}>
      <div className={styles.billboard__content}>
        <h1>Welcome to BookingPad</h1>
        <p>This is the official website of BookingPad</p>
        <div className={styles.image}>
          <Image />
        </div>
      </div>
    </section>
    <section className={[styles.billboard, styles.slideTwo].join(' ')}>
      <div className={styles.billboard__content}>
        <h2>Block Two</h2>
        <p>Bacon ipsum dolor amet fatback pastrami cupim salami landjaeger drumstick beef ribs. 
          Chicken capicola landjaeger alcatra pastrami ham drumstick pig kielbasa filet mignon 
          brisket short ribs tail frankfurter leberkas. </p>
        <div className={styles.image}>
          <Image />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
