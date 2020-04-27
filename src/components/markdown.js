import React, { useState } from "react";
import marked from "marked";
import "./markdown.css";

const Markdown = () => {
  const [markdown, updateMarkdown] = useState("");
  const modifyMarkdown = event => updateMarkdown(event.target.value);
  return (
    <div className="markdown-container">
      <input onChange={modifyMarkdown} value={markdown} />
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
};
export default Markdown;
