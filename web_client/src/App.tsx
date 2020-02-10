import React, {Dispatch, SetStateAction, useState} from 'react';
import {GreeterClient} from "./helloworld/HelloworldServiceClientPb";
import {HelloRequest} from "./helloworld/helloworld_pb";

const initialState = {
    inputText: "",
    message: ""
};

const client = new GreeterClient(
    'http://localhost:8080');


const App = () => {
    const [inputText, setInputText] = useState(initialState.inputText);
    const [message, setMessage] = useState(initialState.message);

  return (
    <div className="App">
        <input value={inputText} onChange={e => {
            e.preventDefault()
            setInputText(e.target.value)
        }}/>
        <button onClick={e => {
            e.preventDefault();
            hello(inputText, setMessage)
        }}>greet!</button>
        <p>{message}</p>
    </div>
  );
};

const hello = (name:string, setMessage:Dispatch<SetStateAction<string>>) => {
    const req = new HelloRequest();
    req.setName(name);
    client.helloWorld(req, {}, (err, res) => {
        if (err) {
            setMessage(err.message)
            return
        }
        setMessage(res.getMessage())
    });
};

export default App;
