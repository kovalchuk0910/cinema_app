import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Layout() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const tickets = selector.tickets;

    function clearSelectedSeats() {
        dispatch({type: "CLEAR_SELECTED_SEATS"});
        dispatch({type: "CLEAR_SELECTED_MOVIE"});
    }    

    return (
        <>
            <header className="header">
                <div className="linkBlock">
                    <NavLink 
                        to="/movies" 
                        className="link"
                        onClick={() => clearSelectedSeats()}>
                            Movies
                    </NavLink>
                </div>

                <div className="linkBlock">
                    <NavLink 
                        to="/tickets" 
                        className="link"
                        onClick={() => clearSelectedSeats()}>
                            Your Tickets <span className="ticketsQuantity">{tickets.length}</span>
                    </NavLink>
                   
                </div>

            </header>

            <Outlet />
        
        </>
    )
}