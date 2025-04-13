import React from "react";

export const SquareArrowRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57512)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM12.613 7.21C12.4206 7.06075 12.1803 6.98683 11.9373 7.00211C11.6943 7.01739 11.4652 7.12082 11.293 7.293L11.21 7.387C11.0607 7.5794 10.9868 7.81965 11.0021 8.06268C11.0174 8.30571 11.1208 8.53481 11.293 8.707L13.585 11H8L7.883 11.007C7.6299 11.0371 7.39786 11.1627 7.23426 11.3582C7.07067 11.5536 6.98789 11.8042 7.00283 12.0586C7.01777 12.313 7.1293 12.5522 7.31463 12.7272C7.49997 12.9021 7.74512 12.9997 8 13H13.585L11.293 15.293L11.21 15.387C11.0546 15.588 10.9815 15.8406 11.0056 16.0935C11.0297 16.3464 11.1492 16.5807 11.3397 16.7488C11.5303 16.9168 11.7777 17.006 12.0316 16.9982C12.2856 16.9905 12.527 16.8863 12.707 16.707L16.707 12.707L16.78 12.625L16.854 12.521L16.906 12.423L16.95 12.313L16.98 12.201L16.997 12.075L17 12L16.993 11.882L16.964 11.734L16.929 11.629L16.875 11.516L16.804 11.405C16.7745 11.3653 16.742 11.3279 16.707 11.293L12.707 7.293L12.613 7.21Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57512">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
