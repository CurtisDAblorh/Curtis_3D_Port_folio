type ImageIconProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageIcon = ({src, alt, className}: ImageIconProps) => (
  <img src={src} alt={alt} className={`object-contain ${className ?? ''}`} />
);
