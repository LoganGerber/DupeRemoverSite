import React from "react";
import './ActionButton.css';

type ActionButtonProps = {
	children: React.ReactNode;
};

const ActionButton = ({ children }: ActionButtonProps) => {
	return (
		<div className="action-button">
			{children}
		</div>
	);
};

export default ActionButton;
