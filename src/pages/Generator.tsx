import useContentStore from '@/stores/content-store'
import Toolbar from "@/components/menu/Toolbar"
import Action from '@/components/input/Action'
import useDateFormatter from '@/hooks/use-date-formatter'
import useNumberFormatter from '@/hooks/use-number-formatter'
import { Icon } from '@iconify/react'

const Generator = () =>  {
  const { 
    profileImage, name, username, date, additionalYear, 
    textContent, repost, like, view, colorMode, tweetWidth, 
    profileShape, verified, reposted, liked, viewed
   } = useContentStore()

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <Toolbar />
      </div>
      <div className="col-span-8 flex justify-center items-center w-full h-dvh p-5 relative">
        <Action />
        <div id="tweet" className={`transition-all duration-300 ease-in-out w-full flex gap-3 p-3 ${colorMode == 'dark' ? 'bg-black' : 'bg-white'} ${tweetWidth == 'md' && 'max-w-md'} ${tweetWidth == 'lg' && 'max-w-lg'} ${tweetWidth == 'xl' && 'max-w-xl'}`}>
          <div className="flex-shrink-0">
            {profileImage ? (
              <img className={`rounded-full max-w-14 aspect-square object-cover object-center ${profileShape == 'circle' && 'rounded-full'} ${profileShape == 'rounded' && 'rounded-xl'} ${profileShape == 'square' && 'rounded-none'}`} src={profileImage} alt="Tweet Profile" />
            ) : (
              <div className={`transition-all duration-300 ease-in-out w-14 aspect-square font-bold flex justify-center items-center ${colorMode == 'dark' ? 'bg-white text-black' : 'bg-black text-white'} ${profileShape == 'circle' && 'rounded-full'} ${profileShape == 'rounded' && 'rounded-xl'} ${profileShape == 'square' && 'rounded-none'}`}>T</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <h3 className={`font-semibold ${colorMode == 'dark' ? 'text-white' : 'text-black'}`}>{name ? name : 'Twitteay'}</h3>
                {verified != null && (
                  <Icon className={`text-xl ${verified == 'blue' && 'text-blue-500'} ${verified == 'gold' && 'text-yellow-500'} ${verified == 'gray' && 'text-gray-400'}`} icon="fluent-mdl2:verified-brand-solid" />
                )}
              </div>
              <p className={`font-medium ${colorMode == 'dark' ? 'text-[#71767b]' : 'text-black/60'}`}>@{username ? username : 'twitteay'} · {date ? useDateFormatter(additionalYear, date) : useDateFormatter(additionalYear)}</p>
            </div>
            <p className={`${colorMode == 'dark' ? 'text-white' : 'text-black'}`}>{textContent ? textContent : 'hii!!! thank you for visiting "Twitteay" :3'}</p>
            <div className={`flex justify-between items-center py-2 ${colorMode == 'dark' ? 'text-[#71767b]' : 'text-black/60'}`}>
              <div className="flex text-sm items-center justify-center gap-1">
                <Icon className="text-xl" icon="fluent:chat-empty-24-regular" />
                <p></p>
              </div>
              <div className="flex text-sm items-center justify-center gap-1">
                <Icon className={`text-xl ${reposted && 'text-twitteay-green'}`} icon="fluent:arrow-repeat-all-24-regular" />
                <p className={`${reposted && 'text-twitteay-green'}`}>{repost ? useNumberFormatter(repost, 2) : null}</p>
              </div>
              <div className="flex text-sm items-center justify-center gap-1">
                <Icon className={`text-xl ${liked && 'text-twitteay-red'}`} icon={`${liked ? 'fluent:heart-24-filled' : 'fluent:heart-24-regular'}`} />
                <p className={`${liked && 'text-twitteay-red'}`}>{like ? useNumberFormatter(like, 2) : null}</p>
              </div>
              <div className="flex text-sm items-center justify-center gap-1">
                <Icon className={`text-xl ${viewed && 'text-blue-500'}`} icon="fluent:data-histogram-24-regular" />
                <p className={`${viewed && 'text-blue-500'}`}>{view ? useNumberFormatter(view, 2) : null}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generator