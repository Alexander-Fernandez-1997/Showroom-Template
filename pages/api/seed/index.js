export default async (req, resp) => {
  try {
    //fetch categories, subcategories, clothes, variants in /api/seed
    const seedFetch = () => {
      const url = "http://localhost:3000/api/seed/";
      console.log(url);
      const seeds = [
        "store",
        "categories",
        "subcategories",
        "clothes",
        "variants",
        "notes",
        "franchises",
      ];
      const seedFetchs = seeds.map((seed) => {
        console.log(seed);
        return fetch(url + seed).then((res) => res.json());
      });
      return "seed completed";
    };
    seedFetch();
    resp.status(200).json("seed completed");
  } catch (e) {
    resp.status(500).json(e.toString());
  }
};
