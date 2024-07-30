function htmlpow() {
    const langNow = pagina.lang? 0 : 1;

        let resultado = "";
        proyects[langNow].forEach((pow) => {
            resultado += `
            <div class="proyects">
                <h3>${pow.h3}</h3>
                <img src="${pow.src}" />
                <p>${pow.p}</p>
            </div>`
        })
        return resultado
}


const proyects = [
    [
        {
            h3: "AnkiQuestions",
            src: "./sections/works and projects/img/Ankiquestions.png",
            p: "Inspired by Anki cards, I decided to make my own version. I created this project because while studying programming I was accumulating a lot of notes in notebooks and on my computer, which is why there came a point where reviewing my notes or summaries became impossible, wanting to review a topic took me a long time because of so many notes I had and sometimes they were separated due to my poor organization. So I thought I could make a website that would allow me to separate my notes by topic, I could always access my notes from anywhere and be able to learn while building a project for myself, that's how AnkiQuestions was born. It's not an app that I want to market or anything, rather once I complete it I will strive to apply the things I am learning by adding authentication, making the database for several users and implementing new techniques that I am learning from the front end and back end."
        },
        {
            h3: "FixUp Electronics",
            src: "./sections/works and projects/img/Fixup.jpg",
            p: "My first paid job was making an ecommerce store for a local shop. The website was supposed to be as customized as possible, so I decided to make the site as vanilla as possible. Even though it would take longer, it would help me a lot to improve my web development skills and I would be able to customize the site to my first client's liking. I'm putting everything I've learned and a lot of effort into solving the problems I'm encountering as I develop the project."
        }
    ],
    [
        {
            h3: "AnkiQuestions",
            src: "./sections/works and projects/img/Ankiquestions.png",
            p: "Inspirada en las cartas Anki, decidí hacer mi propia version. Cree este proyecto porque al estudiar programación estaba acumulando muchísimas notas en cuadernos y en mi computadora por lo cual llego un punto que revisar mis notas o resúmenes se volvió imposible, querer repasar un tema me llevaba mucho tiempo por tantas notas que tenía y a veces estaban separadas por mi mala organización. Por lo que pensé que podia hacer una página web que me permitiera separar mis notas por tema, pudiera siempre tener acceso a mis notas desde cualquier lugar y poder aprender mientras construía un proyecto para mí, así nació AnkiQuestions. No es una app que quiera comercializar ni nada, más bien una vez que la complete me esfuerzo por aplicar las cosas que voy aprendiendo agregándole autenticación, hacer la base de datos para varios usuarios e ir implementando las nuevas técnicas que voy aprendiendo del front end y back end."
  
        },
        {
            h3: "FixUp Electronics",
            src: "./sections/works and projects/img/Fixup.jpg",
            p: "Mi primer trabajo pagado fue hacer una tienda ecommerce para una tienda local. La página se quería que fuera lo más personalizada posible por lo que se me ocurrió hacer la página lo más vanilla posible, a pesar de que fuera más tardado, me ayudaría mucho a mejorar mis habilidades de desarrollo web y podría personalizar mucho la página a gusto de mi primer cliente. Estoy poniendo todo lo que he aprendido y mucho esfuerzo en solucionar los problemas con los que me voy encontrando en el desarrollo del proyecto."
        }
    ]
]