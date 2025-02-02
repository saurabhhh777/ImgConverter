
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Pngtojpg from "./components/Tools/Pngtojpg.tsx";
import Pngtowebp from "./components/Tools/Pngtowebp.tsx";
import Jpgtowebp from "./components/Tools/Jpgtowebp.tsx";
import Jpgtopng from "./components/Tools/Jpgtopng.tsx";
import Webtopng from "./components/Tools/Webptopng.tsx";
import Webtojpg from "./components/Tools/Webptojpg.tsx";
import ErrorPage from "./components/ErrorPg/ErrorPage.tsx";
import Home from "./components/pages/Home.tsx";
import Contact from './components/pages/Contact.tsx';
import About from './components/pages/About.tsx';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/png-to-jpeg" element={<Pngtojpg/>}/>
      <Route path="/png-to-webp"element={<Pngtowebp/>}/>
      <Route path="/jpg-to-webp" element={<Jpgtowebp/>}/>
      <Route path="/jpg-to-png" element={<Jpgtopng/>}/>
      <Route path="/web-to-png" element={<Webtopng/>}/>
      <Route path="/web-to-jpg" element={<Webtojpg/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App