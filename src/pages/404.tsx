import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="h-screen flex items-center justify-center">
    <Helmet>Not found | podcast-isaac</Helmet>
    <h3>Page not found</h3>
    <h4>The page you're looking for doesn't exist or has moves</h4>
    <Link className="text-green-500 hover:underline" to="/">
      Go back home &rarr;
    </Link>
  </div>
);
