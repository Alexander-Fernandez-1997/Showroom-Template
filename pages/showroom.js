import { useState } from "react";
import { Navbar } from "../components/utils/Navbar";
import { ClothesGrid } from "../components/categories/ClothesGrid";
import { Footer } from "../components/utils/Footer";
import { BackToTop } from "../components/utils/BackToTop";

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
      <Footer></Footer>
      <BackToTop />
    </>
  );
}

export async function getStaticProps(context) {
  const clothesFetch = await fetch("http://localhost:3000/api/clothes");
  const clothesJson = await clothesFetch.json();
  return {
    props: { clothesJson },
    revalidate: 120,
  };
}
