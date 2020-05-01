import React, { useContext, useState } from "react";
import "./theme.css";
import marked from "marked";
import ThemeContext from "./themes-context";

const Theme = () => {
  const theme = useContext(ThemeContext);
  const [markdown, updateMarkdown] = useState("");
  const modifyMarkdown = event => updateMarkdown(event.target.value);
  return (
    <div className="markdown-theme-container">
      <textarea
        className="markdown-input"
        onChange={modifyMarkdown}
        value={markdown}
      />

      <div style={theme}>
        <p>{JSON.stringify(theme)}</p>
        <div className="markdown-container">
          <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
