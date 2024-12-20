import './App.css'
import Navbar from './components/navbar/nav'
import Hero_Section from './components/hero section/hero'
import Main_Section from './components/main section/main_section'
import Footer from './components/footer/footer'
import Review_Section from './components/review section/review'

function App() {

  return <>
    <Navbar></Navbar>
    <Hero_Section></Hero_Section>
    <Main_Section></Main_Section>
    <Review_Section></Review_Section>
    <Footer></Footer>
  </>
}


export default App
