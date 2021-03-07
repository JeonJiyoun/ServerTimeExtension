// Content.tsx
import * as React from "react";
import { InputLayout } from "../layouts/UrlInputLayout";

interface Props {
  onSubmit: (value: string) => void;
}

function UrlInputPresenter({ onSubmit }: Props) {
  const [value, setValue] = React.useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  };

  return <InputLayout value={value} onChange={onChangeInput} onKeyUp={onEnter} />
}

export default UrlInputPresenter;
