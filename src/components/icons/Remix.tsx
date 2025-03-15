import type { iIconProps } from "types/icons.type";

export const RemixIcon = ({ width = 24, height = 24, styles = '' }: iIconProps) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
    className={styles}
    viewBox="0 0 128 128"
    >
    <path fill="#121212" d="M8.389 0v26.09h55.445c14.656 0 21.986 6.29 21.986 16.67c0 11.804-7.33 16.263-21.986 16.263H8.389v26.663h53.818c11.603 0 17.912 3.255 18.93 17.91c.77 10.01.674 14.965.582 19.718c-.03 1.53-.06 3.038-.06 4.686h34.218c0-7.567 0-14.5-1.15-29.29c-1.425-14.857-9.161-22.386-22.393-25.032c15.674-2.036 27.277-14.248 27.277-32.973C119.611 15.671 103.122 0 69.941 0zm0 108.125V128h43.535v-12.72c0-2.674-1.312-7.155-7.356-7.155z"></path></svg>
  );
};
