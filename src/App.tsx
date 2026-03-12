import { BlueprintWrapper } from './components/layout/BlueprintWrapper'
import { NavigationHeader } from './components/sections/NavigationHeader'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Works } from './components/sections/Works'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Preloader } from './components/sections/Preloader'
import { CustomCursor } from './components/ui/CustomCursor'
import { Education } from './components/sections/Education'
import { Certificates } from './components/sections/Certificates'

function App() {
  return (
    <>
      <CustomCursor />
      <Preloader />
      <BlueprintWrapper>
        <NavigationHeader />
        <div className="h-[69px]"></div>
        <main className="flex-1 flex flex-col">
          <Hero />
          <Works />
          <About />
          <Services />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </BlueprintWrapper>
    </>
  )
}

export default App
