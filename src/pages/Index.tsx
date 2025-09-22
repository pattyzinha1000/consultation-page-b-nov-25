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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground leading-tight">
            Autumn Couldn't Carry Her Grandson to the Thanksgiving Table
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-8">She was 67. Not 87.</p>
          
          <div className="max-w-4xl mx-auto text-left space-y-4 text-xl md:text-2xl text-foreground">
            <p>Earlier that year, she was riding motorcycles with her husband every weekend. Day trips through Texas hill country.</p>
            <p>Then her back seized at Thanksgiving. So bad she needed a walker to get to dinner.</p>
            <p>The doctors had no real answers. Normal aging. Maybe try chiropractic. Here's some ibuprofen.</p>
          </div>
        </div>

        {/* Video Section */}
        <VideoEmbed embedCode={videoEmbedCode} />

        {/* CTA Section */}
        <div className="text-center my-12 bg-muted p-8 rounded-xl max-w-4xl mx-auto shadow-lg">
          <Button 
            className="text-4xl font-bold py-10 px-20 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 mb-6" 
            style={{ backgroundColor: '#8fd09d', color: '#ffffff' }}
          >
            CLAIM YOUR $97 CONSULTATION
          </Button>
          
          <p className="text-4xl font-bold mb-2 text-foreground">Only 5 Total Available Today</p>
          <p className="text-3xl text-muted-foreground mb-4">Special Event Pricing Ends Soon</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 text-4xl font-bold text-foreground">
            <div className="text-center">
              <div className="bg-white px-6 py-4 rounded-lg shadow-md min-w-[80px]">00</div>
              <div className="text-sm mt-2 text-muted-foreground">HOURS</div>
            </div>
            <div className="text-3xl">:</div>
            <div className="text-center">
              <div className="bg-white px-6 py-4 rounded-lg shadow-md min-w-[80px]">08</div>
              <div className="text-sm mt-2 text-muted-foreground">MINS</div>
            </div>
            <div className="text-3xl">:</div>
            <div className="text-center">
              <div className="bg-white px-6 py-4 rounded-lg shadow-md min-w-[80px]">51</div>
              <div className="text-sm mt-2 text-muted-foreground">SECS</div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          
          {/* What Nobody Told Autumn */}
          <Card className="p-8 bg-info-bg border-l-8 border-info-border shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Here's What Nobody Told Autumn:</h3>
            
            <div className="bg-white p-8 rounded-lg mb-8 border-l-4 border-primary">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
                Autumn Couldn't Carry Her Grandson to the Thanksgiving Table
              </h2>
              <p className="text-2xl md:text-3xl text-center mb-6 text-foreground">She was 67. Not 87.</p>
              
              <div className="space-y-4 text-xl md:text-2xl text-foreground">
                <p>Earlier that year, she was riding motorcycles with her husband every weekend. Day trips through Texas hill country.</p>
                <p>Then her back seized at Thanksgiving. So bad she needed a walker to get to dinner.</p>
                <p>The doctors had no real answers. Normal aging. Maybe try chiropractic. Here's some ibuprofen.</p>
              </div>
            </div>
            
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">The morning stiffness wasn't "just age." That gradual weakness wasn't normal. Her body had been warning her for months.</p>
              <p className="text-xl md:text-2xl font-bold text-primary">Then it stopped asking and started telling.</p>
            </div>
          </Card>

          {/* Thanksgiving Incident */}
          <Card className="p-8 bg-warning-bg border-l-8 border-warning-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-warning-text">
              Thanksgiving 2023, Autumn's Back Gave Out
            </h2>
            
            <div className="bg-white p-6 rounded-lg mb-6">
              <p className="text-xl md:text-2xl font-bold text-center mb-4 text-primary">The image burned into her memory:</p>
              <div className="space-y-3 text-left text-xl md:text-2xl">
                <p>Her family watching.</p>
                <p>Her 2-year-old grandson reaching up.</p>
                <p>Her husband's hand on her elbow, getting her to her chair.</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-warning-text">She Got Off the Walker. But She Never Got Her Life Back.</h3>
            
            <div className="space-y-4 text-left text-xl md:text-2xl">
              <p>Chiropractic gives her some relief... Then the pain returns.</p>
              <p>Massages that helped for a week.</p>
              <p>Can't carry her grandson without pain.</p>
              <p>Can't hold her motorcycle up anymore.</p>
              <p className="font-bold text-warning-text">For 18 months, she lived smaller and smaller.</p>
            </div>
          </Card>

          {/* Finding Us */}
          <Card className="p-8 bg-success-bg border-l-8 border-success-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-success-text">
              Autumn Finally Came to Us in May 2025
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">Not right after the incident. After 18 months of trying everything else.</p>
              <p className="text-xl md:text-2xl">Our specialist spent 90 minutes with her. It was a real assessment. Not the 15-minute rush she was used to.</p>
              <p className="text-xl md:text-2xl">He mapped the entire compensation pattern.</p>
              <p className="text-xl md:text-2xl">Yes, her pelvis sits higher on one side - but that's just the start. Her knees cave. Her back arches to compensate. Her glutes went offline completely.</p>
              <p className="text-xl md:text-2xl font-bold text-primary">Everyone treated pieces. Nobody mapped the whole system.</p>
            </div>

            <div className="bg-white p-6 rounded-lg mt-8">
              <p className="text-2xl md:text-3xl font-bold text-center text-primary">"You're Not Broken. You're Compensating. There's a Difference."</p>
              <p className="text-xl md:text-2xl text-center mt-4">One means decline. The other means fixable.</p>
              <p className="text-xl md:text-2xl text-center font-bold text-success-text">18 months of decline and minutes to find the real problem.</p>
            </div>
          </Card>

          {/* Recovery */}
          <Card className="p-8 bg-info-bg border-l-8 border-info-border shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-info-text">
              Now, Autumn's Getting Stronger Every Week
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">She's five months into her program, hasn't needed the walker, and is building toward riding again next spring.</p>
              <p className="text-xl md:text-2xl">But she lost Thanksgiving 2023. Lost Christmas. Lost 18 months she can't get back.</p>
              <p className="text-xl md:text-2xl">All because she was getting temporary fixes, not real answers.</p>
              <p className="text-xl md:text-2xl font-bold text-primary">Nobody connected the dots.</p>
            </div>
          </Card>

          {/* Registration Message */}
          <Card className="p-8 bg-primary/10 border-l-8 border-primary shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              You Just Registered for the Full Body Fix
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl font-bold">You're doing this before it's too late. Before you become an Autumn story</p>
              <p className="text-xl md:text-2xl">Smart move. Thanksgiving's coming up. Autumn spent 18 months searching for answers we found in 12 minutes.</p>
              <p className="text-xl md:text-2xl">The Full Body Fix shows you the system. The private consultation? That's where they find YOUR specific pattern.</p>
              <p className="text-xl md:text-2xl">These aren't cookie-cutter programs or 15-minute Physical Therapy evals.</p>
              
              <div className="bg-white p-6 rounded-lg mt-6">
                <p className="text-xl md:text-2xl font-bold text-primary text-center">This is 90 minutes with someone who sees what others can't. Who finds the pattern keeping you stuck.</p>
                <p className="text-xl md:text-2xl font-bold text-primary text-center mt-4">They'll know in 90 minutes what others miss for years.</p>
              </div>
            </div>
          </Card>

          {/* Investment */}
          <Card className="p-8 bg-muted border-l-8 border-primary shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">These Private Consultations Normally Run $300</h3>
            
            <div className="space-y-6 text-center">
              <p className="text-xl md:text-2xl">For 90 minutes with our full specialist team analyzing your case.</p>
              
              <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                <p className="text-2xl md:text-3xl font-bold mb-2">
                  But as a Full Body Fix registrant who takes action today?
                </p>
                <p className="text-4xl md:text-5xl font-bold">
                  Just $97
                </p>
              </div>
              
              <p className="text-xl md:text-2xl font-bold text-primary">5 spots available today.</p>
              <p className="text-xl md:text-2xl">Autumn searched for 18 months before finding us.</p>
              <p className="text-xl md:text-2xl font-bold">You found us today.</p>
              <p className="text-2xl md:text-3xl font-bold text-primary">Don't waste it.</p>
            </div>
          </Card>

          {/* Final Call to Action */}
          <Card className="p-8 bg-warning-bg border-l-8 border-warning-border shadow-lg">
            <div className="space-y-6 text-left">
              <p className="text-xl md:text-2xl">She'd trade those 18 months for the 90 minutes you're considering right now.</p>
              <p className="text-xl md:text-2xl">They'll fill. They always do in October.</p>
              <p className="text-xl md:text-2xl">Because October is when people act. January is when they wish they had.</p>
              <p className="text-2xl md:text-3xl font-bold text-center text-primary">Which one will you be?</p>
            </div>
          </Card>
        </div>

        {/* Calendly Embed */}
        <CalendlyEmbed />

        {/* Footer Content */}
        <Card className="max-w-4xl mx-auto p-8 mt-16 bg-info-bg border-l-8 border-info-border">
          <div className="space-y-6 text-left">
            <p className="text-xl md:text-2xl">
              Wherever you are on this journey, you deserve to know what's really happening.
            </p>
            <p className="text-xl md:text-2xl">
              Autumn knows now.
            </p>
            <p className="text-xl md:text-2xl font-bold text-primary">
              She wishes she'd known sooner.
            </p>
            
            <div className="bg-white p-6 rounded-lg">
              <p className="text-2xl md:text-3xl font-bold text-center text-primary">
                Pick Your Time Below:
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;