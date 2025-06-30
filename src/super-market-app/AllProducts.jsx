import React, {useEffect, useState} from "react";
import {
    Checkbox,
    FormControlLabel,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import ProductWindow from "./ProductWindow";

const AllProducts = (props) => {


    const [isSalesMode, setSalesMode] = React.useState(false);

    const [innerData, setInnerData] = useState([]);

    const handleSalesModeChange = (e) => {
        setSalesMode(e.target.checked);
    }

    useEffect(()=>{
        setInnerData(props.data)
    }, [])
    console.log("props", props);

    const rows = props.data;
    return (
        <>
            <h2>Here will come All Products</h2>
            <p>saleMode = {isSalesMode + ""}</p>
            <FormControlLabel control={ <Checkbox
                checked={isSalesMode}
                onChange={handleSalesModeChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />} label = "Sales Mode!"/>

            <TableContainer component={Paper} sx={{width: 500}}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Product Name</TableCell>
                            <TableCell align="left">Price</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell  align="left">
                                    {row.price}
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ProductWindow/>
        </>
    )

}

export default AllProducts;