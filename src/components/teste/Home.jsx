import Menu from '../../pages/Menu'
import styles from './Home.module.css'
import logoBanner from '../../img/fachadaCasa.jpg'


function Home(){
    return(
        <div className='banner'>
            {/* <h1 className={styles.TituloAplicacao}>Home</h1> */}
            <img src={logoBanner} alt="fachada" />
            <label htmlFor="fachada" className={styles.label_img}>Testando</label>
            <div className={styles.banner_overlay}></div>
            <Menu />
        </div>
    )
}

export default Home;