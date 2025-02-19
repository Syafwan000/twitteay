import { Icon } from '@iconify/react'
import { PropsWithChildren } from 'react'

type ExampleTweetProps = {
  profileImage: string,
  name: string,
  username: string,
  date: string,
  comment: string | number,
  repost: string | number,
  like: string | number,
  view: string | number,
  verified: string | null,
  liked?: boolean
}

const ExampleTweet = (props: ExampleTweetProps & PropsWithChildren) => {
  return (
    <div className="max-w-lg flex gap-3 text-sm h-[150px] min-[400px]:h-[120px] sm:text-base">
      <div>
        <img className="rounded-full aspect-square max-w-10 object-cover object-center min-[400px]:max-w-14" src={props.profileImage} alt="Example Tweet Profile" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">{props.name}</h3>
            {props.verified != null && (
              <Icon className={`text-xl ${props.verified == 'blue' && 'text-blue-500'} ${props.verified == 'gold' && 'text-yellow-500'} ${props.verified == 'gray' && 'text-gray-400'}`} icon="fluent-mdl2:verified-brand-solid" />
            )}
          </div>
          <p className="font-medium text-black/60">@{props.username} · {props.date}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{props.children}</p>
        </div>
        <div className="flex justify-between items-center text-black/60 py-2">
          <div className="flex text-xs items-center justify-center gap-1 min-[400px]:text-sm">
            <Icon className="text-sm sm:text-xl" icon="fluent:chat-empty-24-regular" />
            <p>{props.comment}</p>
          </div>
          <div className="flex text-xs items-center justify-center gap-1 min-[400px]:text-sm">
            <Icon className="text-sm sm:text-xl" icon="fluent:arrow-repeat-all-24-regular" />
            <p>{props.repost}</p>
          </div>
          <div className={`flex text-xs items-center justify-center gap-1 min-[400px]:text-sm ${props.liked == true && 'text-[#f91880]'}`}>
            <Icon inline className="text-sm sm:text-xl" icon={props.liked == true ? 'fluent:heart-24-filled' : 'fluent:heart-24-regular'} />
            <p>{props.like}{props.liked}</p>
          </div>
          <div className="flex text-xs items-center justify-center gap-1 min-[400px]:text-sm">
            <Icon className="text-sm sm:text-xl" icon="fluent:data-histogram-24-regular" />
            <p>{props.view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleTweet