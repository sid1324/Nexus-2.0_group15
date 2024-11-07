import {forwardRef} from "@nexus-ds/system-rsc";

import {UseSpacerProps, useSpacer} from "./use-spacer";

export interface SpacerProps extends UseSpacerProps {}

const Spacer = forwardRef<"span", SpacerProps>((props, ref) => {
  const {Component, getSpacerProps} = useSpacer({...props});

  return <Component ref={ref} {...getSpacerProps()} />;
});

Spacer.displayName = "nexusui.Spacer";

export default Spacer;
