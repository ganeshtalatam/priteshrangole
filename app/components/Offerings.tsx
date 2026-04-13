import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Live Event Painting",
    subtitle: "On-spot art | Pre-book",
    desc: "Capturing the magic of your wedding or event on canvas in real-time.",
    image: "/assets/images/pritesh.png"
  },
  {
    title: "Plein Air Painting",
    subtitle: "Outdoor landscape & cityscape",
    desc: "Capturing the raw beauty of nature and architecture in their settings.",
    image: "/assets/images/offering_sketching.png"
  },
  {
    title: "Customised Painting",
    subtitle: "Pre-booking required",
    desc: "Personalised couple & family portraits crafted meticulously in the studio.",
    image: "/assets/images/offering_customised.png"
  },
  {
    title: "Live Event & Sports",
    subtitle: "Real-time action capture",
    desc: "Painting live at high-energy sporting events and tournaments.",
    image: "/assets/images/offering_diy.png"
  },
  {
    title: "Destination Painting",
    subtitle: "Global travel commissions",
    desc: "Bringing the art of live painting to your special events worldwide.",
    image: "/assets/images/offering_wall.png"
  },
  // {
  //   title: "Fabric Painting",
  //   subtitle: "Luxury wearable art",
  //   desc: "Hand-painted art on sarees, blouses, and luxury fabrics.",
  //   image: "/assets/images/offering_fabric.png"
  // }
];

export default function Offerings({ limit }: { limit?: number }) {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="offerings" className="py-24 bg-brand-bg text-brand-text relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Art Services</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-contrast">
            Freezing Moments & Emotions via Art
          </h3>
          <div className="h-px w-24 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-[#F5EFEC] border border-brand-contrast/10 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center space-y-3">
                <h4 className="text-xl font-serif text-brand-gold">{service.title}</h4>
                <p className="text-xs uppercase tracking-widest text-brand-text/70 opacity-80">{service.subtitle}</p>
                <p className="text-sm text-brand-text/90 font-light pt-2">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-16">
            <Link href="/services" className="inline-block px-8 py-4 border border-brand-contrast text-brand-contrast uppercase text-sm tracking-widest hover:bg-brand-contrast hover:text-brand-bg transition-colors font-medium">
              View All Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
