import type { iIconProps } from "types/icons.type";

export const MotionIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  
    width={width}
    height={height}
    className={styles}  
    viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M12 12L4 4v16L20 4v16l-4-4"></path><path d="m20 12l-8 8l-4-4"></path></g></svg>
  );
};
