export const Modal = ({
  _id,
  name,
  category,
  description,
  image,
  choosen,
  setChoosen,
}) => {
  const handleCloseModal = () => {};
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl ">
        <div className="modal-content">
          <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    src={image}
                    alt={name}
                  />
                </div>
                <div className="col-md-6">
                  <h1 className="display-5 fw-bolder">{name}</h1>
                  <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">
                      {category}
                    </span>
                    <span className="ms-2">{category}</span>
                  </div>
                  <p className="lead">{description}</p>
                  <div>
                    <button
                      onClick={handleCloseModal}
                      className=" btn btn-dark"
                      data-bs-dismiss="modal"
                    >
                      Ver
                    </button>
                    <button
                      className="ms-2 btn btn-dark"
                      onClick={handleCloseModal}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
