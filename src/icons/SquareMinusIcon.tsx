import React from "react";

export const SquareMinusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57365)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM15 11H9L8.883 11.007C8.6299 11.0371 8.39785 11.1627 8.23426 11.3582C8.07067 11.5536 7.98789 11.8042 8.00283 12.0586C8.01776 12.313 8.1293 12.5522 8.31463 12.7272C8.49997 12.9021 8.74512 12.9997 9 13H15L15.117 12.993C15.3701 12.9629 15.6021 12.8373 15.7657 12.6418C15.9293 12.4464 16.0121 12.1958 15.9972 11.9414C15.9822 11.687 15.8707 11.4478 15.6854 11.2728C15.5 11.0979 15.2549 11.0003 15 11Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57365">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
