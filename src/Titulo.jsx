import React  from "react";

function Titulo(){
    const [texto, setTexto] = React.useState("Texto Iincial")
    const [inputText, setInputText] = React.useState("");

    function clicou(){
        setTexto(inputText);
    }
    return (
        <div>
            <h1>Texto: {texto}</h1>
            <input type = "text" value={inputText} onChange={(e) => {setInputText(e.target.value)}} />     
            <button onClick={clicou}>Mudar o Texto</button>
        </div>
    )

}

export default Titulo; 