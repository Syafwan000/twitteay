import { ChatBubbleBottomCenterIcon, StarIcon } from "@heroicons/react/24/outline";

type Card = {
  icon: string,
  title: string,
  children: string
};

const Card = ({ icon, title, children }: Card) => {
  return (
    <div className="transition-all duration-300 ease-in-out p-5 text-white rounded-lg w-[320px] space-y-5 font-inter hover:bg-slate-800">
      <div className="w-12 h-12 p-2 rounded-xl bg-gradient-to-br from-blue-800 to-blue-500">
        {icon === 'chat' ? (
          <ChatBubbleBottomCenterIcon
            className="text-white"
          />
        ) : (
          <StarIcon
            className="text-white"
          />
        )}
      </div>
      <div className="space-y-1 cursor-default">
        <h3 className="font-bold">{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Card;