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

  const exampleTweet = [
    {
      profileImage: "/assets/images/avatar/1.png",
      name: "Luna",
      username: "luna",
      date: "Dec 16",
      comment: 123,
      repost: 54,
      like: '6.6K',
      view: '21.3K',
      verified: "blue",
      liked: true,
      textContent: "There’s nothing quite like the stillness of late-night coding sessions. The world is asleep, and it’s just you, the code, the challenge and problems"
    },
    {
      profileImage: "/assets/images/avatar/2.png",
      name: "Mark",
      username: "mark",
      date: "Jul 3, 2021",
      comment: 453,
      repost: 12,
      like: 543,
      view: '1.2K',
      verified: null,
      textContent: "I’m so excited for the new tech conference coming up next week! It's going to be packed with amazing speakers, insightful & oppotunities"
    },
    {
      profileImage: "/assets/images/avatar/3.png",
      name: "Sarah",
      username: "sarah",
      date: "Aug 11",
      comment: '1.2K',
      repost: '10K',
      like: '256.2M',
      view: '2.2B',
      verified: "gold",
      liked: true,
      textContent: "For me, writing is far more than a mere activity—it’s an essential expression of my being. Each sentence I compose feels like a piece of my soul"
    },
    {
      profileImage: "/assets/images/avatar/4.png",
      name: "Dave",
      username: "dave",
      date: "May 12",
      comment: '1.1K',
      repost: '2K',
      like: '103K',
      view: '5.1M',
      verified: null,
      textContent: "Writing is not just a job, it's a passion that fuels my creativity every day. There something magical about turning thoughts into words and stories"
    },
    {
      profileImage: "/assets/images/avatar/5.png",
      name: "Alice",
      username: "alice",
      date: "Sep 21, 2022",
      comment: '2.3K',
      repost: 776,
      like: '46.4K',
      view: '111K',
      verified: "gray",
      textContent: "Just discovered a cozy little bookstore tucked away in a quiet corner of the city. It’s like stepping into a literary paradise! 📚✨ #HiddenGems"
    }
  ]

  return (
    <>
      <div className="max-w-screen-lg mx-auto space-y-3 px-6 xl:px-0">
        <div className="flex flex-col justify-center items-center space-y-8 py-12">
          <div className="inline-flex text-[11px] bg-black/10 rounded-full p-1 sm:text-xs">
            <span className="bg-black text-white font-semibold px-2 py-1 rounded-full">Revamp ✨</span>
            <p className="font-medium px-3 flex justify-center items-center">Experience a fresh look with new UI</p>
          </div>
          <div className="max-w-2xl text-center space-y-3">
            <h1 className="font-bold text-4xl md:text-5xl">Craft Fun and Creative Fake Tweet Easily</h1>
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
            {exampleTweet.map((tweet, index) => (
              <ExampleTweet key={index}
                profileImage={tweet.profileImage}
                name={tweet.name}
                username={tweet.username}
                date={tweet.date}
                comment={tweet.comment}
                repost={tweet.repost}
                like={tweet.like}
                view={tweet.view}
                liked={tweet.liked}
                verified={tweet.verified}>
                {tweet.textContent}
              </ExampleTweet>
            ))}
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
          <div className="grid grid-cols-2 gap-5 pt-16 md:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} title={feature.title} icon={feature.icon}>
                {feature.description}
              </Feature>
            ))}
            <div className="flex flex-col bg-black rounded-3xl gap-5 p-5 md:p-6">
              <h3 className="text-xl font-semibold text-white md:text-2xl">and other features...</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home