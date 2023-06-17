const selectCity = document.querySelector(".container")
const cityContainer = document.querySelector(".city-container")
const cityList = document.querySelector(".city-list")
const input = document.querySelector(".input")
let searchValue = ""

const cities = [
    {id:1 , city: "agra"},
    {id:2 , city: "noida"},
    {id:3 , city: "mumbai"},
    {id:4 , city: "gurgaon"},
    {id:5 , city: "aligarh"},
    {id:6 , city: "bhopal"},
    {id:7 , city: "surat"},
    {id:8 , city: "lucknow"}
]

function showCities(cities)
{
    for(let city of cities){
        const name = document.createElement("p")
        name.classList.add("name")
        name.innerText = city.city
        cityList.appendChild(name);
    }
}
showCities(cities)

function handleChange(e){
    searchValue = e.target.value.toLowerCase()
    const filterBySearch = cities.filter(({city}) => city.toLowerCase().startsWith(searchValue))
    cityList.innerHTML =""
    showCities(filterBySearch)
}
input.addEventListener("keyup", handleChange)

selectCity.addEventListener("click", () => {
    cityContainer.classList.toggle("hide")
})

