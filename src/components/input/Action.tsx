// import useContentStore from "@/stores/content-store"
// import { Icon } from '@iconify/react'

// const Action = () => {
//   const { tweetWidth, resetState } = useContentStore()
//   const [loading, setLoading] = useState<boolean>(false)
  
//   const handleDownload = useCallback(async () => {
//     const tweetElement = document.querySelector('#tweet')
//     const fileName = 'twitteay-' + new Date().getTime() + '.png'
//     const width = useTweetWidth(tweetWidth)

//     if (tweetElement) {
//       const tweet = await html2canvas(tweetElement as HTMLElement, {
//         scale: 2,
//         windowWidth: width,
//       })
//       const dataURL = tweet.toDataURL('image/png')
//       download(dataURL, fileName, 'image/png')
//     }
//   }, [tweetWidth])

//   return (

//   )
// }

// export default Action