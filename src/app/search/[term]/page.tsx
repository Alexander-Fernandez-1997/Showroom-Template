import { ClothesGrid } from "@/components/categories/ClothesGrid";
import { simpleFetch } from "utils/simpleFetch";

interface Props {
  params: {
    term: string;
  };
}

export default async function Home({ params }: Props) {
  const clothes = await simpleFetch(`search/${params.term}`, "ssr");
  return (
    <>
      <ClothesGrid clothesJson={clothes}></ClothesGrid>
    </>
  );
}
