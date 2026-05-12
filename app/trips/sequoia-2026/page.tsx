"use client"

import Link from "next/link"
import AsciiBackground from "@/components/ui/ascii-background"

export default function SequoiaTrip() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <AsciiBackground />

      <main className="max-w-4xl mx-auto w-full px-4 md:px-8 py-16 md:py-24 relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="text-zinc-400 hover:text-white font-secondary text-sm transition-colors mb-12 inline-block"
        >
          &larr; home
        </Link>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-medium tracking-tight uppercase font-primary mb-4">
          Sequoia 2026
        </h1>
        
        <h2 className="sr-only">Sequoia weekend itinerary from San Francisco, Friday to Sunday, with trail options based on current conditions</h2>

        {/* Itinerary Content */}
        <div className="sequoia-itinerary">
          <style jsx>{`
            .sequoia-itinerary {
              --color-text-primary: #ffffff;
              --color-text-secondary: #d4d4d8;
              --color-text-tertiary: #a1a1aa;
              --color-background-primary: #18181b;
              --color-background-secondary: #27272a;
              --color-border-tertiary: #3f3f46;
              --border-radius-md: 6px;
            }

            .day { 
              margin-bottom: 2rem; 
            }
            
            .day-header { 
              font-size: 13px; 
              font-weight: 500; 
              text-transform: uppercase; 
              letter-spacing: 0.06em; 
              color: var(--color-text-tertiary); 
              margin: 0 0 12px; 
            }
            
            .block { 
              display: flex; 
              gap: 12px; 
              margin-bottom: 8px; 
              align-items: flex-start; 
            }
            
            .time { 
              font-size: 12px; 
              color: var(--color-text-tertiary); 
              min-width: 52px; 
              padding-top: 14px; 
              text-align: right; 
              flex-shrink: 0; 
            }
            
            .card { 
              background: var(--color-background-primary); 
              border: 0.5px solid var(--color-border-tertiary); 
              border-radius: var(--border-radius-md); 
              padding: 10px 14px; 
              flex: 1; 
            }
            
            .card-title { 
              font-size: 14px; 
              font-weight: 500; 
              color: var(--color-text-primary); 
              margin: 0 0 3px; 
              display: flex; 
              align-items: center; 
              gap: 8px;
              flex-wrap: wrap;
            }
            
            .card-sub { 
              font-size: 12px; 
              color: var(--color-text-secondary); 
              margin: 0; 
              line-height: 1.5; 
            }
            
            .badge { 
              font-size: 11px; 
              padding: 2px 8px; 
              border-radius: var(--border-radius-md); 
              white-space: nowrap; 
            }
            
            .b-open { 
              background: #EAF3DE; 
              color: #27500A; 
            }
            
            .b-check { 
              background: #FAEEDA; 
              color: #633806; 
            }
            
            .b-drive { 
              background: #E6F1FB; 
              color: #0C447C; 
            }
            
            .b-hard { 
              background: #EEEDFE; 
              color: #3C3489; 
            }
            
            .b-mod { 
              background: #E6F1FB; 
              color: #0C447C; 
            }
            
            .option-group { 
              border: 0.5px solid var(--color-border-tertiary); 
              border-radius: var(--border-radius-md); 
              overflow: hidden; 
              margin-bottom: 8px; 
            }
            
            .option-header { 
              font-size: 11px; 
              font-weight: 500; 
              letter-spacing: 0.05em; 
              text-transform: uppercase; 
              padding: 6px 14px; 
              color: var(--color-text-tertiary); 
              background: var(--color-background-secondary); 
              border-bottom: 0.5px solid var(--color-border-tertiary); 
            }
            
            .option { 
              display: flex; 
              gap: 12px; 
              padding: 10px 14px; 
              border-bottom: 0.5px solid var(--color-border-tertiary); 
              align-items: flex-start; 
            }
            
            .option:last-child { 
              border-bottom: none; 
            }
            
            .opt-label { 
              font-size: 11px; 
              font-weight: 500; 
              min-width: 44px; 
              padding-top: 2px; 
              color: var(--color-text-tertiary); 
              flex-shrink: 0; 
            }
            
            .opt-body { 
              flex: 1; 
            }
            
            .opt-title { 
              font-size: 13px; 
              font-weight: 500; 
              color: var(--color-text-primary); 
              margin: 0 0 2px;
              display: flex; 
              align-items: center; 
              gap: 8px;
              flex-wrap: wrap;
            }
            
            .opt-desc { 
              font-size: 12px; 
              color: var(--color-text-secondary); 
              margin: 0; 
              line-height: 1.5; 
            }
            
            .connector { 
              width: 1px; 
              background: var(--color-border-tertiary); 
              margin: 0 26px; 
              height: 8px; 
            }
            
            .note { 
              font-size: 12px; 
              color: var(--color-text-secondary); 
              background: var(--color-background-secondary); 
              border-radius: var(--border-radius-md); 
              padding: 8px 12px; 
              margin-bottom: 8px; 
              display: flex; 
              gap: 8px; 
              align-items: flex-start; 
            }
            
            .star { 
              color: #BA7517; 
              font-size: 13px; 
            }

            .icon {
              font-size: 16px;
              flex-shrink: 0;
              margin-top: 1px;
            }

            @media (max-width: 640px) {
              .block {
                flex-direction: column;
                gap: 4px;
              }
              
              .time {
                text-align: left;
                padding-top: 0;
              }
            }
          `}</style>

          <div style={{ padding: '1rem 0' }}>
            <div className="day">
              <p className="day-header">Friday — drive down</p>

              <div className="block">
                <span className="time">6:00 pm</span>
                <div className="card">
                  <p className="card-title"><span className="badge b-drive">Drive</span> Leave BART Millbrae Station</p>
                  <p className="card-sub">I-5 S → CA-198 E through Visalia. Fill gas in Visalia or Three Rivers — none inside the park. Download AllTrails maps offline before you lose cell signal.</p>
                </div>
              </div>

              <div className="block">
                <span className="time">9:30 pm</span>
                <div className="card">
                  <p className="card-title">Arrive Woodlake — check in</p>
                  <p className="card-sub"><a href="https://www.airbnb.com/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMQX4EARBK" target="_blank" rel="noopener noreferrer" className="about-link">853 North Cypress Street, Woodlake, CA 93286</a>. Eat in town or bring food from the road. Early night — big day tomorrow.</p>
                </div>
              </div>
            </div>

            <div className="day">
              <p className="day-header">Saturday — full day (the best stuff)</p>

              <div className="note">
                <span className="icon" aria-hidden="true">ℹ️</span>
                <span>Call NPS road conditions at 559-565-3341 before leaving — this determines whether Moro Rock Road is open (see below).</span>
              </div>

              <div className="block">
                <span className="time">7:00 am</span>
                <div className="card">
                  <p className="card-title">Enter the park — Giant Forest Museum</p>
                  <p className="card-sub">Park here. The road branches from this point — your first hike depends on whether Moro Rock Road is open.</p>
                </div>
              </div>

              <div className="connector"></div>

              <div className="option-group">
                <div className="option-header">Option A — Moro Rock Road is open (most likely)</div>
                <div className="option">
                  <span className="opt-label">7:15 am</span>
                  <div className="opt-body">
                    <p className="opt-title">Moro Rock <span className="badge b-open" style={{ fontSize: '10px' }}>confirmed open</span></p>
                    <p className="opt-desc">Drive to Moro Rock trailhead (5 min). 350 carved granite stairs to a 360° panorama of the Great Western Divide. Short but steep — worth every step. 45–60 min round trip.</p>
                  </div>
                </div>
              </div>

              <div className="option-group">
                <div className="option-header">Option B — Moro Rock Road still closed for winter</div>
                <div className="option">
                  <span className="opt-label">7:15 am</span>
                  <div className="opt-body">
                    <p className="opt-title">Moro Rock via closed road walk <span className="badge b-check" style={{ fontSize: '10px' }}>extra 3.2 mi RT</span></p>
                    <p className="opt-desc">Walk the closed road from Giant Forest Museum — adds ~1.6 mi each way, but it&apos;s a peaceful sequoia stroll with no cars. Still worth doing, just longer. Budget 2–2.5 hrs total.</p>
                  </div>
                </div>
                <div className="option">
                  <span className="opt-label">or</span>
                  <div className="opt-body">
                    <p className="opt-title">Skip Moro Rock, start Congress Trail early</p>
                    <p className="opt-desc">Use the extra time to do the full extended loop (see below) at a leisurely pace with more time at the big trees.</p>
                  </div>
                </div>
              </div>

              <div className="connector"></div>

              <div className="block">
                <span className="time">9:00 am</span>
                <div className="card">
                  <p className="card-title"><span className="badge b-hard">Moderate · 7.1 mi · 1,200 ft</span> Sherman Tree → Congress → Trail of the Sequoias → Tharp&apos;s Log loop <span className="star">★ best sequoia hike</span></p>
                  <p className="card-sub">Confirmed open year-round. AllTrails updated April 2026. Starts at Sherman Tree Trailhead — takes you past the President, Senate, House, McKinley, and Lincoln trees deep into the Giant Forest. Far better than the short Congress Trail alone. ~3.5–4 hrs.</p>
                </div>
              </div>

              <div className="block">
                <span className="time">1:00 pm</span>
                <div className="card">
                  <p className="card-title">Lunch — Wuksachi Lodge</p>
                  <p className="card-sub">Only real dining inside the park. 10-min drive from the Sherman Tree trailhead. Recharge before the afternoon hike.</p>
                </div>
              </div>

              <div className="block">
                <span className="time">2:30 pm</span>
                <div className="card">
                  <p className="card-title"><span className="badge b-open">confirmed open · May 8 AllTrails</span> <span className="badge b-mod">Moderate · 4.1 mi · 600 ft</span> Tokopah Falls <span className="star">★ best waterfall</span></p>
                  <p className="card-sub">AllTrails updated May 8, 2026. TripAdvisor visitor April 8 confirmed trail open with minimal snow. The 1,200-ft waterfall is at its most powerful right now from snowmelt — reviewers call it &quot;roaring.&quot; ~2–2.5 hrs. Bring a light rain jacket for mist near the falls.</p>
                </div>
              </div>

              <div className="block">
                <span className="time">5:30 pm</span>
                <div className="card">
                  <p className="card-title">Drive back to Woodlake — dinner</p>
                  <p className="card-sub">30-min drive down. Grab dinner in Three Rivers on the way back, or cook at the Airbnb.</p>
                </div>
              </div>
            </div>

            <div className="day">
              <p className="day-header">Sunday — morning hike, then drive home</p>

              <div className="option-group">
                <div className="option-header">Pick one — depending on energy and road conditions</div>
                <div className="option">
                  <span className="opt-label">Option A</span>
                  <div className="opt-body">
                    <p className="opt-title">Marble Falls Trail <span className="badge b-hard" style={{ fontSize: '10px' }}>Hard · 8 mi · 1,800 ft</span> <span className="star">★ hidden gem</span></p>
                    <p className="opt-desc">Starts in the Foothills area (lower elevation = zero snow risk). Very few crowds compared to the Giant Forest. Follows the Marble Fork to a thundering canyon waterfall. The most &quot;unknown&quot; great hike in the park — almost no tourists. Budget 4–5 hrs. Confirm open at NPS or AllTrails before leaving.</p>
                  </div>
                </div>
                <div className="option">
                  <span className="opt-label">Option B</span>
                  <div className="opt-body">
                    <p className="opt-title">Sunset Rock Trail + Crescent Meadow Loop <span className="badge b-mod" style={{ fontSize: '10px' }}>Easy–Mod · 3.2 mi combined</span></p>
                    <p className="opt-desc">If your legs are cooked from Saturday, this combo is the right call. Sunset Rock (1.4 mi) has real canyon views and some elevation. Crescent Meadow (1.8 mi) is flat, wildflowers, sequoias, and black bears are frequently spotted. Both start from Giant Forest Museum. 2–2.5 hrs combined.</p>
                  </div>
                </div>
              </div>

              <div className="block" style={{ marginTop: '8px' }}>
                <span className="time">11:00 am</span>
                <div className="card">
                  <p className="card-title"><span className="badge b-drive">Drive</span> Leave the park</p>
                  <p className="card-sub">Stop in Visalia for gas and lunch (~45 min from park gate). Back on CA-99 N by noon.</p>
                </div>
              </div>

              <div className="block">
                <span className="time">6:00 pm</span>
                <div className="card">
                  <p className="card-title">Return to BART Millbrae Station</p>
                  <p className="card-sub">Dropoff at BART Millbrae Station.</p>
                </div>
              </div>
            </div>

            <div className="note" style={{ marginTop: '0.5rem' }}>
              <span className="icon" aria-hidden="true" style={{ color: '#BA7517' }}>⚠️</span>
              <span><strong>Key prep:</strong> Buy your $35 park pass at recreation.gov ahead of time. Download AllTrails maps offline. Call 559-565-3341 the morning of Saturday for Moro Rock Road status. No gas inside the park — fill up in Three Rivers or Visalia.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
