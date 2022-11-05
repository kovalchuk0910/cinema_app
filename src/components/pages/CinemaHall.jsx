import React from "react";
import CinemaRows from "../CinemaRows";
import { useSelector, useDispatch } from "react-redux";

export default function CinemaHall() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const selectedSeats = selector.selectedSeats;
    const movies = selector.movies;
    const tickets = selector.tickets;

    function addTickets() {
        movies.map((movie) => {
            if(movie.isSelected === true) {
                dispatch({type: "ADD_TICKETS", payload: {selectedSeats, movie}})
            }
        })
        console.log(tickets);
        alert("Tickets added ;)")
    }

    return(
        <div className="cinemaHall">
            <div>
                {movies.map(item => {
                    if(item.isSelected === true) {
                        return (
                            <div className="selectedMovie">
                                <img src={item.img} />
                                <div>
                                    <h2>{item.name}</h2>
                                    <span> <b>Genre:</b> {item.genre}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

            <div className="mainHall">
                <div className="screen">
                    <img src={require('../../images/screen.JPG')} />     
                    <span>Screen</span>
                </div>
                
                <div className="hall">
                    <div className="row">
                        <CinemaRows row={1}/>
                    </div>

                    <div className="row">
                        <CinemaRows row={2}/>
                    </div>

                    <div className="row">
                        <CinemaRows row={3}/>
                    </div>
                    
                    <div className="row">
                        <CinemaRows row={4}/>
                    </div>

                    <div className="row">
                        <CinemaRows row={5}/>
                    </div>

                    <div className="row">
                        <CinemaRows row={6}/>
                    </div>

                    <div className="row">
                        <CinemaRows row={7}/>
                    </div>
                </div>
            </div>
            
            <div className="selectedSeats">
                {selectedSeats.length > 0 ? selectedSeats.map(item =>
                    <div className="selectedSeat">
                        <h3>Row: {item.row}</h3>
                        <h3>Seat: {item.seat}</h3>

                    </div>
                ) : <h2>No selected seats</h2>}
                
            </div>

            <div className="acceptBtn">
                {selectedSeats.length > 0 ? 
                    <button onClick={() => addTickets()}>Buy</button> : ""}
            </div>
           
        </div>
    )
}