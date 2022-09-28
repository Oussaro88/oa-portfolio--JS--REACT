import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projectBox.css"

class ProjectBox extends Component {
    state = {}
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        };

        return (
            <div className='project-content'>
                <div className="content-box">
                    <div className="project-title">Dungeon FOLS <br />(UNITY)</div>
                    <div className='slider'>
                        <Slider {...settings}>
                            <img className='slide' src="../screenshots/Dungeon1.jpg" alt="Game screen1" />
                            <img className='slide' src="../screenshots/Dungeon2.jpg" alt="Game screen2" />
                            <img className='slide' src="../screenshots/Dungeon3.jpg" alt="Game screen3" />
                            <img className='slide' src="../screenshots/Dungeon4.jpg" alt="Game screen4" />
                        </Slider>
                    </div>
                    <p> fuga iusto laborum placeat, labore suscipit molestias laudantium porro provident? Eveniet ratione nihil id eligendi sequi! Repellendus cum necessitatibus, fuga aliquam beatae at! Accusantium impedit error distinctio veniam aspernatur perferendis voluptatibus nihil, omnis harum nisi quos praesentium non vitae aliquid cupiditate sit deleniti id autem animi consectetur minus incidunt! Provident adipisci a error aut quis inventore aliquid, quasi necessitatibus illum, fugit voluptatum dicta tenetur fugiat repellat mollitia nam soluta libero rerum eaque explicabo distinctio unde dolores asperiores debitis. Repellendus eveniet inventore ratione vel.</p>
                </div>
                <div className="content-box">
                    <div className="project-title">Capsules Battle Royale <br /> (UNITY)</div>
                    <div className='slider'>
                        <Slider {...settings}>
                            <img className='slide' src="../screenshots/CPW1.png" alt="Game screen1" />
                            <img className='slide' src="../screenshots/CPW2.png" alt="Game screen2" />
                            <img className='slide' src="../screenshots/CPW3.png" alt="Game screen3" />
                            <img className='slide' src="../screenshots/CPW4.png" alt="Game screen4" />
                        </Slider>
                    </div>
                    <p>Soluta in veritatis, fuga iusto laborum placeat, labore suscipit molestias laudantium porro provident? Eveniet ratione nihil id eligendi sequi! Repellendus cum necessitatibus, fuga aliquam beatae at! Accusantium impedit error distinctio veniam aspernatur perferendis voluptatibus nihil, omnis harum nisi quos praesentium non vitae aliquid cupiditate sit deleniti id autem animi consectetur minus incidunt! Provident adipisci a error aut quis inventore aliquid, quasi necessitatibus illum, fugit voluptatum dicta tenetur fugiat repellat mollitia nam soluta libero rerum eaque explicabo distinctio unde dolores asperiores debitis. Repellendus eveniet inventore ratione vel.</p>
                </div>
                <div className="content-box">
                    <div className="project-title">Triumphant Justice <br /> (UNITY)</div>
                    <div className='slider'>
                        <Slider {...settings}>
                            <img className='slide' src="../screenshots/Ekard1.png" alt="Game screen1" />
                            <img className='slide' src="../screenshots/Ekard2.png" alt="Game screen2" />
                            <img className='slide' src="../screenshots/Ekard3.png" alt="Game screen3" />
                            <img className='slide' src="../screenshots/Ekard4.png" alt="Game screen4" />
                        </Slider>
                    </div>
                    <p>Soluta in veritatis, fuga iusto laborum placeat, labore suscipit molestias laudantium porro provident? Eveniet ratione nihil id eligendi sequi! Repellendus cum necessitatibus, fuga aliquam beatae at! Accusantium impedit error distinctio veniam aspernatur perferendis voluptatibus nihil, omnis harum nisi quos praesentium non vitae aliquid cupiditate sit deleniti id autem animi consectetur minus incidunt! Provident adipisci a error aut quis inventore aliquid, quasi necessitatibus illum, fugit voluptatum dicta tenetur fugiat repellat mollitia nam soluta libero rerum eaque explicabo distinctio unde dolores asperiores debitis. Repellendus eveniet inventore ratione vel.</p>
                </div>
            </div>
        );
    }

}

export default ProjectBox;