import { useEffect } from "react";

export const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div 
        className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg" 
        data-url="https://calendly.com/d/cmdh-g6z-fxh/your-private-consultation?hide_gdpr_banner=1&utm_source=consult-page-jon-version" 
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};