import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import Keyboard from "react-simple-keyboard";
// import BaseSelectBox from "../BaseSelectBox/BaseSelectBox";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "simple-keyboard/build/css/index.css";
import { reverseString } from "@/utils/reverseString";
import { english, farsi, numeric } from "./keyboardLayouts";

type TKeyboard = { default: string[]; shift: string[] };
type Props = {
  isKeyboardShow: boolean;
  setIsKeyboardShow: Dispatch<SetStateAction<boolean>>;
  keyboardOnChange: (arg1: string, arg2?: MouseEvent) => void;
  isNumeric?: boolean;
  multiLang?: boolean;
  handleBackSpace: () => void;
};
const VirtualKeyboard = ({
  isKeyboardShow,
  setIsKeyboardShow,
  keyboardOnChange,
  isNumeric = false,
  multiLang = false,
  handleBackSpace,
}: Props) => {
  const layoutName = { english, farsi };
  const keyboard = useRef(null);
  const [layout, setLayout] = useState("default");
  const [langLayout, setLangLayout] = useState<{
    default: string[];
    shift: string[];
  }>(english);
  const reverseKeyboard = (keyboard: TKeyboard): TKeyboard => {
    const defaultKey = keyboard.default.map((line) => {
      return reverseString(line);
    });
    const shiftKey = keyboard.shift.map((line) => {
      return reverseString(line);
    });
    return { default: defaultKey, shift: shiftKey };
  };
  const onKeyPress = (button: any) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{bksp}") handleBackSpace();
  };
  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };
  useEffect(() => {
    if (!isKeyboardShow) setLangLayout(english);
    if (isNumeric) setLangLayout(numeric);
  }, [isKeyboardShow]);
  return (
    <Menu handler={setIsKeyboardShow} open={isKeyboardShow}>
      <MenuHandler>
        <span
          onClick={() => setIsKeyboardShow((prev) => !prev)}
          className={
            "icon-Keyboard mr-1 !text-xl cursor-pointer text-primary-5"
          }
        />
      </MenuHandler>
      <menu className="w-full sm:w-fit z-[9999]">
        <Keyboard
          theme={
            isNumeric
              ? "hg-theme-default hg-layout-numeric numeric-theme"
              : "hg-theme-default"
          }
          layoutName={layout}
          layout={reverseKeyboard(langLayout)}
          keyboardRef={(r) => (keyboard.current = r)}
          onChange={keyboardOnChange}
          onKeyPress={onKeyPress}
        />
        {/* {!isNumeric && multiLang && (
          <BaseSelectBox
            defaultValue={"english"}
            handleChange={(value) => {
              setLangLayout(layoutName[value as "english"]);
            }}
            options={[
              { label: "english", value: "english" },
              { label: "فارسی", value: "farsi" },
            ]}
          />
        )} */}
      </menu>
    </Menu>
  );
};
export default VirtualKeyboard;
