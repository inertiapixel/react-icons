import React from "react";

export const BellIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58922)">
<path d="M14.234 19C15.099 19 15.556 20.024 14.979 20.668C14.6042 21.0875 14.1449 21.4229 13.6314 21.6525C13.1178 21.8821 12.5615 22.0005 11.999 22C11.4365 22.0005 10.8802 21.8821 10.3666 21.6525C9.85307 21.4229 9.39382 21.0875 9.01899 20.668C8.46699 20.052 8.86099 19.089 9.65299 19.007L9.76299 19.001L14.234 19Z" fill="black"/>
<path d="M12.0019 2C13.3599 2 14.5079 2.903 14.8769 4.141L14.9229 4.312L14.9309 4.355C16.0333 4.9769 16.9727 5.8511 17.6721 6.906C18.3716 7.9609 18.8112 9.16648 18.9549 10.424L18.9829 10.711L19.0019 11V13.931L19.0229 14.067C19.1598 14.8038 19.5676 15.4627 20.1659 15.914L20.3329 16.031L20.4949 16.13C21.3549 16.617 21.0549 17.896 20.1179 17.994L20.0019 18H4.0019C2.9739 18 2.6149 16.636 3.5089 16.13C3.88993 15.9144 4.21915 15.618 4.47344 15.2616C4.72773 14.9052 4.90094 14.4974 4.9809 14.067L5.0019 13.924L5.0029 10.954C5.06387 9.64788 5.44406 8.37661 6.11019 7.25147C6.77631 6.12632 7.70807 5.18161 8.8239 4.5L9.0719 4.354L9.0819 4.311C9.22336 3.71303 9.54485 3.17284 10.003 2.76334C10.4611 2.35384 11.0339 2.09473 11.6439 2.021L11.8259 2.004L12.0019 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58922">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
