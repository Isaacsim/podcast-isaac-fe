import {
  faHome,
  faSearch,
  faThList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
export const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="w-full px-5 xl:px-0 flex max-w-screen-xl mx-auto justify-between">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="text-xl" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faSearch} className="text-xl" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faThList} className="text-xl" />
        </Link>
      </div>
    </footer>
  );
};
