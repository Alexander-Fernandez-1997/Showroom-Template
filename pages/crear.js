import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { AdminNav } from "../components/admin/AdminNav";
import { EditForm } from "../components/admin/EditForm";
import { GuiaAdmin } from "../components/admin/GuiaAdmin";
import { BackToTop } from "../components/utils/BackToTop";

export default function Crear({ clothesJson }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [clothes, setClothes] = useState(clothesJson);

  const getFilteredClothes = (q, clothe) => {
    if (q === "") {
      return clothe;
    } else {
      return clothe.filter((cloth) =>
        cloth.name.toLowerCase().includes(q.toLowerCase())
      );
    }
  };

  const filteredClothes = getFilteredClothes(query, clothes);

  //-- Hooks----------------------

  const [values, handleInputChange, reset] = useForm({
    name: "",
    category: "",
    description: "",
    image: "",
  });
  const { name, category, description, image } = values;

  //--------------------------------------------------

  //Crear una nueva prenda

  const newClothe = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/clothes", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataJson = await response.json();
    console.log(dataJson);
    reset();
    router.push("/crear");
  };

  //------------------------------------------

  //delete todo:
  const deleteTodo = async (clothesId) => {
    const resp = await fetch(`/api/clothes/delete/${clothesId}`, {
      method: "DELETE",
    })
      .then((res) => console.log("SUCCESS:: " + res.json()))
      .catch((e) => console.log("ERROR:" + e));

    router.push("/crear");
  };
  //------------------------------------------

  //Editar una prenda
  const showEdit = (id) => {
    let modal = document.getElementById(id);
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  };

  return (
    <div className="text-dark">
      <div className="">
        <AdminNav></AdminNav>
        <GuiaAdmin></GuiaAdmin>

        <section className="get-in-touch" id="get-in-touch">
          <h1 className="title">Crear prenda de ropa</h1>
          <form action="POST" onSubmit={newClothe} className="contact-form row">
            <div className="form-field col-lg-6">
              <input
                id="name"
                className="input-text js-input "
                type="text"
                required
                autoComplete="off"
                name="name"
                onChange={handleInputChange}
                value={name}
                minLength="2"
                maxLength="12"
              />
              <label className="label" htmlFor="name">
                Nombre
              </label>
            </div>
            <div className="form-field col-lg-6">
              <select
                id="category"
                className="input-text js-input selected"
                required
                autoComplete="off"
                name="category"
                onChange={handleInputChange}
                value={category}
              >
                <option value="Bikini">Bikini</option>
                <option value="Corpiño">Corpiño</option>
                <option value="Enteriza">Enteriza</option>
                <option value="Tankini">Tankini</option>
                <option value="Bombacha">Bombacha</option>
              </select>
              <label className="label" htmlFor="category">
                Categoria
              </label>
            </div>
            <div className="form-field col-lg-12 ">
              <input
                id="description"
                minLength={50}
                maxLength={100}
                className="input-text js-input "
                type="text"
                required
                autoComplete="off"
                name="description"
                onChange={handleInputChange}
                value={description}
              />
              <label className="label" htmlFor="description">
                Descripcion
              </label>
            </div>

            <div className="form-field col-lg-12">
              <input
                id="image"
                className="input-text js-input "
                type="text"
                required
                autoComplete="off"
                name="image"
                onChange={handleInputChange}
                value={image}
              />
              <label className="label" htmlFor="image">
                Url de la imagen
              </label>
            </div>

            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" value="Crear" />
            </div>
          </form>
        </section>

        {/* ------------------------------------- */}
        {/* ------------------------------- */}

        <div className="container">
          <h1>Catalogo de prendas</h1>
          <hr className="mb-1"></hr>

          <div className=" panel-search w-full p-t-10 p-b-15 litte-bar">
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                onChange={(e) => setQuery(e.target.value)}
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Buscar"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="row isotope-grid" id="inicioGrid">
            {filteredClothes.map((clothe) => (
              <div
                key={clothe.id}
                className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
              >
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={clothe.image_main} alt={clothe.name} />
                    <a
                      href={`#${clothe._id}`}
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      onClick={() => showEdit(clothe.id)}
                    >
                      Editar
                    </a>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <a
                        href="product-detail.html"
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {clothe.name}
                      </a>
                      <span className="stext-105 cl3">{clothe.price}</span>
                    </div>
                    <div className="block2-txt-child2 flex-r p-t-3">
                      <button
                        className="id btn btn-danger"
                        onClick={() => deleteTodo(clothe._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div style={{ display: "none" }} id={clothe.id}>
                    <EditForm
                      id={clothe.id}
                      name={clothe.name}
                      category={clothe.price}
                      description={clothe.description}
                      image={clothe.image_main}
                    ></EditForm>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
export async function getServerSideProps(context) {
  const clothesFetch = await fetch("http://localhost:3000/api/clothes");
  const clothesJson = await clothesFetch.json();

  return {
    props: { clothesJson },
  };
}
