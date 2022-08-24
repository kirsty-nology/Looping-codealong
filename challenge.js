const companies = [
  { name: "Money 4 U", industry: "Finance", start: 1981, end: 2004 },
  { name: "The Clothes Bay", industry: "Retail", start: 1992, end: 2008 },
  { name: "Luxurious Limousines", industry: "Auto", start: 1999, end: 2007 },
  { name: "Sunglasses House", industry: "Retail", start: 1989, end: 2010 },
  { name: "Vantage Solutions", industry: "Technology", start: 2009, end: 2014 },
  { name: "Money Banking", industry: "Finance", start: 1987, end: 2010 },
  { name: "Triple Motors", industry: "Auto", start: 1986, end: 1996 },
  { name: "Mech Smart", industry: "Technology", start: 2011, end: 2016 },
  { name: "Ice-Cream Lettuce", industry: "Retail", start: 1981, end: 1989 },
];

// create a new array of companies
let filteredCompanies = [...companies];

// document elements
const filterInput = document.querySelector("#filter-companies");
const companiesContainer = document.querySelector("#companies-container");

// renders whatever is currently inside the filteredCompanies variable
const handleRender = () => {
  companiesContainer.innerHTML = "";
  filteredCompanies.forEach((company) => {
    companiesContainer.innerHTML += `<div>
      <h2>${company.name}</h2>
      <p>Industry: ${company.industry}</p>
      <p>Start: ${company.start}</p>
      <p>End: ${company.end}</p>
    </div>`;
  });
};

// updates the filteredCompanies variable based on user input
const handleFilter = (event) => {
  const userInput = event.target.value.toLowerCase();

  filteredCompanies = companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(userInput) ||
      company.industry.toLowerCase().includes(userInput)
    );
  });

  handleRender();
};

// add event listeners
filterInput.addEventListener("input", handleFilter);

// render cards on page load
handleRender();
