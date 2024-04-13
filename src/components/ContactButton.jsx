import { HashLink } from "react-router-hash-link"

export default function ContactButton() {
    return (
        <HashLink smooth to="#contact"
                  className='button primary-button cta flex'>
                    <span>Neem contact op</span>
                    <img className='button__img' src="/images/portretfoto_Joost_square.webp" alt="Portretfoto van Joost Steltenpool"/>    
        </HashLink>
    )
}