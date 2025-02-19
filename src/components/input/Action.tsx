import Button from "@/components/input/Button"
import html2canvas from "html2canvas"
import download from "downloadjs"
import { Icon } from '@iconify/react'
import { useCallback } from "react"
import useContentStore from "@/stores/content-store"

const Action = () => {
  const { resetState } = useContentStore()

  const handleDownload = useCallback(async () => {
    const tweetElement = document.querySelector('#tweet')
    let fileName = 'twitteay-' + new Date().getTime() + '.png'

    if (tweetElement) {
      const tweet = await html2canvas(tweetElement as HTMLElement, {
        scale: 2
      })
      const dataURL = tweet.toDataURL('image/png')
      download(dataURL, fileName, 'image/png')
    }
  }, [])

  return (
    <div className="flex gap-3 absolute top-5 right-5">
      <Button onClick={resetState} variant="button" className="flex gap-1 bg-red-600 text-white text-sm px-6 py-2 hover:bg-red-500">
        <Icon icon="fluent:arrow-reset-24-filled" className="text-lg" />
        Reset
      </Button>
      <Button onClick={handleDownload} variant="button" className="flex gap-1 bg-green-600 text-white text-sm px-6 py-2 hover:bg-green-500">
        <Icon icon="fluent:arrow-download-24-filled" className="text-lg" />
        Download
      </Button>
    </div>
  )
}

export default Action