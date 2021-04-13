import { useState } from 'react';

export const useValidationInput = (initialValue) => {
    const [values, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    // пользователь покинул input
    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        values,
        onChange,
        onBlur
    }
}
