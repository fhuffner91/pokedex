import Link from "next/link";
import { LoginStyles } from "./styles";


export default function LoginInput(){
    return(
        <LoginStyles>
            <div className="login-input">
            <form className="formLogin">
            <label className="label">Insira seu melhor email!</label>
            <input className="inputEmail" type="e-mail" placeholder="Email" />
            <Link href="/pokemons">
            <button className="buttonLogin">Entrar</button>
            </Link>
            </form>
            </div>
        </LoginStyles>
            
    )
}