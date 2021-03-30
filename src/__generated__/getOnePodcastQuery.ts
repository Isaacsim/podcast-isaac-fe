/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PodcastSearchInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getOnePodcastQuery
// ====================================================

export interface getOnePodcastQuery_getOnePodcast_podcast_episodes {
  __typename: "Episode";
  id: number;
  title: string;
  summary: string;
  running: number;
  updated_at: any;
}

export interface getOnePodcastQuery_getOnePodcast_podcast {
  __typename: "Podcast";
  id: number;
  title: string;
  episodes: getOnePodcastQuery_getOnePodcast_podcast_episodes[];
}

export interface getOnePodcastQuery_getOnePodcast {
  __typename: "PodcastOutput";
  ok: boolean;
  error: string | null;
  podcast: getOnePodcastQuery_getOnePodcast_podcast | null;
}

export interface getOnePodcastQuery {
  getOnePodcast: getOnePodcastQuery_getOnePodcast;
}

export interface getOnePodcastQueryVariables {
  input: PodcastSearchInput;
}
