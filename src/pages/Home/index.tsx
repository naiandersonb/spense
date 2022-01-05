import { Banner } from '../../components/Banner';
import { Clients } from '../../components/Clients';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { TexEditorSection } from '../../components/TextEditorSection';

import './styles.scss';

export function Home() {
    return(
        <section id="home">
            <Navbar/>
            <Hero/>
            <Clients/>
            <Banner/>
            <TexEditorSection/>
            <Footer/>
        </section>
    )
}