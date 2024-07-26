import useContentStore from '@/stores/content-store'
import Toolbar from "@components/Toolbar"

const Generator = () =>  {
  const { profileImage, name, username, date, textContent } = useContentStore()

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <Toolbar />
        </div>
        <div className="col-span-8 w-full">
          <img className="w-16 aspect-square rounded-full" src={profileImage} alt="Test" />
          <p>{name}</p>
          <p>{username}</p>
          <p>{date}</p>
          <p>{textContent}</p>
        </div>
      </div>
    </>
  )
}

export default Generator