import React from "react";
import web from "../src/images/img-1.svg";
import Common from "./Common";

const Home =() => {
    return(<>
        <Common 
            name="Get Started with"
            imgsrc={web}
            visit="/service"
            btnname="Get Started"
        />
    </>)
};

export default Home;