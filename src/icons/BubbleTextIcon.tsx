import React from "react";

export const BubbleTextIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_80917)">
<path d="M7 10H17" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.3983 3C13.4433 3.00065 14.4651 3.30788 15.3372 3.88362C16.2092 4.45936 16.8932 5.27831 17.3043 6.239C18.0004 6.31747 18.6741 6.53225 19.2871 6.87109C19.9001 7.20993 20.4403 7.6662 20.877 8.21383C21.3137 8.76146 21.6382 9.38974 21.8321 10.0628C22.0259 10.7358 22.0853 11.4405 22.0068 12.1365C21.9284 12.8325 21.7136 13.5062 21.3748 14.1192C21.0359 14.7322 20.5796 15.2725 20.032 15.7092C19.4844 16.1458 18.8561 16.4704 18.183 16.6642C17.51 16.8581 16.8054 16.9175 16.1093 16.839C15.6028 17.735 14.789 18.4173 13.8184 18.7598C12.8478 19.1022 11.786 19.0817 10.8293 18.702L6.99834 21V17.866C6.60699 17.7755 6.24112 17.5978 5.92802 17.3462C5.61493 17.0946 5.36269 16.7755 5.19013 16.4128C5.01756 16.0501 4.92912 15.653 4.93141 15.2514C4.9337 14.8497 5.02666 14.4537 5.20334 14.093C4.2486 13.5438 3.51179 12.6829 3.11655 11.6548C2.72131 10.6267 2.69168 9.49389 3.03263 8.44653C3.37358 7.39917 4.06437 6.50093 4.9891 5.90252C5.91383 5.30411 7.01623 5.04194 8.11134 5.16C8.6072 4.48976 9.25336 3.94519 9.99791 3.57005C10.7425 3.19491 11.5646 2.99967 12.3983 3Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80917">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
