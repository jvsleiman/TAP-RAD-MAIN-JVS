import './css/home.css'
import background from '../assets/Dashboard/foto-home.png'
import CardHome from '../components/card-home/CardHome'

export default function Home() {

    const imageStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    const card = {
        backgroundColor: "black",
        width: "24%",
        
    }

    return (
        <div className="container-home">
            <section>
                <div className="row">
                    <div className="col-1">TESTE</div>
                    <div className="col" 
                        style={imageStyle}>
                        <div className="row">
                            <div className="col-8 d-flex flex-column" style={{padding: "130px 50px"}}>
                                <h1 className='text-white bold'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</h1>
                                <span className='text-white pt-5 pb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dignissimos beatae aliquam, quas minima quia quidem voluptates </span>
                                <button type="button" className="btn btn-light" style={{color: "orange", width: "40%"}}>Entrar agora</button>
                            </div>
                            <div className="col d-flex flex-column-reverse text-aligm-right">
                                <span>Como Funciona</span>
                                <div className=''>
                                    video
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='pt-5'>
                <div className='row'>
                    <div className="col"></div>
                    <div className="col-10 d-flex flex-row">
                        <CardHome name="Lorem Ipsum dolor sit" data="Postado 5 horas atrás"></CardHome>    
                        <CardHome name="Lorem Ipsum dolor sit" data="Postado 5 horas atrás"></CardHome>    
                        <CardHome name="Lorem Ipsum dolor sit" data="Postado 5 horas atrás"></CardHome>    
                        <CardHome name="Lorem Ipsum dolor sit" data="Postado 5 horas atrás"></CardHome>    
                    </div>
                    <div className='col'></div>
                </div>
            </section>
        </div>
    )
}