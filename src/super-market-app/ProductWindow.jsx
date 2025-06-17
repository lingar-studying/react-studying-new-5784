import React from "react";


const ProductWindow = () =>{

    console.log("Product Window Render");

return (

    <p>

        Hello I am product window

    </p>
)}
//With that the automatic rendering will be preveneted
// export default React.memo(ProductWindow);

export default ProductWindow;