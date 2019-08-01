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
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`people/${id}`);
    }

    getPlanet(id) {
        return this.getResource(`planets/${id}`);
    }

    async getStarShips() {
        const res = await this.getResource(`starships/`);
        return res.results;
    }
}