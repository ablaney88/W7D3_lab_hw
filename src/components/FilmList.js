import React, {useState} from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return (
         <Film title={film.name} key={film.id} url={film.url}></Film>   
        )
            
        
    })

    


    return ( 
    <>
    <p>Upcoming Film Releases for UK</p>
    {filmNodes}
    <a href="https://www.imdb.com/calendar/?region=gb">
   <input type="button" value="View More Upcoming Releases >>" />
    </a>
    </>
  )
}

export default FilmList;