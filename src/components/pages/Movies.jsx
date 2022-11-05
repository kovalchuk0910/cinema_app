import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../style.css";

export default function Movies() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const movies = selector.movies;

    function getMovie(id) {
        dispatch({type: "GET_MOVIE", payload: id})
    }

    return(
        <div className="moviesList">
            {movies.map(item => 
                <div className="movies" key={item.id}>
                    <img src={item.img} alt="movies" />
                    <span> <b>Genre:</b> {item.genre}</span>
                    <button onClick={() => getMovie(item.id)}>
                        <NavLink to="/cinemaHall" className="buyTicketsBtn">Buy Tickets</NavLink>
                    </button>

                </div>    
            )}
        </div>
    )
}