import './link.css';

function Link({children, className, route, onClick}) {
  return (
    <a onClick={onClick} href={route} className={`${className} link`}>
        {children}
    </a>  
  );
}

export default Link;