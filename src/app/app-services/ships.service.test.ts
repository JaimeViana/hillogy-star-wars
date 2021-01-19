const { getById } = require('./ships.service');

test('Should return a valid ship when provided with the correct credentials', () => {
    const ship = getById(2);
    expect(ship).toBe({
        cargo_capacity: "3000000",
        crew: "30-165",
        length: "150",
        max_atmosphering_speed: "950",
        model: "CR90 corvette",
        name: "CR90 corvette",
        passengers: "600",
        starship_class: "corvette",
        url: "http://swapi.dev/api/starships/2/"
    });
});
