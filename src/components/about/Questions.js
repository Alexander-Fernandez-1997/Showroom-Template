import React from "react";

export const Questions = ({ note }) => {
  const { id, tittle, description } = note;
  const faq = `faq${id}`;
  return (
    <li>
      <a
        data-bs-toggle="collapse"
        className="collapsed"
        data-bs-target={`#${faq}`}
      >
        {tittle}
        <i className="bx bx-chevron-down icon-show" />
        <i className="bx bx-x icon-close" />
      </a>
      <div id={faq} className="collapse" data-bs-parent=".faq-list">
        <p>{description}</p>
      </div>
    </li>
  );
};
