import { useRef } from "react";
import { Parallax } from "react-scroll-parallax"
import { useInViewport} from 'react-in-viewport'

import { ReactComponent as HTML5 } from './assets/svg/html5.svg';
import { ReactComponent as CSS3 } from './assets/svg/css3.svg';
import { ReactComponent as React } from './assets/svg/react.svg';
import { ReactComponent as Javascript } from './assets/svg/javascript.svg';
import { ReactComponent as Elementor } from './assets/svg/elementor.svg';

export default function Skills() {
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

    return (
        <section className={`wrapper skills__wrapper ${inViewport && 'active'}`} ref={viewPortRef}>
            
            <h2 className="section__title">Vaardigheden</h2>
        
            <div className="skills-background__container">
                <Parallax speed={20}
                          opacity={[0, 1, 'easeOut']}>
                    <span style={{paddingTop: 200}} className="skill__back" data-skill="html">HTML5</span>
                </Parallax>
                <Parallax speed={10}
                          opacity={[0, 1, 'easeOut']}>
                    <span style={{paddingTop: 0}}className="skill__back" data-skill="js">JavaScript</span>
                </Parallax>
                <Parallax speed={-20}
                          opacity={[0, 1, 'easeOut']}>
                    <span className="skill__back" data-skill="react">React</span>
                </Parallax>
                <Parallax speed={5}
                          opacity={[0, 1, 'easeOut']}>
                    <span style={{paddingTop: 400}}className="skill__back" data-skill="css">CSS3</span>
                </Parallax>
                <Parallax speed={15}
                          opacity={[0, 1, 'easeOut']}>
                    <span style={{paddingTop: 150}} className="skill__back" data-skill="elementor">Elementor</span>
                </Parallax>    
            </div>
            <div className="skills__container">
                <Parallax speed={-15}
                        opacity={[0, 1, 'easeOut']}>
                        <div style={{paddingTop: '40vh'}} className='skill'>
                            <HTML5 className="svg__icon"/>
                        </div>
                </Parallax>
                <Parallax speed={0}
                        opacity={[0, 1, 'easeOut']}>
                        <div style={{paddingBottom: 40}} className='skill'>
                            <Javascript className="svg__icon"/>
                        </div>
                </Parallax>
                <Parallax speed={-30}
                        opacity={[0, 1, 'easeOut']}>
                        <div style={{paddingTop: 0}} className='skill'>
                            <React className="svg__icon"/>
                        </div>
                </Parallax>
                <Parallax speed={-20}
                        opacity={[0, 1, 'easeOut']}>
                        <div style={{paddingTop: 200}} className='skill'>
                            <CSS3 className="svg__icon"/>
                        </div>
                </Parallax>
                <Parallax speed={15}
                        opacity={[0, 1, 'easeOut']}>
                        <div style={{paddingTop: '50vh'}} className='skill'>
                            <Elementor className="svg__icon"/>
                        </div>
                </Parallax>
            </div>
            <div className="soft-skills__container">
                <Parallax speed={-10}
                          opacity={[1, 0, 'easeOut']}>
                    <span style={{paddingTop: 0}} className="soft-skill" data-skill="">creatief</span>
                </Parallax>
                <Parallax speed={-8}
                          opacity={[1, 0, 'easeOut']}>
                    <span style={{paddingTop: 0}} className="soft-skill" data-skill="">oplossingsgericht</span>
                </Parallax>
                <Parallax speed={-6}
                          opacity={[1, 0, 'easeOut']}>
                    <span style={{paddingTop: 0}} className="soft-skill" data-skill="">analytisch</span>
                </Parallax>
                <Parallax speed={-4}
                          opacity={[1, 0, 'easeOut']}>
                    <span style={{paddingTop: 0}} className="soft-skill" data-skill="">out of the box</span>
                </Parallax>
            </div>
        </section>
    )

}