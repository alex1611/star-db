export default class SwapiService {
    _apiBase = 'https://swapi.co/api/';
    headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    });

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`,
            {
                mode: 'cors',
                header: this.headers
            });
        if (!res.ok) {
            throw new Error(`Error, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(planet)
    }

    async getStarShip(id) {
        const starShip = await this.getResource(`starships/${id}/`);
        return this._transformStarShip(starShip);
    }

    async getStarShips() {
        const res = await this.getResource(`starships/`);
        return res.results.map(this._transformStarShip);
    }

    async _transformPlanet(planet) {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    async _transformStarShip(starship) {
        return {
            id: this.extractId(starship),
            name: starship.name,
            manufacturer: starship.manufacturer,
            model: starship.model,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(person) {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    }

    extractId(entity) {
        const regExp = /\/([0-9]*)\/$/;
        const id = entity.url.match(regExp)[1];
        return id;
    }
}