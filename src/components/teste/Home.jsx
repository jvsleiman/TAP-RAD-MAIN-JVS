import Menu from '../../pages/Menu'
import styles from './Home.module.css'
import logoBanner from '../../img/fachadaCasa.jpg'
import Teste from '../menuList/Teste'


function Home(){
    return(
        <div className='banner'>
            <img src={logoBanner} alt="fachada" />
            <label htmlFor="fachada" className={styles.label_img}>Testando</label>
                <div className={styles.banner_overlay}></div>
            <Menu />
            <Teste />
        </div>
    )
}

export default Home;