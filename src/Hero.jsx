import { useState, useEffect } from 'react';

import ContactButton from './components/ContactButton';

export default function Hero() {
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
        <>
            <section className='hero__wrapper'>
                <div className='background__container'>
                    <h1 className='background__text'>Joost Steltenpool</h1>
                </div>
                <div className='hero__content'>
                    <h2 className='hero__title'>
                        <span className='hero-large'>Hi,</span>
                        <span className='hero-second'>ik ben</span>
                        <span className='hero-cycle'>{introText}</span>
                    </h2>
                    <ContactButton />
                </div>
                
            {/* <div className='pointer__container flex'>
                <span className='pointer'></span>
            </div> */}
            </section>
        </>
    )
}