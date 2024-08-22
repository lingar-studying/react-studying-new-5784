import React, {useState} from "react";
import ElementsGeneratorComponent from "./ElementsGeneratorComponent";
import {TextField} from "@mui/material";

const ElementsDrawerComponent = () =>{

    const [rawData, setRawData] = useState("");

    const onChange = (ev) =>{
        setRawData(ev.target.value);
    }
    return(
        <>
            <h2>Add your data</h2>
            <TextField
                placeholder="Add something"
                multiline
                rows={5}
                maxRows={10}
                onChange={onChange}
            />
            <ElementsGeneratorComponent rawData = {rawData}/>
        </>
    )


}
export default ElementsDrawerComponent;
