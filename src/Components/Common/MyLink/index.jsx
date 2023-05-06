import React from "react";
import Link from "next/link";

const MyLink = ({ to, children, ...props }) => {
  return (
    <Link legacyBehavior href={to}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default MyLink;
