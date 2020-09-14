import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function StorageTable(props) {

  const {
    storage
  } = props;

  return (
    <TableContainer component={Paper}>
      <Table className="table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storage.map((conversion, index) => (
            <TableRow key={index} id={index}>
              <TableCell>{conversion.time}</TableCell>
              <TableCell align="right">{conversion.fromAmount + " " + conversion.fromCurrency}</TableCell>
              <TableCell align="right">{conversion.toAmount + " " + conversion.toCurrency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
