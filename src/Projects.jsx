/* eslint-disable react/prop-types */
import { useRef } from "react";
// import { Parallax } from "react-scroll-parallax"
import { useInViewport} from 'react-in-viewport'

import { projectsData } from "./assets/projectsData";

const Project = ({ title, images, features, siteUrl, codeUrl, description }) => {
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
                <a href={siteUrl} target="_blank" role='button' rel="noreferrer">
                    <button className='button primary-button project-button'>
                        <span>Ga naar site</span>
                    </button>
                </a>
                {codeUrl && 
                    <a href={codeUrl} target="_blank" role='button' rel="noreferrer">
                    <button className='button secondary-button project-button'>
                        <span>Bekijk code</span>
                    </button>
                </a> 
                }
            </div>
        </section>
    );
};

export default function Projects() {
    const viewPortRef = useRef();
    
    // let options = { treshold: 0.5 };
    const { inViewport } = useInViewport(viewPortRef,);

    return (
        <section className={`wrapper projects__wrapper ${inViewport ? 'active' : ''}`} ref={viewPortRef}>
            <h2 className="section__title">Projecten</h2>
            <div className="projects__container">
                {projectsData.map(( { title, images, features, siteUrl, codeUrl, description }, index) => 
                    <Project key={index} 
                             title={title} 
                             images={images} 
                             features={features}
                             siteUrl={siteUrl}
                             codeUrl={codeUrl}
                             description={description}/>
                )}
                {/* {projectsData.map(project => 
                    <div key={project.id} className="project">
                        <h3>{project.title}</h3>
                        <div className="project-img__container">
                            <img className="project-img__mobile" src={project.images.mobile} alt={`Screenshot van ${project.title} op mobiel`}/>
                            <img className="project-img__desktop" src={project.images.desktop} alt={`Screenshot van ${project.title} op desktop`}/>
                        </div>
                        <p className="project__description">{project.description}</p>
                        <h4>Bijzonderheden:</h4>
                        <ul>
                            {project.features.map((feature, index) => 
                                <li className="project-feature" key={index}>
                                    {feature}
                                </li>
                            )}
                        </ul>
                        <a href={project.siteUrl} target="_blank" role='button' rel="noreferrer">
                            <button className='button primary-button project-button'>
                                <span>Ga naar site</span>
                                <ExtLink className="svg__icon"/>
                            </button>
                        </a>
                        {project.codeUrl && 
                           <a href={project.codeUrl} target="_blank" role='button' rel="noreferrer">
                           <button className='button secondary-button project-button'>
                               <span>Bekijk code</span>
                               <Github className="svg__icon"/>
                           </button>
                       </a> 
                        }
                    </div>                    
                )} */}
            </div>
        </section>
    )
}