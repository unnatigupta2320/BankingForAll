import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import MongoDb from '../repositories/MongoDb.js';
import { Typography } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#000033",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 13,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

var mongodb = new MongoDb();
const rows = mongodb.getCustomerDetails();

export default function CustomerInfo() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {

        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div style={{ marginTop: 90, marginLeft: 420 }}>
                <Typography variant="h3" style={{ color: "#000033" }}>
                    Customer Details
                </Typography>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ marginTop: 5, marginLeft: 10, maxWidth: 1100, marginBottom: 10 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>S. No.</StyledTableCell>
                            <StyledTableCell align="right">Customer Name</StyledTableCell>
                            <StyledTableCell align="right">Email Address</StyledTableCell>
                            <StyledTableCell align="right">Available Balance</StyledTableCell>
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.no}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.currBalance}</StyledTableCell>
                                <StyledTableCell align="right">{row.city}</StyledTableCell>
                                <Button onClick={handleClickOpen} style={{ color: "white", background: "black", marginTop: 5, marginLeft: 60, marginRight: -40 }}>
                                    View Details
                                </Button>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogContent style={{fontSize:25, fontWeight:500}}>
                        <div style={{fontWeight:600, marginTop:2}}>Name             : Prashant Kelkar</div>
                        <div style={{fontWeight:600, marginTop:2}}>Current Balance  : 100000</div>
                        <div style={{fontWeight:600, marginTop:2}}>Email Address    : prkelkar@gmail.com</div>
                        <div style={{fontWeight:600, marginTop:2}}>City             : Bareilly</div>
                        <div style={{fontWeight:600, marginTop:2}}>Last Transaction : Monday 5th September</div>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={handleClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>

    );
}
