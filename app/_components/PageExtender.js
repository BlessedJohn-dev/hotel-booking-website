"use client";

import { useState } from "react";

function PageExtender({ children }) {
  const [extendText, setExtendText] = useState(false);

  const displayText = extendText
    ? children
    : children.split(" ").slice(0, 30).join(" ") + "...";

  return (
    <span>
      {displayText}
      <button
        className="bg-accent-500 text-primary-50 p-5"
        onClick={() => setExtendText(!extendText)}
      >
        {extendText ? "show less" : "show more"}
      </button>
    </span>
  );
}

export default PageExtender;
