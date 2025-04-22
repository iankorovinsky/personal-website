export const projects = [
  {
    title: "Boat",
    subtitle: "self-driving rc",
    imageSrc: "/images/boat.webp",
    url: "https://www.rajan.sh/work/self-driving",
    body: `designed a self-driving rc vehicle with a custom-built controller and a custom-built neural network for object detection and path planning\n\nbuilt to deliver tim hortons from the student life centre to a first-year residence\n\nbuilt as part of the software engineering first-year capstone project`,
    linkText: "technical breakdown"
  },
  {
    title: "Axiom",
    subtitle: "custom ide for formal proofs",
    imageSrc: "/images/axiom.png",
    url: "https://x.com/ishaandey_/status/1870977382972273002",
    body: `created an editor for a custom logic language with built-in rich language support & real-time collaboration for group projects\n\nwe created the custom language using the monaco editor library, and included configs for:\n• syntax highlighting\n• code completion (logic rules)\n• definition providers (reference lookups & section boundaries)\n• editor event handlers (auto-line number & reference updates)\n• hover provider\n\nfully custom-built on express, socketio, y.js, and a sqlite database\n\nsupports real-time collaboration, keyboard shortcuts for all major actions, fully customizable colour themes, and granular language feature controls`,
    linkText: "technical breakdown"
  },
  {
    title: "Portal",
    subtitle: "semantic search for memories",
    imageSrc: "/images/portal.jpeg",
    url: "https://www.youtube.com/watch?v=Vmupugz2M1s",
    body: `created an ai-powered wearable device for semantic search on memories, and experimented with emulating human consciousness\n\nwon finalist at hack the north 2023 and continued to work on the project during buildspace n&w s5 in summer 2024. supported by eigenspace and the velocity cornerstone program`,
    linkText: "live demo"
  },
  {
    title: "Blocks",
    subtitle: "smart contract compiler for starknet",
    imageSrc: "/images/blocks.png",
    url: "https://dorahacks.io/buidl/20342",
    body: `built a block-based smart contract builder for starknet's proprietary language cairo\n\nawarded second place overall, best developer tool, and best use of starknet (2nd place, $2000 usd) @ hack western 11, and deployed the public MVP at the starknet hacker house at ethdenver 2025\n\ncreated a website that allows users to drag and connect blocks representing smart contracts using react flow editor\n\ndeveloped a mini compiler that converts json (a graph representation of nodes and edges) to cairo, enabling the creation of contracts. deployment is automated with starkli and bash scripts\n\nbuilt a react (reasoning and acting in language models) based ai agent using langgraph and langchain. this agent supports the cairo development process by retrieving data and performing actions\n\nenabled real-time collaboration on smart contracts using liveblocks, websockets, and y.js`,
    linkText: "official project"
  },
  {
    title: "Crowdfund",
    subtitle: "crypto trading w/ ai agents",
    imageSrc: "/images/crowdfund.png",
    url: "https://github.com/iankorovinsky/crowdfund",
    body: `created a decentralized crypto trading platform that uses ai agents to automate trading workflows, allowing agents to analyze markets, execute trades, and earn through customizable strategies. supports agent creation with IP protection via story protocol, enabling users to utilize other people's agents, and for developers to receive royalties when their agents are used.\n\nawarded second place (story protocol track, $1500 usd) and best domain name at tartanhacks 2025`,
    linkText: "github"
  },
  {
    title: "VOffice",
    subtitle: "vr coworking spaces",
    imageSrc: "/images/voffice.png",
    url: "https://github.com/16BitNarwhal/Innovation-Challenge",
    body: `developed a virtual reality co-working platform that reimagines remote collaboration through immersive 3d environments and ai-powered startup advisors for remote teams. built using unity and integrated with openai and aws.`,
    linkText: "github"
  }
]