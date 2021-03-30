/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPodcastsQuery
// ====================================================

export interface getAllPodcastsQuery_getAllPodcast_podcasts_episodes {
  __typename: "Episode";
  id: number;
  title: string;
}

export interface getAllPodcastsQuery_getAllPodcast_podcasts {
  __typename: "Podcast";
  id: number;
  updated_at: any;
  title: string;
  category: string;
  rating: number;
  episodes: getAllPodcastsQuery_getAllPodcast_podcasts_episodes[];
}

export interface getAllPodcastsQuery_getAllPodcast {
  __typename: "AllPodcastOutput";
  ok: boolean;
  error: string | null;
  podcasts: getAllPodcastsQuery_getAllPodcast_podcasts[] | null;
}

export interface getAllPodcastsQuery {
  getAllPodcast: getAllPodcastsQuery_getAllPodcast;
}
