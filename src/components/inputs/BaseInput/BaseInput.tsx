"use client";
import clsx from "clsx";
import React from "react";
import "react-simple-keyboard/build/css/index.css";
import { TBaseInput } from "../types/TextInputTypes";

const BaseInput = ({
  maxLength,
  rhfRegister,
  type,
  onBlur,
  dir,
  name,
  iconClickCallBack,
  onChange,
  inputValue,
  setInputFocus,
  thousandSeparate,
  ...props
}: TBaseInput) => {
  return (
    <input
      autoComplete="new-password"
      name={rhfRegister?.name ?? name}
      ref={rhfRegister?.ref}
      value={inputValue}
      type={type}
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
        onBlur?.(e);
        !thousandSeparate && rhfRegister?.onBlur(e);
        setInputFocus(false);
      }}
      {...(dir === "ltr" ? { dir: "ltr" } : {})}
      className={clsx(
        "w-full h-full transition-transform outline-none focus:!outline-none flex-grow !text-neutral-3 text-[10px] sm:text-xs md:text-sm  placeholder:text-neutral-6 focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:delay-100 ease-linear ",
        dir === "ltr" && "text-left placeholder:text-right"
      )}
      {...props}
    />
  );
};
export default BaseInput;
