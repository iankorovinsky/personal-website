import Image from "next/image";
import ProjectCard from "@/components/ui/project-card";
import StoryButton from "@/components/ui/story-button"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center bg-black">
      <div>
        <h1 className="title pt-24 mx-auto">IAN KOROVINSKY</h1>
        <h2 className="title-subtext pt-8 mx-auto">
          software engineering @ university of waterloo
          <br />
          co-director @ hack the north
          <br />
          ai @ bloomberg
        </h2>
        
        <div className="flex gap-6 justify-center mt-12 pb-8">
          <a 
            href="https://github.com/iankorovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="GitHub Profile"
          >
            <Image src="/icons/github.svg" alt="Github" className="social-icon" width={30.508} height={30} />
          </a>
          <a 
            href="https://linkedin.com/in/ian-korovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="LinkedIn Profile"

          >
            <Image src="/icons/linkedin.svg" alt="Linkedin" width={30} height={30} />
          </a>
          <a 
            href="https://x.com/ikorovinsky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Twitter Profile"
          >
            <Image src="/icons/x.svg" alt="X" className="social-icon" width={33.189} height={30}/>
          </a>
        </div>
        <StoryButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[95vw] mx-auto px-4 md:px-8 py-8 md:py-16">
        <ProjectCard 
          title="Bloomberg"
          subtitle="ai & trading compliance"
          imageSrc="/images/bloomberg.jpg"
          url="https://www.bloomberg.com/professional/products/trading/order-management-system/aim/"
          body={`currently co-oping as a software engineer intern on the asset and investment management compliance ai team\n\ninterned on the same team for my first co-op @ uwaterloo (may - august 2024)\n\nco-op 1: designed a custom semantic search framework for internal usage, improved search on compliance tooling, and helped co-host a two-week testing sprint for engineering teams\n\nco-op 2: improving existing ml models and functionality (more to come)`}
          linkText="website"
        />
        <ProjectCard 
          title="Hack The North"
          subtitle="canada's largest hackathon"
          imageSrc="/images/hack_the_north.png"
          url="https://www.hackthenorth.com"
          body={ `co-directing canada's largest hackathon, with over 1000 participants and 40+ sponsors (nov 2024 - present)\n\nformerly spearheaded 20+ workshops and 150+ mentors for hackers (march 2024 - october 2024)\n\nhackathon inquiries: ian [at] hackthenorth [dot] com`}
          linkText="website"
        />
        <ProjectCard 
          title="Sibli"
          subtitle="financial data pipelines"
          imageSrc="/images/sibli.webp"
          url="https://sibli.ai/"
          body={`interned twice at a fast-growing trading intelligence startup from july - september 2023 and october - november 2024\n\ninternship 1: built a custom data pipeline for aggregated company data\n\ninternship 2: improved financial data parsing`}
          linkText="website"
        />
        <ProjectCard 
          title="boat"
          subtitle="self-driving rc"
          imageSrc="/images/boat.webp"
          url="https://www.rajan.sh/work/self-driving"
          body={`designed a self-driving rc vehicle with a custom-built controller and a custom-built neural network for object detection and path planning\n\nbuilt to deliver tim hortons from the student life centre to a first-year residence\n\nbuilt as part of the software engineering first-year capstone project`}
          linkText="technical breakdown"
        />
        <ProjectCard 
          title="AXIOM"
          subtitle="custom ide for formal proofs"
          imageSrc="/images/axiom.png"
          url="https://x.com/ishaandey_/status/1870977382972273002"
          body={`created an editor for a custom logic language with built-in rich language support & real-time collaboration for group projects\n\n
we created the custom language using the monaco editor library, and included configs for:\n
• syntax highlighting
• code completion (logic rules)
• definition providers (reference lookups & section boundaries)
• editor event handlers (auto-line number & reference updates)
• hover provider\n\n
fully custom-built on express, socketio, y.js, and a sqlite database\n\n
supports real-time collaboration, keyboard shortcuts for all major actions, fully customizable colour themes, and granular language feature controls`}
          linkText="technical breakdown"
        />
        <ProjectCard 
          title="Portal"
          subtitle="semantic search for memories"
          imageSrc="/images/portal.jpeg"
          url="https://www.youtube.com/watch?v=Vmupugz2M1s"
          body={`created an ai-powered wearable device for semantic search on memories, and experimented with emulating human consciousness\n\nwon finalist at hack the north 2024 and continued to work on the project during buildspace n&w s5 in summer 2024`}
          linkText="live demo"
        />
        <ProjectCard 
          title="Blocks"
          subtitle="smart contract compiler for starknet"
          imageSrc="/images/blocks.png"
          url="https://dorahacks.io/buidl/20342"
          body={`built a block-based smart contract builder for starknet's proprietary language cairo\n\nawarded second place overall, best developer tool, and best use of starknet (2nd place, $2000 usd) @ hack western 11\n\ncreated a website that allows users to drag and connect blocks representing smart contracts using react flow editor\n\ndeveloped a mini compiler that converts json (a graph representation of nodes and edges) to cairo, enabling the creation of contracts. deployment is automated with starkli and bash scripts\n\nbuilt a react (reasoning and acting in language models) based ai agent using langgraph and langchain. this agent supports the cairo development process by retrieving data and performing actions\n\nenabled real-time collaboration on smart contracts using liveblocks, websockets, and y.js`}
          linkText="official project"
        />
        <ProjectCard 
          title="ONTARIO DECA OFFICER"
          subtitle="sponsorships, events & tech for competitions"
          imageSrc="/images/deca_po.png"
          url="https://www.deca.ca"
          body="raised $150K+ in sponsorships, organized events for 15,000+ students across ontario, and helped build the website & mobile app for the 2024 ontario deca season"
          linkText="website"
        />
        <ProjectCard 
          title="FLOATO"
          subtitle="drone photography and videography"
          imageSrc="/images/floato.jpg"
          url="https://www.youtube.com/@floato6498"
          body={`started a business at 16, providing real estate photography and videography services\n\nsupported by a $3000 grant from the government of ontario`}
          linkText="reels"
        />
      </div>
      <div className="text-sm font-[var(--font-secondary)] text-center pb-8 text-white">
        built with ❤️, 🪿, and 🧋 in waterloo
      </div>
    </div>
  );
}
