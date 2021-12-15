import "./App.css";

import MoviesList from "../MoviesList/MoviesList.js";
import Sessions from "../Sessions/Sessions.js";
import Seats from "../Seats/Seats.js";
import Success from "../Success/Success.js";

export default function App() {

  return (
    <>
      <header><h1>CINEFLEX</h1></header>

      <div className="main-container">
        
        <div className="information-box">
          <h1>Selecione_filme-horário-assentos/Pedido_Sucesso</h1>
        </div>

        {/* <MoviesList /> */}
        {/* <Sessions /> */}
        {/* <Seats /> */}
        <Success />


      </div>
    </>
  );
}