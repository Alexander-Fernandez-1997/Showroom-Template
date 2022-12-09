import { SectionSlide } from "../components/intro/SectionSlide";
import { IndexBanner } from "../components/intro/IndexBanner";
import { IndexCarousel } from "../components/utils/IndexCarousel";
import { simpleFetch } from "../utils/simpleFetch";

export default function Home({ clothesJson, categoriesJson, storeJson }) {
  console.log(clothesJson + " " + categoriesJson + " " + storeJson);
  return (
    <>
      <SectionSlide store={storeJson}></SectionSlide>
      <IndexBanner categorias={categoriesJson}></IndexBanner>
      <IndexCarousel clothes={clothesJson}></IndexCarousel>
    </>
  );
}

export async function getStaticProps(context) {
  const clothesJson = await simpleFetch("clothes/limit");
  const categoriesJson = await simpleFetch("categories");
  const storeJson = await simpleFetch("store");

  return {
    props: { clothesJson, categoriesJson, storeJson },
    revalidate: 120,
  };
}
