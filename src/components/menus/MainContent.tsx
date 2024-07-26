import useContentStore from '@/stores/content-store'
import Textfield from "@components/Textfield"
import Textarea from "@components/Textarea"
import Filepond from "@components/Filepond"

const MainContent = () => {
  const { setProfileImage, setName, setUsername, setDate, setTextContent } = useContentStore()

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="bg-black/15 space-y-px p-3 rounded-xl">
        <h3 className="text-xl font-bold">Main Content</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!</p>
      </div>
      <div className="space-y-3 pr-2 h-[500px] overflow-y-auto">
        <Filepond 
          name="Profile Image"
          stateHandler={setProfileImage} />
        <Textfield 
          name="Name" 
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)} />
        <Textfield 
          name="Username" 
          type="text"
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)} />
        <Textfield 
          name="Date" 
          type="date"
          onChange={(e) => setDate(e.target.value)} />
        <Textarea
          name="Text Content"
          placeholder="Your text content"
          onChange={(e) => setTextContent(e.target.value)} />
        <Textarea
          name="Text Content"
          placeholder="Your text content"
          onChange={(e) => setTextContent(e.target.value)} />
        <Textarea
          name="Text Content"
          placeholder="Your text content"
          onChange={(e) => setTextContent(e.target.value)} />
        <Textarea
          name="Text Content"
          placeholder="Your text content"
          onChange={(e) => setTextContent(e.target.value)} />
      </div>
    </div>
  )
}

export default MainContent