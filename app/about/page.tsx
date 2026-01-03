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
    title: "the early days",
    content: `i was born in toronto, canada on may 27, 2005. i grew up in the suburbs of toronto, in a town called richmond hill.
    
    growing up, i tried a few different sports. i played hockey when i was in preschool, tried both karate and taekwondo, learned to swim long distances, and eventually stuck with tennis when i was 9.`,
    image: "/about/early-days.jpg",
  },
  {
    title: "middle school",
    content: `in grade 4, i started attending the <a href="https://pace.ca/" target="_blank" rel="noopener noreferrer" class="about-link">academy for gifted children</a>, where i was able to take accelerated classes in math, science, and french.
    
    i joined our school's <a href="https://www.vexrobotics.com/iq" target="_blank" rel="noopener noreferrer" class="about-link">vex robotics</a> club in grade 5 and built robots that played games. our team never did well at competitions, but we won an award for our science project on windmills and energy generation.
    
    in grade 8, i joined the yearbook club with two close friends, and after spending countless hours aligning class photos for the entire school, i learned what <a href="https://www.jostens.com/yearbooks/advisers-and-staff/technology-and-experience/" target="_blank" rel="noopener noreferrer" class="about-link">bad software</a> looks like.`,
    image: "/about/vex-iq.jpeg",
  },
  {
    title: "judo",
    content: `when i was 13, i did a year of <a href="https://tsunamiclub.ca/" target="_blank" rel="noopener noreferrer" class="about-link">judo</a>. it was brutal - the physical demands were intense, and i'm not a big fan of fighting.
    
    although i didn't stick with it, my sensei taught me three lessons that i still carry with me to this day:
    
    1. respect those around you - your parents, you siblings, your teachers, and your friends.
    2. never give up - no matter how hard something is, and even if you're the last one to finish it, see it through.
    3. always know what direction you are going - that summer, we were hiking in the woods, and when my sensei asked me which way was north, i had no idea. if we were lost, we would have been absolutely cooked. since then, i've always maintained a sense of direction, and honestly it ended up saving me a few times.`,
    image: "/about/judo.jpeg",
  },

  {
    title: "volunteering",
    content: `in grade 9, i started volunteering at school. i tutored younger students, and supervised after-school clubs. but when covid hit and i was stuck at home every day, i decided to join a few non-profits to continue giving back to the community.
    
    i started volunteering at <a href="https://www.zooniverse.org/" target="_blank" rel="noopener noreferrer" class="about-link">zooniverse</a> - an online classification platform for images. across three years, i would spend a few hours online every weekend, and ended up classfying 6,200 images across 8 projects - everything from endangered species on the galapagos islands, to quirks and quarks in space, to burial cards of american soldiers from ww1.
    
     at 15, i joined a youth-led non-profit called <a href="https://www.instagram.com/underpression.ee/" target="_blank" rel="noopener noreferrer" class="about-link">underpression.ee</a>, where i created social media resources to help with students struggling from depression and anxiety.
     
     after that, i joined <a href="https://www.instagram.com/racetoacure/?hl=en" target="_blank" rel="noopener noreferrer" class="about-link">race to a cure</a>, where i raised $1500 for a grant program to help fund stem projects high school students were building.
     
     finally, i led a team at <a href="https://www.instagram.com/upliftontario/?hl=en" target="_blank" rel="noopener noreferrer" class="about-link">uplift ontario</a>, where we created care packages for the homeless community in toronto and collected grocery donations for those in need.`,
    image: "/about/volunteering.jpg",
  },
  {
    title: "opportunify",
    content: `when i was 16, i wanted to help students find opportunities that would help them grow (i wished this existed for myself too!), so i started a non-profit called <a href="https://opportunifycanada.ca/" target="_blank" rel="noopener noreferrer" class="about-link">opportunify</a> with one of my best friends. we promoted work, volunteer, and school opportunities to over 4,000 youth, and hosted a case competition for youth across canada.
    
    eventually, i realized that i wanted to focus on other projects, so i stepped down as the president after two years, but the organization is still around today, helping students discover opportunities.`,
    image: "/about/opportunify.jpg",
  },
  {
    title: "floato",
    content: `at 17, i started my first company, floato - a drone photography and videography service. i was able to get a $3000 grant from the government of ontario to get started.

    initially, i wanted to focus on drone photography and videography for real estate, but it was difficult to find clients in this niche, since it turns out that this didn't solve any particular problem or serve any particular need realtors had. after a few months of trying to break into this market, i pivoted to drone rooftop inspections and that turned out to be much more profitable.
    
    after running the business for about a year, i decided to sunset it, but i still take on a few projects here and there, and bring my drone with me whenever i travel.`,
    image: "/about/floato.jpg",
  },
  {
    title: "deca",
    content: `in high school, i didn't really know what i wanted to do when i grew up. but when i joined <a href="https://deca.ca/v2/" target="_blank" rel="noopener noreferrer" class="about-link">deca</a>, i loved the adrenaline of case competitions - 10 minutes to prepare, and 10 minutes to present. in my first year, i went the furthest anyone in our school had even gone, and placed top 5 internationally.
    
    after that, i was hooked. i led our school's business club for a year, and then became one of 8 ontario deca provincial officers. i worked nights and weekends to organize events for 15,000+ students across ontario, spending more time on deca than i did on everything else combined. in the end, i raised over $150,000 in sponsorships, and helped maintain the website and mobile app for the 2022-2023 season.
    
    genuinely, this was one of the best years of my life. i learned so many random skills by just taking on initiative wherever i could, and worked with some of the most passionate and driven people i've ever met. if i could go back in time and relive any year in my life, it would be this one. <3`,
    image: "/about/deca.jpg",
  },
  {
    title: "hackathons (pt. 1)",
    content: `in grade 10, i participated in an online hackathon (<a href="https://www.jamhacks.ca/" target="_blank" rel="noopener noreferrer" class="about-link">jamhacks v</a>) and it didn't go too well. i only knew java, and i spent the entire hackathon searching up "how to convert java to javascript" because i thought they were the same thing. i didn't think much of tech after this, mostly because online hackathons are so difficult to get right.
    
    in grade 12, i went to my first in-person hackathon (<a href="https://www.hackthenorth.com/" target="_blank" rel="noopener noreferrer" class="about-link">hack the north 2022</a>) and built a gesture-controlled drone that puts out fires. i found it so crazy that i could not only come up with ideas, but also build them in the span of a weekend.

    that weekend, and that event, was the reason i decided to go into tech. after hack the north, i decided to apply to tech programs in addition to the business/economics ones i initially thought i wanted to do.`,
    image: "/about/hackathons-pt-1.jpg",
  },
  {
    title: "university applications",
    content: `i ended up applying to 20+ schools in both canada and the us, and was awarded $435,000+ in scholarships, including the schulich leader @ mcgill, national president's scholarship @ western, and national math scholarship @ uwaterloo.

    i spent two months choosing between <a href="https://met.berkeley.edu/" target="_blank" rel="noopener noreferrer" class="about-link">berkeley met</a>, nyu stern, and uwaterloo cs/se - i ended up matriculating to uwaterloo software engineering, because i liked the people here the most! initially i felt a lot of fomo for giving up an opportunity like berkeley met, but a few years down the line, i'm glad i made that decision :)`,
    image: "/about/university-deliberations.jpg",
  },
  {
    title: "hackathons (pt. 2)",
    content: `at a friend's birthday party in grade 12, i made a handshake agreement to go to a hackathon with a friend of a friend which ended up being my first hackathon win, kickstarted my swe career, and was the beginning of a life-long friendship.

    after that,i went to tons of hackathons (at one point, almost weekly or biweekly), meeting many awesome people, and creating fun projects like <a href="https://github.com/16BitNarwhal/Innovation-Challenge" target="_blank" rel="noopener noreferrer" class="about-link">an ai clone of myself</a>, a <a href="https://devpost.com/software/teddy-ai" target="_blank" rel="noopener noreferrer" class="about-link">talking teddy bear</a>, and <a href="https://github.com/iankorovinsky/agetech" target="_blank" rel="noopener noreferrer" class="about-link">co-working spaces in VR</a>.
    
    this was my way of learning tech - i was bored of the classroom, and wanted to learn how to build products rather than standard textbook cs knowledge.
    
    my favourite hackathon (with absolutely no bias at all) was hack the north 2023, where my friends and i built <a href="https://devpost.com/software/dejavu" target="_blank" rel="noopener noreferrer" class="about-link">an ai wearable for your memories</a>. i ended up working on that project for the next four months, joined a local incubator, and <a href="https://www.youtube.com/watch?v=Vmupugz2M1s" target="_blank" rel="noopener noreferrer" class="about-link">presented it at the socratica symposium</a> that december.`,
    image: "/about/hackathons-pt-2.png",
  },
  {
    title: "university clubs",
    content: `after competing in a few ctfs in high school, i applied to join the <a href="https://www.instagram.com/uw_cybersecurity_club/" target="_blank" rel="noopener noreferrer" class="about-link">uwaterloo cybersecurity club</a> in my first term at waterloo as the vp of finance. after my interview, the former president told me that she didn't have any presidential candidates in mind, and asked me to step up as president.
    
    we hosted workshops, ran ctf practice sessions, and helped folks learn about cybersecurity. but to be honest, i was stumbling around most of the time, trying to figure out what i was doing, since i knew little about cybersecurity, and even less about how clubs were run at a university.
    
    in my second semester, i joined <a href="https://www.waterlooblockchain.ca/" target="_blank" rel="noopener noreferrer" class="about-link">waterloo blockchain</a> as the director of events. i hosted a ton of fun workshops with pizza and activations with boba, planned a blockchain and beer night even though i wasn't of legal drinking age (i don't drink, so i don't know much about alcohol), and helped organize a hacker house at ethdenver 2024. honestly a super fun experience (since i wanted to learn about blockchain as a whole), and felt like a new domain of tech just unlocked in front of me.`,
    image: "/about/clubs.jpg",
  },
  {
    title: "hack the north",
    content: `at the end of my second semester in waterloo, i joined <a href="https://www.hackthenorth.com/" target="_blank" rel="noopener noreferrer" class="about-link">hack the north</a> as a logistics organizer. i organized workshops and mentorship for 1000+ hackers, and hosted some pretty cool panels, where we brought in speakers like the engineering lead for chatgpt.

    when i started second year at uwaterloo, we hosted hack the north in september - best weekend of the semester by far. it got me thinking a lot about what i like about hackathons, and what i could do to make them better. hopefully i can write a blog post on this one day, but i fear i have so much to say that it'll impact the p99 of this website.

    i've co-directed hack the north since november 2024, organized the inaugural <a href="https://waterlootechweek.ca/" target="_blank" rel="noopener noreferrer" class="about-link">waterloo tech week</a>, and sidequested by hosting <a href="https://waterlootreasurehunt.ca/" target="_blank" rel="noopener noreferrer" class="about-link">the waterloo treasure hunt</a>.`,
    image: "/about/hack-the-north.jpg",
  },
  
  {
    title: "internships",
    content: `the summer after high school, i interned at <a href="https://sibli.ai/" target="_blank" rel="noopener noreferrer" class="about-link">sibli</a>, a toronto-based startup focused on financial data intelligence, as the youngest intern they've had. i built an etl data pipeline to synthetically generate company data through scraping. while tinkering with the skills i learned in my free time, i ended up accidentally overloading the servers of a website because i didn't implement any rate limiting, and out of fear, learned about reverse proxies. i don't know why they hired me, but i'm glad they did because i learned so much and had a lot of fun that summer.

    summer after first year, i interned at <a href="https://www.bloomberg.com/professional/products/trading/order-management-system/aim/" target="_blank" rel="noopener noreferrer" class="about-link">bloomberg</a> for my first co-op, working on a novel semantic search framework, and built internal tooling for devs. 
    
    in my second year, i went back to sibli part-time during school, working on financial data parsing and graph algorithms. i ended up reading a lot of legacy code, did my first ever service migration from c# to python, and worked more with cypher (graph db language) than i would like to for the rest of my life.

    after that, i went back for my second co-op to bloomberg. i worked on a text classification model for the buy-side compliance ai team, and built out one of the first multi-agent projects at bloomberg. i also implemented some feature requests for the framework i created during my first co-op, since it was now used in one of the largest ai tools at bloomberg - an ai-powered code test generator.

    for my third co-op, i joined <a href="https://thrivecap.com/" target="_blank" rel="noopener noreferrer" class="about-link">thrive capital</a> as a product and engineering intern, working on an internaloperating system that changes the way that people work. i broke prod quite a few times, but it was a super fun experience because i learned a lot about how to build product from talented people. most importantly of all, i learned what good culture looks like, and met a lot of folks i now look up to. when i start my own company one day, i want to build a culture like theirs.`,
    image: "/about/internships.jpeg",
  },

  {
    title: "modern day",
    content: `so what do i do today?
    
    i still build side projects to learn and go to hackathons for the fun of it.
    
    i help organize one of the best hackathons in the world, host events that bring interesting people together, and serve on the <a href="https://uwaterloo.ca/youth-and-innovation/" target="_blank" rel="noopener noreferrer" class="about-link">youth innovation council</a> at uwaterloo.

    i've discovered a love for hiking, and i'm always looking for new trails to explore. so far nothing has topped the italian dolomites in val gardena, but i hope to be proven wrong soon.
    
    i'm always looking to work for startups that are building exciting products, and hope to start my own company soon.

    and most importantly of all, i'm thankful to be surrounded by people that challenge me to be a better version of myself, every single day.
    `,
    image: "/about/modern-day.jpg",
  },
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
                  <div className="relative w-[180px] h-[140px] bg-gray-100">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="h-[40px] bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
