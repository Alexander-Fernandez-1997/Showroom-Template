import { useState } from "react";
import { ClothesGrid } from "../components/categories/ClothesGrid";
import { simpleFetch } from "../utils/simpleFetch";

export default function Showroom({ clothesJson }) {
  const [query, setQuery] = useState("");
  return (
    <>
      <ClothesGrid
        clothesJson={clothesJson}
        query={query}
        setQuery={setQuery}
      ></ClothesGrid>
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
