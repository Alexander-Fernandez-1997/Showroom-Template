import React from "react";

export const ContactMap = () => {
  return (
    <>
      <div className="map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              style={{
                width: "100%",
                height: "50vh",
              }}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Terrero1777&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
            <a href="https://123movies-to.org">123movies</a>
            <br />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".mapouter{position:relative;text-align:right;height:50vh;width:100wv;}",
              }}
            />
            <a href="https://www.embedgooglemap.net" />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".gmap_canvas {overflow:hidden;background:none!important;height:50vh;width:100wv;}",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
