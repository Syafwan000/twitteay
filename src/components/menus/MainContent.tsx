import useContentStore from '@/stores/content-store'
import Inputfield from "@/components/Inputfield"
import Textarea from "@components/Textarea"
import Filepond from "@components/Filepond"

const MainContent = () => {
  const { setProfileImage, setName, setUsername, setDate, setTextContent, 
    setRepost, setLike, setView } = useContentStore()

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="bg-black/15 space-y-px p-3 rounded-xl">
        <h3 className="text-xl font-bold">Main Content</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia!</p>
      </div>
      <div className="space-y-3 p-2 overflow-y-auto">
        <Filepond 
          name="Profile Image"
          stateHandler={setProfileImage} />
        <Inputfield 
          name="Name" 
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)} />
        <Inputfield 
          name="Username" 
          type="text"
          placeholder="Your username"
          onChange={(e) => setUsername(e.target.value)} />
        <Inputfield 
          name="Date" 
          type="date"
          onChange={(e) => setDate(e.target.value)} />
        <Textarea
          name="Text Content"
          placeholder="Your text content"
          onChange={(e) => setTextContent(e.target.value)} />
        <div className="flex gap-3">  
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
    </div>
  )
}

export default MainContent