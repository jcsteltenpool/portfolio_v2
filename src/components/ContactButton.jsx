export default function ContactButton() {
    return (
        <a href="mailto:mail@jooststeltenpool.nl" role='button'>
            <button className='button primary-button cta flex'>
                <span>Neem contact op</span>
                <img className='portrait__img' src="src/assets/images/portretfoto_Joost_Steltenpool_small.webp" alt="Portretfoto van Joost Steltenpool"/>     
            </button>
        </a>
    )
}