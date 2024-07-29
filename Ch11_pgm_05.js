const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

const fetchCountries = async () => {
    try {
        
        const response = await fetch(countriesAPI);
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        
        const countries = await response.json();
        
        
        countries.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Capital: ${country.capital}`);
            console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
            console.log(`Population: ${country.population}`);
            console.log(`Area: ${country.area}`);
            console.log('-------------------------');
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


fetchCountries();
