import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function NavBar(props) {
    const navigate = useNavigate();

    return (
        <nav className="cabecalho">
            <div className="cabecalho-logo">
                <a href="#"><img className="logo" src="src/assets/safetrace-logo.png" alt="logo da ecospark" /></a>
            </div>
            {props.user && (
                <div>
                    <p>Olá, {props.user} | {props.email}</p>
                </div>
            )}
            <div className="cabecalho-login">
                <Button
                    title={props.title}
                    color="#d86666"
                    onClick={props.onClick}
                />
            </div>
        </nav>
    );
}
