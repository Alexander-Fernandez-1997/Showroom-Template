import React from "react";

export const Locales = () => {
  const activateLocal = (e) => {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <div className="localesbody mb-5">
      <div className="options">
        <div
          className="option active"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/D1N2bZh.jpg)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Tienda oficial - Caba</div>
              <div className="sub">Terrero 1777</div>
            </div>
          </div>
        </div>
        <div
          onClick={activateLocal}
          className="option"
          style={{
            background: "url(https://i.imgur.com/6DODAnP.jpg)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Tienda oficial - Caba</div>
              <div className="sub">Santa Fe 3535</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/Af15WzE.jpg)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Franquicia - San Isidro</div>
              <div className="sub">Acassuso 281</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/Ybtlgl3.png)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Franquicia - Bahia Blanca</div>
              <div className="sub">Vicente López 113</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/OhgTdbg.png)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Franquicia - Colón</div>
              <div className="sub">Maipu 39</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/tE2QXY3.jpg)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Franquicia - Gualeguaychú</div>
              <div className="sub">España 17</div>
            </div>
          </div>
        </div>
        <div
          className="option"
          onClick={activateLocal}
          style={{
            background: "url(https://i.imgur.com/NYVBApK.jpg)",
          }}
        >
          <div className="shadow" />
          <div className="label">
            <div className="info">
              <div className="main">Franquicia - Valentín alsina</div>
              <div className="sub">Pte peron 2307</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
