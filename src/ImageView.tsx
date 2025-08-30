import './ImageView.css';

type ImageViewProps = {
	imgData: React.ReactNode;
}

function ImageView({ imgData }: ImageViewProps) {
	return (
		<div className="imgBlock">
			<img src="/3448422.jpg" />
		</div>
	);
}

export default ImageView;
