import React from "react";

const HOC = (ChildComponent) => {
	return () => {
		return (
			<div className="hoc-container">
				<ChildComponent />
			</div>
		);
	};
};

export default HOC;
