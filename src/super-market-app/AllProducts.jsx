import React, {useEffect, useState} from "react";
import {
    Checkbox,
    FormControlLabel, IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import ProductWindow from "./ProductWindow";
import {EditAttributes} from "@mui/icons-material";

const AllProducts = (props) => {


    const [isSalesMode, setSalesMode] = React.useState(false);
    const [onlyInnerState, setOnlyInnerState] = React.useState(false);

    const [innerData, setInnerData] = useState([]);

    const [discountRate, setDiscountRate] = useState(15);
    const [chosenProduct, setChosenProduct] = useState({});
    const handleSalesModeChange = (e) => {
        setSalesMode(e.target.checked);
    }

    useEffect(() => {
        setInnerData(props.data);
    }, [])
    console.log("props", props);
    useEffect(() => {
        const temp = innerData.map(row => {
            const actualPrice = !isSalesMode ? row.price : Math.floor(row.price * (1 - (discountRate / 100)) * 100) / 100;
            return {...row, actualPrice: actualPrice}
        });
        console.log("inner Data " , innerData)
        setInnerData(temp);
    },[isSalesMode]);

    const rows = props.data;
    return (
        <>
            <h2>Here will come All Products</h2>
            <p>saleMode = {isSalesMode + ""}</p>
            <FormControlLabel control={<Checkbox
                checked={isSalesMode}
                onChange={handleSalesModeChange}
                inputProps={{'aria-label': 'controlled'}}
            />} label="Sales Mode!"/>


            <FormControlLabel control={<Checkbox
                checked={onlyInnerState}
                onChange={(ev) => {
                    setOnlyInnerState(ev.target.checked);
                }}
                inputProps={{'aria-label': 'controlled'}}
            />} label="only Inner State!"/>


            <TableContainer component={Paper} sx={{width: 500}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
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
                                <TableCell align="left">
                                    {row?.actualPrice}
                                </TableCell>

                                <TableCell align="left">
                                    current product:
                                    <ProductWindow data={row}/>

                                </TableCell>
                                <TableCell align="left">
                                    <IconButton onClick={() => {
                                        setChosenProduct(row);
                                    }}><EditAttributes/> </IconButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <ProductWindow data={chosenProduct}/>
        </>
    )

}

export default AllProducts;