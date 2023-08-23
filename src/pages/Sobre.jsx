import Menu from './Menu'
import Button from '@mui/material/Button';
import './button_styled.css'
import Container from '@mui/material/Container';
import Teste from '../components/menuList/Teste'


function Sobre(){
    return(
        <div>
            <h1>Sobre</h1>
            <Menu />
            <h3>Você está na página sobre! </h3>
            <br />
        <Container maxWidth="lg" disableGutters>
            <div className='container'>
                <div className='content'>
                    <h1>Configurações de perfil</h1>
                    <h3>Edite suas informações</h3>
                        <button className="buttonPro">
                            <h2>Tornar-se PRO</h2> <br />
                            <p>Por apenas R$20,00 mensal</p>
                        </button>
                </div>
            </div>  
            <Teste className ="teste_component"/>          
            </Container>  
        </div>
    )
}

export default Sobre;