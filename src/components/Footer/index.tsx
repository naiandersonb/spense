import { Link } from 'react-router-dom';

import './styles.scss';

export function Footer() {

    return(
        <footer>
            <div className="footer_container">
                <div className="box_content cta">
                    <h3>spense.</h3>
                    <p>
                        Spense is an platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing <span>just</span> that.
                    </p>
                </div>

                <div className="box_content sitemap">
                    <h3>Sitemap</h3>
                    <Link to='/'>Homepage</Link>
                </div>

                <div className="box_content resources">
                    <h3>Resources</h3>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>FAQ</Link>
                </div>

                <div className="box_content company">
                    <h3>Company</h3>
                    <Link to='/'>About</Link>
                    <Link to='/'>Customers</Link>
                    <Link to='/'>Blog</Link>
                </div>
                
                <div className="box_content opportunities">
                    <h3>Opportunities</h3>
                    <Link to='/'>Jobs</Link>
                </div>

            </div>
        </footer>
    )
}