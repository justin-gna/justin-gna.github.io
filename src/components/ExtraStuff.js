import '../styles/ExtraStuff.css'
import construction_logo from '../assets/justinicon-construction.png'

function ExtraStuff() {
    return (
        <section className="ExtraStuff" id="ExtraStuff">
            <span className="ExtraStuffTitle">extra stuff.</span>
            <div className="ExtraStuffContent">
                <img src={construction_logo} alt="under construction" className="ConstructionImg"></img>
                <span>currently under construction :)</span>
            </div>
        </section>
    )
}

export default ExtraStuff