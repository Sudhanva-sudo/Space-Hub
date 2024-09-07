function openModal(planet) {
    const planetInfo = {
        Mercury: "Mercury is the closest planet to the Sun and the smallest in the Solar System.",
        Venus: "Venus is Earth's sister planet, with a thick atmosphere and intense surface heat.",
        Earth: "Earth is the only planet known to harbor life and has vast oceans and diverse landscapes.",
        Mars: "Mars, known as the Red Planet, has the largest volcano in the solar system, Olympus Mons.",
        Jupiter: "Jupiter is the largest planet, famous for its Great Red Spot and many moons.",
        Saturn: "Saturn is renowned for its stunning ring system made of ice and rock particles.",
        Uranus: "Uranus has an extreme tilt and orbits the Sun on its side.",
        Neptune: "Neptune, the furthest planet, has intense storms and the fastest winds in the Solar System."
    };
    
    document.getElementById("planetName").textContent = planet;
    document.getElementById("planetDescription").textContent = planetInfo[planet];
    document.getElementById("planetModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("planetModal").style.display = "none";
}
