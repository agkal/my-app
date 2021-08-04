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

export default function DataGridAirlinesDisplay(props) {

  if (props.passengerData !== null) {

    let count = 0;

    for (let item of props.airlineData) {

      let name = item.name;
      let country = item.country;
      let established = item.established;
      let website = item.website;
      let id = item.id;
      let count_id = count++;

      let obj = { 'id': count_id, 'airline_id': id, 'name': name, 'website': website, 'country': country, 'established': established };

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
