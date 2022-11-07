import { Navbar } from "../components/utils/Navbar";
import { SectionSlide } from "../components/intro/SectionSlide";
import { IndexBanner } from "../components/intro/IndexBanner";
import { IndexCarousel } from "../components/utils/IndexCarousel";
import { Footer } from "../components/utils/Footer";
import { BackToTop } from "../components/utils/BackToTop";

export default function Home({ clothesJson, categoriesJson }) {
  return (
    <>
      {/* Header */}

      <Navbar></Navbar>
      {/* Slider */}
      <SectionSlide></SectionSlide>
      {/* Banner */}
      <IndexBanner categorias={categoriesJson}></IndexBanner>

      {/* Product */}
      <IndexCarousel clothes={clothesJson}></IndexCarousel>
      {/* Footer */}
      <Footer></Footer>
      {/* Back to top */}
      <BackToTop></BackToTop>
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
