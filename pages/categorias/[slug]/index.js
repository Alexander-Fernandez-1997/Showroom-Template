import { ClothesGrid } from "../../../components/categories/ClothesGrid";
import { simpleFetch } from "../../../utils/simpleFetch";

export default function Showroom({ clothesJson }) {
  return (
    <>
      <ClothesGrid clothesJson={clothesJson}></ClothesGrid>
    </>
  );
}

export const getStaticPaths = async (ctx) => {
  const clothesJson = await simpleFetch("categories");

  return {
    fallback: "blocking",
    paths: clothesJson.map((clothe) => ({
      params: { slug: clothe.slug.toString() },
    })),
  };
};

export async function getStaticProps(context) {
  const clothesJson = await simpleFetch("clothes");

  return {
    props: { clothesJson },
    revalidate: 120,
  };
}
