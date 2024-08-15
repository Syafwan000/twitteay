import Button from "@components/Button"
import html2canvas from "html2canvas"
import download from "downloadjs"
import { Icon } from '@iconify/react'
import { useCallback } from "react"

const Action = () => {
  const handleDownload = useCallback(async () => {
    const tweetElement = document.querySelector('#tweet')
    if (tweetElement) {
      const tweet = await html2canvas(tweetElement as HTMLElement, {
        scale: 2
      })
      const dataURL = tweet.toDataURL('image/png')
      download(dataURL, 'Twitteay.png', 'image/png')
    }
  }, [])

  return (    
    <div className="flex gap-3 absolute top-5 right-5">
      <Button variant="button" className="flex gap-1 bg-red-600 text-white text-sm px-6 py-2 hover:bg-red-500">
        <Icon icon="fluent:arrow-reset-24-filled" className="text-lg" />
        Reset
      </Button>
      <Button variant="button" className="flex gap-1 bg-green-600 text-white text-sm px-6 py-2 hover:bg-green-500" onClick={handleDownload}>
        <Icon icon="fluent:arrow-download-24-filled" className="text-lg" />
        Download
      </Button>
    </div>
  )
}

export default Action