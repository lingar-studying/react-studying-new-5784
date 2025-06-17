import React from "react";
import {Route, Routes} from "react-router";
import AllProducts from "./super-market-app/all-products";

const AppRouter = () =>(
        <Routes>
            <Route path="/super-market-app" element={<AllProducts />} />
        </Routes>

);
export default AppRouter;