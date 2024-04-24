import styles from "./Input.module.scss";
import classNames from "classnames";
import clsx from "clsx";
import { ReactComponent as Search } from "../../assets/sarch-icon.svg";
import { FC, useEffect, useRef, useState } from "react";

const Input: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [savedValue, setSavedValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    inputRef?.current && inputRef.current.focus();
    setIsFocused(true);
    setValue(savedValue);
  };

  const handleInputBlur = () => {
    setSavedValue(value);
    setValue("");
    setIsFocused(false);
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        onBlur={handleInputBlur}
        onChange={handleChange}
        className={clsx(styles.search__input, { [styles.active]: isFocused })}
        readOnly={!isFocused}
        value={value}
      />
      <Search onClick={handleFocus} className={clsx(styles.search__icon)} />
    </div>
  );
};

export default Input;
