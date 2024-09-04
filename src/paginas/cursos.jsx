import React from "react";
import Menu_login from "../componentes/Menu_login";

function Cursos() {
  return (
    <div className="Inicio">
      <Menu_login />
      <div className="info-section">
        <center>
          {" "}
          <h1>Acá encontrarás</h1>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </center>
            </div>
          </div>
      
  );
}
export default Cursos;
