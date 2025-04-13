import React from "react";

export const InnerShadowTopIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57930)">
<path d="M4.92875 4.92875C8.83375 1.02375 15.1657 1.02375 19.0707 4.92875C22.9757 8.83375 22.9757 15.1657 19.0707 19.0707C15.1657 22.9757 8.83375 22.9757 4.92875 19.0707C1.02375 15.1657 1.02375 8.83375 4.92875 4.92875ZM16.9487 7.04975C15.636 5.73715 13.8556 4.99974 11.9993 4.99974C10.1429 4.99974 8.36248 5.73715 7.04975 7.04975C6.86759 7.23835 6.7668 7.49095 6.76908 7.75315C6.77135 8.01535 6.87652 8.26616 7.06193 8.45157C7.24734 8.63698 7.49815 8.74215 7.76035 8.74442C8.02255 8.7467 8.27515 8.64591 8.46375 8.46375C8.92806 7.99932 9.47931 7.6309 10.086 7.37955C10.6927 7.12819 11.343 6.99882 11.9998 6.99882C12.6565 6.99882 13.3068 7.12819 13.9135 7.37955C14.5202 7.6309 15.0714 7.99932 15.5358 8.46375C15.7244 8.64591 15.977 8.7467 16.2392 8.74442C16.5013 8.74215 16.7522 8.63698 16.9376 8.45157C17.123 8.26616 17.2281 8.01535 17.2304 7.75315C17.2327 7.49095 17.1319 7.23835 16.9498 7.04975H16.9487Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57930">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
