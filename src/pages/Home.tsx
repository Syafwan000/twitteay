import ExampleTweet from "@components/pages/ExampleTweet"
import Feature from "@components/pages/Feature"
import Button from "@components/Button"
import Slider from "react-slick"
import { Icon } from '@iconify/react'
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
    swipe: false,
    arrows: false
  }

  const features = [
    {
      title: "Customizable",
      icon: <Icon className="text-4xl text-white" icon="fluent:text-color-24-filled" />,
      description: "Change the profile picture, username, date, and more to make it look like a real tweet"
    },
    {
      title: "Responsive",
      icon: <Icon className="text-4xl text-white" icon="fluent:phone-desktop-24-filled" />,
      description: "Twitteay is designed to work on any device, from desktop to mobile"
    },
    {
      title: "Easy to Use",
      icon: <Icon className="text-4xl text-white" icon="fluent:cursor-click-24-filled" />,
      description: "Simply fill in the fields and click the button to generate a fake tweet"
    },
    {
      title: "Live Preview",
      icon: <Icon className="text-4xl text-white" icon="fluent:screenshot-24-filled" />,
      description: "See your fake tweet come to life as you make changes"
    },
    {
      title: "Downloadable",
      icon: <Icon className="text-4xl text-white" icon="fluent:arrow-download-24-filled" />,
      description: "Easily download your created tweets for sharing"
    }
  ]

  return (
    <>
      <div className="max-w-screen-lg mx-auto space-y-3">
        <div className="flex flex-col justify-center items-center space-y-8 py-12">
          <div className="inline-flex text-xs bg-black/10 rounded-full p-1">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-full">Revamp ✨</span>
            <p className="font-medium px-3 flex justify-center items-center">Experience a fresh look with new UI</p>
          </div>
          <div className="max-w-2xl text-center space-y-3">
            <h1 className="font-bold text-5xl">Craft Fun and Creative Fake Tweet Easily</h1>
            <p>Twitteay is a simple tool for creating fake tweets. Customize text, usernames, and more for fun or creative purposes</p>
          </div>
          <div className="space-x-2">
            <Button variant="link" to="/create" className="bg-black text-white px-6 py-2.5 hover:bg-black/80">Try now</Button>
            <Button variant="link" to="/about" className="bg-black/10 px-6 py-2.5 hover:bg-black/15">Learn more</Button>
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
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="inline-flex justify-center items-center gap-2 border-2 border-black py-1 px-5 rounded-full">
              <Icon className="text-sm text-black" icon="fluent:grid-24-filled" />
              <p className="font-bold text-sm text-black">Features</p>
            </div>
            <div className="space-y-px">
              <h3 className="text-3xl font-bold">Features We Provide</h3>
              <p>We provide several interesting features</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 pt-16">
            {features.map((feature, index) => (
              <Feature key={index} title={feature.title} icon={feature.icon}>
                {feature.description}
              </Feature>
            ))}
            <div className="flex flex-col bg-black rounded-3xl gap-5 p-6">
              <h3 className="text-2xl font-semibold text-white">and other features...</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home