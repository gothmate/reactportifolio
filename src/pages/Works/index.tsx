import WorksBig from '/Works.svg'
import Rain from '/Raindrops.gif'


export default function Works() {
  return (
    <section className="pageContainer" id="works">
      <img className="works big" src={WorksBig} alt="works" />
      <img className="rain" src={Rain} alt="background" />
      <div className="bloco">
        <div className="texto">
          <h1>Works</h1>
          
        </div>
        
      </div>
    </section>
  )
}
