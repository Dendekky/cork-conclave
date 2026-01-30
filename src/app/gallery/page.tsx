import type { Metadata } from "next";
import { site } from "@/lib/site";
import EventCarousel from "@/components/EventCarousel";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View the ambiance and design details of The Cork Conclave gatherings and tastings.",
  alternates: {
    canonical: `${site.url}/gallery`,
  },
};

// Helper function to generate photo paths for each event
const generateEventPhotos = (eventFolder: string, count: number = 10) => {
  return Array.from({ length: count }, (_, i) => ({
    url: `/images/${eventFolder}/${i + 1}.jpg`,
    alt: `${eventFolder} event photo ${i + 1}`,
  }));
};

// Gallery organized by event
const eventGalleries = [
  {
    eventName: "Pour Perspective",
    date: "November 2024",
    photos: generateEventPhotos("pour-perspective"),
  },
  {
    eventName: "Clink & Chill",
    date: "December 2024",
    photos: generateEventPhotos("clink-and-chill"),
  },
  {
    eventName: "Uncorked: A Love Affair",
    date: "February 2025",
    photos: generateEventPhotos("uncorked-a-love-affair"),
  },
  {
    eventName: "Escandalo",
    date: "March 2025",
    photos: generateEventPhotos("escandalo"),
  },
  {
    eventName: "4-1-9",
    date: "April 2025",
    photos: generateEventPhotos("4-1-9"),
  },
  {
    eventName: "Sips Don't Lie",
    date: "May 2025",
    photos: generateEventPhotos("sips-dont-lie"),
  },
  {
    eventName: "Scarlet Accord",
    date: "June 2025",
    photos: generateEventPhotos("scarlet-accord"),
  },
  {
    eventName: "Grape Outdoor",
    date: "July 2025",
    photos: generateEventPhotos("grape-outdoor"),
  },
  {
    eventName: "Lollapalooza",
    date: "August 2025",
    photos: generateEventPhotos("lollapalooza"),
  },
  {
    eventName: "Trivia Night",
    date: "September 2025",
    photos: generateEventPhotos("trivia-night"),
  },
  {
    eventName: "Amebo Lounge",
    date: "October 2025",
    photos: generateEventPhotos("amebo-lounge"),
  },
  {
    eventName: "From Palette to Palate",
    date: "November 2025",
    photos: generateEventPhotos("from-palette-to-palate"),
  },
  {
    eventName: "The Grape Reset",
    date: "January 2026",
    photos: generateEventPhotos("the-grape-reset"),
  },
  
];

export default function GalleryPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <p className="eyebrow">Gallery</p>
            <h1 className="hero-title">Atmosphere, captured</h1>
            <p className="hero-subtitle">
              A collection of mood, texture, and storytelling from our past events. Visit Instagram
              for the full visual diary.
            </p>
          </div>
        </div>
      </section>

      {eventGalleries.map((event) => (
        <section className="section tight" key={event.eventName}>
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">{event.date}</p>
                <h2 className="section-title">{event.eventName}</h2>
              </div>
            </div>
            <EventCarousel images={event.photos} autoplay={true} autoplayInterval={4000} />
          </div>
        </section>
      ))}
    </>
  );
}
