import type { iIconProps } from "types/icons.type";

export const HostingerIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    className={styles}
    viewBox="0 0 24 24"
    >
    <path fill="#5316e0" d="M16.415 0v7.16l5.785 3.384V2.949zM1.8 0v11.237h18.815L14.89 8.09l-7.457-.003V3.024zm14.615 20.894v-5.019l-7.514-.005c.007.033-5.82-3.197-5.82-3.197l19.119.091V24zM1.8 13.551v7.343l5.633 2.949v-6.988z"></path></svg>
  );
};
