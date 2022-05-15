import { useResolvedPath, useMatch, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CustomLink({ children, variants, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      {/* <Link style={{ borderBottom: match ? '3px solid black' : 'none' }} to={to} {...props}>
        {children}
      </Link> */}
      <Link
        style={{
          borderBottom:
            match && match.pathname === '/' ? '3px solid black' : '3px solid transparent',
        }}
        to={to}
        {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
