import React, {useEffect} from "react";

const ElementsGeneratorComponent = (props) =>{

    useEffect(()=>{
        valueToData(props.rawData);

    },[props.rawData]);

    return(
        <>
            <p>ElementsGeneratorComponent</p>
            <p>Raw data = {props.rawData}</p>

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
const valueToData=(rawData)=>{
    //split the string by lines
    let separateLines = rawData.split(/\r?\n|\r|\n/g);
    console.log("line = ", separateLines);

}

export default ElementsGeneratorComponent;
