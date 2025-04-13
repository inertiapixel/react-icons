import React from "react";

export const ArchiveIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59155)">
<path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5C22 5.53043 21.7893 6.03914 21.4142 6.41421C21.0391 6.78929 20.5304 7 20 7H4C3.46957 7 2.96086 6.78929 2.58579 6.41421C2.21071 6.03914 2 5.53043 2 5Z" fill="black"/>
<path d="M19 9C19.513 9 19.936 9.463 19.993 10.06L20 10.2V17.4C20 19.317 18.751 20.884 17.176 20.994L17 21H7C5.402 21 4.096 19.501 4.005 17.612L4 17.4V10.2C4 9.537 4.448 9 5 9H19ZM14 11H10L9.883 11.007C9.63995 11.0359 9.41594 11.153 9.25341 11.336C9.09088 11.519 9.00111 11.7552 9.00111 12C9.00111 12.2448 9.09088 12.481 9.25341 12.664C9.41594 12.847 9.63995 12.9641 9.883 12.993L10 13H14L14.117 12.993C14.36 12.9641 14.5841 12.847 14.7466 12.664C14.9091 12.481 14.9989 12.2448 14.9989 12C14.9989 11.7552 14.9091 11.519 14.7466 11.336C14.5841 11.153 14.36 11.0359 14.117 11.007L14 11Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_59155">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
