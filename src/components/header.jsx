import { useEffect } from "react"
import { getWeather } from "../actions"

const Header = () => {

    const result = getWeather('Doncaster')
    console.log(result)
    return  <header>
                <h1>Weather App</h1>
                <button onClick={() => {console.log("hello")}}>Click me!</button>
            </header>
}

export default Header