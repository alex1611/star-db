import React, {Component} from 'react';
import './random-planet.css'
class RandomPlanet extends Component {
    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
                     className="planet-image"/>
                <h4>Planet Name</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>16545</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>45</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>1654</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RandomPlanet;