// React hook: Special function that allows functional components to use React
// features without writing class components (useState, useEffect, useContext, useReducer, useCallback, etc.)

// useState(): React hook that allows the creation of a stateful variable AND a setter
//function to update its value in the Virtual DOM. [name, setName]
import { useState } from "react";

const HookComponent = () => {

const [name, setName] = useState("name");
const [age, setAge] = useState(0);

const updateName = (event) => {
    setName(event.target.value)
}

const updateAge = () => {
    setAge(age + 1);
}

return(<div>
    <p>Name: {name}</p>
    <input id="changeName" placeholder="Update name" onChange={updateName} value={name}></input>
    <button onClick={updateName(changeName.innerText())}>Update Name</button>
    <p>Age: {age}</p>
    <button onClick={updateAge}>Set age</button>
</div>);
};

export default HookComponent;