import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import './styles.scss';

export function Banner() {
    return(
        <section id='banner'>
            <div className='banner_container'>

                <div className="banner_content">
                    <h2>Secure your money with Escrow.</h2>
                    <p>Spense use Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments, so you never need to worry about scams.</p>

                    <Link to='#'>Learn more about Escrow <HiOutlineArrowNarrowRight/> </Link>
                </div>
                
            </div>
        </section>
    )
}