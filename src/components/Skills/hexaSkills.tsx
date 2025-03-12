"use client";
import { useMobile } from "@/context/MobileContext";

const polygonClass =
  "md:w-[150px] w-[100px] md:h-[150px] h-[100px] md:m-[1.5px] m-[1px] bg-gray-800 flex justify-center items-center hover:opacity-80 transition-all duration-300";
const polygonContainerClass =
  "flex flex-inline md:mt-[-37.5px] mt-[-25px] md:ml-[-75px] ml-[-50px] even:md:ml-[1.5px] even:ml-[1px] cursor-pointer";

interface PolygonProps {
  imageUrl: string;
  url: string;
  alt: string;
}

export default function HexaSkills() {
  return (
    <div className="h-fit w-fit ml-[40px]">
      {/* Row 1 */}
      <div className={polygonContainerClass}>
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" url="https://react.dev/" alt="React" />
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" url="https://nextjs.org/" alt="Next.js" />
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" alt="JavaScript" />
      </div>

      {/* Row 2 */}
      <div className={polygonContainerClass}>
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" url="https://www.typescriptlang.org/" alt="TypeScript" />
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" url="https://tailwindcss.com/" alt="Tailwind CSS" />
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" url="https://redux.js.org/" alt="Redux" />
      </div>

      {/* Row 3 */}
      <div className={polygonContainerClass}>
        <Polygon imageUrl="https://raw.githubusercontent.com/pmndrs/zustand/main/resources/logo.svg" url="https://zustand-demo.pmnd.rs/" alt="Zustand" />
        <Polygon imageUrl="https://www.framer.com/api/static/svg/brandmark/logo.svg" url="https://www.framer.com/motion/" alt="Framer Motion" />
        <Polygon imageUrl="https://ui.shadcn.com/favicon.ico" url="https://ui.shadcn.com/" alt="ShadCN UI" />
      </div>

      {/* Row 4 */}
      <div className={polygonContainerClass}>
        <Polygon imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/GreenSock_Logo.svg" url="https://gsap.com/" alt="GSAP" />
        <Polygon imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" url="https://threejs.org/" alt="Three.js" />
        <Polygon imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" url="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" alt="React Three Fiber" />
      </div>

      {/* Row 5 */}
      <div className={polygonContainerClass}>
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" url="https://git-scm.com/" alt="Git" />
        <Polygon imageUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" url="https://github.com/" alt="GitHub" />
        <Polygon imageUrl="https://global.discourse-cdn.com/business6/uploads/convex/original/1X/3b0aa03d4a4d0c52a2a504b5c175f348998e1c58.png" url="https://convex.dev/" alt="Convex" />
      </div>
    </div>
  );
}

function Polygon({ imageUrl, url, alt }: PolygonProps) {
  const { isMobile } = useMobile();
  return (
    <a
      className={polygonClass}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={imageUrl}
        alt={alt}
        width={isMobile ? 30 : 50}
        height={isMobile ? 30 : 50}
      />
    </a>
  );
}
