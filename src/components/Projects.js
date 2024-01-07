import '../styles/Projects.css'
import githublogo from '../assets/github-mark-white.svg'
import youtubelogo from '../assets/white-youtube-logo.png'

function Projects() {
    return (
        <section className="Projects" id="Projects">
            <span className="ProjectsTitle">my projects</span>
            <div className="ProjectsContent">
                <div className="CardContainer">
                    <div className="ProjectCard">
                        <div className="WebsiteCardFront">justin's website</div>
                        <div className="WebsiteCardBack">
                            <h2>justin's website (present)</h2>
                            <p>Spoiler alert this project is referring to the website you're currently looking at.
                                I created this website to learn a little bit about web development. I familiarized 
                                myself with HTML/CSS, JavaScript, and ReactJS in order to create this portfolio website.
                                I had a lot of fun and plan to continue updating this website whenever I have the chance. Click 
                                the GitHub logo below to see the repository with all the source code.</p>
                                <a href="https://github.com/justin-gna/justin-website" target="_blank" rel="noreferrer"><img src={githublogo} alt="GitHub Logo"></img></a></div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="ProjectCard">
                        <div className="BoggleCardFront">boggle 1.1</div>
                        <div className="BoggleCardBack">
                        <h2>boggle 1.1 (dec. 2022)</h2>
                            <p>This assignment was the culminating project of CSC207H5 (Software Design), the goal of this 
                                assignment was to improve upon an earlier assignment which was to create a Boggle game that 
                                was played in the console. For this project our group focused on enhancing 
                                the user experience when playing Boggle. Through the implementation of a fully-functional 
                                graphics user interface, accessibility features, various difficulties and modes to 
                                the game, we managed to improve user experience significantly. Click the YouTube logo below to 
                                watch our presentation of the final product.</p>
                                <a href="https://youtu.be/0sBkFePW33U?si=kPjqXWyPos8nkpbO" target="_blank" rel="noreferrer"><img src={youtubelogo} alt="GitHub Logo"></img></a></div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="ProjectCard">
                        <div className="EWasteCardFront">e-waste escapade</div>
                        <div className="EWasteCardBack">
                        <h2>e-waste escapade (apr. 2021)</h2>
                            <p>I created this project for my ICS4U (Grade 12 Introduction to Computer Science) culminating 
                                project. The goal of the project was to utilize our knowledge to create a Python program 
                                that could help raise awareness about E-Waste. I created a maze game that is played in 
                                the console and an E-Waste recycling centre locator. Click the GitHub logo below to see the 
                                repository with all the source code, and how to play the game on your computer.</p>
                                <a href="https://github.com/justin-gna/e-waste-escapade" target="_blank" rel="noreferrer"><img src={githublogo} alt="GitHub Logo"></img></a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects