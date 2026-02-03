import clsx from "clsx";
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
  required,
  placeholder,
  formAdapter,
  ...props
}: TBaseInput) => {
  return (
    <input
      autoComplete="new-password"
      name={
        rhfRegister ? (rhfRegister?.name ?? name) : (formAdapter?.name ?? name)
      }
      ref={rhfRegister ? rhfRegister?.ref : formAdapter?.ref}
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
        onBlur?.(e);
        !thousandSeparate &&
          (rhfRegister ? rhfRegister?.onBlur(e) : formAdapter?.onBlur?.());
        setInputFocus(false);
      }}
      {...(dir === "ltr" ? { dir: "ltr" } : {})}
      className={clsx(
        "h-full transition-transform outline-none focus:!outline-none flex-grow !text-neutral-3 text-[10px] sm:text-xs md:text-sm  placeholder:text-neutral-6 focus:placeholder:opacity-0 placeholder:transition-opacity placeholder:delay-100 ease-linear rgi-baseInput",
        dir === "ltr" && "text-left placeholder:text-right",
      )}
      {...props}
      placeholder={required ? placeholder + "*" : placeholder}
      required={false}
    />
  );
};
export default BaseInput;
