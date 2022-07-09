import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    //fetchings recipes based of name
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);
        
    }

    // dynamically update cuisine page, using params.type
    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])
  return (
    <Grid>
        {cuisine.map((item) => {
            return (
                <Card key={item.id}>
                    <img src={item.image} alt=''/>
                    <h4>{item.title} </h4>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div `
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-graph: 3rem;
`
const Card = styled.div `
img {
    width: 75%;
    border-radius: 2rem;
    
    a {
        text-decloration: none;
    }
    h4{
        text-align: center;
    }
}
`
export default Cuisine
