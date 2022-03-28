import type { NextPage } from 'next'
import Layout from '../components/layout';
import Fetcher from '../components/fetcher';


const Fruits: NextPage = () => {
  return (
    <Layout>
      <section>
        <Fetcher />
      </section>
    </Layout>
  )
}

export default Fruits
