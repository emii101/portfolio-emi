const translations = {
    es: {
        sec1: 'Sobre mí',
        sec2: 'Portfolio',
        sec3: 'Educación',
        sec4: 'Skills',
        sec5: 'Contacto',
        h1: 'Hola! Soy Emiliano Guevara',
        frontEnd: 'Desarrolador Front-End',
        desc: 'Soy un joven estudiante entusiasta de la tecnología y apasionado por resolver problemas. Actualmente me encuentro realizando proyectos personales y practicando cada semana. Estoy comprometido con el aprendizaje continuo y la mejora constante, y busco oportunidades para aplicar mis conocimientos en proyectos reales que generen un impacto positivo. Me entusiasma la idea de colaborar con equipos dinámicos y contribuir con soluciones innovadoras en el ámbito tecnológico.',
        cv: 'Descarga mi CV',
        descPort1: 'Un Quiz que pone a prueba los conocimientos sobre países del mundo.',
        descPort2: 'Un juego en el que se debe adivinar la palabra que se muestra en la pantalla.',
        descPort3: 'Un traductor en el que se pueden seleccionar varios idiomas.',
        h2Educacion: 'Educación',
        duracion1: 'Mayo 2024 - En curso',
        horas1: 'Certificado de 300 horas',
        duracion2: 'Febrero 2024 - Abril 2024',
        horas2: 'Curso de 40 horas',
        tecnicatura: 'Tecnicatura Universitaria en Programación',
        horas3: 'Carrera Universitaria',
        h2Contact: 'Contacto'
    },
    en: {
        sec1: 'About Me',
        sec2: 'Portfolio',
        sec3: 'Education',
        sec4: 'Skills',
        sec5: 'Contact',
        h1: 'Hello! I am Emiliano Guevara',
        frontEnd: 'Front-End Developer',
        desc: 'I am a young student enthusiastic about technology and passionate about problem-solving. Currently, I am working on personal projects and practicing every week. I am committed to continuous learning and constant improvement, and I am looking for opportunities to apply my knowledge to real-world projects that make a positive impact. I am excited about the idea of collaborating with dynamic teams and contributing with innovative solutions in the technology field.',
        cv: 'Download my CV',
        descPort1: 'A Quiz that tests knowledge about countries around the world.',
        descPort2: 'A game where you must guess the word displayed on the screen.',
        descPort3: 'A translator where several languages can be selected.',
        h2Educacion: 'Education',
        duracion1: 'May 2024 - Ongoing',
        horas1: '300-hour Certificate',
        duracion2: 'February 2024 - April 2024',
        horas2: '40-hour Course',
        tecnicatura: 'University Degree in Programming',
        horas3: 'University Career',
        h2Contact: 'Contact'
    }
}

let currentLanguage = 'es';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    document.getElementById('language').innerText = currentLanguage === 'es' ? 'English' : 'Spanish';
    document.getElementById('language2').innerText = currentLanguage === 'es' ? 'English' : 'Spanish';
    document.getElementById('sec1').innerText = translations[currentLanguage].sec1;
    document.getElementById('sec2').innerText = translations[currentLanguage].sec2;
    document.getElementById('sec3').innerText = translations[currentLanguage].sec3;
    document.getElementById('sec4').innerText = translations[currentLanguage].sec4;
    document.getElementById('sec5').innerText = translations[currentLanguage].sec5;
    document.getElementById('h1').innerText = translations[currentLanguage].h1;
    document.getElementById('frontEnd').innerText = translations[currentLanguage].frontEnd;
    document.getElementById('desc').innerText = translations[currentLanguage].desc;
    document.getElementById('cv').innerText = translations[currentLanguage].cv;
    document.getElementById('descPort1').innerText = translations[currentLanguage].descPort1;
    document.getElementById('descPort2').innerText = translations[currentLanguage].descPort2;
    document.getElementById('descPort3').innerText = translations[currentLanguage].descPort3;
    document.getElementById('h2Educacion').innerText = translations[currentLanguage].h2Educacion;
    document.getElementById('duracion1').innerText = translations[currentLanguage].duracion1;
    document.getElementById('horas1').innerText = translations[currentLanguage].horas1;
    document.getElementById('duracion2').innerText = translations[currentLanguage].duracion2;
    document.getElementById('horas2').innerText = translations[currentLanguage].horas2;
    document.getElementById('tecnicatura').innerText = translations[currentLanguage].tecnicatura;
    document.getElementById('horas3').innerText = translations[currentLanguage].horas3;
    document.getElementById('h2Contact').innerText = translations[currentLanguage].h2Contact;
}