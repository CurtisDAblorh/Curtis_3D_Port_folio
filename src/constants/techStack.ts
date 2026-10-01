import {
  siChromatic,
  siClaude,
  siCursor,
  siD3,
  siDocker,
  siFigma,
  siGithubactions,
  siGo,
  siJest,
  siJira,
  siMui,
  siNpm,
  siOpenapiinitiative,
  siPython,
  siRedux,
  siShadcnui,
  siShortcut,
  siStorybook,
  siStripe,
  siTailwindcss,
  siTestinglibrary,
  siTypescript,
  siWebrtc,
  siYarn,
} from 'simple-icons';
import type {TechItem} from '../components/molecules/TechCard';
import api from '../assets/api.json';
import css from '../assets/css.json';
import github from '../assets/github.json';
import html from '../assets/html.json';
import javascript from '../assets/javascript.json';
import react from '../assets/react.json';
import next from '../assets/next.js.svg';
import playwright from '../assets/playwright.svg';
import {ReactComponent as Commercejs} from '../assets/commercejs.svg';
import {ReactComponent as Git} from '../assets/git.svg';
import {ReactComponent as Threejs} from '../assets/threejs.svg';
import {ReactComponent as Vite} from '../assets/vite.svg';

/**
 * Everything shown in the Tech Stack section, in display order.
 * To add a tech, append an entry; pick whichever icon `kind` you have an asset for
 * (a `simple-icons` brand is usually the quickest).
 */
export const techStack: TechItem[] = [
  // Languages & frameworks
  {name: 'HTML', icon: {kind: 'lottie', animationData: html}},
  {name: 'CSS', icon: {kind: 'lottie', animationData: css}},
  {name: 'JavaScript', icon: {kind: 'lottie', animationData: javascript}},
  {name: 'TypeScript', icon: {kind: 'brand', icon: siTypescript}},
  {name: 'React', icon: {kind: 'lottie', animationData: react}},
  {name: 'Next.js', icon: {kind: 'image', src: next}},
  {name: 'Redux', icon: {kind: 'brand', icon: siRedux}},
  {name: 'Go', icon: {kind: 'brand', icon: siGo}},
  {name: 'Python', icon: {kind: 'brand', icon: siPython}},

  // UI, styling & visualisation
  {name: 'Tailwind CSS', icon: {kind: 'brand', icon: siTailwindcss}},
  {name: 'MUI', icon: {kind: 'brand', icon: siMui}},
  {name: 'shadcn/ui', icon: {kind: 'brand', icon: siShadcnui}},
  {name: 'D3', icon: {kind: 'brand', icon: siD3}},
  {name: 'Three.js', icon: {kind: 'svg', Component: Threejs}},

  // APIs & real-time
  {name: 'REST API', icon: {kind: 'lottie', animationData: api}},
  {name: 'OpenAPI', icon: {kind: 'brand', icon: siOpenapiinitiative}},
  {name: 'Kubb', icon: {kind: 'text', text: 'K'}},
  {name: 'WebSockets', icon: {kind: 'text', text: 'WS'}},
  {name: 'WebRTC', icon: {kind: 'brand', icon: siWebrtc}},

  // Testing & component workshop
  {name: 'Jest', icon: {kind: 'brand', icon: siJest}},
  {name: 'React Testing Library', icon: {kind: 'brand', icon: siTestinglibrary}},
  {name: 'Playwright', icon: {kind: 'image', src: playwright}},
  {name: 'Storybook', icon: {kind: 'brand', icon: siStorybook}},
  {name: 'Chromatic', icon: {kind: 'brand', icon: siChromatic}},

  // Tooling & delivery
  {name: 'Git', icon: {kind: 'svg', Component: Git}},
  {name: 'GitHub', icon: {kind: 'lottie', animationData: github}},
  {name: 'GitHub Actions', icon: {kind: 'brand', icon: siGithubactions}},
  {name: 'Docker', icon: {kind: 'brand', icon: siDocker}},
  {name: 'Vite', icon: {kind: 'svg', Component: Vite}},
  {name: 'npm', icon: {kind: 'brand', icon: siNpm}},
  {name: 'Yarn', icon: {kind: 'brand', icon: siYarn}},
  {name: 'Cursor', icon: {kind: 'brand', icon: siCursor}},
  {name: 'Claude Code', icon: {kind: 'brand', icon: siClaude}},

  // Planning & design
  {name: 'Jira', icon: {kind: 'brand', icon: siJira}},
  {name: 'Shortcut', icon: {kind: 'brand', icon: siShortcut}},
  {name: 'Figma', icon: {kind: 'brand', icon: siFigma}},

  // Payments & commerce
  {name: 'Stripe', icon: {kind: 'brand', icon: siStripe}},
  {name: 'Commerce.js', icon: {kind: 'svg', Component: Commercejs}},
];
