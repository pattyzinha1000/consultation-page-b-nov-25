import { WarningBox } from "@/components/WarningBox";
import { VideoEmbed } from "@/components/VideoEmbed";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            You Did Something Brave Today. Most People Stay Stuck. You Chose to Move Forward.
          </h1>
          
          <p className="text-left text-lg mb-8 max-w-4xl mx-auto text-foreground">
            You're officially registered for the 5-Day Full Body Fix starting November 1st. You'll get all the details soon.
          </p>
          
          <p className="text-left text-lg mb-8 max-w-4xl mx-auto text-foreground">
            But right now, Robbie has a 3-minute message for you. He's about to explain something we discovered after analyzing over 1 million cases.
          </p>
          
          <p className="text-left text-lg font-semibold mb-8 max-w-4xl mx-auto text-foreground">
            Watch this now - you'll only see it once:
          </p>
        </div>

        {/* Warning Box */}
        <WarningBox 
          title="You're Only Going To See This Video Once"
          subtitle="It's not available at any other time on any other page"
        />

        {/* Video Section */}
        <VideoEmbed embedCode={videoEmbedCode} />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Separates Those Who Thrive From Those Who Just Survive
          </h2>
          
          <div className="space-y-4 text-left">
            <p className="text-lg">After analyzing over a million people over 50…</p>
            <p className="text-lg">Running a 5-year research study...</p>
            <p className="text-lg">Building the world's largest database on fitness functionality after 50...</p>
            <p className="text-lg font-semibold">We discovered something your doctor doesn't know.</p>
            <p className="text-lg font-semibold">Your decline isn't just physical. It started in your mind.</p>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-lg">
              That morning when you first hesitated at the stairs? Your brain had already begun disconnecting from your body. 
              The mysterious pains? Your nervous system forgot how to coordinate properly.
            </p>
            <p className="text-lg font-semibold">Everything happens twice: First in your mind, then in your body.</p>
            <p className="text-lg">
              That's why treating just the knee never works. Why perfect gym form doesn't fix the problem. 
              Why you're doing "everything right" but getting worse.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8 mt-12">
            A Private 90-Minute Consultation With Our Elite Team
          </h2>

          <div className="space-y-4 text-left">
            <p className="text-lg">These aren't typical trainers or therapists limited by insurance rules.</p>
            <p className="text-lg">
              These are doctorate-level experts who understand the complete mind-body connection. 
              They've been trained in our proprietary system that treats your body as one integrated unit - not isolated parts.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 mt-8">What Makes This Different:</h3>
          
          <div className="space-y-4 text-left">
            <p className="text-lg">
              Your therapist can only treat your knee (insurance rules). Your trainer only knows exercises (not dysfunction). 
              Your doctor sees parts, not patterns.
            </p>
            <p className="text-lg">
              Our experts see the whole picture: how your brain talks to your pelvis, how your breathing affects your shoulders, 
              why your foot position determines your back pain.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 mt-8">In Your Private Session:</h3>
          
          <p className="text-lg font-semibold text-left mb-4">You'll discover:</p>
          <ul className="space-y-2 text-left text-lg ml-6">
            <li>• Why your body stopped following the rules (it's not aging)</li>
            <li>• Your specific compensation patterns hiding in plain sight</li>
            <li>• The exact sequence your body needs to reconnect mind to movement</li>
            <li>• Which movements heal YOUR structure vs harm it</li>
          </ul>

          <p className="text-lg text-left mt-6">
            This isn't generic advice. This is precision engineering for your specific body based on the largest 
            research database in the world on people over 50.
          </p>

          <h3 className="text-2xl font-bold text-center mb-6 mt-12">The Investment</h3>
          
          <div className="space-y-4 text-left">
            <p className="text-lg">
              <span className="font-semibold">These consultations normally run $300. During your Full Body Fix, Just $97</span>
            </p>
            <p className="text-lg">
              We're cash-pay for a reason. Insurance would force us to treat just your knee when your real problem 
              starts in your mind's connection to your whole body.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-6 mt-8">
            Only 25 Spots Available This Week (5 available consultation slots per day)
          </h3>
          
          <h3 className="text-2xl font-bold text-center mb-6">Book Your Session:</h3>
          
          <ol className="space-y-2 text-left text-lg ml-6">
            <li>1. Click any light blue date below</li>
            <li>2. Choose your preferred time</li>
            <li>3. Enter your information</li>
            <li>4. You'll receive confirmation immediately</li>
          </ol>
        </div>

        {/* Calendly Embed */}
        <CalendlyEmbed />

        {/* Footer Content */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <p className="text-lg">
            Some people take what they learn and work on it alone. Most realize they need expert guidance 
            to rewire patterns built over decades. Both are fine. This session gives you clarity either way.
          </p>
          
          <p className="text-lg font-semibold">
            P.S. - Fitness isn't 90% exercise or nutrition. It's 99% psychology. If your mind doesn't connect 
            with your body, nothing else works. Our experts understand this. That's why they succeed where others fail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
