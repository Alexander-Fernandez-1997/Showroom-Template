import React from "react";

export const AboutContent = ({ content }) => {
  return (
    <>
      <section
        className="bg0 p-t-75 "
        dangerouslySetInnerHTML={{ __html: content }}
      ></section>
    </>
  );
};
