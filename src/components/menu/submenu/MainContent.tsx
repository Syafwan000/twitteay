import useContentStore from '@/stores/content-store'
import Inputfield from "@/components/input/Inputfield"
import Textarea from "@/components/input/Textarea"
import Filepond from "@/components/input/Filepond"
import Checkbox from '@/components/input/Checkbox'

const MainContent = () => {
  const { 
    setProfileImage, setName, setUsername, setDate, 
    setTextContent, setRepost, setLike, setView, setAdditionalYear 
  } = useContentStore()

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="bg-black/15 space-y-px p-6 rounded-xl">
        <h3 className="text-xl font-bold">Main Content</h3>
        <p>Provides featute to manage and edit the primary content of your fake tweet</p>
      </div>
      <div className="space-y-3 p-2 overflow-y-auto">
        <Filepond 
          name="Profile Image"
          stateHandler={setProfileImage} />
        <Inputfield 
          name="Name" 
          type="text"
          placeholder="e.g. Twitteay"
          onChange={(e) => setName(e.target.value)} />
        <Inputfield 
          name="Username" 
          type="text"
          placeholder="e.g. twitteay"
          onChange={(e) => setUsername(e.target.value)} />
        <div className="space-y-3">
          <Inputfield 
            name="Date" 
            type="date"
            onChange={(e) => setDate(e.target.value)} />
          <Checkbox 
            name="additionalYear" 
            id="additionalYear" 
            onClick={(e) => setAdditionalYear((e.target as HTMLInputElement).checked) }>
            Add Year
          </Checkbox>
        </div>
        <Textarea
          name="Text Content"
          placeholder="e.g. hii!!! thank you for visiting 'Twitteay' :3"
          onChange={(e) => setTextContent(e.target.value)} />
        <Inputfield 
          name="Reposts" 
          type="number"
          placeholder="e.g. 100"
          onChange={(e) => setRepost(e.target.value)} />
        <Inputfield 
          name="Likes" 
          type="number"
          placeholder="e.g. 100"
          onChange={(e) => setLike(e.target.value)} />
        <Inputfield 
          name="Views" 
          type="number"
          placeholder="e.g. 100"
          onChange={(e) => setView(e.target.value)} />
      </div>
    </div>
  )
}

export default MainContent