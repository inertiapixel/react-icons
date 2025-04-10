import React from "react";

export const Shirt1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63937)">
<path d="M15 4L21 6V11H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V11H3V6L9 4C9 4.79565 9.31607 5.55871 9.87868 6.12132C10.4413 6.68393 11.2044 7 12 7C12.7956 7 13.5587 6.68393 14.1213 6.12132C14.6839 5.55871 15 4.79565 15 4Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63937">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
