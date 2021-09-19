import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MongoDb from '../repositories/MongoDb.js';
import { Button } from '@mui/material';

function Transaction() {
  var mongodb = new MongoDb();
  const names = mongodb.getNames();

  return (
    <div >
      <div style={{ marginLeft: 400 }}>
        <h3 style={{ marginTop: 120, fontSize: 28 }}>
          Transfer money on Behalf of the customers
        </h3>
        <div style={{ marginLeft: 50 }}>
          <Autocomplete
            id="combo-box-demo"
            options={names}
            sx={{ width: 400, marginBottom: 8, marginTop: 5 }}
            renderInput={(params) => <TextField {...params} label="Trasfer From " />}
          />
          <Autocomplete
            id="combo-box-demo"
            options={names}
            sx={{ width: 400, marginBottom: 8 }}
            renderInput={(params) => <TextField {...params} label="Trasfer To " />}
          />
          <div>
            <Button variant="contained" href="/customers" color="inherit" style={{marginLeft:60}}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" href="/customers" color="primary" style={{marginLeft:60}}>
              Transfer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;