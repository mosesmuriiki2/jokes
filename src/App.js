import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Chuck from './chuck.jpg';

function App() {
    const [categories, setCategories] = useState({
      categories: ''
    })
    const [state,setState] = useState({
      joke: ''
      

    });

   useEffect ( () =>{
      getCategories();
   }, []);
   const getCategories = async () =>{
     const result = await axios.get(`https://api.chucknorris.io/jokes/categories`);
     console.log(result.data);
      setCategories({
        ...categories,
        categories: result.data
      })
   }
  useEffect(  () => {
   getJokes(); 
   
  },[]);
    const getJokes = async () =>{
      const response = await  axios.get(`https://api.chucknorris.io/jokes/random`);
      console.log(response.data.value); 
      setState({
        ...state,
        joke: response.data.value
      });
    
    };
  return (
    <div className="App">
      <div className= 'title'>
      <h1>Chuck Norris Jokes</h1>
      <img src={Chuck} alt='chuck'/>
      </div>
      <form onSubmit ='getJokes' className="search-form">
    <input type="text" className="search-bar"  onChange />
  <button className="search-button" type="submit">Search</button><br></br>
</form>
  <form onSubmit ="getJokes">
  <div className="jokes">
    <h2>Jokes from Categories</h2>
  </div>
  <div className='categories'>
  <button className="search-button1" type="submit">Anmails</button>
  <button className="search-button1" type="submit">Career</button>
  <button className="search-button1" type="submit">celebrity</button>
  <button className="search-button1" type="submit">dev</button>
  <button className="search-button1" type="submit">explicit</button>
  <button className="search-button1" type="submit">fashion</button>
  <button className="search-button1" type="submit">food</button>
  <button className="search-button1" type="submit">history</button>
  <button className="search-button1" type="submit">Money</button>
  <button className="search-button1" type="submit">Movie</button>
  <button className="search-button1" type="submit">Music</button>
  <button className="search-button1" type="submit">Politicial</button>
  <button className="search-button1" type="submit">religion</button>
  <button className="search-button1" type="submit">Science</button>
  <button className="search-button1" type="submit">Sport</button>
  <button className="search-button1" type="submit">travel</button>
  
    </div>
  
    <div className='jokes-searched'>
   <h4> {state.joke}</h4>
  </div>
  </form>
    </div>
  );
}

export default App;
