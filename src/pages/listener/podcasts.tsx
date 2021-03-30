import { useQuery } from "@apollo/client";
import {
  faAddressBook,
  faDownload,
  faList,
  faSave,
  faSdCard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getAllPodcastsQuery } from "../../__generated__/getAllPodcastsQuery";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const PODCASTS_QUERY = gql`
  query getAllPodcastsQuery {
    getAllPodcast {
      ok
      error
      podcasts {
        id
        updated_at
        title
        category
        rating
        episodes {
          id
          title
        }
      }
    }
  }
`;

export const Podcasts = () => {
  const { data, loading, error } = useQuery<getAllPodcastsQuery>(
    PODCASTS_QUERY,
    {
      variables: {},
    }
  );

  return (
    <div className="bg-gray-800 pt-1 ">
      {!loading && (
        <div className=" max-w-screen-2xl mx-auto mt-8 ">
          <div className="mt-10 px-8">
            {data?.getAllPodcast.podcasts?.map((podcast) => (
              <div className="mt-4 border-b ">
                <Link to={`/podcast/${podcast.id}`}>
                  <div className="flex ">
                    <div
                      style={{ backgroundImage: `url(${podcast.id})` }}
                      className="bg-red-500 bg-cover bg-center p-5 mr-4 rounded-xl"
                    >
                      Img
                    </div>
                    <div className="">
                      <h5 className="text-white font-bold">Author name</h5>
                      <h4 className="text-gray-400">{podcast.updated_at}</h4>
                    </div>
                  </div>

                  <h3 className="text-white truncate text-xl font-medium mt-4">
                    {podcast.title}{" "}
                  </h3>
                  <h4 className="text-white">
                    {podcast.title} {LOREM_IPSUM}{" "}
                  </h4>
                </Link>
                <div className="flex mt-2 mb-4 text-blue-400 items-center ">
                  <button className="p-2 border-2 border-gray-500 rounded-2xl mr-4">
                    <FontAwesomeIcon icon={faSearch} className="text-xl " />
                    <span className="text-sm text-white">
                      {podcast.rating} min
                    </span>
                  </button>
                  <span className="mr-4">{podcast.category}</span>
                  <FontAwesomeIcon icon={faDownload} className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
