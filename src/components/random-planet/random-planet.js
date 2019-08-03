import React, {Component} from 'react';
import './random-planet.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet: {}
    };

    constructor(){
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoad);
    }

    onPlanetLoad = (planet)=> {
        this.setState({planet});
    };

    render() {
        const {planet: {id, name, population, rotationPeriod, diameter}} = this.state;
        return <Spinner/>;
        return (
            <div className="random-planet jumbotron rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     className="planet-image"/>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RandomPlanet;