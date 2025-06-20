import React, {useRef, useState} from 'react';
//import Editor from './Editor';
//import Quill from "quill";
import CkEditorDemo from './CkEditorDemo';
import {Box, Button, Link, Typography} from "@mui/material";
import {BrowserRouter, Link as RouterLink} from 'react-router-dom';
import AppRouter from "./AppRouter";

// const Delta = Quill.import('delta');

const App = () => {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    // Use a ref to access the quill instance directly
    const quillRef = useRef();

    return (
        <>
            <BrowserRouter>


                <h1>Hi</h1>


                <Box component={"h1"}>U need to wrap it inside Typography for get MUI environment</Box>

                <Typography variant="h1" gutterBottom>

                    H1 MUI?22
                </Typography>

                <Typography component={"div"}>
                    <Link href="https://mui.com/material-ui/getting-started/"
                          target={"_blank"}
                    >MUI DOCS</Link>
                    <p>General Typography</p>
                    <h2>H2</h2>
                    <h1>h1 here</h1>


                    <Link component={RouterLink} to="/super-market-app">
                        Super Market Manager Dashboard
                    </Link>

                    <br/>
                    <Button variant="contained">Hello world</Button>
                    <AppRouter/>
                </Typography>


                {/* כל הקומפוננטות שלך כאן */}
            </BrowserRouter>
        </>
    );


    //Quil - not working. TODO -organize
    // <div>
    //   <Editor
    //       ref={quillRef}
    //       readOnly={readOnly}
    //       defaultValue={new Delta()
    //           .insert('Hello')
    //           .insert('\n', { header: 1 })
    //           .insert('Some ')
    //           .insert('initial', { bold: true })
    //           .insert(' ')
    //           .insert('content', { underline: true })
    //           .insert('\n')}
    //       onSelectionChange={setRange}
    //       onTextChange={setLastChange}
    //   />
    //   <div class="controls">
    //     <label>
    //       Read Only:{' '}
    //       <input
    //           type="checkbox"
    //           value={readOnly}
    //           onChange={(e) => setReadOnly(e.target.checked)}
    //       />
    //     </label>
    //     <button
    //         className="controls-right"
    //         type="button"
    //         onClick={() => {
    //           alert(quillRef.current?.getLength());
    //         }}
    //     >
    //       Get Content Length
    //     </button>
    //   </div>
    //   <div className="state">
    //     <div className="state-title">Current Range:</div>
    //     {range ? JSON.stringify(range) : 'Empty'}
    //   </div>
    //   <div className="state">
    //     <div className="state-title">Last Change:</div>
    //     {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
    //   </div>
    // </div>
};

export default App;
