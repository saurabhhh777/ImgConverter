
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
import Heictojpg from './components/Tools/Heictojpg.tsx';
import Heictopng from './components/Tools/Heictopng.tsx';
import Heictowebp from './components/Tools/Heictowebp.tsx';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/png-to-jpeg" element={<Pngtojpg/>}/> {/*working*/}
      <Route path="/png-to-webp"element={<Pngtowebp/>}/>
      <Route path="/jpeg-to-webp" element={<Jpgtowebp/>}/>
      <Route path="/jpeg-to-png" element={<Jpgtopng/>}/>
      <Route path="/webp-to-png" element={<Webtopng/>}/>
      <Route path="/webp-to-jpeg" element={<Webtojpg/>}/>
      <Route path="/heic-to-jpeg" element={<Heictojpg/>}/>
      <Route path="/heic-to-png" element={<Heictopng/>}/> 
      <Route path="/heic-to-webp" element={<Heictowebp/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App