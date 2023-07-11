/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useInViewport} from 'react-in-viewport';
import { Parallax } from "react-scroll-parallax";
import { HashLink } from "react-router-hash-link";

export default function About(props) {
    const { height, handleChange } = props;
    const viewPortRef = useRef();
    
    let options = {       
        treshold: 0.5 
        // threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const {
        inViewport
    } = useInViewport(
        viewPortRef,
        options   
    );

    useEffect(() => {
        if (viewPortRef) {
            handleChange(
                viewPortRef.current.getBoundingClientRect().top,
                viewPortRef.current.getBoundingClientRect().height
            );   
        }
    }, [viewPortRef, height, handleChange])

    return (
        <section id='about' className={`wrapper about__container ${inViewport && 'active'}`} ref={viewPortRef}>
                <h2 className={`section__title about__title ${inViewport && 'active'}`}>Over mij</h2>
                <div className="about-content__container">
                    <div>
                        <div className="about-img__container">
                            <Parallax speed={-5}>
                                <img className="about__img" src="../public/images/portretfoto_Joost_Steltenpool.webp"/>
                            </Parallax>
                        </div>
                    </div>
                    <div className="about-content">
                        <p>In het werk als front-end developer komt alles samen waar ik blij van word: creatief bezig zijn, problemen oplossen, verbindingen leggen en net zolang puzzelen tot elke pixel op de juiste plaats staat.</p>          
                        <p>Van jongs af aan ben ik een echte maker. Als kind was ik altijd aan het tekenen en schilderen en later richtte ik mij meer op het schrijven, het spelen en maken van theater, muziek en liedteksten.
                            <br/>Daarnaast ben ik heel nieuwsgierig en analytisch ingesteld: ik wil weten hoe en waarom dingen werken zoals ze werken. 
                            <br/>Dit alles neem ik mee in het bouwen van mooie, toffe websites en webapplicaties.
                        </p>
                        <p>Wil je meer over me weten?</p>
                        <div className="button__container">
                            <HashLink smooth to="#contact"
                                    className='button primary-button about-button'>
                                Neem contact op
                            </HashLink>
                            <a href="/CV Joost Steltenpool juli 2023.pdf" target="_blank" role='button' rel="noreferrer"
                                className='button secondary-button about-button'>
                                Bekijk mijn cv   
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    )
}