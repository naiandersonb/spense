import { BsCheckCircleFill } from 'react-icons/bs';
import { Button } from '../Button';

import './styles.scss';

export function Hero() {
    return(
        <section id='hero'>
            <div className='hero_container'>
                <div className='hero_content'>
                    <h1>Share your unfiltered thoughts. Get paid.</h1>
                    <p>Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing <span>just</span> that.</p>

                    <ul className='hero_list'>
                        <li>
                            <BsCheckCircleFill className='icon'/> Receive 99% off the earnings.
                        </li>
                        <li>
                            <BsCheckCircleFill className='icon'/> Get paid via Debit Card, ACH, or PayPal.
                        </li>
                        <li>
                            <BsCheckCircleFill className='icon'/> Withdraw your earnings anytime.
                        </li>
                    </ul>

                    <form action='' className='hero_form'>
                        <input type='text' placeholder='john@example.com' />
                        <Button/>
                    </form>

                </div>
                <div className='hero_img'>
                    <img className='img_desktop' src={require('../../Assets/HeroImageDesktop.png')} alt='woman with notebook' />
                    
                    <img className='img_tablet' src={require('../../Assets/HeroImageTablet.png')} alt='woman with notebook' />
                    
                    <img className='img_mobile' src={require('../../Assets/HeroImageMobile.png')} alt='woman with notebook' />
                </div>
            </div>
        </section>
    )
}