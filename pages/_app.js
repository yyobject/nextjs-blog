import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}