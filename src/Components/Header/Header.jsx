import './Header.css'
import '../../common.css'

function Header() {
    return(
        <>
            <header>
                <div className = ' d-flex justify-between nav align-center'>
                    <div className = ' logo '>SOPHIA <br /> ROBOTICS </div>
                    <div className = 'nav-brand' id = 'nav-links'>
                        <ul className = 'navbar d-flex'>

                            <li className = 'nav-list ml-2 p-1'>
                                <a href = "/about">About</a>
                                <ul className = 'nav-content'>
                                    <li><a href = "/leadership">Leadership</a></li>
                                    <li><a href = "/leadership">Awards</a></li>
                                    <li><a href = "/leadership">Meethe teamt </a></li>
                                </ul>
                            </li>
                            
                            <li className = 'nav-list ml-2 p-1'>
                                <a href = "/about">Robots</a>
                                <ul className = 'nav-content'>
                                    <li className = 'sub-nav-list'><a href="/sophia">Sophia</a>
                                        <ul className = 'sub-nav-content'>
                                            <li><a href="/being-sophia">Being sophia</a></li>
                                            <li><a href="/being-sophia">art by sophia</a></li>
                                            <li><a href="/being-sophia">sophia 2022</a></li>
                                            <li><a href="/being-sophia">big sophia</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/sophia">Little Sophia</a></li>
                                    <li><a href="/sophia">All robots</a></li>
                                </ul>
                            </li>

                            <li className = 'nav-list ml-2 p-1'>
                                <a href = "/about">Resource</a>
                            </li>

                            <li className = 'nav-list ml-2 p-1'>
                                <a href = "/about">Contact</a>
                            </li>
                        </ul>

                        <button className = 'hamburger'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header