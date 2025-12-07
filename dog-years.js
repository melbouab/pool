function dogYears(planet, ageSeconds) {
  switch (planet) {
    case "earth":
      return erthtoanothr(1.0, ageSeconds);
    case "mercury":
      return erthtoanothr(0.2408467, ageSeconds);
    case "venus":
      return erthtoanothr(0.61519726, ageSeconds);
    case "mars":
      return erthtoanothr(1.8808158, ageSeconds);
    case "jupiter":
      return erthtoanothr(11.862615, ageSeconds);
    case "saturn":
      return erthtoanothr(29.447498, ageSeconds);
    case "uranus":
      return erthtoanothr(84.016846, ageSeconds);
    case "neptune":
      return erthtoanothr(164.79132, ageSeconds);
    default:
      return "Unknown planet";
  }
}

function erthtoanothr(orbitalPeriod, seconds) {
  const EARTH_YEAR_SECONDS = 31557600;

  const earthYears = seconds / EARTH_YEAR_SECONDS;

  const planetYears = earthYears / orbitalPeriod;

  const dogAge = planetYears * 7;

  return Number(dogAge.toFixed(2));
}

console.log(dogYears("mercury", 1000000000));
console.log(dogYears("earth", 1000000000));
