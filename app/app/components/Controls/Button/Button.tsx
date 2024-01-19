import * as React from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import { ReactChildren } from "../../../../config/_types";

import "./Button.scss";
import HoverShinyEffect from "../../HoverShinyEffect";

enum EnumThemeName {
  primary = "primary",
  secondary = "secondary",
  brand = "brand",
  success = "success",
  warning = "warning",
  info = "info",
  danger = "danger",
}

enum EnumButtonTheme {
  primary = "primary",
  primaryOutline = "primaryOutline",
  primaryGhost = "primaryGhost",
  secondary = "secondary",
  secondaryOutline = "secondaryOutline",
  secondaryGhost = "secondaryGhost",
  brand = "brand",
  brandOutline = "brandOutline",
  brandGhost = "brandGhost",
  success = "success",
  successOutline = "successOutline",
  successGhost = "successGhost",
  warning = "warning",
  warningOutline = "warningOutline",
  warningGhost = "warningGhost",
  info = "info",
  infoOutline = "infoOutline",
  infoGhost = "infoGhost",
  danger = "danger",
  dangerOutline = "dangerOutline",
  dangerGhost = "dangerGhost",
}

enum EnumButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

enum EnumButtonVariant {
  solid = "solid",
  outline = "outline",
  ghost = "ghost",
}

type ButtonTheme = keyof typeof EnumButtonTheme;
type ButtonThemeName = keyof typeof EnumThemeName;

interface ButtonProps {
  children: ReactChildren | string;
  extraClasses?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: EnumButtonType | "button" | "submit" | "reset";
  variant?: EnumButtonVariant | "solid" | "outline" | "ghost";
}

function Button({ children, disabled, extraClasses, onClick, type }: ButtonProps) {
  let buttonElement;

  const buttonStyles = classnames({
    [styles["ca-button"]]: true,
  });

  // Create custom button element
  buttonElement = (
    React.createElement("button", {
      className: `${buttonStyles} ${extraClasses}`,
      disabled: disabled,
      onClick: onClick,
      type: type,
      variant: "solid",
    }, (
      <>
        {children}
        <span className={styles["ca-button-span"]}></span>
      </>
    ))
  );

  const buttonContainer = (
    <div className={styles["ca-button-container"]}>
      {buttonElement}
    </div>
  )

  return buttonContainer ? buttonContainer : <button>{children}</button>;
}

/**
 * Returns the class name for the button theme
 * @param props
 * @param themeName
 */
const buttonThemeStyles = (props, themeName: ButtonThemeName) => {
  let prefix = "ca-button--";
  let theme = "";

  if (props.variant === "outline") {
    theme = `${themeName}Outline`;
  } else if (props.variant === "ghost") {
    theme = `${themeName}Ghost`;
  } else {
    theme = `${themeName}`;
  }

  return `${prefix}${theme}`;
}

/* Types */

const primary = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "primary");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const secondary = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "secondary");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const brand = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "brand");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const success = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "success");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const warning = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "warning");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const info = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "info");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

const danger = (props: ButtonProps) => {
  let classes = "";
  classes = buttonThemeStyles(props, "danger");

  return (
    <Button extraClasses={classes} {...props}>
      {props.children}
      {props.variant === "solid" && (<HoverShinyEffect color="white" />)}
    </Button>
  )
}

Button.primary = primary;
Button.secondary = secondary;
Button.brand = brand;
Button.success = success;
Button.warning = warning;
Button.info = info;
Button.danger = danger;

export { Button };



