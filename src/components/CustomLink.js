import { useEffect } from 'react';
import { useResolvedPath, useMatch, Link, useLocation } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const location = useLocation();

  return (
    <div>
      {/* <Link style={{ borderBottom: match ? '3px solid black' : 'none' }} to={to} {...props}>
        {children}
      </Link> */}
      <Link
        style={{ borderBottom: match && match.pathname === '/' ? '3px solid black' : 'none' }}
        to={to}
        {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
