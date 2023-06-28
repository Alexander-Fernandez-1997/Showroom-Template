import { ClothesGrid } from "@/components/categories/ClothesGrid";
import { simpleFetch } from "utils/simpleFetch";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Home({ params }: Props) {
  const categData = await simpleFetch(`categories/${params.slug}`, "ssr");

  return (
    <>
      <ClothesGrid clothesJson={categData}></ClothesGrid>
    </>
  );
}
