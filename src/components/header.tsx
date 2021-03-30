import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";
import { useMe } from "../hooks/useMe";

export const Header: React.FC = () => {
  const { data } = useMe();

  return (
    <header className="py-1 fixed w-full bg-white">
      <div className="w-full px-5 xl:px-0 flex max-w-screen-xl mx-auto justify-between">
        <div className="justify-between items-center">무명</div>
        <div className="object-right">
          <span className="text-lg px-4">
            <Link to="/my-profile">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </Link>
          </span>
          <button
            className="px-4"
            onClick={() => {
              isLoggedInVar(false);
              localStorage.setItem(LOCALSTORAGE_TOKEN, "");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
