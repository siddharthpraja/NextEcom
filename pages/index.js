import { HomePage } from '@/components/Home/HomePage';
import HomeProduct from '@/components/Home/homeProducts';

export default function Home({ data, product, product2 }) {
  return (
    <div>
      <HomePage data={data} />
      <HomeProduct product={product} />
    </div>
  );
}
export async function getServerSideProps() {
  const { slides } = await import('/data/data.json');
  const { productData } = await import('/data/data.json');
  return {
    props: {
      data: slides,
      product: productData,
    },
  };
}
