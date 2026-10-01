import type {FunctionComponent, SVGProps} from 'react';

export type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

type SvgIconProps = {
  /** An SVG imported as a component, e.g. `import {ReactComponent as Vite} from '../../assets/vite.svg'`. */
  Component: SvgComponent;
  className?: string;
};

export const SvgIcon = ({Component, className}: SvgIconProps) => <Component className={className} />;
