import React, { Component } from 'react';
import "./projectBox.css"

class ProjectBox extends Component {
    state = {}
    render() {
        return (
            <div className='contentBox'>
                <img className='slide' src="../screenshots/Dungeon1.jpg" alt="Game screen" />
                <img className='slide' src="../screenshots/Dungeon2.jpg" alt="Game screen" />
                <img className='slide' src="../screenshots/Dungeon3.jpg" alt="Game screen" />
                <img className='slide' src="../screenshots/Dungeon4.jpg" alt="Game screen" />
            </div>
        );
    }

}

export default ProjectBox;