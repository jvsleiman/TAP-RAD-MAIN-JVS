import Menu from "./Menu";

function menuEditarPerfil(){
    
const linkList = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#">Perfil</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Senha</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Interesses</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Formação</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Cursos</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Experiencias</a>
                </li>
            </ul>
            <Menu />
        </div>
        
    )
}
}

export default menuEditarPerfil;