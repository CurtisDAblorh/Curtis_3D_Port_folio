import Lottie from 'lottie-react';

type LottieIconProps = {
  /** Parsed Lottie JSON, e.g. `import html from '../../assets/html.json'`. */
  animationData: unknown;
  className?: string;
};

export const LottieIcon = ({animationData, className}: LottieIconProps) => (
  <Lottie animationData={animationData} className={className} />
);
