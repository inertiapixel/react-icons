import React from "react";

export const MichelinStarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_68475)">
<path d="M14.793 17.063C14.793 17.4 14.85 17.681 14.85 17.963C14.85 19.763 13.612 21 11.868 21C10.068 21 8.88797 19.762 8.88797 17.794V17.063C7.93097 17.738 7.31197 17.963 6.46797 17.963C4.94997 17.963 3.54297 16.5 3.54297 14.869C3.54297 13.688 4.38697 12.675 5.62497 12.113L5.90497 12C4.33097 11.213 3.54297 10.312 3.54297 9.075C3.54297 7.388 4.83697 5.981 6.46797 5.981C7.14297 5.981 7.98797 6.319 8.60597 6.769L8.88697 6.881C8.88697 6.544 8.83097 6.262 8.83097 6.037C8.83097 4.237 10.068 3 11.811 3C13.611 3 14.792 4.237 14.792 6.206V6.6L14.736 6.881C15.692 6.206 16.311 5.981 17.155 5.981C18.674 5.981 20.08 7.444 20.08 9.075C20.08 10.256 19.236 11.269 17.999 11.831L17.717 12C19.292 12.787 20.08 13.688 20.08 14.925C20.08 16.613 18.786 18.019 17.155 18.019C16.48 18.019 15.58 17.738 15.017 17.231L14.792 17.062L14.793 17.063Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68475">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
