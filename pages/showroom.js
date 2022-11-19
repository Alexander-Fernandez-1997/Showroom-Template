import { useState } from "react";
import { Navbar } from "../components/utils/Navbar";
import { ClothesGrid } from "../components/categories/ClothesGrid";
import { simpleFetch } from "../utils/simpleFetch";

export default function Showroom({ clothesJson }) {
  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar query={query} setQuery={setQuery}></Navbar>
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
