import { simpleFetch } from "utils/simpleFetch";
import { FooterLink } from "./FooterLink";

export const FooterCateg = async () => {
  const categories = await simpleFetch("categories/footer", "isr", "60");

  return (
    <div className="col-sm-6 col-lg-3 p-b-50">
      <h4 className="stext-301 cl0 p-b-30">Categorias</h4>
      <ul>
        {categories.map((categLink, index) => {
          if (index < 4) {
            return (
              <FooterLink
                key={index + categLink.slug}
                slug={categLink.slug}
                name={categLink.name}
              ></FooterLink>
            );
          }
        })}
      </ul>
    </div>
  );
};
