import fetch from 'isomorphic-fetch';
import config from '../config';

export interface ReleasesResult {
  result: {
    releases: Release[];
  };
}

export interface Release {
  feature_order: number;
  is_free: boolean;
  product: Product;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image_hero_url: string;
  image_landscape_url: string;
  accent_colour_code: string;
  background_colour_code: string;
  text_colour_code: string;
  production_type_code: string;
  price: string | undefined;
}

export interface Venue {
  id: number;
  name: string;
  description: string;
  city: string;
  country_code: string;
}

export interface Artist {
  id: number;
  name: string;
  description: string;
  country_code: string;
  website_url: string;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  image_url: string;
  artist_background_colour_code: string;
  artist_text_colour_code: string;
  artist_accent_colour_code: string;
}

export interface Genre {
  id: number;
  name: string;
  description: string | null;
}

export type Performance = Product & {
  venue: Venue;
  artist: Artist;
  genre: Genre;
};

function sortReleases(releases: Release[]) {
  return releases.sort(
    (releaseA, releaseB) => releaseA.feature_order - releaseB.feature_order,
  );
}

export async function getReleases(): Promise<Release[]> {
  const response = await fetch(`${config.services.apiBaseUrl}/products`);
  const {
    result: { releases },
  } = await response.json();
  return sortReleases(releases);
}

export async function getPerformance(id: number): Promise<Performance> {
  const response = await fetch(`${config.services.apiBaseUrl}/products/${id}`);
  const { result } = await response.json();
  return result;
}
