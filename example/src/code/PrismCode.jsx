import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../node_modules/prism-themes/themes/prism-vsc-dark-plus.css";
import { compose } from "js-utl";
import { classNames } from "react-js-utl/utils";
import { useUniqueKey } from "react-js-utl/hooks";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/components/prism-jsx";

const PrismCode = compose(React.memo)(function PrismCode({
  className = void 0,
  language = "jsx",
  children,
  withLineNumbers = true,
  lineHighlight = void 0,
} = {}) {
  const id = useUniqueKey();

  useEffect(() => {
    Prism.highlightAllUnder(document.getElementById(id));
  }, [id, children]);

  const languageClassName = `language-${language}`;
  return (
    <div id={id} className={classNames("prism-code", className)}>
      <pre
        className={classNames(
          languageClassName,
          withLineNumbers && "line-numbers"
        )}
        data-line={lineHighlight || void 0}
      >
        <code className={languageClassName}>{(children + "").trim()}</code>
      </pre>
    </div>
  );
});
PrismCode.displayName = "PrismCode";
export default PrismCode;
