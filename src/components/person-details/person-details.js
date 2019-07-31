import React, {Component} from 'react';

class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details card">
                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg"/>
                className="person-image"/>
                <div className="card-body">
                    <h4>R-D2</h4>
                    <ul className="list-group list-group-flush">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;