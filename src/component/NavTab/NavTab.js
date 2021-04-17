import './NavTab.css'

function NavTab() {
    return (
        <section className='navtab'>
            <nav className='navtab__lists'>
                <ul className='navtab__list'>
                    <li className='navtab__links'>
                        <a href='#aboutproject' className='navtab__link'>О проекте</a>
                    </li>
                    <li className='navtab__links'>
                        <a href='#techs' className='navtab__link'>Технологии</a>
                    </li>
                    <li className='navtab__links'>
                        <a href='#aboutme' className='navtab__link'>Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab