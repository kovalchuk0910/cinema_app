import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../style.css";

export default function Tickets() {    
    const selector = useSelector(state => state);

    const tickets = selector.tickets;
    console.log(tickets);

    return (
        <div className="ticketsCart">
            {tickets.map(item => 
                <div className="ticketImg">
                    <img src={item.selectedMovie.img} />
                </div>
            )}

           {tickets.map(item => 
                item.selectedSeats.map(seat => 
                    <div className="places">
                        <h3>Row: {seat.row}</h3>
                        <h3>Seat: {seat.seat}</h3>
                    </div>
                )
            )}

            {tickets.length <= 0 ? <h3>No tickets</h3> : ""}
        </div>
    )
}