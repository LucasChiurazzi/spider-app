import React from 'react';
import Button from "./components/Button/Button";
import TextInput from "./TextInput/TextInput";

function App() {
  return (
    <div className="App container mx-auto">
      <h1 className="text-5x1">Spider</h1>
        <div className="py-10">
            <TextInput label="Enter a word or phrase" type="password"
                        />
            <Button onClick={() => alert('Hello world!')} text='OK'/>
        </div>
    </div>
  );
}

export default App;
