export const projectsData = [{
        title: 'Raad Het Woord',
        siteUrl: 'https://raadhetwoord.nl',
        codeUrl: 'https://github.com/jcsteltenpool/mijn-woordle',
        description: 'Raad Het Woord is een onbeperkt te spelen Nederlandstalige versie van Wordle.',
        images: {
            movie: '/images/raadhetwoord_mobile.mp4',
            mobile: '/images/raadhetwoord_mobile.webp',
            desktop: '/images/raadhetwoord_desktop.webp'
        },
        features: [
            'Gebouwd met React', 
            'Local storage om statistieken te bewaren', 
            'AJAX form submission',
            'Mobile first',
        ]
    },
    {
        title: 'Theaterbazen',
        siteUrl: 'https://theaterbazen.nl',
        description: 'Theaterbazen is een project van NEOS Cultuuronderwijs. Op de site vind je onder andere een zesdelige online serie en een overzicht van plekken in Amersfoort waar je (jeugd)theater kunt zien en spelen.',
        images: {
            movie: '/images/theaterbazen_mobile_short.mp4',
            mobile: '/images/theaterbazen_mobile.webp',
            desktop: '/images/theaterbazen_desktop.webp'
        },
        features: ['Gebouwd in Elementor', 'Aangevuld met custom css, html en javascript', 'Fully responsive']
    },
    {
        title: 'Functional Jammming',
        siteUrl: 'https://functional-jammming.netlify.app/',
        codeUrl: 'https://github.com/jcsteltenpool/functional_jammming',
        description: 'Een Codecademy project waarmee in de browser verbinding gemaakt wordt met het Spotify-account van de gebruiker. Zo kunnen er nieuwe playlists worden samengesteld en opgeslagen in het account.',
        images: {
            mobile: '/images/functional_jammming_mobile.webp',
            desktop: '/images/functional_jammming_desktop.webp'
        },
        features: [
            'Gebouwd in React',
            'Verbinding met Spotify API: OAuth 2.0 en Fetch API',
            'Van class components naar function components', 
            'Extra feature ingebouwd: preview tracks luisteren en de voortgang van een animatie voorzien'
        ]
    }
]