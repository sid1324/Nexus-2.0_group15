import {CloseFilledIcon} from "@nexus-ds/shared-icons";
import {forwardRef} from "@nexus-ds/system";
import {useMemo} from "react";

import {UseChipProps, useChip} from "./use-chip";

export interface ChipProps extends Omit<UseChipProps, "isOneChar" | "isCloseButtonFocusVisible"> {}

const Chip = forwardRef<"div", ChipProps>((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps,
  } = useChip({
    ...props,
    ref,
  });

  const start = useMemo(() => {
    if (isDot && !startContent) {
      return <span className={slots.dot({class: classNames?.dot})} />;
    }

    return startContent;
  }, [slots, startContent, isDot]);

  const end = useMemo(() => {
    if (isCloseable) {
      return <span {...getCloseButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);

  return (
    <Component {...getChipProps()}>
      {start}
      <span className={slots.content({class: classNames?.content})}>{children}</span>
      {end}
    </Component>
  );
});

Chip.displayName = "nexusui.Chip";

export default Chip;
