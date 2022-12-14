import { useEffect, useState } from "react";
import GithubBig from '/GithubBig.svg'


interface Repositories {
    id: number;
    name: string;
    html_url: string;
} 

export default function Github() {

    const [repositories, setRepositories] = useState<Repositories[]>([])

    useEffect(()=> {
        fetch('https://api.github.com/users/gothmate/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])


    return (
        <section className="pageContainer" id="github">
            <img className="github big" src={GithubBig} alt="github" />
            <div className="bloco">
                <div className="repositories">
                    <h1>Repositórios do Github</h1>
                    <ul>
                        {repositories.map(el => {
                          return (
                                <li key={el.id}>
                                    <a href={el.html_url} target="_blank">{el.name}</a>
                                </li>
                            )  
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
