import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type MessagesInputProps = {
    onChange: (message: string) => void
    value: string
    onKeyDown: () => void
}
const MessagesInput = ({value, onChange, onKeyDown}: MessagesInputProps) => {

    const onChangeInputhandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === "Enter" && onKeyDown()
    }

    return (
        <input value = {value} onChange = {onChangeInputhandler} onKeyDown = {onKeyDownHandler}/>
    );
};

export default MessagesInput;