import { useState, useEffect } from "react";
import axios from "axios";

// bootstrap
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "jquery/dist/jquery.min.js";
// datatable module
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function App() {
  // hooks
  const [data, setData] = useState([]);

  // useEffect to fetch data
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then(({ data }) => {
        setData(data.Countries);
      })
      .catch((err) => console.log(err));

    $(document).ready(() => {
      $("#mytable").DataTable();
    });
  }, []);

  // table data
  const tableData = data.map((object) => {
    return (
      <tr>
        <td>{object.Country}</td>
        <td>{object.TotalConfirmed}</td>
        <td>{object.TotalConfirmed - object.TotalRecovered}</td>
        <td>{object.TotalRecovered}</td>
        <td>{object.TotalDeaths}</td>
      </tr>
    );
  });

  return (
    <div className="App ">
      <h1>Covid Stats</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <table id="mytable" className="table table-bordered table-dark">
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed Cases</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
              </tr>
            </thead>

            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
