import React, { Component } from 'react';
import "./intro.css";


class Introduction extends Component {
    state = {}
    render() {
        return (
            <div className="intro-section">
                <img className="profile-pic" src="./ProfilePic.png" alt="Porfile picture" />
                <h1>Oussama Arouch</h1>
                <p>I am an upcoming graduate in video games programming. I am motivated a great team-member and I am keen in participating in developing emerging ideas and taking part in interesting projects in the entertainment industry.



                    You can find in the section "Projects" some of my previous contributions.</p>

                <p>Je suis  futur diplômé en programmation de jeux vidéos. Jouissant d'un bon esprit collectif, je cherche à pouvoir participer à des projets émergents dans l'industrie du divertissement.


                    Vous trouverez dans la section "Projects" des projets auxquels j'ai contribué à la création.</p>

                <h2>Skills</h2>
                <div className="skills">
                    {/* <h3>Programming skills</h3> */}
                    <div className="grid-skills">

                        <div className="skillPresentation">
                            <img className='img-skills' src="./html-5.png" alt="HTML5" />
                            <span>HTML</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./css-3.png" alt="CSS3" />
                            <span>CSS</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./java-script.png" alt="JAVASCRIPT" />
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./react.png" alt="REACT" />
                            <span>REACT</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./php.png" alt="PHP" />
                            <span>PHP</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./mysql.png" alt="MYSQL" />
                            <span>MYSQL</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./C-Sharp.png" alt="C#" />
                            <span>C#</span>
                        </div>
                        {/* <div className="skillPresentation">
                            <img className='img-skills' src="./cpp.png" alt="C++" />
                            <span>C++</span>
                        </div> */}
                        <div className="skillPresentation">
                            <img className='img-skills' src="./unity.png" alt="UNITY" />
                            <span>UNITY</span>
                        </div>
                        <div className="skillPresentation">
                            <img className='img-skills' src="./github.png" alt="GITHUB" />
                            <span>GITHUB</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Introduction;