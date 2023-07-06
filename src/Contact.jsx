/* eslint-disable react/prop-types */
import { useRef} from "react";
import { useInViewport } from "react-in-viewport";


export default function Contact() {
    const viewPortRef = useRef();

    let options = {       
        treshold: 0.5 
    };

    const {
        inViewport,
    } = useInViewport(
        viewPortRef,
        options   
    );

    return (
        <section className={`wrapper contact__container ${inViewport && 'active'}`} ref={viewPortRef}>
            <h2 className={`section__title contact__title ${inViewport && 'active'}`}>Contact</h2>
            <div className="contact__content">
                <div className="contact__group">
                    <p className="contact__label">Bel</p>
                    <p className="contact__details">
                        <a href="tel:+31(6)19802848">
                        +31(6)19802848
                        </a>
                    </p>
                </div>
                <div className="contact__group">
                    <p className="contact__label">Mail</p>
                    <p className="contact__details">
                        <a href="mailto:mail@jooststeltenpool.nl">
                            mail@jooststeltenpool.nl
                        </a>
                    </p>
                </div>
                <div className="contact__group">
                    <p className="contact__label">LinkedIn</p>
                    <p className="contact__details">
                        <a href="https://www.linkedin.com/in/jooststeltenpool/" target="_blank" rel="noreferrer">
                            /jooststeltenpool
                        </a>                    
                    </p>
                </div>
            </div>
        </section>
    )
}