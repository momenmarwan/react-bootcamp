import dishes from "./data";
import DishComp from "./components/Dish";
import Filter from "./components/Filter";
import { useState } from "react";



function App() {

	
	const [minValue , setMinValue] = useState(0)
	const [maxValue , setMaxValue] = useState(8)
	const [category , setCategories] = useState("all")


	let filteredData = dishes.filter((ele) => {
		return ele.price >= minValue && ele.price <= maxValue
	})


	filteredData = filteredData.filter((ele) => {
		if(category == "all"){
			return ele
		}else{
			return ele.category ==  category
		}

	})

	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<form>
				<Filter minValue={minValue} setMinValue={setMinValue}  maxValue={maxValue} setMaxValue={setMaxValue}  category = {category} setCategories= {setCategories}/>
				</form>
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filteredData.map((dish) => {
						return (
							<DishComp
							title = {dish.name}
							description = {dish.description}
							price = {`${dish.price}$`}
							key={dish.id}

							/>
						)
					})}
				</ul>
			</section>
		</main>
	);
}

export default App;
