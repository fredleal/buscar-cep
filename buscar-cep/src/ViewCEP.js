import React from "react";
import './styles/main.css';

function ViewCEP ({events}) {
    if (!events || events.lenght ===0 ) return null;

    return(
        <>
            <h1>Dados do cep encontrado:</h1>
            <ul className="list-group">
                {events.map( item =>
                    <li className="list-group-item" key={item.cep}>
                    <span>CEP: {item.cep}</span>
                    <span>Logradouro: {item.logradouro}</span>
                    <span>Bairro: {item.bairro}</span>
                    <span>Cidade: {item.localidade}</span>
                    <span>UF: {item.uf}</span>

                </li>
                )}

            </ul>
        </>

    );

}

export default ViewCEP;