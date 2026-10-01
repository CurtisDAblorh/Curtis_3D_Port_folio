import {motion, useReducedMotion} from 'framer-motion';
import type {SimpleIcon} from 'simple-icons';
import {BrandIcon, ImageIcon, LottieIcon, SvgIcon, TextIcon, type SvgComponent} from '../atoms';

/** How a tech's logo is drawn. To upgrade a static icon to an animation, swap its `kind` to `'lottie'`. */
export type TechIconSource =
  | {kind: 'lottie'; animationData: unknown}
  | {kind: 'brand'; icon: SimpleIcon}
  | {kind: 'svg'; Component: SvgComponent}
  | {kind: 'image'; src: string}
  | {kind: 'text'; text: string};

export type TechItem = {
  name: string;
  icon: TechIconSource;
};

// Static logos sit a little smaller than Lottie animations, which carry their own padding.
const STATIC_ICON_SIZE = 'w-16 h-16';

const TechIcon = ({name, icon}: TechItem) => {
  switch (icon.kind) {
    case 'lottie':
      return <LottieIcon animationData={icon.animationData} className="w-full h-full" />;
    case 'brand':
      return <BrandIcon icon={icon.icon} className={STATIC_ICON_SIZE} />;
    case 'svg':
      return <SvgIcon Component={icon.Component} className={STATIC_ICON_SIZE} />;
    case 'image':
      return <ImageIcon src={icon.src} alt={name} className={STATIC_ICON_SIZE} />;
    case 'text':
      return <TextIcon text={icon.text} className={STATIC_ICON_SIZE} />;
  }
};

type TechCardProps = TechItem & {
  /** Position in the grid; offsets the float so neighbouring icons don't bob in sync. */
  index: number;
};

export const TechCard = ({index, ...tech}: TechCardProps) => {
  const reduceMotion = useReducedMotion();
  // Lottie icons already animate; static logos get a gentle float so the whole grid feels alive.
  const float = tech.icon.kind !== 'lottie' && !reduceMotion;

  return (
    <div className="flex w-[110px] flex-col items-center gap-3">
      <motion.div
        className="flex h-24 w-24 items-center justify-center"
        animate={float ? {y: [0, -6, 0]} : undefined}
        whileHover={reduceMotion ? undefined : {scale: 1.15}}
        transition={{
          y: {duration: 3, repeat: Infinity, ease: 'easeInOut', delay: (index % 7) * 0.35},
          default: {type: 'spring', stiffness: 300, damping: 15},
        }}
      >
        <TechIcon {...tech} />
      </motion.div>
      <p className="text-center text-[14px] text-white-100">{tech.name}</p>
    </div>
  );
};
