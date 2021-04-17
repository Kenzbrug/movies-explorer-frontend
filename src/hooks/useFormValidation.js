import { useEffect, useState } from "react";

export function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isName":
          const regName = /^[А-Яа-яёЁA-Za-z -]+$/i;
          regName.test(String(value).toLowerCase())
            ? setNameError(false)
            : setNameError(true);
          break;
        case "isEmail":
          const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regMail.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        default:
        // no-default
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || nameError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, nameError, minLengthError, emailError]);

  return { isEmpty, minLengthError, nameError, emailError, inputValid };
}

export function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    //вышли мы ещё из инпута или ещё нет
    setDirty(true);
  };

  return { value, onChange, onBlur, ...valid, isDirty };
}
