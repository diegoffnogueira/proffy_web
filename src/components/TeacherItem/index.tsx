import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css"

interface TeacherItensProps{
    name: string,
    subject: string,
    image: string,
    price: string
}

const TeacherItem:React.FC<TeacherItensProps> = (props) => {
    return(
        <article className="teacher-item">
            <header>
                <img src={props.image} alt={props.name} />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            {props.children}

            <footer>
                <p>
                    Preço/hora
                    <strong>{props.price}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;