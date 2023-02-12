import React, {useState} from 'react'
import {TableContainer, TableHead, TableBody, TableCell, TableRow, Table, TextField, Button} from '@material-ui/core'
import Graph from './Graph.js';
import './App.css'

function Qutrix() {
    const [subData, setSubData] = useState([]);
    const [finalData, setFinalData] = useState([])
    function submitData(subData) {
        setFinalData(finalData=>[...finalData, subData])
        setSubData(subData = {});
        document.myForm.reset();
    }
  return (
    <div>
      <form name="myForm">
        <TableContainer style={{ display: "flex", justifyContent: "center" }}>
          <Table
            style={{ width: "50%", justifyContent: "center" }}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <TextField
                    value={subData["sub"]}
                    onChange={e =>
                      setSubData({ ...subData, sub: e.target.value })
                    }
                    label="Food Items"
                    margin="normal"
                    variant="filled"
                    color="secondary"
                    focused
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={subData["sem"]}
                    onChange={e =>
                      setSubData({ ...subData, sem: e.target.value })
                    }
                    label="Rupees"
                    margin="normal"
                    variant="filled"
                    color="secondary"
                    focused
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => submitData(subData)}
                  >
                    Add Items
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map(data => (
                <TableRow>
                  <TableCell>{data.sub}</TableCell>
                  <TableCell>{data.sem}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      <br />
      <Graph data={finalData} />
    </div>
  );
}

export default Qutrix