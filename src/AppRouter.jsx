import React from "react";
import {Route, Routes} from "react-router";
import AllProducts from "./super-market-app/AllProducts";
import {productsMock} from "./logic/mocks";

const AppRouter = () =>(
        <Routes>
            <Route path="/super-market-app" element={<AllProducts data = {productsMock }/>}/>
        </Routes>

);
export default AppRouter;