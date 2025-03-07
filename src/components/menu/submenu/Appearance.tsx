import useContentStore from '@/stores/content-store'
import Radio from '@/components/input/Radio'
import Checkbox from '@/components/input/Checkbox'
import SubmenuLayout from '@/components/layout/SubmenuLayout'
import InputWrapper from '@/components/display/InputWrapper'
import { Icon } from '@iconify/react'

const Appearance = () => {
  const { 
    profileShape, verified, colorMode, 
    tweetWidth, liked, reposted, viewed,
    setProfileShape, setVerified, setColorMode, 
    setTweetWidth, setLiked, setReposted, setViewed 
  } = useContentStore()

  return (
    <SubmenuLayout
      title="Appearance & Attributes"
      description="Customize the look and feel of your content here. This section includes options to adjust themes and others">
        <InputWrapper
          label="Color Mode">
            <div className="flex gap-3">
              <Radio name="color-mode" id="mode-light" value="light" checked={colorMode == 'light'} onChange={() => setColorMode('light')}>Lux</Radio>
              <Radio name="color-mode" id="mode-dark" value="dark" checked={colorMode == 'dark'} onChange={() => setColorMode('dark')}>Tenebris</Radio>
            </div>
        </InputWrapper>
        <InputWrapper
          label="Tweet Width">
            <div className="flex gap-3">
              <Radio name="tweet-width" id="size-md" value="md" checked={tweetWidth == 'md'} onChange={() => setTweetWidth('md')}>Medium</Radio>
              <Radio name="tweet-width" id="size-lg" value="lg" checked={tweetWidth == 'lg'} onChange={() => setTweetWidth('lg')}>Large</Radio>
              <Radio name="tweet-width" id="size-xl" value="xl" checked={tweetWidth == 'xl'} onChange={() => setTweetWidth('xl')}>Xtra</Radio>
            </div>
        </InputWrapper>
        <InputWrapper
          label="Profile Shape">
            <div className="flex gap-3">
              <Radio name="profile-shape" id="circle" value="circle" checked={profileShape == 'circle'} onChange={() => setProfileShape('circle')}>Circle</Radio>
              <Radio name="profile-shape" id="rounded" value="rounded" checked={profileShape == 'rounded'} onChange={() => setProfileShape('rounded')}>Rounded</Radio>
              <Radio name="profile-shape" id="square" value="square" checked={profileShape == 'square'} onChange={() => setProfileShape('square')}>Square</Radio>
            </div>
        </InputWrapper>
        <InputWrapper
          label="Verified">
            <div className="flex gap-3">
              <Radio name="verified" id="none" value="none" checked={verified == 'none'} onChange={() => setVerified('none')}>
                None
              </Radio>
              <Radio name="verified" id="blue" value="blue" checked={verified == 'blue'} onChange={() => setVerified('blue')}>
                <Icon className="text-2xl text-blue-500" icon="fluent-mdl2:verified-brand-solid" />
              </Radio>
              <Radio name="verified" id="gold" value="gold" checked={verified == 'gold'} onChange={() => setVerified('gold')}>
                <Icon className="text-2xl text-yellow-500" icon="fluent-mdl2:verified-brand-solid" />
              </Radio>
              <Radio name="verified" id="gray" value="gray" checked={verified == 'gray'} onChange={() => setVerified('gray')}>
                <Icon className="text-2xl text-gray-400" icon="fluent-mdl2:verified-brand-solid" />
              </Radio>
            </div>
        </InputWrapper>
        <div className="space-y-4 pt-1">
          <Checkbox 
            name="reposted" 
            id="reposted" 
            color="green" 
            checked={reposted} 
            onChange={(e) => setReposted((e.target as HTMLInputElement).checked)}>
            Reposted
          </Checkbox>
          <Checkbox 
            name="liked" 
            id="liked" 
            color="red" 
            checked={liked} 
            onChange={(e) => setLiked((e.target as HTMLInputElement).checked)}>
            Liked
          </Checkbox>
          <Checkbox 
            name="viewed" 
            id="viewed" 
            color="blue" 
            checked={viewed} 
            onChange={(e) => setViewed((e.target as HTMLInputElement).checked)}>
            Viewed
          </Checkbox>
        </div>
        {/* <div className="space-y-1">
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
        </div> */}
    </SubmenuLayout>
  )
}

export default Appearance