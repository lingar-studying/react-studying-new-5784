import React, { useRef, useState } from "react";
import Input from "./input"; // שם קומפוננטה עם אות גדולה
import CkEditorDemo from "./CkEditorDemo";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ElementsDrawerComponent from "./ElementsDrawerComponent";
import DataGridPoc from "./DataGridPoc";

const App = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);

  const quillRef = useRef();

  return (
    <div>
      <Input /> {/* שימוש בקומפוננטה הנכונה */}
      {/* דוגמאות עם MUI */}
      <Typography variant="h4" gutterBottom>
      </Typography>
    </div>
  );
};

export default App;