import { useRef } from "react";
// import { Parallax } from "react-scroll-parallax"
import { useInViewport} from 'react-in-viewport'

export default function Projects() {
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
        <section className={`wrapper projects__wrapper ${inViewport && 'active'}`} ref={viewPortRef}>
            <h2 className="section__title">Projecten</h2>
            <p>Content volgt...</p>
        </section>
    )
}