import React from "react";
import HOC from "./hoc.component";

const Child = () => {
	return <div className="child-container">Hello child!</div>;
};

export default HOC(Child);
