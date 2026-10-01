type TextIconProps = {
  /** Short label (1–3 characters) shown when a tech has no logo asset yet. */
  text: string;
  className?: string;
};

export const TextIcon = ({text, className}: TextIconProps) => (
  <div
    aria-hidden
    className={`flex items-center justify-center rounded-2xl border-2 border-secondary bg-tertiary text-[22px] font-black text-white ${className ?? ''}`}
  >
    {text}
  </div>
);
