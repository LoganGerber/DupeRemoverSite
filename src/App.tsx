import './App.css'

function ImageView({ imgData }) {
	return (
		<div>
			{imgData}
		</div>
	);
}

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
				Keep Left Image
			</div>
			<div className="margin-area" id="skip">
				Skip
			</div>
			<div className="margin-area" id="keepright">
				Keep Right Image
			</div>
		</div>
	);
}

export default App;
