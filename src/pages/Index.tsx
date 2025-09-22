import { WarningBox } from "@/components/WarningBox";
import { VideoEmbed } from "@/components/VideoEmbed";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const videoEmbedCode = `
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe src="https://player.vimeo.com/video/1062108679?h=dbffde1c1c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              style="position:absolute;top:0;left:0;width:100%;height:100%;" 
              title="Schedule a consultation">
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  `;

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
            You Did Something Brave Today. Most People Stay Stuck. You Chose to Move Forward.
          </h1>
          
          <div className="bg-muted p-8 rounded-xl mb-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-foreground font-medium">
              You're officially registered for the <strong className="text-primary">5-Day Full Body Fix</strong> starting November 1st. You'll get all the details soon.
            </p>
          </div>
        </div>

        {/* Pre-video message */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground mb-4">
            But right now, Robbie has a 3-minute message for you. He's about to explain something we discovered after analyzing over 1 million cases.
          </p>
          <p className="text-xl md:text-2xl font-bold text-primary">
            Watch this now - you'll only see it once:
          </p>
        </div>

        {/* Video Section */}
        <VideoEmbed embedCode={videoEmbedCode} />

        {/* CTA Button with Timer */}
        <div className="text-center my-12 bg-muted p-8 rounded-xl max-w-2xl mx-auto shadow-lg">
          <Button className="bg-primary hover:bg-primary/90 text-3xl font-bold py-8 px-16 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 mb-6" style={{color: '#000000'}}>
            YES! UPGRADE MY EXPERIENCE
          </Button>
          
          <p className="text-xl font-bold mb-2 text-foreground">Limited Spots Filling Fast</p>
          <p className="text-lg text-muted-foreground mb-4">Special Event Pricing Ends Soon</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-2 text-3xl font-bold text-foreground">
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md min-w-[60px]">00</div>
              <div className="text-xs mt-1 text-muted-foreground">HOURS</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md min-w-[60px]">08</div>
              <div className="text-xs mt-1 text-muted-foreground">MINS</div>
            </div>
            <div className="text-2xl">:</div>
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md min-w-[60px]">51</div>
              <div className="text-xs mt-1 text-muted-foreground">SECS</div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          
          {/* Section 1 - Discovery */}
          <Card className="p-8 bg-info-bg border-l-8 border-info-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-info-text">
              What Separates Those Who Thrive From Those Who Just Survive
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">After analyzing over a million people over 50…</p>
              <p className="text-xl md:text-2xl">Running a 5-year research study...</p>
              <p className="text-xl md:text-2xl">Building the world's largest database on fitness functionality after 50...</p>
              <p className="text-xl md:text-2xl font-bold text-primary">We discovered something your doctor doesn't know.</p>
              <p className="text-xl md:text-2xl font-bold text-primary">Your decline isn't just physical. It started in your mind.</p>
            </div>

            <div className="space-y-6 text-left mt-8 bg-white p-6 rounded-lg">
              <p className="text-xl md:text-2xl">
                That morning when you first hesitated at the stairs? Your brain had already begun disconnecting from your body. 
                The mysterious pains? Your nervous system forgot how to coordinate properly.
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">Everything happens twice: First in your mind, then in your body.</p>
              <p className="text-xl md:text-2xl">
                That's why treating just the knee never works. Why perfect gym form doesn't fix the problem. 
                Why you're doing "everything right" but getting worse.
              </p>
            </div>
          </Card>

          {/* Section 2 - Elite Team */}
          <Card className="p-8 bg-success-bg border-l-8 border-success-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-success-text">
              A Private 90-Minute Consultation With Our Elite Team
            </h2>

            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">These aren't typical trainers or therapists limited by insurance rules.</p>
              <p className="text-xl md:text-2xl">
                These are <strong className="text-primary">doctorate-level experts</strong> who understand the complete mind-body connection. 
                They've been trained in our proprietary system that treats your body as one integrated unit - not isolated parts.
              </p>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">What Makes This Different:</h3>
              
              <div className="space-y-6 text-left">
                <p className="text-xl md:text-2xl">
                  Your therapist can only treat your knee (insurance rules). Your trainer only knows exercises (not dysfunction). 
                  Your doctor sees parts, not patterns.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-success-text">
                  Our experts see the whole picture: how your brain talks to your pelvis, how your breathing affects your shoulders, 
                  why your foot position determines your back pain.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 3 - Session Details */}
          <Card className="p-8 bg-warning-bg border-l-8 border-warning-border shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-warning-text">In Your Private Session:</h3>
            
            <p className="text-xl md:text-2xl font-bold text-left mb-6 text-foreground">You'll discover:</p>
            <ul className="space-y-4 text-left text-xl md:text-2xl ml-8">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                Why your body stopped following the rules (it's not aging)
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                Your specific compensation patterns hiding in plain sight
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                The exact sequence your body needs to reconnect mind to movement
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                Which movements heal YOUR structure vs harm it
              </li>
            </ul>

            <div className="bg-white p-6 rounded-lg mt-8">
              <p className="text-xl md:text-2xl text-left font-semibold text-primary">
                This isn't generic advice. This is precision engineering for your specific body based on the largest 
                research database in the world on people over 50.
              </p>
            </div>
          </Card>

          {/* Section 4 - Investment */}
          <Card className="p-8 bg-primary/10 border-l-8 border-primary shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">The Investment</h3>
            
            <div className="space-y-6 text-center">
              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold">
                  These consultations normally run $300
                </p>
                <p className="text-3xl md:text-4xl font-bold mt-2">
                  During your Full Body Fix: Just $97
                </p>
              </div>
              <p className="text-xl md:text-2xl text-left">
                We're cash-pay for a reason. Insurance would force us to treat just your knee when your real problem 
                starts in your mind's connection to your whole body.
              </p>
            </div>
          </Card>

          {/* Section 5 - Booking */}
          <Card className="p-8 bg-muted border-l-8 border-primary shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
              Only 25 Spots Available This Week
            </h3>
            <p className="text-center text-xl md:text-2xl mb-8 text-foreground">(5 available consultation slots per day)</p>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">Book Your Session:</h3>
              
              <ol className="space-y-4 text-left text-xl md:text-2xl ml-8">
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</span>
                  Click any light blue date below
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</span>
                  Choose your preferred time
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</span>
                  Enter your information
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</span>
                  You'll receive confirmation immediately
                </li>
              </ol>
            </div>
          </Card>
        </div>

        {/* Calendly Embed */}
        <CalendlyEmbed />

        {/* Footer Content */}
        <Card className="max-w-4xl mx-auto p-8 mt-16 bg-info-bg border-l-8 border-info-border">
          <div className="space-y-6 text-left">
            <p className="text-xl md:text-2xl">
              Some people take what they learn and work on it alone. Most realize they need expert guidance 
              to rewire patterns built over decades. Both are fine. This session gives you clarity either way.
            </p>
            
            <div className="bg-white p-6 rounded-lg">
              <p className="text-xl md:text-2xl font-bold text-primary">
                P.S. - Fitness isn't 90% exercise or nutrition. It's 99% psychology. If your mind doesn't connect 
                with your body, nothing else works. Our experts understand this. That's why they succeed where others fail.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;