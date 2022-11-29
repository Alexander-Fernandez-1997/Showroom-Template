import { ClothesGrid } from "../components/categories/ClothesGrid";
import { simpleFetch } from "../utils/simpleFetch";

export default function Showroom({ clothesJson }) {
  return (
    <>
      <ClothesGrid clothesJson={clothesJson}></ClothesGrid>
    </>
  );
}

export async function getStaticProps(context) {
  const clothesJson = await simpleFetch("clothes");

  return {
    props: { clothesJson },
    revalidate: 120,
  };
}
