import './App.css';
import ImageView from './ImageView';
import ActionButton from './ActionButton';

function App() {
	return (
		<div id="app">
			<div id="leftbar">

			</div>
			<div id="leftimgheader">

			</div>
			<div id="rightimgheader">

			</div>
			<div className="margin-area" id="leftimg">
				<ImageView imgData="myLeftImage" />
			</div>
			<div className="margin-area" id="rightimg">
				<ImageView imgData="myRightImage" />
			</div>
			<div className="margin-area" id="keepleft">
				<ActionButton>
					Keep Left Image
				</ActionButton>
			</div>
			<div className="margin-area" id="skip">
				<ActionButton>
					Skip
				</ActionButton>
			</div>
			<div className="margin-area" id="keepright">
				<ActionButton>
					Keep Right Image
				</ActionButton>
			</div>
		</div>
	);
}

export default App;
