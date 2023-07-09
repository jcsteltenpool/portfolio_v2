/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useInViewport} from 'react-in-viewport'

export default function Project ({ title, images, features, siteUrl, codeUrl, description }) {
    const viewPortRef = useRef();
    
    // let options = { treshold: 0.5 };
    const { inViewport } = useInViewport(viewPortRef,);
    return (
        <section className={`project ${inViewport ? 'active' : ''}`} ref={viewPortRef}>
            <div className="project-img__container">
                {images.movie 
                    ? <video autoPlay loop muted playsInline src={images.movie} className="project-img__mobile"></video>
                    : <img className="project-img__mobile" src={images.mobile} alt={`Screenshot van ${title} op mobiel`}/>
                    
                }
                <img className="project-img__desktop" src={images.desktop} alt={`Screenshot van ${title} op desktop`}/>
            </div>
            <div>
                <h3>{title}</h3>
                <p className="project__description">{description}</p>
            </div>
            <div>
                <ul>
                    {features.map((feature, index) => 
                        <li className="project-feature" key={index}>
                            {feature}
                        </li>
                    )}
                </ul>
            </div>
            <div className="project-button__container">
                <a href={siteUrl} target="_blank" role='button' rel="noreferrer"
                    className='button primary-button project-button'>
                    Ga naar site
                </a>
                {codeUrl && 
                    <a href={codeUrl} target="_blank" role='button' rel="noreferrer"
                                      className='button secondary-button project-button'>
                            Bekijk code   
                    </a> 
                }
            </div>
        </section>
    );
}