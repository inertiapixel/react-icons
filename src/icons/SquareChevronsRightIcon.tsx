import React from "react";

export const SquareChevronsRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57482)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM8.613 8.21C8.4206 8.06075 8.18035 7.98683 7.93732 8.00211C7.69429 8.01739 7.46519 8.12082 7.293 8.293L7.21 8.387C7.06075 8.5794 6.98683 8.81965 7.00211 9.06268C7.01739 9.30571 7.12082 9.53481 7.293 9.707L9.585 12L7.293 14.293L7.21 14.387C7.05459 14.588 6.98151 14.8406 7.0056 15.0935C7.02969 15.3464 7.14916 15.5807 7.33972 15.7488C7.53029 15.9168 7.77767 16.006 8.03162 15.9982C8.28557 15.9905 8.52704 15.8863 8.707 15.707L11.707 12.707L11.79 12.613C11.9393 12.4206 12.0132 12.1803 11.9979 11.9373C11.9826 11.6943 11.8792 11.4652 11.707 11.293L8.707 8.293L8.613 8.21ZM13.613 8.21C13.4206 8.06075 13.1803 7.98683 12.9373 8.00211C12.6943 8.01739 12.4652 8.12082 12.293 8.293L12.21 8.387C12.0607 8.5794 11.9868 8.81965 12.0021 9.06268C12.0174 9.30571 12.1208 9.53481 12.293 9.707L14.585 12L12.293 14.293L12.21 14.387C12.0546 14.588 11.9815 14.8406 12.0056 15.0935C12.0297 15.3464 12.1492 15.5807 12.3397 15.7488C12.5303 15.9168 12.7777 16.006 13.0316 15.9982C13.2856 15.9905 13.527 15.8863 13.707 15.707L16.707 12.707L16.79 12.613C16.9393 12.4206 17.0132 12.1803 16.9979 11.9373C16.9826 11.6943 16.8792 11.4652 16.707 11.293L13.707 8.293L13.613 8.21Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57482">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
