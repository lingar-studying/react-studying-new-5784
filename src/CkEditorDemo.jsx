import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import React, { useRef, useState } from 'react';
import 'ckeditor5/ckeditor5.css';

function CkEditorDemo() {

    const reactEditor = useRef(null);
    const seeData = (ev)=>{
        console.log("Editor have changed:");
        console.log(ev)
        reactEditor.current.getData();
    }

    return (
        <>
        <h1>CK Editor componen22t:</h1>
            <CKEditor
                editor={ ClassicEditor }

                ref = {reactEditor}
                config={ {
                    toolbar: {
                        items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                    },
                    plugins: [
                        Bold, Essentials, Italic, Mention, Paragraph,  Undo
                    ],

                    mention: {
                        // Mention configuration
                    },
                    initialData: '<p>Hello from CKEditor 5 in React!</p>',
                } }
                onChange = {seeData}
            />
            </>

    );
}

export default CkEditorDemo;
