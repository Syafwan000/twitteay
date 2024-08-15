import useContentStore from '@/stores/content-store'
import Radio from '@components/Radio'
import Checkbox from '@components/Checkbox'
import { Icon } from '@iconify/react'

const Appearance = () => {
  const { setProfileShape, setVerified, setColorMode, setTweetWidth, 
    setLiked, liked, setReposted, reposted, setViewed, viewed } = useContentStore()

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="bg-black/15 space-y-px p-3 rounded-xl">
        <h3 className="text-xl font-bold">Appearance & Attributes</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!</p>
      </div>
      <div className="space-y-3 p-2 overflow-y-auto">
        <div className="space-y-1">
          <label className="font-semibold">Color Mode</label>
          <div className="flex gap-3">
            <Radio name="colorMode" id="light" checked={true} onClick={() => setColorMode('light')}>Lux</Radio>
            <Radio name="colorMode" id="dark" onClick={() => setColorMode('dark')}>Tenebris</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Tweet Width</label>
          <div className="flex gap-3">
            <Radio name="tweetWidth" id="sm" checked={true} onClick={() => setTweetWidth('md')}>Medium</Radio>
            <Radio name="tweetWidth" id="md" onClick={() => setTweetWidth('lg')}>Large</Radio>
            <Radio name="tweetWidth" id="lg" onClick={() => setTweetWidth('xl')}>Xtra</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Profile Shape</label>
          <div className="flex gap-3">
            <Radio name="profileShape" id="circle" checked={true} onClick={() => setProfileShape('circle')}>Circle</Radio>
            <Radio name="profileShape" id="rounded" onClick={() => setProfileShape('rounded')}>Rounded</Radio>
            <Radio name="profileShape" id="square" onClick={() => setProfileShape('square')}>Square</Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Verified Type</label>
          <div className="flex gap-3">
            <Radio name="verified" id="none" checked={true} onClick={() => setVerified(null)}>
              None
            </Radio>
            <Radio name="verified" id="blue" onClick={() => setVerified('blue')}>
              <Icon className="text-2xl text-blue-500" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
            <Radio name="verified" id="gold" onClick={() => setVerified('gold')}>
              <Icon className="text-2xl text-yellow-500" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
            <Radio name="verified" id="gray" onClick={() => setVerified('gray')}>
              <Icon className="text-2xl text-gray-400" icon="fluent-mdl2:verified-brand-solid" />
            </Radio>
          </div>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Reposted</label>
          <Checkbox name="reposted" id="reposted" color="green" onClick={() => setReposted(!reposted)}>
            Repost
          </Checkbox>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Liked</label>
          <Checkbox name="liked" id="liked" color="red" onClick={() => setLiked(!liked)}>
            Liked
          </Checkbox>
        </div>
        <div className="space-y-1">
          <label className="font-semibold">Viewed</label>
          <Checkbox name="viewed" id="viewed" color="blue" onClick={() => setViewed(!viewed)}>
            Viewed
          </Checkbox>
        </div>
      </div>
    </div> 
  )
}

export default Appearance