import { useCallback, useEffect, useState } from 'react';

export function useFormValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState({});

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleInputChange, errors, isValid, resetForm, setIsValid };
}


export function useValidation(value, validations) {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isName':
                    const reName = /[А-Яа-яёЁA-Za-z -]+$/i;
                    reName.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                    break;
                default:
                // no-default
            }
        }
    }, [value, validations])

    useEffect(() => {
        if (isEmpty || nameError || minLengthError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, nameError, minLengthError])


    return { isEmpty, minLengthError, nameError, inputValid }
}

export function useInput(initialValue, validations) {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        //вышли мы ещё из инпута или ещё нет
        setDirty(true)
    }

    return { value, onChange, onBlur, ...valid, isDirty }
}

