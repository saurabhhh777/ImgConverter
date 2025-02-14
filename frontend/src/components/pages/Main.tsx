import {
  Highlighter,
  ImageUpscale,
  Zap,
  Lightbulb,
  Shield,
  Bird,
} from "lucide-react";
import { useRef } from "react";
// import {gsap} from "gsap";


const Main = () => {

  const iconRef = useRef(null);
  const titelRef = useRef(null);
  const descripRef = useRef(null);


  // useEffect(()=>{ 
    
  
  // });


  return (
    <div className="h-full w-full bg-gray-900 text-white p-8">
      <div className="h-full flex flex-wrap justify-between items-center text-center gap-8">
        {[
          {
            Icon: ImageUpscale,
            title: "Perfect Quality",
            description: [
              "The best online image resizer",
              "to resize your images at",
              "the highest quality.",
            ],
          },
          {
            Icon: Zap,
            title: "Lightning Fast",
            description: [
              "This cloud-hosted, highly scalable tool",
              "can resize your images within seconds!",
            ],
          },
          {
            Icon: Highlighter,
            title: "Easy To Use",
            description: [
              "Simply upload your image and",
              "enter a target size. It's as easy as that!",
            ],
          },
          {
            Icon: Lightbulb,
            title: "Works Anywhere",
            description: [
              "ImageResizer.com is browser-based",
              "It works on any platform (Windows, Linux, Mac).",
            ],
          },
          {
            Icon: Shield,
            title: "Privacy Guaranteed",
            description: [
              "Your images are uploaded via a",
              "secure 256-bit encrypted SSL connection",
              "and deleted automatically within 6 hours.",
            ],
          },
          {
            Icon: Bird,
            title: "It's Free",
            description: [
              "Since 2024 we have resized millions of images",
              "for free! No software, registration, or watermarks.",
            ],
          },
        ].map(({ Icon, title, description }, index) => (
          <div key={index} className="p-8 flex-1 min-w-[250px]">
            <Icon size={80} className="mx-auto mb-4" ref={iconRef}/>
            <h2 className="font-poppin font-semibold text-lg mb-2" ref={titelRef}>{title}</h2>
            <p className="text-sm leading-6">
              {description.map((line, i) => (
                <span key={i} className="block" ref={descripRef}>
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
