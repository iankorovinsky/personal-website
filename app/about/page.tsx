"use client"

import Image from "next/image"
import Link from "next/link"
import AsciiBackground from "@/components/ui/ascii-background"

interface Section {
  title: string
  content: string
  image: string
}

const sections: Section[] = [
  {
    "title": "origins",
    "content": "i grew up in the suburbs of toronto, in a town called richmond hill. i swam &amp; ran long distances and played tennis with my dad.\n\nwhen i was 14, covid hit. to pass the time, i started volunteering with non-profits tackling problems across mental health, homelessness, and research data classification.\n\nwhen i was 16, i started a non-profit called <a href=\"https://opportunifycanada.ca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">opportunify</a> with one of my best friends. we promoted work opportunities, scholarships, and post-secondary education to over 4,000 students, and we hosted a case competition for youth across canada.",
    "image": "/about/volunteering.webp"
  },
  {
    "title": "floato",
    "content": "at 17, i started my first company, floato - a drone photography and videography service - when i secured a $3,000 grant from the government of ontario.\n\ninitially, i wanted to focus on drone photography and videography for real estate, but it was difficult to find clients in this niche. it turned out that this didn't solve any particular problem or serve any particular need realtors in my area had. after a few months of trying to break into this market, i pivoted to drone rooftop inspections and that turned out to be much more profitable.",
    "image": "/about/floato.webp"
  },
  {
    "title": "deca",
    "content": "in high school, i didn't really know what i wanted to do when i grew up. but when i joined <a href=\"https://deca.ca/v2/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">deca</a>, i loved the adrenaline of case competitions - 10 minutes to prepare and 10 minutes to present. at 15, i advanced further in the competition than anyone from my school ever had and placed in the top 5 internationally.\n\nafter that, i was hooked. i led our school's business club for a year and then became 1 of 8 ontario deca provincial officers. i worked nights and weekends to organize events for 15,000+ students across ontario, spending more time on deca than i did on everything else combined. in the end, i raised over $150,000 in sponsorships and helped maintain the website and mobile app for the 2022-2023 season.\n\ngenuinely, this was one of the best years of my life. i learned many random skills by just taking initiative wherever i could. i worked with some of the most passionate and driven people i had ever met. if i could go back in time and relive any year in my life, it would be this one. &lt;3",
    "image": "/about/deca.webp"
  },
  {
    "title": "hackathons",
    "content": "at a birthday party in grade 12, i made a handshake agreement to go to a hackathon with a <a href=\"https://www.edisonqu.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">friend of a friend</a>. this ended up being my first hackathon win - it kickstarted my swe career and was the beginning of a life-long friendship.\n\nafter that, i went to as many hackathons as i could - at one point, i had an overnight hackathon every single weekend of the month. i met many awesome people and created fun projects like <a href=\"https://github.com/iankorovinsky/agetech\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">an ai clone of myself</a>, <a href=\"https://devpost.com/software/teddy-ai\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">a talking teddy bear</a>, and <a href=\"https://github.com/16BitNarwhal/Innovation-Challenge\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">co-working spaces in VR</a>.\n\nthis was my way of learning tech - i was bored of the classroom and wanted to learn how to build products rather than standard textbook cs knowledge.\n\nmy favourite hackathon (with absolutely no bias at all) was hack the north 2023, where my friends and i built <a href=\"https://devpost.com/software/dejavu\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">an ai wearable for your memories</a>. i ended up working on that project for the next four months, joined a local incubator, and <a href=\"https://www.youtube.com/watch?v=Vmupugz2M1s\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">presented it at the socratica symposium</a> that december.",
    "image": "/about/hackathons-pt-2.webp"
  },
  {
    "title": "hack the north",
    "content": "at the end of my second semester in waterloo, i joined <a href=\"https://www.hackthenorth.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">hack the north</a>.\n\nduring the next three years, i co-directed canada's largest hackathon, founded <a href=\"https://waterlootechweek.ca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">waterloo tech week</a>, hosted a city-wide treasure hunt, and broke a <a href=\"https://www.guinnessworldrecords.com/world-records/778619-most-people-building-interlocking-plastic-brick-sculptures-simultaneously-single\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">guinness world record</a>. you can read all about it <a href=\"/?tab=media\" class=\"about-link\">here</a>!",
    "image": "/about/hack-the-north.webp"
  },
  {
    "title": "internships",
    "content": "the summer after high school, i interned at <a href=\"https://sibli.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">sibli</a>, a toronto-based startup focused on financial data intelligence, as the youngest intern they'd ever had. i built an etl data pipeline to synthetically generate company data. while tinkering with the skills i learned in my free time, i ended up accidentally overloading a website's server because i didn't implement any rate limiting, and, out of fear, learned about reverse proxies. <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">as</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">as</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">as</span></span></span>, i still don't know why you hired me, but thank you for taking a chance on me, and thank you, <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">pd</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">pd</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">pd</span></span></span>, for mentoring me. at least i got better at predicting the number of airplanes above toronto on a typical monday morning at 9 am.\n\nthe summer after first year, i interned at <a href=\"https://www.bloomberg.com/professional/products/trading/order-management-system/aim/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">bloomberg</a> for my first co-op, where i worked on a novel semantic search framework and built internal tooling for devs. in my free time, i helped co-host a two-week conference for engineers in our department.\n\nin my second year, i went back to <a href=\"https://sibli.ai/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">sibli</a> part-time during school, working on financial data parsing and graph algorithms. i ended up reading a lot of legacy code, did my first-ever service migration from c# to python, and worked more with cypher (a graph db language) than i would like to for the rest of my life. thank you <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">vg</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">vg</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">vg</span></span></span> for bringing me back :)\n\ni went back to <a href=\"https://www.bloomberg.com/professional/products/trading/order-management-system/aim/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">bloomberg</a> for my second co-op, where i worked on a text classification model for the buy-side compliance ai team and built out one of the first multi-agent projects at <a href=\"https://www.bloomberg.com/professional/products/trading/order-management-system/aim/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">bloomberg</a>. thank you <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">br</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">br</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">br</span></span></span> for always keeping it lighthearted, and thank you <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">da</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">da</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">da</span></span></span> and <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">ab</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">ab</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">ab</span></span></span> for having me back. long live atin!\n\nfor my third co-op, i joined <a href=\"https://thrivecap.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">thrive capital</a> as a product and engineering intern, working on an internal operating system that changes the way that people work. i broke prod <span class=\"about-redacted\" role=\"img\" aria-label=\"redacted\"><span aria-hidden=\"true\">6</span></span> times and learned a lot about how to build products from talented people. i learned what good culture looks like and met a lot of folks i now look up to. when i start my own company one day, i want to build a culture like theirs. thank you <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">br</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">br</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">br</span></span></span> and <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">ll</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">ll</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">ll</span></span></span> for bringing me on board, <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">jo</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">jo</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">jo</span></span></span> for sidequesting with me (honorary se28), <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">fg</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">fg</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">fg</span></span></span> for letting me absorb a teeny tiny fraction of your design wizardry, and <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">tm</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">tm</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">tm</span></span></span> for all of the <a href=\"https://heydally.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">dally</a>!\n\nlast summer, i worked at <a href=\"https://baseten.co/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-link\">baseten</a> as a research engineering intern, where i worked on multi-node model training and post-training tools for applied researchers. i worked hands-on with customers during our early beta and learned from friends far smarter than me. i joined with nearly zero ml knowledge and had the best summer of my life - thank you, <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">kc</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">kc</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">kc</span></span></span>, <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">ps</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">ps</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">ps</span></span></span>, and <span class=\"glitchpop-link glitchpop-link--monochrome glitchpop-initials\"><span class=\"glitchpop-word\"><span class=\"glitchpop-text\">rc</span><span class=\"glitchpop-slice glitchpop-slice--top\" aria-hidden=\"true\">rc</span><span class=\"glitchpop-slice glitchpop-slice--bottom\" aria-hidden=\"true\">rc</span></span></span>, for taking a chance on me. in the wise words of the terminator, i will be back!",
    "image": "/about/internships.webp"
  },
  {
    "title": "modern day",
    "content": "so what do i do today?\n\ni build to learn as much as possible and drive impact where i can.\n\ni host events that bring interesting people together and invest in people at the earliest stages.\n\nand most importantly of all, i surround myself with people who challenge me to be a better version of myself every single day.",
    "image": "/about/modern-day.webp"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <AsciiBackground />

      <main className="max-w-6xl mx-auto w-full px-4 md:px-8 py-16 md:py-24 relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="text-zinc-400 hover:text-white font-secondary text-sm transition-colors mb-12 inline-block"
        >
          &larr; home
        </Link>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-medium tracking-tight uppercase font-primary mb-16">
          about me
        </h1>

        {/* Sections */}
        <div className="flex flex-col gap-24">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Content - 70% */}
              <div className="w-full lg:w-[70%]">
                <h2 className="text-white text-2xl md:text-3xl font-medium tracking-tight uppercase font-primary mb-4">
                  {section.title}
                </h2>
                <p 
                  className="text-zinc-300 font-secondary text-sm leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>

              {/* Polaroid - 30% */}
              <div className="w-full lg:w-[30%] flex justify-center">
                <div
                  className={`bg-white p-2 shadow-2xl cursor-pointer ${
                    index % 2 === 0 ? 'polaroid-right' : 'polaroid-left'
                  }`}
                >
                  <div className={`relative w-[180px] overflow-hidden ${section.title === 'hackathons' ? 'aspect-[870/492]' : ['origins', 'deca', 'hack the north'].includes(section.title) ? 'h-[220px]' : 'h-[140px]'} bg-gray-100`}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className={section.title === 'hackathons' ? 'object-contain' : section.title === 'modern day' ? 'object-cover scale-150' : 'object-cover'}
                      sizes="180px"
                      quality={75}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="h-[28px] bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
