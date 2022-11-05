import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';

const defaultState = {
  movies: [
    {
      name: "Black Adam",
      img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/223367/BLAD_VERT_MAIN_2764x4096_DOM.jpg",
      genre: "Action/Fantasy",
      price: 20,
      isSelected: false,
      id: 1,
    },
    {
      name: "Good Night Oppy",
      img: "https://images.atomtickets.com/image/upload/w_520,h_780,q_auto/v1665530699/ingestion-images-archive-prod/archive/1665530698922_317049_cops_0.jpg",
      genre: "Documentary",
      price: 15,
      isSelected: false,
      id: 2,
    },
    {
      name: "Minions: The Rise of Gru",
      img: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/222389/MRG_Psych1Sht9_BoomBox_RGB_4.jpg",
      genre: "Comedy/Adventure",
      price: 15,
      isSelected: false,
      id: 3,
    },
  ],
  selectedSeats: [],
  tickets: [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "DISPLAY_TICKETS":
      return {...state, selectedSeats: [...state.selectedSeats, action.payload]}

    case "DELETE_TICKET": 
      return {...state, selectedSeats: state.selectedSeats.filter((event) => event.id !== action.payload)}

    case "CLEAR_SELECTED_SEATS":
      return {...state, selectedSeats: []}
    
    case "CLEAR_SELECTED_MOVIE":
      return {
        ...state,
        movies: state.movies.map(item => {
          item.isSelected = false
          return item
        })
      }

    case "GET_MOVIE":
      return {
        ...state, 
        movies: state.movies.map((item) => {
          if(item.id === action.payload) {
            item.isSelected = true
          }
          return item
        })
      }
    
    case "ADD_TICKETS":
      return {
        ...state,
        tickets: 
          [
            ...state.tickets, 
            {selectedSeats: action.payload.selectedSeats, selectedMovie: action.payload.movie}
          ]
      }

    default: 
      return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
