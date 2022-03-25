import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center space-x-4 p-8">
        <div>
          <Link href="/"><a>Home</a></Link>
        </div>
        <div>
          <Link href="/fruits"><a>Fruits</a></Link>
        </div>
        <div>
          <Link href="/fruits"><a>Suppliers</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar