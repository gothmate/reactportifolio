import GamesBig from '/GamesBig.svg'

export default function Games() {
    return (
        <section className="pageContainer" id="games">
            <div className="bgCover"></div>
            <img className="games big" src={GamesBig} alt="games" />
            <div className="bloco">
                <div className="texto">
                    <h1>Games</h1>
                </div>

            </div>
        </section>
    );
}
