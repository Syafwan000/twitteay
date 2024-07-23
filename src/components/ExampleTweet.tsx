import { Icon } from '@iconify/react'

const ExampleTweet = () => {
  return (
    <div className="max-w-lg grid grid-flow-col gap-3">
      <img className="rounded-full aspect-square w-16 object-cover object-center" src="https://i1.sndcdn.com/avatars-sA0v3EaxDeGspAzF-2pBdNQ-t240x240.jpg" alt="Example Tweet Profile" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">Pop Cat</h3>
            <Icon className="text-xl text-blue-500" icon="fluent-mdl2:verified-brand-solid" />
          </div>
          <p className="font-medium text-black/60">@popcat · Jul 16</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate ipsum repellat voluptatem, totam libero a. Deleniti sint officia itaque!</p>
          {/* <img className="rounded-lg aspect-video object-cover object-center" src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1539233037/hav7jeon0yveqzqim3qb.jpg" alt="Example Tweet Image" /> */}
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex text-sm items-center justify-center gap-1">
            <Icon className="text-lg" icon="fluent:chat-empty-24-regular" />
            <p>2</p>
          </div>
          <div className="flex text-sm items-center justify-center gap-1">
            <Icon className="text-lg rotate-90" icon="fluent:arrow-repeat-all-24-regular" />
            <p>2</p>
          </div>
          <div className="flex text-sm items-center justify-center gap-1">
            <Icon className="text-lg" icon="fluent:heart-24-regular" />
            <p>2</p>
          </div>
          <div className="flex text-sm items-center justify-center gap-1">
            <Icon className="text-lg" icon="fluent:data-histogram-24-regular" />
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleTweet