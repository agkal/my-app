import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id',
    headerName: 'ID', 
    width: 110, 
    editable: false 
  },
  { field: 'airline_id', 
  headerName: 'Airline Id', 
  width: 150 
  },
  {
    field: 'passenger_name',
    headerName: 'Passenger',
    width: 150,
    editable: false,
  },
  {
    field: 'trips',
    headerName: 'Trips',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Air Name',
    width: 150,
    editable: false,
  },
  {
    field: 'website',
    headerName: 'Website',
    width: 150,
    editable: false,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: false,
  },
  {
    field: 'established',
    headerName: 'Established',
    width: 160,
    editable: false,
  },
];

let rows = [];

export default function DataGridPassengers(props) {

  if (props.passengerData !== null) {

    let count = 0;

    for (let item of props.passengerData.data) {

      let name = item.airline[0].name;
      let country = item.airline[0].country;
      let established = item.airline[0].established;
      let website = item.airline[0].website;
      let id = item.airline[0].id;
      let passenger_name = item.name;
      let trips = item.trips
      let count_id = count++;

      let obj = { 'id': count_id, 'airline_id': id, 'passenger_name': passenger_name, 'trips': trips, 'name': name, 'website': website, 'country': country, 'established': established };

      rows = rows.concat(obj);
    }

  }

  return (
    
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
