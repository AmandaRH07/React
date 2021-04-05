import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from './components/MovieRow';

export default () => {
  
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
       <section className="listas">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>   
        ))}
      </section>
    </div>
  )
}
