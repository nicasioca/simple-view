import type { NextPage } from 'next'
import Layout from '../components/layout';
import Fetcher from '../components/fetcher';


const Fruits: NextPage = () => {
  return (
    <Layout>
      <Fetcher/>
    </Layout>
  )
}

export default Fruits
