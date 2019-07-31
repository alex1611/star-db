import React, {Component} from 'react';
import Header from "../header/header";
import PersonDetails from "../person-details/person-details";
const App =()=> {
    return (
        <div>
            <Header/>
            <div className="row mb2">
                <div className="col-md-6"></div>
            </div>
            <div className="col-md-6">
                <PersonDetails/>
            </div>
        </div>
    )
};

export default App;