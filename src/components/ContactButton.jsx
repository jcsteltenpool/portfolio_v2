import { HashLink } from "react-router-hash-link"

export default function ContactButton() {
    return (
        <HashLink smooth to="#contact">
            <button className='button primary-button cta flex'>
                    <span>Neem contact op</span>
                    <img className='portrait__img' src="/images/portretfoto_Joost_Steltenpool_small.webp" alt="Portretfoto van Joost Steltenpool"/>     
            </button>
        </HashLink>
        // <a href="mailto:mail@jooststeltenpool.nl" role='button'>
        //     <button className='button primary-button cta flex'>
        //         <span>Neem contact op</span>
        //         <img className='portrait__img' src="/images/portretfoto_Joost_Steltenpool_small.webp" alt="Portretfoto van Joost Steltenpool"/>     
        //     </button>
        // </a>
    )
}