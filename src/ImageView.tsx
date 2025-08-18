import './ImageView.css';

type ImageViewProps = {
	imgData: React.ReactNode;
}

function ImageView({ imgData }: ImageViewProps) {
	return (
		<div>
			{imgData}
		</div>
	);
}

export default ImageView;
