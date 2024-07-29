const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.

const fetchAverageCatWeight = async () => {
    try {

        const response = await fetch(catsAPI);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const catBreeds = await response.json();
        
        
        const weights = catBreeds
            .map(cat => cat.weight.metric.split('-').map(Number))
            .flat()
            .filter(weight => !isNaN(weight));
        
        const averageWeight = weights.length > 0
            ? (weights.reduce((a, b) => a + b) / weights.length).toFixed(2)
            : 'No data available';
        
        console.log(`Average Cat Weight (kg): ${averageWeight}`);
        return averageWeight;
    } catch (error) {
        console.error('Error fetching cat data:', error);
    }
};

const fetchCountryData = async () => {
    try {
        
        const response = await fetch(countriesAPI);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const countries = await response.json();
        
        const largestCountries = countries
            .sort((a, b) => b.area - a.area)
            .slice(0, 10)
            .map(country => ({
                name: country.name,
                area: country.area
            }));
        
        console.log('10 Largest Countries:', largestCountries);
        
        const allLanguages = new Set(
            countries.flatMap(country => country.languages.map(lang => lang.name))
        );
        
        console.log(`Total Number of Official Languages: ${allLanguages.size}`);
        
        return {
            largestCountries,
            totalLanguages: allLanguages.size
        };
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
};

fetchAverageCatWeight();
fetchCountryData();
