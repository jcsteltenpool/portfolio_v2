/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useInViewport} from 'react-in-viewport'
import Project from "./components/Project";

import { projectsData } from "./assets/projectsData";

export default function Projects() {
    const viewPortRef = useRef();
    const { inViewport } = useInViewport(viewPortRef,);

    return (
        <section id='projects' className={`wrapper projects__wrapper ${inViewport ? 'active' : ''}`} ref={viewPortRef}>
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
            </div>
        </section>
    )
}