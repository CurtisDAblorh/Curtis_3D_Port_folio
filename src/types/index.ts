/**
 * Central domain types for the portfolio.
 *
 * These describe the data shapes currently hard-coded in `src/constants` —
 * the same shapes an API would eventually serve. When the API repo is hooked
 * up to Kubb, generate its types into `src/gen` and re-export them from here
 * (e.g. `export type { Project } from '../gen/types'`), deleting the matching
 * hand-written type below. Components import from `src/types` only, so the swap
 * needs no changes elsewhere.
 *
 * Types that are only used by a single component (props, local state) live in
 * that component's file instead.
 */

/** Resolved URL of a bundled image asset (what Vite returns for `import x from './x.png'`). */
export type ImageSrc = string;

export type NavLink = {
  id: string;
  title: string;
};

export type Service = {
  title: string;
  icon: ImageSrc;
};

export type Experience = {
  title: string;
  company_name: string;
  icon: ImageSrc;
  /** Any CSS colour value used behind the timeline icon. */
  iconBg: string;
  date: string;
  points: string[];
};

export type Testimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

/** Gradient utility classes for project tags (see `index.css`). */
export type TagColor =
  | 'blue-text-gradient'
  | 'green-text-gradient'
  | 'pink-text-gradient'
  | 'orange-text-gradient'
  // Used in project data but not yet defined in index.css.
  | 'purple-text-gradient';

export type ProjectTag = {
  name: string;
  color: TagColor;
};

export type Project = {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: ImageSrc;
  source_code_link: string;
  webpage_link: string;
};
