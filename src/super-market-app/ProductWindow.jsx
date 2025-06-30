import React from "react";


const ProductWindow = (props) =>{

    console.log("Product Window Render");

return (

    <p>

        Hello I am product window, name = {props.data?.name}, price = {props.data?.actualPrice}

    </p>

)}
//With that the automatic rendering will be prevented
export default React.memo(ProductWindow);

// export default ProductWindow;