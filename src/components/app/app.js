import React, {Component} from 'react';
import Header from "../header/header";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";

const App = () => {
    return (
        <div>
            <Header/>
            <RandomPlanet/>
            <div className="row mb">
                <div className="col-md-6">
                    <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>
    )
};

export default App;