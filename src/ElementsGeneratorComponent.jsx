import React, {useEffect, useState} from "react";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";

const ElementsGeneratorComponent = (props) => {

    //const [elementsData, dispatch] = useReducer(valueToData, []);
    const [elementsData, setElementData] = useState([]);
    const [maxRows, setMaxRows] = useState(0);
    const [maxColumns, setMaxColumns] = useState(0);
    const [organizedData, setOrganizedData] = useState({});

    useEffect(() => {
        setElementData(valueToData(props.rawData));
    }, [props.rawData]);


    useEffect(() => {

        if (elementsData == null) {
            return;
        }
        let maxRow = 0, maxColum = 0;
        for (let i = 0; i < elementsData.length; i++) {
            if (elementsData[i].row > maxRow) {
                maxRow = elementsData[i].row;
            }
            if (elementsData[i].column > maxColum) {
                maxColum = elementsData[i].column;
            }

        }
        setMaxRows(maxRow);
        setMaxColumns(maxColum);

        // create organized data:


        let temp = {};
        elementsData.forEach(item => {
            temp["row" + item.row] = {
                ...temp["row" + item.row],
                ["col" + item.column]: item
            };

        });
        setOrganizedData(temp);
        console.log("organized = ", temp);
    }, [elementsData])


    const renderGrid = () => {
        const rows = Array.from({length: maxRows}, (_, i) => i + 1);
        return rows.map(row => (
            <Grid container key={row} columnSpacing={'15px'}>
                {Array.from({length: maxColumns}, (_, col) => (
                    <Grid item key={col} xs={12 / maxColumns}>
                        {organizedData["row" + (row)]["col" + (col + 1)] != null ?
                            (<>
                                <h2>{organizedData["row" + (row)]["col" + (col + 1)].label}</h2>
                                {organizedData["row" + (row)]["col" + (col + 1)].elType === "TEXT_INPUT" ?
                                    <TextField id="outlined-basic"
                                               label={organizedData["row" + (row)]["col" + (col + 1)].value}
                                               variant="outlined"
                                               placeholder={organizedData["row" + (row)]["col" + (col + 1)].value}
                                    />
                                    : <>
                                        <h1>Select</h1>
                                        <FormControl variant="standard"
                                                     sx={{m: 1, minWidth: 120}}>
                                            <InputLabel
                                                id="demo-simple-select-standard-label">{valToArr(organizedData["row" + (row)]["col" + (col + 1)].value)[0]}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={valToArr(organizedData["row" + (row)]["col" + (col + 1)].value)[0]}
                                                onChange= {null}
                                                label={organizedData["row" + (row)]["col" + (col + 1)].label}
                                            >
                                                {valToArr(organizedData["row" + (row)]["col" + (col + 1)].value).map(item =>
                                                    <MenuItem
                                                        value={item}
                                                        key={item}>{item}</MenuItem>)}

                                            </Select>
                                        </FormControl>
                                    </>
                                }
                            </>) :
                            <>
                                row = {row} col = {col + 1}</>


                        }
                    </Grid>
                ))}
            </Grid>
        ));
    };


    return (
        <>


            {elementsData && elementsData.length > 0 && (
                <>

                    {renderGrid()}
                </>
            )}

        </>
    );
}


//helper for parse the values:
/*
2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name
 */
const valueToData = (rawData) => {
    if (rawData == "") {
        return;
    }
    //split the string by lines
    let separateLines = rawData.split(/\r?\n|\r|\n/g);


    //split each line into object
    const data = separateLines.map(item => {
            const el = item.split(";");
            return {
                row: +el[0],
                column: +el[1],
                label: el[2],
                elType: el[3],
                value: el[4]
            }
        }
    );
    return data;

}
const valToArr = (val) => val.split(',');

export default ElementsGeneratorComponent;
/*

2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name


 */
