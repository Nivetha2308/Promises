const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.



const fetchCatNames = async () => {
    try {
        
        const response = await fetch(catsAPI);
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const catBreeds = await response.json();
        
        const catNames = catBreeds.map(cat => cat.name);
        
        console.log(catNames);
        
        return catNames;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchCatNames();
