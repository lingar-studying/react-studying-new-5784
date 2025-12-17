// //import Editor from './Editor';
// //import Quill from "quill";
// import CkEditorDemo from "./CkEditorDemo";
// import { Box, Button, Link, TextField, Typography } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// import ElementsDrawerComponent from "./ElementsDrawerComponent";
// import DataGridPoc from "./DataGridPoc";
// // const Delta = Quill.import('delta');

export default function App() {
  //   const [range, setRange] = useState();
  //   const [lastChange, setLastChange] = useState();
  //   const [readOnly, setReadOnly] = useState(false);

  //   // Use a ref to access the quill instance directly
  //   const quillRef = useRef();

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
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
// };

// export default App;
