import ExampleTweet from "@components/ExampleTweet"
import Button from "@components/Button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
  const settings = {
    className: "max-w-lg mx-auto",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
  }

  return (
    <>
      <div className="max-w-screen-lg mx-auto space-y-3">
        <div className="flex flex-col justify-center items-center space-y-8 py-12">
          <div className="inline-flex text-xs bg-black/20 rounded-full p-1">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-full">Revamp ✨</span>
            <p className="font-medium px-3 flex justify-center items-center">Experience a fresh look with new UI</p>
          </div>
          <div className="max-w-2xl text-center space-y-3">
            <h1 className="font-bold text-5xl">Craft Fun and Creative Fake Tweet Easily</h1>
            <p>Twitteay is a simple tool for creating fake tweets. Customize text, usernames, and more for fun or creative purposes</p>
          </div>
          <div className="space-x-2">
            <Button variant="link" to="/create" className="bg-black text-white px-6 py-2.5 hover:bg-black/80">Try now</Button>
            <Button variant="link" to="/about" className="bg-black/20 px-6 py-2.5 hover:bg-black/15">Learn more</Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent z-50"></div>
          <Slider {...settings}>
            <ExampleTweet />
            <ExampleTweet />
            <ExampleTweet />
            <ExampleTweet />
          </Slider>
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent z-50"></div>
        </div>
        <div className="py-24">
          <h2 className="font-bold text-3xl">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Customizable</h3>
              <p>Change the profile picture, username, date, and more to make it look like a real tweet</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Responsive</h3>
              <p>Twitteay is designed to work on any device, from desktop to mobile</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg">Easy to Use</h3>
              <p>Simply fill in the fields and click the button to generate a fake tweet</p>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Home