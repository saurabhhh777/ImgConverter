import {
  Highlighter,
  ImageUpscale,
  Zap,
  Lightbulb,
  Shield,
  Bird,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const descriptionRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    // Animate icons
    iconRefs.current.forEach((icon) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: icon,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Animate titles
    titleRefs.current.forEach((title) => {
      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Animate descriptions
    descriptionRefs.current.forEach((desc) => {
      if (desc) {
        gsap.fromTo(
          desc,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: desc,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

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
            <div
              className="mb-4"
              ref={(el) => (iconRefs.current[index] = el!)}
            >
              <Icon size={80} className="mx-auto" />
            </div>
            <h2
              className="font-poppin font-semibold text-lg mb-2"
              ref={(el) => (titleRefs.current[index] = el!)}
            >
              {title}
            </h2>
            <p className="text-sm leading-6">
              {description.map((line, i) => (
                <span
                  key={`${index}-${i}`}
                  className="block"
                  ref={(el) => (descriptionRefs.current[index * 10 + i] = el!)}
                >
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
