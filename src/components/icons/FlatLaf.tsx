import type { iIconProps } from "types/icons.type";

export const FlatlafIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    className={styles}
    viewBox="0 0 30 30"
    >
    <path fill="currentColor" d="M16 11V9H8v14h2v-6h5v-2h-5v-4zm8 0V9h-3a2 2 0 0 0-2 2v2h-2v2h2v8h2v-8h3v-2h-3v-2z"></path></svg>
  );
};
