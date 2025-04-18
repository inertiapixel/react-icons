import React from "react";

export const ClockPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78462)">
<path d="M20.9841 12.5352C21.0926 10.7136 20.6448 8.90201 19.7001 7.34073C18.7554 5.77946 17.3584 4.54225 15.6943 3.79318C14.0303 3.04412 12.1779 2.81859 10.3828 3.1465C8.58761 3.47442 6.93455 4.34029 5.64282 5.62928C4.35108 6.91827 3.4817 8.56947 3.14997 10.3639C2.81823 12.1584 3.03982 14.0112 3.78534 15.6769C4.53086 17.3425 5.7651 18.7421 7.32436 19.6902C8.88362 20.6382 10.6942 21.0898 12.5161 20.9852"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L15 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78462">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
