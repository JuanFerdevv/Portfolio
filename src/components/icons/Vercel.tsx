import type { iIconProps } from "types/icons.type";

export const VercelIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    className={styles} 
    viewBox="0 0 256 222">
    <path d="m128 0l128 221.705H0z"></path></svg>
  );
};
