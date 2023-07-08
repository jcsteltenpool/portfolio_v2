/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

// import { Parallax } from "react-scroll-parallax"
import { useInViewport} from 'react-in-viewport'


import ContactButton from "./components/ContactButton";

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
            <div className="about__content">
                <h2 className={`section__title about__title ${inViewport && 'active'}`}>Over mij</h2>
                <p>In het werk als front-end developer komt alles samen waar ik van hou: creatief bezig zijn, problemen oplossen, verbindingen leggen en net zolang puzzelen tot elke pixel op de juiste plaats staat.</p>          
                <p>Van jongs af aan ben ik een echte maker. Als kind was ik altijd aan het tekenen en schilderen en toen ik wat ouder werd richtte ik mij meer op het schrijven, het spelen en maken van theater, muziek en liedteksten.
                    <br/>Daarnaast ben ik heel nieuwsgierig en heb ik een analytische kant die wil weten hoe dingen werken. 
                    <br/>Dit alles neem ik mee in het bouwen van mooie, toffe websites en webapplicaties.
                </p>
                <p>Wil je meer over me weten?</p>
                <ContactButton/>
            </div>
        </section>
    )
}