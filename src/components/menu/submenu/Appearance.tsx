import useContentStore from '@/stores/content-store'
import Radio from '@/components/input/Radio'
import Checkbox from '@/components/input/Checkbox'
import { Icon } from '@iconify/react'

const Appearance = () => {
  const { 
    profileShape, verified, colorMode, 
    tweetWidth, liked, reposted, viewed,
    setProfileShape, setVerified, setColorMode, 
    setTweetWidth, setLiked, setReposted, setViewed 
  } = useContentStore()

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="bg-black/15 space-y-px p-6 rounded-xl">
        <h3 className="text-xl font-bold">Appearance & Attributes</h3>
        <p>Customize the look and feel of your content here. This section includes options to adjust themes and others</p>
      </div>
      <div className="space-y-3 p-2 overflow-y-auto">
        <div className="space-y-1">
          <label className="font-semibold">Color Mode</label>
          <div className="flex gap-3">
            <Radio name="colorMode" id="light" checked={colorMode == 'light'} onChange={() => setColorMode('light')}>Lux</Radio>
            <Radio name="colorMode" id="dark" checked={colorMode == 'dark'} onChange={() => setColorMode('dark')}>Tenebris</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Tweet Width</label>
          <div className="flex gap-3">
            <Radio name="tweetWidth" id="sm" checked={tweetWidth == 'md'} onChange={() => setTweetWidth('md')}>Medium</Radio>
            <Radio name="tweetWidth" id="md" checked={tweetWidth == 'lg'} onChange={() => setTweetWidth('lg')}>Large</Radio>
            <Radio name="tweetWidth" id="lg" checked={tweetWidth == 'xl'} onChange={() => setTweetWidth('xl')}>Xtra</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Profile Shape</label>
          <div className="flex gap-3">
            <Radio name="profileShape" id="circle" checked={profileShape == 'circle'} onChange={() => setProfileShape('circle')}>Circle</Radio>
            <Radio name="profileShape" id="rounded" checked={profileShape == 'rounded'} onChange={() => setProfileShape('rounded')}>Rounded</Radio>
            <Radio name="profileShape" id="square" checked={profileShape == 'square'} onChange={() => setProfileShape('square')}>Square</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Verified Type</label>
          <div className="flex gap-3">
            <Radio name="verified" id="none" checked={verified == 'none'} onChange={() => setVerified('none')}>
              None
            </Radio>
            <Radio name="verified" id="blue" checked={verified == 'blue'} onChange={() => setVerified('blue')}>
              <Icon className="text-2xl text-blue-500" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
            <Radio name="verified" id="gold" checked={verified == 'gold'} onChange={() => setVerified('gold')}>
              <Icon className="text-2xl text-yellow-500" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
            <Radio name="verified" id="gray" checked={verified == 'gray'} onChange={() => setVerified('gray')}>
              <Icon className="text-2xl text-gray-400" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Reposted</label>
          <Checkbox name="reposted" id="reposted" color="green" checked={reposted} onChange={(e) => setReposted((e.target as HTMLInputElement).checked)}>
            Reposted
          </Checkbox>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Liked</label>
          <Checkbox name="liked" id="liked" color="red" checked={liked} onChange={(e) => setLiked((e.target as HTMLInputElement).checked)}>
            Liked
          </Checkbox>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Viewed</label>
          <Checkbox name="viewed" id="viewed" color="blue" checked={viewed} onChange={(e) => setViewed((e.target as HTMLInputElement).checked)}>
            Viewed
          </Checkbox>
        </div>
      </div>
    </div> 
  )
}

export default Appearance