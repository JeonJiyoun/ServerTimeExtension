// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from "../layouts/ContentLayout";
import TimerContainer from "../containers/TimerContainer";

interface Props {
  onSubmit: React.Dispatch<React.SetStateAction<string>>;
}

function UrlInputPresenter({ onSubmit }: Props) {
  const [value, setValue] = React.useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (value === "") {
        setValue(window.location.href.toString());
      }
      console.log(value)
      onSubmit(value);
    }
  };

  return <input value={value} onChange={onChangeInput} onKeyUp={onEnter} />;
}

export default UrlInputPresenter;
