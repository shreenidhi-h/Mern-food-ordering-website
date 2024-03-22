import image from "../assets/Hero.png";

function Hero() {
	return (
		<div>
			<img src={image} className="w-full  max-h-[600px] object-cover" />
		</div>
	);
}
export default Hero;
