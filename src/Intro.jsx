import { useState, useEffect } from 'react'

export default function Intro() {
    const [introText, setIntroText] = useState('Joost Steltenpool')
    const [counter, setCounter] = useState(0);


  

    useEffect(() => {
        const introArray = ['front-end developer', 'creatief én analytisch', 'beschikbaar voor werk', 'Joost Steltenpool'];

        const intervalID = setInterval(() => {
            let index = counter % introArray.length;
            setIntroText(introArray[index]);
            setCounter(counter + 1);
        }, 2500);
        return () => clearInterval(intervalID);
    }, [counter])
    
    return (
        <section className='intro__container'>
            <h1 className='intro'>
                <span className='intro-large'>Hi,</span>
                <span>ik ben </span>
                <span className='intro-cycle'>{introText}</span>
            </h1>
            <a href="mailto:mail@jooststeltenpool.nl">
                <button className='button primary-button'>
                    Neem contact met me op
                </button>
            </a>
        </section>
    )
}