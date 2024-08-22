import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";

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
        console.log("data = ", elementsData);
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
        elementsData.forEach(item=>{
           temp["row" + item.row] = {...temp["row" + item.row] ,["col" +item.column] : item};

        });
        setOrganizedData(temp);
        console.log("organized = " , temp);
    }, [elementsData])


    const renderGrid = () => {
        const rows = Array.from({length: maxRows}, (_, i) => i + 1);
        return rows.map(row => (
            <Grid container key={row} columnSpacing={'15px'}>
                {Array.from({length: maxColumns}, (_, col) => (
                    <Grid item key={col} xs={12 / maxColumns}>
                        { organizedData["row"+ (row+1)]["col" + (col+1)] != null? <>
                                <h2>{organizedData["row"+ (row+1)]["col" + (col+2)].label}</h2>

                        </>:
                            <>
                            row = {row} col = {col}</>


                        }
                    </Grid>
                ))}
            </Grid>
        ));
    };


    return (
        <>
            <p>ElementsGeneratorComponent</p>

            {elementsData && elementsData.length > 0 && (
                <>
                    <h1>Here are your generated grids:</h1>
                    {renderGrid()}
                </>
            )}

            <h1>****</h1>

            <p>Raw data = {props.rawData}</p>
            <Grid container columnSpacing={"15px"}>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>

            </Grid>

            <Grid container columnSpacing={"15px"}>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>
                <Grid item>
                    <div>item</div>
                </Grid>

            </Grid>
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

export default ElementsGeneratorComponent;
/*

2;1;gender;SELECT;Male,Female
1;1;First Name;TEXT_INPUT;Enter your first name
2;2;marital status;SELECT;Single,Maried,Divorced
1;2;Last Name;TEXT_INPUT;Enter your last name


 */
