import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../node_modules/prism-themes/themes/prism-vsc-dark-plus.css";
import { compose } from "js-utl";
import { classNames } from "react-js-utl/utils";
import { useUniqueKey } from "react-js-utl/hooks";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css";
import "../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css";

const PrismCode = compose(React.memo)(function PrismCode({
  className = void 0,
  codeClassName = void 0,
  children,
  withLineNumbers = true,
  lineHighlight = void 0,
} = {}) {
  const id = useUniqueKey();

  useEffect(() => {
    Prism.highlightAllUnder(document.getElementById(id));
  }, [id, children]);

  return (
    <div id={id} className={classNames("prism-code", className)}>
      <pre
        className={classNames(codeClassName, withLineNumbers && "line-numbers")}
        data-line={lineHighlight || void 0}
      >
        <code className={codeClassName}>{children}</code>
      </pre>
    </div>
  );
});
PrismCode.displayName = "PrismCode";
export default PrismCode;
