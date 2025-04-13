import React from "react";

export const PinnedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57652)">
<path d="M16 3C16.2549 3.00028 16.5 3.09788 16.6854 3.27285C16.8707 3.44782 16.9822 3.68695 16.9972 3.94139C17.0121 4.19584 16.9293 4.44638 16.7657 4.64183C16.6021 4.83729 16.3701 4.9629 16.117 4.993L16 5V9.764L17.894 13.553C17.9463 13.6567 17.9801 13.7687 17.994 13.884L18 14V16C18 16.2449 17.91 16.4813 17.7473 16.6644C17.5845 16.8474 17.3603 16.9643 17.117 16.993L17 17H13V21C12.9997 21.2549 12.9021 21.5 12.7272 21.6854C12.5522 21.8707 12.313 21.9822 12.0586 21.9972C11.8042 22.0121 11.5536 21.9293 11.3582 21.7657C11.1627 21.6021 11.0371 21.3701 11.007 21.117L11 21V17H7C6.75507 17 6.51866 16.91 6.33563 16.7473C6.15259 16.5845 6.03566 16.3603 6.007 16.117L6 16V14C6.00014 13.884 6.02044 13.769 6.06 13.66L6.106 13.553L8 9.762V5C7.74512 4.99972 7.49997 4.90212 7.31463 4.72715C7.1293 4.55218 7.01777 4.31305 7.00283 4.05861C6.98789 3.80416 7.07067 3.55362 7.23426 3.35817C7.39786 3.16271 7.6299 3.0371 7.883 3.007L8 3H16Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57652">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
