import './Promo.css'
import promo_diagram from '../../images/promo_diagram.svg'

function Promo() {
    return (
        <section className='promo'>
            <img className="promo_diagram" src={promo_diagram} alt="Буква П в кругу и за решеткой" />
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo