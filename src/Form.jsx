import { useState } from "react";

function Form({myForm}){
    const [value, finalValue] = useState("");

    function onSubmit(event){
        event.preventDefault();
        myForm(value);
    }

    function myOnChange(event){
        finalValue(event.target.value);
    }

return (
    <form id="my_form" onSubmit={onSubmit}>
        <input type="text" id="myInputField" value={value} onChange={myOnChange}/>
        <button type="submit"></button>
    </form>
);
}
export default Form;