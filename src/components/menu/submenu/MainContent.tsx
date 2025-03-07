import useContentStore from '@/stores/content-store'
import Inputfield from "@/components/input/Inputfield"
import Textarea from "@/components/input/Textarea"
import Filepond from "@/components/input/Filepond"
import Checkbox from '@/components/input/Checkbox'
import SubmenuLayout from '@/components/layout/SubmenuLayout'
import InputWrapper from '@/components/display/InputWrapper'

const MainContent = () => {
  const { 
    profileImage, name, username, date, 
    textContent, repost, like, view, additionalYear,
    setProfileImage, setName, setUsername, setDate, 
    setTextContent, setRepost, setLike, setView, setAdditionalYear 
  } = useContentStore()

  return (
    <SubmenuLayout
      title="Main Content"
      description="Provides featute to manage and edit the primary content of your fake tweet">
        <InputWrapper
          label="Profile Image"
          id="profile-image">
            <Filepond 
              name="Profile Image"
              value={profileImage}
              stateHandler={setProfileImage} />
        </InputWrapper>
        <InputWrapper
          label="Name"
          id="name">
            <Inputfield 
              type="text"
              value={name}
              placeholder="e.g. Twitteay"
              onChange={(e) => setName(e.target.value)} />
        </InputWrapper>
        <InputWrapper
          label="Username"
          id="username">
            <Inputfield 
              type="text"
              value={username}
              placeholder="e.g. twitteay"
              onChange={(e) => setUsername(e.target.value)} />
        </InputWrapper>
        <div className="space-y-3">
          <InputWrapper
            label="Date"
            id="date">
              <Inputfield 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
          </InputWrapper>
          <Checkbox 
            name="additional-year" 
            id="additional-year" 
            checked={additionalYear}
            onChange={(e) => setAdditionalYear((e.target as HTMLInputElement).checked) }>
            Add Year
          </Checkbox>
        </div>
        <InputWrapper
          label="Text Content"
          id="text-content">
            <Textarea
              value={textContent}
              placeholder="e.g. hii!!! thank you for visiting 'Twitteay' :3"
              onChange={(e) => setTextContent(e.target.value)} />
        </InputWrapper>
        <InputWrapper
          label="Reposts"
          id="reposts">
            <Inputfield 
              type="number"
              value={repost}
              placeholder="e.g. 100"
              onChange={(e) => setRepost(e.target.value)} />
        </InputWrapper>
        <InputWrapper
          label="Likes"
          id="likes">
            <Inputfield 
              type="number"
              value={like}
              placeholder="e.g. 100"
              onChange={(e) => setLike(e.target.value)} />
        </InputWrapper>
        <InputWrapper
          label="Views"
          id="views">
            <Inputfield 
              type="number"
              value={view}
              placeholder="e.g. 100"
              onChange={(e) => setView(e.target.value)} />
        </InputWrapper>
    </SubmenuLayout>
  )
}

export default MainContent