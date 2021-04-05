import './Editprofile.css'


function Editprofile({ userData }) {
    return (
        <section className='editprofile'>
            <form className='editprofile__form'>
                <div className='editprofile__container'>
                    <p className='editprofile__placeholder'>Имя</p>
                    <input className='editprofile__userdata-input' placeholder='Введите имя' minLength='2' maxLength='30' autoComplete="off" required type='text' defaultValue={userData.name} />
                </div>
                <div className='editprofile__container'>
                    <p className='editprofile__placeholder'>E-mail</p>
                    <input className='editprofile__userdata-input' placeholder='Введите почту' autoComplete="off" required type='email' defaultValue={userData.email} />
                </div>
                <button type='submit' className='editprofile__button-save' tupe='button'>Сохранить</button>
            </form>
        </section>
    )
}

export default Editprofile