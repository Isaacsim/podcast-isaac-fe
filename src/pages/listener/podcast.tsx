import { useQuery } from "@apollo/client";
import {
  faCircle,
  faDownload,
  faPlay,
  faSearch,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
  getOnePodcastQuery,
  getOnePodcastQueryVariables,
} from "../../__generated__/getOnePodcastQuery";
import { NotFound } from "../404";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const PODCAST_QUERY = gql`
  query getOnePodcastQuery($input: PodcastSearchInput!) {
    getOnePodcast(input: $input) {
      ok
      error
      podcast {
        id
        title
        episodes {
          id
          title
          summary
          running
          updated_at
        }
      }
    }
  }
`;

interface IRestaurantParams {
  id: string;
}

export const Podcast = () => {
  const params = useParams<IRestaurantParams>();
  const { data, loading } = useQuery<
    getOnePodcastQuery,
    getOnePodcastQueryVariables
  >(PODCAST_QUERY, {
    variables: {
      input: {
        id: +params.id,
      },
    },
  });
  console.log(data);

  if (!data?.getOnePodcast.ok)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div className="bg-gray-800 py-16 px-8 ">
      {!loading && (
        <div className="w-full pb-8">
          <div className="flex justify-between">
            <div className="">
              <h1 className=" text-white text-6xl">
                {data.getOnePodcast.podcast?.id}
              </h1>
              <h2 className="text-3xl text-blue-400">
                {data.getOnePodcast.podcast?.title}
              </h2>
            </div>
            <div
              style={{
                backgroundImage: `url(${data.getOnePodcast.podcast?.id})`,
              }}
              className="bg-red-500 bg-cover bg-center p-14 ml-6 rounded-xl"
            >
              Img
            </div>
          </div>
          <div className="text-xl flex mt-2 mb-4 text-blue-400 items-center ">
            <button className="p-2 border-2 border-gray-500 rounded-2xl mr-4">
              <FontAwesomeIcon icon={faSearch} className="text-xl " />
              <span className="pl-2 text-white">subscribe</span>
            </button>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="" />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faShare} className="" />
            </div>
          </div>
          <div className="text-gray-300 text-xl font-light border-b-2 ">
            {LOREM_IPSUM}
          </div>
          <div className="mt-4 text-white">
            <div className="text-2xl my-8">
              {data.getOnePodcast.podcast?.episodes.length} Episodes
            </div>
            {data?.getOnePodcast.podcast?.episodes.map((episode) => (
              <div key={episode.id} className="text-white my-8 border-b">
                <h3 className="text-lg">{episode.updated_at}</h3>
                <h2 className="text-2xl">{episode.title}</h2>
                <div>
                  <div className="flex mt-2 mb-4 text-blue-400 items-center ">
                    <button className="p-2 border-2 border-gray-500 rounded-2xl mr-4">
                      <FontAwesomeIcon icon={faPlay} className="text-xl " />
                      <span className="text-sm ml-2 text-white">
                        {episode.running} min
                      </span>
                    </button>
                    <span className="mr-4">{episode.summary}</span>
                    <FontAwesomeIcon icon={faDownload} className="text-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
