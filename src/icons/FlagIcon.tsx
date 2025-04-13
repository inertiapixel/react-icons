import React from "react";

export const FlagIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58173)">
<path d="M4 4.99966C4.00002 4.86668 4.02656 4.73503 4.07807 4.61244C4.12959 4.48984 4.20503 4.37874 4.3 4.28566C5.38984 3.21729 6.84585 2.60439 8.37166 2.57169C9.89746 2.53899 11.3784 3.08896 12.513 4.10966L12.864 4.43766C13.5934 5.07675 14.5302 5.42908 15.5 5.42908C16.4698 5.42908 17.4066 5.07675 18.136 4.43766L18.385 4.21066C18.995 3.72766 19.912 4.11366 19.995 4.88666L20 4.99966V13.9997C20 14.1326 19.9734 14.2643 19.9219 14.3869C19.8704 14.5095 19.795 14.6206 19.7 14.7137C18.6102 15.782 17.1542 16.3949 15.6283 16.4276C14.1025 16.4603 12.6216 15.9103 11.487 14.8897L11.136 14.5617C10.4295 13.9427 9.52777 13.592 8.58872 13.5712C7.64967 13.5503 6.73323 13.8606 6 14.4477V20.9997C5.99972 21.2545 5.90212 21.4997 5.72715 21.685C5.55218 21.8704 5.31305 21.9819 5.05861 21.9968C4.80416 22.0118 4.55362 21.929 4.35817 21.7654C4.16271 21.6018 4.0371 21.3698 4.007 21.1167L4 20.9997V4.99966Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58173">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
