import React from "react";

export const DisabledOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75308)">
<path d="M11 7C11.3956 7 11.7822 6.8827 12.1111 6.66294C12.44 6.44318 12.6964 6.13082 12.8478 5.76537C12.9991 5.39992 13.0387 4.99778 12.9616 4.60982C12.8844 4.22186 12.6939 3.86549 12.4142 3.58579C12.1345 3.30608 11.7781 3.1156 11.3902 3.03843C11.0022 2.96126 10.6001 3.00087 10.2346 3.15224C9.86918 3.30362 9.55682 3.55996 9.33706 3.88886C9.1173 4.21776 9 4.60444 9 5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11V15H15L19 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.00099 11.5C6.28448 11.7967 5.64682 12.2561 5.13841 12.8417C4.63 13.4273 4.26478 14.1231 4.07163 14.8742C3.87847 15.6253 3.86268 16.411 4.02549 17.1692C4.1883 17.9275 4.52526 18.6374 5.00972 19.243C5.49418 19.8486 6.11287 20.3332 6.81687 20.6585C7.52087 20.9837 8.29088 21.1408 9.06604 21.1172C9.8412 21.0937 10.6003 20.8901 11.2832 20.5226C11.9661 20.1552 12.5542 19.6339 13.001 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75308">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
