import '../styles/AboutMe.css'
import logo from '../assets/logo.svg'

function AboutMe() {
    return (
        <section className="AboutMe" id="AboutMe">
            <span className="AboutMeTitle">about me</span>
            <div className="AboutMeContent">
                <img src={logo} alt="me :D" className="AboutMePicture"></img>
                <span className="AboutMeText">
                    <h2>greetings! 👽</h2>
                    <p>I'm Justin. I'm pursuing a HBSc with a double major in Computer Science and 
                        Mathematics at the University of Toronto 📚.</p>
                    <p>Some topics I'm fond of are Artificial Intelligence 🤖, Software Design 💻, 
                        Cryptography 🔐, and Discrete Mathematics 🔢. I've got experience creating 
                        projects using Python, Java, C/C++, HTML/CSS, and ReactJS. In my current 
                        semester I'm excited about studying Machine Learning using Python and Databases using SQL.</p>
                    <p>
                        When I'm not at school I spend my time playing volleyball 🏐 or soccer ⚽, catching up on the latest movies 🎬
                        and tv shows 📺, or playing whatever video game 🎮 I'm currently obsessed with (it's The Legend Of Zelda right now).</p>
                </span>
            </div>
        </section>
    )
}

export default AboutMe