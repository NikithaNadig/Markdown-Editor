import React, { useState } from "react";
import marked from "marked";

import "./markdown.css";

const Markdown = () => {
  const [markdown, updateMarkdown] = useState("");
  const modifyMarkdown = event => updateMarkdown(event.target.value);

  return (
    <div className="markdown-container">
      <textarea className="markdown-input" onChange={modifyMarkdown} value={markdown} />
      <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
};
export default Markdown;
