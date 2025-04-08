"use client";
import clsx from "clsx";
import "react-simple-keyboard/build/css/index.css";
import { TBaseInput } from "../types/TextInputTypes";
import * as React from "react";

const BaseInput = ({
  maxLength,
  rhfRegister,
  placeholder,
  type,
  handleBlur,
  disabled,
  ltr,
  name,
  iconClickCallBack,
  onChange,
  inputValue,
  setInputFocus,
  thousandSeparate,
}: TBaseInput) => {
  return (
    <input
      autoComplete="new-password"
      onInput={thousandSeparate ? () => {} : () => {}}
      maxLength={maxLength}
      name={rhfRegister?.name ?? name}
      placeholder={placeholder}
      ref={rhfRegister?.ref}
      value={inputValue}
      type={type === "number" ? "text" : type}
      onFocus={() => {
        setInputFocus(true);
      }}
      onKeyDown={(e) => {
        e.key == "Enter" && iconClickCallBack?.(inputValue);
      }}
      onChange={(e) => {
        onChange?.(e);
      }}
      onBlur={(e) => {
        handleBlur?.(e);
        !thousandSeparate && rhfRegister?.onBlur(e);
        setInputFocus(false);
      }}
      disabled={disabled}
      {...(ltr ? { dir: "ltr" } : {})}
      className={clsx(
        "w-full h-full transition-transform outline-none focus:!outline-none flex-grow !text-neutral-3 text-[10px] sm:text-xs md:text-sm  placeholder:text-neutral-6 focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:delay-100 ease-linear ",
        ltr && "text-left placeholder:text-right"
      )}
    />
  );
};
export default BaseInput;
