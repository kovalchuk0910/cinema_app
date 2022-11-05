import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";

const CinemaRows = ({ seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], row }) => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const selectedSeats = selector.selectedSeats;
    
    const [seatsWithStatus, setSeatsWithStatus] = useState(() => {
      return seats.map((seat, idx) => ({
            row,
            seat,
            isActive: false,
            id: {
              row, 
              seat
            }
        })
      )
    });

    const getSeats = (id) => {
        const foundSeat = seatsWithStatus.find(seat => seat.id === id);
        foundSeat.isActive = !foundSeat.isActive;

        if(foundSeat.isActive === true) {
            dispatch({type: "DISPLAY_TICKETS", payload: foundSeat});
        } else {
            dispatch({type: "DELETE_TICKET", payload: id})
        }

        setSeatsWithStatus(seatsWithStatus.map(seat => {
            if (seat.id === id) {
                return foundSeat;
            }
            return seat
        }))
        console.log(selectedSeats);
    }
    
    return (
        seatsWithStatus.map((seat, idx) => (
            <div className="seats"
              key={idx}
              onClick={() => getSeats(seat.id)}
              style={{ backgroundColor: seat.isActive ? "rgb(255, 208, 0)" : "rgb(58, 130, 218)"}}
            >
            {seat.isActive ? <span>{seat.seat}</span> : ""}
            </div>
          ))
    )
  
}

export default CinemaRows;