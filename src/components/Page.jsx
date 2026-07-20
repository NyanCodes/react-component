import { useLocation } from 'react-router-dom'
import '../App.css'

const PAGES = {
  greetings: {
    title: 'Greetings',
    description: 'Hello React',
    items: [],
    centerText: true,
  },
  profiles: {
    title: 'Profiles',
    description: 'Nyan Myo Sett, Student at Assumption University.',
    items: ['Username: Nyan', 'Role: Developer', 'Year: 3rd'],
  },
  hobbies: {
    title: 'My Hobbies',
    description: 'Things I spend my free time on.',
    items: ['Music', 'Movies', 'Dota 2'],
  },
}

function Page() {
  const location = useLocation()
  const routeName = location.pathname.replace('/', '')
  const page = PAGES[routeName]

  if (!page) {
    return <div className="card">Page not found</div>
  }

  return (
    <div className="card">
      <h1>{page.title}</h1>
      <p className={page.centerText ? 'centered' : ''}>{page.description}</p>
      <ul>
        {page.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
