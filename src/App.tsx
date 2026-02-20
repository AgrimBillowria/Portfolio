import { BlueprintWrapper } from './components/layout/BlueprintWrapper'
import { NavigationHeader } from './components/sections/NavigationHeader'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Works } from './components/sections/Works'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <BlueprintWrapper>
      <NavigationHeader />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <Works />
        <Contact />
      </main>
    </BlueprintWrapper>
  )
}

export default App
