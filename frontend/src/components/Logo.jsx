const Logo = ({ className = "h-11 w-auto", alt = "SurfKarnataka logo" }) => (
  <img
    src="/assets/surfkarnataka-logo.png"
    alt={alt}
    className={className}
    loading="eager"
  />
);

export default Logo;
