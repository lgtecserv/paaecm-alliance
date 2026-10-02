import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useI18n } from "../../hooks/use-i18n";

const images = [
  "1000867666.jpg_20261002174502.jpg",
  "1000867746.jpg_20261002164357.jpg",
  "AAGECM_Nairobi_Kenya_-_2023b.jpg_20261002164140.jpg",
  "AAGECM_Nairobi_Kenya_Convening_-_20261002173353.jpg",
  "AAGECM_Nairobi_Kenya_Convening_-_20261002174658.jpg",
  "COTLA_PAAECM_meeting_Lusaka,_Zambia.jpg_2K_20261002163820.jpg",
  "Cape_Town_Meeting_with_Michelle_20261002173921.jpg",
  "FB_IMG_1707470146924.jpg_20261002174616.jpg",
  "GNB_Office_Tour_and_Meeting.jpg_20261002174329.jpg",
  "IMG_20230704_141936_212.jpg_20261002173956.jpg",
  "IMG_20230913_111334_312.jpg_20261002164252.jpg",
  "Loveness_giving_presentation_at_KCL_20261002174117.jpg",
  "WhatsApp_Image_2023-07-05_at_13.55.06.jpeg_20261002174155.jpg",
  "WhatsApp_Image_2023-07-06_at_21.21.43.jpeg_20261002173746.jpg",
  "WhatsApp_Image_2023-08-10_at_16.50.01.jpeg_20261002174030.jpg",
];

export function ImageCarousel() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useI18n();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const title = lang === "pt" ? "Galeria de Imagens" : "Image Gallery";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}} />
      
      {/* Infinite Carousel Banner */}
      <div className="w-full bg-muted/20 border-b border-border/40 overflow-hidden py-4 relative group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div 
          className="flex w-max animate-marquee-infinite cursor-pointer"
          onClick={() => setIsOpen(true)}
          title={lang === "pt" ? "Clique para ver todas as imagens" : "Click to view all images"}
        >
          {/* We duplicate the array to create the seamless infinite scroll effect */}
          {[...images, ...images].map((img, i) => (
            <div key={i} className="flex-shrink-0 mx-3 overflow-hidden rounded-xl shadow-sm border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-md">
              <img 
                src={`/gallery/${img}`} 
                alt="PAAECM Gallery" 
                className="h-40 w-auto object-cover max-w-[300px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md p-4 sm:p-6 md:p-12 overflow-hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {title}
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-3 bg-secondary/80 hover:bg-secondary rounded-full transition-colors group"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-secondary-foreground group-hover:scale-110 transition-transform" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto w-full pb-10">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto space-y-6">
              {images.map((img, i) => (
                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-border/50 group bg-card">
                  <img 
                    src={`/gallery/${img}`} 
                    alt={`PAAECM Gallery ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
