import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat facilis molestiae dicta in ipsam, hic obcaecati nulla doloribus nihil voluptatum saepe asperiores vel aperiam. Magnam sint deserunt error excepturi.
            </p>
            <div className="flex my-10 justify-center">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 mx-3 rounded-md">
                    Get Started
                </a>
                <a href="#" className="py-2 px-3 rounded-md border mx-3">
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
