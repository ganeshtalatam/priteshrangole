import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 animate-[painterly-drift_25s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('/assets/images/pritesh2.png')` }}
      >
        <div className="absolute inset-0 bg-brand-contrast/70 bg-gradient-to-t from-brand-contrast via-brand-contrast/40 to-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 mt-16 pb-12 animate-fade-in-up">
        {/* <h3 className="uppercase tracking-[0.3em] text-brand-light-gold text-sm md:text-base mb-4 inline-block pb-2 border-b border-brand-light-gold/50">
          Custom & Live Painting Artist
        </h3> */}
        <h1 className="text-5xl md:text-6xl font-serif text-brand-bg leading-tight drop-shadow-sm">
          Capturing Your Celebration <br/>
          <span className="italic text-gradient-gold">on Canvas</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-bg/90 font-light max-w-2xl mx-auto pt-4 pb-8 leading-relaxed">
          Unforgettable live event painting and bespoke portraits, capturing raw emotions into timeless art.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-light-gold text-brand-bg uppercase text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto text-center rounded-lg">
            Book your date
          </Link>
          <Link href="/services" className="px-8 py-4 border border-brand-bg/30 text-brand-bg uppercase text-sm tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto text-center backdrop-blur-sm rounded-lg">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}