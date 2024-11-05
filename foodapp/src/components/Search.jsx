import { useEffect, useState } from "react"
import styles from './search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e7cb13181e374b9bb8b4a912d621c725";

export default function Search({ setFoodData }) {

    const [query, setQuery] = useState("pizza");



    // Syntax of useEffect Hook
    useEffect(() => {
        async function fetchFood() {
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await response.json();
            setFoodData(data.results);
        }

        fetchFood()


    }, [query]);

    return <div className={styles.searchContainer}>
        <input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
}