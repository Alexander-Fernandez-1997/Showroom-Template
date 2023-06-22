import { simpleFetch } from "../utils/simpleFetch";
import { SectionSlide } from "@/components/intro/SectionSlide";
import { IndexBanner } from "@/components/intro/IndexBanner";
import { IndexCarousel } from "@/components/utils/IndexCarousel";

export default async function Home() {
  const clothesJson = await simpleFetch("clothes/limit", "ssr");
  const categoriesJson = await simpleFetch("categories", "ssr");
  const storeJson = await simpleFetch("stores", "ssr");

  return (
    <>
      <SectionSlide store={storeJson}></SectionSlide>
      <IndexBanner categorias={categoriesJson}></IndexBanner>
      <IndexCarousel clothes={clothesJson}></IndexCarousel>
    </>
  );
}
