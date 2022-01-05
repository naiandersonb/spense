import { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { BsList, BsX } from 'react-icons/bs';

import { Button } from '../Button';

import './styles.scss';

export function Navbar() {

    const [active, setActive] = useState<boolean>();

    function handleSetActive() {
        setActive(!active);
    }

    return(
        <header id="navbar">
            <div className="navbar_container">
                <Link to='/' className='logo'>
                    spense.
                </Link>
                <div className="hamburger" onClick={handleSetActive}>
                    {active ? <BsX/> : <BsList/>}
                </div>
                
                <nav className={cx('nav_links', { linksActive: active })}>
                    <Link className='link' to='#'>Business</Link>
                    <Link className='link' to='#'>Pricing</Link>
                    <Link className='link' to='#'>Features</Link>

                    <div className='login_signIn' >
                        <Link className='link' to='#'>Login</Link>
                        <Link to='#'>
                            <Button />
                        </Link>
                    </div>
                </nav>

            </div>
        </header>
    )
}