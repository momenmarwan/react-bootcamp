import { useState } from "react"

const Filter = ({minValue, setMinValue, maxValue, setMaxValue , category , setCategories}) => {

    const handleMaxMin = (event) => {
        if(event.target.name = "min"){
            setMinValue(event.target.value)
        }else{
            setMaxValue(event.target.value)
        }

    }
    const handleCategory = (event) => {
        setCategories(event.target.value)

    }

const categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
];
    return(
        <div>
            <fieldset>
                    <legend>Price</legend>
                    <label htmlFor="max">
                    Minimum Value
                    </label>
                    <input type="range" min='0'  max = '10' value={minValue} onChange={handleMaxMin}></input>
                    <label htmlFor="max">
                    Maximum Value
                    </label>
                    <input type="range" min='0'  max = '10' value={maxValue} onChange={handleMaxMin}></input>
                    </fieldset>
                    <fieldset>
                        <legend>Category</legend>
                        {
                            categories.map((categor) => {
                                return(
                                    <label>
                                        <input type="radio" value={categor} name="food" onClick={handleCategory} /> {categor}
                                    </label>
                                )
                            })
                        }
                        
                

                        
                    </fieldset>
        </div>
        
    )
}
export default Filter ;