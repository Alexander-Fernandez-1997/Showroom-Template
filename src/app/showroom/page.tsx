import { simpleFetch } from "utils/simpleFetch";
import { ClothesGrid } from "@/components/categories/ClothesGrid";

export default async function Home() {
  const clothesJson = await simpleFetch("clothes", "ssr");
  return (
    <>
      <ClothesGrid clothesJson={clothesJson}></ClothesGrid>
    </>
  );
}
