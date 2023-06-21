import { simpleFetch } from "../utils/simpleFetch";
import { SectionSlide } from "@/components/intro/SectionSlide";

export default async function Home() {
  const clothesJson = await simpleFetch("clothes/limit", "ssr");
  const categoriesJson = await simpleFetch("categories", "ssr");
  const storeJson = await simpleFetch("stores", "ssr");

  // console.log(clothesJson);
  // console.log(categoriesJson);
  // console.log(storeJson);
  return (
    <>
      <SectionSlide store={storeJson}></SectionSlide>
      {/* <IndexBanner categorias={categoriesJson}></IndexBanner> */}
      {/* <IndexCarousel clothes={clothesJson}></IndexCarousel> */}
    </>
  );
}
