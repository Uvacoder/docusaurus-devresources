import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

// Reference: https://github.com/utterance/utterances/issues/549#issuecomment-907606127
function utterancesTheme(colorMode) {
  if (document.querySelector(".utterances-frame")) {
    const message = {
      type: "set-theme",
      theme: `github-${colorMode}`,
    };
    const iframe = document.querySelector(".utterances-frame");
    iframe.contentWindow.postMessage(message, "https://utteranc.es");
  }
}

const CommentBox = () => {
  const commentBox = useRef();
  const { colorMode } = useColorMode();

  useEffect(() => {
    let scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", true);
    scriptEl.setAttribute("repo", "anupam-crownstack/comments-devresource");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", `github-${colorMode}`);
    commentBox.current.appendChild(scriptEl);
  }, []);

  useEffect(() => {
    utterancesTheme(colorMode);
  }, [colorMode]);

  return (
    <div style={{ width: "100%" }} id="comments">
      <div ref={commentBox}></div>
    </div>
  );
};

export default CommentBox;
