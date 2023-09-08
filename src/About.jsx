import React from "react";
import web from "../src/images/img-2.svg";
import Common from "./Common";

const About =() => {
    return(<>
        <Common 
            name="About "
            imgsrc={web}
            visit="/contact"
            btnname="Contact Us"
        />
    </>)
};

export default About;