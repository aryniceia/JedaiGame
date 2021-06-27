import './link.css';

function Link({children, className, route}) {
  return (
    <a href={route} className={`${className} link`} >
        {children}
    </a>  
  );
}

export default Link;