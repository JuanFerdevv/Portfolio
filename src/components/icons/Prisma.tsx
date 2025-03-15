import type { iIconProps } from "types/icons.type";

export const PrismaIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    className={styles}
    viewBox="0 0 128 128"
    >
    <path fill="#2d3748" d="M66.457.014a6.31 6.31 0 0 0-5.812 3.028l-47.87 78.072a6.38 6.38 0 0 0 .048 6.748l23.568 37.186a6.39 6.39 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.3 6.3 0 0 0 66.46.014Zm1.795 23.95a2.35 2.35 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.35 2.35 0 0 1 2.099-1.91z"></path></svg>
  );
};
