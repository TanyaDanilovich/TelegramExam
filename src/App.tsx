import React, {useEffect, useState} from 'react';
import './App.css';
import MessagesInput from './MessagesInput';
import Button from './Button';


function App() {
    const [messages, setMessages] = useState<Array<string>>([])
    const [count, setCount] = useState<number>(5)
    const [newMessage, setNewMessage] = useState<string>('')

    useEffect(() => {
        setCount(5 - messages.length)
    }, [messages])

    const addMessage = (message: string) => {
        if (newMessage.trim() && messages.length < 5) {
            setMessages([...messages, message])
            setNewMessage('')
        }

    }

    const removeMessageCallBack = () => {
        const arr = [...messages]
        arr.pop()
        setMessages([...arr])
    }

    const displayMessages = messages.length > 0 ? messages.map((mes, index) => {
        return <li key = {index}>{mes}</li>
    }) : ''
    const addMessageCallBack = () => {
        addMessage(newMessage.trim())
    }

    const clearInputCallback = () => setNewMessage('')
    
    const removeAllCallback = () => {
        setMessages([])
        setNewMessage('')
    }
    return (
        <div className = "App">
            <div>{`You can write ${count} messages`}</div>
            <MessagesInput value = {newMessage} onChange = {setNewMessage} onKeyDown = {addMessageCallBack}/>
            <Button title = {'send'} callback = {addMessageCallBack}/>
            <Button title = {'clear input'} callback = {clearInputCallback}/>
            <Button title = {'clear last messages'} callback = {removeMessageCallBack}/>
            <Button title = {'clear all'} callback = {removeAllCallback}/>
            {displayMessages}
        </div>
    );
}

export default App;

