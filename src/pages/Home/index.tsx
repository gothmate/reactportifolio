import { useState } from "react";

export default function Home() {
    const [num, setNum] = useState<number>(0);

    return (
        <div className="pageContainer" id="home">
            <div className="bloco">
                <div>
                    <h1>Hi! I'm Gabe</h1>
                    <p>I love technology and I worked for a time with printed art. 
                    In a way, I merged those two passions to create digital solutions.</p>
                </div>
            </div>
        </div>
    );
}
