import React from 'react'
import "@/styles/mu.css"
import styles from "./index.module.scss"
import Link from 'next/link'

const News = () => {
  return (
    <div className={styles.main}>
      <h1 className='text-red-600'>NOTICE:</h1>
      <h2>This game is currently in PRIVATE BETA</h2>
      <h2>Message us at our Facebook page for instructions to join testing</h2>
      <h3>Facebook Page: <Link href='https://www.facebook.com/captaindigit'>https://www.facebook.com/captaindigit</Link></h3>
      <h2>Select group of participants will be rewarded with the following on Production Server:</h2>
      <h4>-- +11 Archangel Weapon for a chosen character class</h4>
      <h4>-- +15 Excellent Tier 1 Set for a chosen character class (Pad Set, Vine Set, Leather Set, etc.)</h4>
      <h4>-- +11 Tier 1 Wing for a chosen character class</h4>
      <h4>-- 30 Jewel of Bless</h4>
      <h4>-- 60 Jewel of Soul</h4>
      <h4>-- 60 Jewel of Chaos</h4>
      <h3>Definitive Criteria will be anounced soon but it will mostly be according to the amount of contribution to the server - Online Time, Bug Reports, Server Moderation</h3>
      <h3>Basically all active Testers are guaranteed to be rewarded in some manners</h3>
    </div>
  )
}

export default News