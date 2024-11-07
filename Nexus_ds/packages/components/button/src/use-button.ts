import type {ButtonVariantProps} from "@nexus-ds/theme";
import type {AriaButtonProps} from "@nexus-ds/use-aria-button";
import type {HTMLnexusuiProps, PropGetter} from "@nexus-ds/system";
import type {ReactNode} from "react";
import type {RippleProps} from "@nexus-ds/ripple";

import {dataAttr} from "@nexus-ds/shared-utils";
import {ReactRef} from "@nexus-ds/react-utils";
import {MouseEventHandler, useCallback} from "react";
import {useFocusRing} from "@react-aria/focus";
import {chain, mergeProps} from "@react-aria/utils";
import {useDOMRef, filterDOMProps} from "@nexus-ds/react-utils";
import {button} from "@nexus-ds/theme";
import {isValidElement, cloneElement, useMemo} from "react";
import {useAriaButton} from "@nexus-ds/use-aria-button";
import {useHover} from "@react-aria/interactions";
import {SpinnerProps} from "@nexus-ds/spinner";
import {useRipple} from "@nexus-ds/ripple";

import {useButtonGroupContext} from "./button-group-context";

interface Props extends HTMLnexusuiProps<"button"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * Whether the button should display a ripple effect on press.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * The button start content.
   */
  startContent?: ReactNode;
  /**
   * The button end content.
   */
  endContent?: ReactNode;
  /**
   * Spinner to display when loading.
   * @see https://nexusui.org/components/spinner
   */
  spinner?: ReactNode;
  /**
   * The spinner placement.
   * @default "start"
   */
  spinnerPlacement?: "start" | "end";
  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * The native button click event handler.
   * use `onPress` instead.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type UseButtonProps = Props &
  Omit<AriaButtonProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, "isInGroup">;

export function useButton(props: UseButtonProps) {
  const groupContext = useButtonGroupContext();
  const isInGroup = !!groupContext;

  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner,
    fullWidth = groupContext?.fullWidth ?? false,
    size = groupContext?.size ?? "md",
    color = groupContext?.color ?? "default",
    variant = groupContext?.variant ?? "solid",
    disableAnimation = groupContext?.disableAnimation ?? false,
    radius = groupContext?.radius,
    disableRipple = groupContext?.disableRipple ?? false,
    isDisabled: isDisabledProp = groupContext?.isDisabled ?? false,
    isIconOnly = groupContext?.isIconOnly ?? false,
    isLoading = false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;

  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {isFocusVisible, isFocused, focusProps} = useFocusRing({
    autoFocus,
  });

  const isDisabled = isDisabledProp || isLoading;

  const styles = useMemo(
    () =>
      button({
        size,
        color,
        variant,
        radius,
        fullWidth,
        isDisabled,
        isInGroup,
        disableAnimation,
        isIconOnly,
        className,
      }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className,
    ],
  );

  const {onClick: onRippleClickHandler, onClear: onClearRipple, ripples} = useRipple();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disableRipple || isDisabled || disableAnimation) return;
      domRef.current && onRippleClickHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler],
  );

  const {buttonProps: ariaButtonProps, isPressed} = useAriaButton(
    {
      elementType: as,
      isDisabled,
      onPress,
      onClick: chain(onClick, handleClick),
      ...otherProps,
    } as AriaButtonProps,
    domRef,
  );

  const {isHovered, hoverProps} = useHover({isDisabled});

  const getButtonProps: PropGetter = useCallback(
    (props = {}) => ({
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-loading": dataAttr(isLoading),
      ...mergeProps(
        ariaButtonProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps,
        }),
        filterDOMProps(props),
      ),
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps,
    ],
  );

  const getIconClone = (icon: ReactNode) =>
    isValidElement(icon)
      ? cloneElement(icon, {
          // @ts-ignore
          "aria-hidden": true,
          focusable: false,
          tabIndex: -1,
        })
      : null;

  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);

  const spinnerSize = useMemo(() => {
    const buttonSpinnerSizeMap: Record<string, SpinnerProps["size"]> = {
      sm: "sm",
      md: "sm",
      lg: "md",
    };

    return buttonSpinnerSizeMap[size];
  }, [size]);

  const getRippleProps = useCallback<() => RippleProps>(
    () => ({ripples, onClear: onClearRipple}),
    [ripples, onClearRipple],
  );

  return {
    Component,
    children,
    domRef,
    spinner,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
