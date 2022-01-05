import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import './styles.scss';

export function TexEditorSection() {
    return(
        <section id="textEditorSection">
            <div className="textEditor_container">
                <div className="textEditor_img">
                    <img src={require('../../Assets/TextEditor.png')} alt='text editor' />
                </div>
                <div className="textEditor_content">
                    <h2>A text editor like no other.</h2>
                    <p>Our text editor pull you into focus mode with it's simplistic design and usability so you can put your best writings.</p>
                    <Link to='#'>Text Editor Live Demo <HiOutlineArrowNarrowRight/> </Link>
                </div>
            </div>
        </section>
    )
}