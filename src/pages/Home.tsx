import Button from "../components/Button";
import Card from "../components/Card";

const Home = () => {
  const information = [
    {
      id: 1,
      icon: 'chat',
      title: 'Things',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo aliquam, sagittis dui ac, hendrerit mi.',
    },
    {
      id: 2,
      icon: 'star',
      title: 'Customizeable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo aliquam.',
    }
]

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-[120px] font-satisfy font-bold bg-gradient-to-br from-blue-800 to-blue-400 to-95% bg-clip-text text-transparent">Twitteay</h1>
      <h4 className="w-[400px] text-center text-xl font-medium text-white font-inter">Write all your moment with twitteay and share with people around you</h4>
      <div className="mt-8 space-x-3">
        <Button type="link" color="bg-blue-600 hover:bg-blue-400" href="/editor">Get started</Button>
        <Button type="link" color="bg-slate-800 hover:bg-slate-600" href="/guide-to-read">Read guide</Button>
      </div>
      <div className="flex gap-3 mt-12">
        {information.map(({ id, icon, title, description }) => (
          <Card key={id} icon={icon} title={title}>{description}</Card>
        ))}
      </div>
    </div>
  )
}

export default Home;