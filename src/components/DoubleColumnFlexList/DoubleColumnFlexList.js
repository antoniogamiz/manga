import React from "react";

import "./DoubleColumnFlexList.css";

export default ({ items }) => (
  <div className="double-column-flex-list">
    {items.map((v, i) => (
      <div key={i} className="double-column-flex-list__item">
        {v}
      </div>
    ))}
  </div>
);
