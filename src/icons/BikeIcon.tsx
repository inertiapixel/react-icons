import React from "react";

export const BikeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_83774)">
<path d="M2 18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21C5.79565 21 6.55871 20.6839 7.12132 20.1213C7.68393 19.5587 8 18.7956 8 18C8 17.2044 7.68393 16.4413 7.12132 15.8787C6.55871 15.3161 5.79565 15 5 15C4.20435 15 3.44129 15.3161 2.87868 15.8787C2.31607 16.4413 2 17.2044 2 18Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 18C16 18.7956 16.3161 19.5587 16.8787 20.1213C17.4413 20.6839 18.2044 21 19 21C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18C22 17.2044 21.6839 16.4413 21.1213 15.8787C20.5587 15.3161 19.7956 15 19 15C18.2044 15 17.4413 15.3161 16.8787 15.8787C16.3161 16.4413 16 17.2044 16 18Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19V15L9 12L14 8L16 11H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 5C16 5.26522 16.1054 5.51957 16.2929 5.70711C16.4804 5.89464 16.7348 6 17 6C17.2652 6 17.5196 5.89464 17.7071 5.70711C17.8946 5.51957 18 5.26522 18 5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4C16.7348 4 16.4804 4.10536 16.2929 4.29289C16.1054 4.48043 16 4.73478 16 5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_83774">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
