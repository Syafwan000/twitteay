import useContentStore from '@/stores/content-store'
import Toolbar from "@components/Toolbar"
import Action from '@components/Action'
import moment from 'moment'
import { Icon } from '@iconify/react'

const Generator = () =>  {
  const { profileImage, name, username, date, textContent,
    repost, like, view, profileShape, verified,
    colorMode, tweetWidth
   } = useContentStore()

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Toolbar />
        </div>
        <div className="col-span-8 flex justify-center items-center w-full h-dvh p-5 relative">
          <Action />
          <div className={`transition-all duration-300 ease-in-out w-full flex gap-3 p-3 ${colorMode == 'dark' ? 'bg-black' : 'bg-white'} ${tweetWidth == 'md' && 'max-w-md'} ${tweetWidth == 'lg' && 'max-w-lg'} ${tweetWidth == 'xl' && 'max-w-xl'}`} id="tweet">
            <div>
              {profileImage ? (
                <img className={`rounded-full max-w-14 aspect-square object-cover object-center ${profileShape == 'circle' && 'rounded-full'} ${profileShape == 'rounded' && 'rounded-xl'} ${profileShape == 'square' && 'rounded-none'}`} src={profileImage} alt="Tweet Profile" />
              ) : (
                <div className={`w-14 aspect-square font-bold flex justify-center items-center ${colorMode == 'dark' ? 'bg-white text-black' : 'bg-black text-white'} ${profileShape == 'circle' && 'rounded-full'} ${profileShape == 'rounded' && 'rounded-xl'} ${profileShape == 'square' && 'rounded-none'}`}>T</div>
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
                <p className={`font-medium text-black/60 ${colorMode == 'dark' ? 'text-[#71767b]' : 'text-black/60'}`}>@{username ? username : 'twitteay'} · {date ? date : moment().format('MMM D, YYYY')}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className={`${colorMode == 'dark' ? 'text-white' : 'text-black'}`}>{textContent ? textContent : 'hii!!! thank you for visiting "Twitteay" :3'}</p>
              </div>
              <div className={`flex justify-between items-center py-2 ${colorMode == 'dark' ? 'text-[#71767b]' : 'text-black/60'}`}>
                <div className="flex text-sm items-center justify-center gap-1">
                  <Icon className="text-xl" icon="fluent:chat-empty-24-regular" />
                  <p></p>
                </div>
                <div className="flex text-sm items-center justify-center gap-1">
                  <Icon className="text-xl" icon="fluent:arrow-repeat-all-24-regular" />
                  <p>{repost ? repost : null}</p>
                </div>
                <div className="flex text-sm items-center justify-center gap-1">
                  <Icon className="text-xl" icon="fluent:heart-24-regular" />
                  <p>{like ? like : null}</p>
                </div>
                <div className="flex text-sm items-center justify-center gap-1">
                  <Icon className="text-xl" icon="fluent:data-histogram-24-regular" />
                  <p>{view ? view : null}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generator