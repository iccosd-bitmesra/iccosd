import { loadContentWithCache, parseJsonBlock } from "./markdown";

export interface DistanceInfo {
  city: string;
  distance: string;
}

export interface DirectionsContent {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  intro: string;
  byAir: string;
  byTrain: string;
  byRoad: string;
  localTransport: string;
  location: string;
  distances: DistanceInfo[];
  accommodation: string;
}

export function getDirectionsContent(): DirectionsContent {
  const data = loadContentWithCache("directions.md");

  return {
    title:
      (data.frontmatter.title as string) ||
      "Directions | ICCoSD-26",
    description:
      (data.frontmatter.description as string) ||
      "How to reach BIT Mesra, Ranchi for ICCoSD-26.",
    heroTitle:
      (data.frontmatter.heroTitle as string) ||
      "How to Reach BIT Mesra",
    heroSubtitle:
      (data.frontmatter.heroSubtitle as string) ||
      "Easy directions to the conference venue",
    heroImage:
      (data.sections?.hero_image as string) ||
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    intro: (data.sections?.intro as string) || "",
    byAir: (data.sections?.by_air as string) || "",
    byTrain: (data.sections?.by_train as string) || "",
    byRoad: (data.sections?.by_road as string) || "",
    localTransport: (data.sections?.local_transport as string) || "",
    location: (data.sections?.location as string) || "",
    distances:
      ((parseJsonBlock(data.raw, "distances") as DistanceInfo[]) || []),
    accommodation: (data.sections?.accommodation as string) || "",
  };
}

