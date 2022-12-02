import React from 'react';
import styled from 'styled-components';


export type ButtonPropsType = {
    title: string
    callback: () => void

}


function Button({title, callback, ...otherProps}: ButtonPropsType) {
    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <SimpleButton onClick = {onClickButtonHandler}>
            {title}
        </SimpleButton>
    );
}

export default Button;

const SimpleButton = styled.button`
  font-weight: 700;
  margin: 10px;
  padding: 5px 15px;
  cursor: pointer;
`