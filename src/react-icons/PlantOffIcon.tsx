import React from "react";

export const PlantOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66233)">
<path d="M17 17V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V15H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9 7.908C11.6799 6.71708 11.1046 5.62065 10.2496 4.76285C9.39469 3.90506 8.30018 3.32607 7.11 3.102M3 3V5C3 6.5913 3.63214 8.11742 4.75736 9.24264C5.88258 10.3679 7.4087 11 9 11H11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5312 8.528C13.0069 7.47615 13.7758 6.58383 14.7458 5.95806C15.7159 5.33229 16.8459 4.99964 18.0002 5H21.0002V6C21.0004 7.42451 20.4938 8.80261 19.571 9.88777C18.6481 10.9729 17.3693 11.6944 15.9633 11.923"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66233">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
