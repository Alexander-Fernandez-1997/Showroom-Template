import { SectionSlide } from "../components/intro/SectionSlide";
import { IndexBanner } from "../components/intro/IndexBanner";
import { IndexCarousel } from "../components/utils/IndexCarousel";

export default function Home({ clothesJson, categoriesJson }) {
  return (
    <>
      {/* Slider */}
      <SectionSlide></SectionSlide>
      {/* Banner */}
      <IndexBanner categorias={categoriesJson}></IndexBanner>
      {/* Product */}
      <IndexCarousel clothes={clothesJson}></IndexCarousel>
    </>
  );
}

export async function getStaticProps(context) {
  const clothesFetch = await fetch("http://localhost:3000/api/clothes");
  const clothesJson = await clothesFetch.json();

  const categoriesFetch = await fetch("http://localhost:3000/api/categories");
  const categoriesJson = await categoriesFetch.json();
  return {
    props: { clothesJson, categoriesJson },
    revalidate: 120,
  };
}
