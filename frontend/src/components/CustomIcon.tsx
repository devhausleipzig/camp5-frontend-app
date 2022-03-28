import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomIcon = ({ to, children }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={`${match ? "underline" : "text-ricewhite"}`} to={to}>
      {children}
    </Link>
  );
};

export default CustomIcon;