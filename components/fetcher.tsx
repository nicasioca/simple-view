import type { NextPage } from 'next'
import useSWR from 'swr'


const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const Fetcher: NextPage = () => {
  const { data, error } = useSWR(
    "http://localhost:8080/fruits/12",
    fetcher
  );

  if (error) return <>"An error has occurred."</>;
  if (!data) return <>"Loading..."</>;
  return (
    <div>
      <div>{data.fruit_id}</div>
      <div>{data.name}</div>
      <div>{data.datetime_utc}</div>
      <div>{data.unit_price}</div>
      <div>{data.sku}</div>
    </div>
  );
}

export default Fetcher