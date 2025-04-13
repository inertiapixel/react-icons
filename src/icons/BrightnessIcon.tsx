import React from "react";

export const BrightnessIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58706)">
<path d="M17 3.33989C18.5202 4.21758 19.7826 5.47997 20.6603 7.00017C21.538 8.52038 22 10.2448 22 12.0002C22 13.7556 21.5379 15.48 20.6602 17.0002C19.7825 18.5204 18.5201 19.7828 16.9999 20.6605C15.4797 21.5381 13.7552 22.0002 11.9998 22.0001C10.2445 22.0001 8.52002 21.538 6.99984 20.6603C5.47965 19.7826 4.21729 18.5202 3.33963 17C2.46198 15.4797 1.99996 13.7553 2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM8 5.07189C6.47489 5.95252 5.28298 7.31178 4.60914 8.93886C3.93529 10.5659 3.81716 12.3699 4.27308 14.071C4.729 15.772 5.73348 17.2751 7.13073 18.3471C8.52798 19.4191 10.2399 20 12.001 19.9999L12 3.99989C10.5957 3.99995 9.21613 4.36967 8 5.07189Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58706">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
