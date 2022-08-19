import { useState } from "react";
import { connectToDatabase } from "../utils/db";
import { Navbar } from "../components/Navbar";
import { ClothesGrid } from "../components/ClothesGrid";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

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
  const { db } = await connectToDatabase();
  const clothes = await db
    .collection("clothes")
    .find()
    .sort({ _id: -1 })
    .toArray();
  const clothesJson = JSON.parse(JSON.stringify(clothes));
  return {
    props: { clothesJson },
    revalidate: 120,
  };
}
