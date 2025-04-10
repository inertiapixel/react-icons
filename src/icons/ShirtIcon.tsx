import React from "react";

export const ShirtIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57539)">
<path d="M14.883 3.00724L14.978 3.00024L15.09 3.00424L15.203 3.02124L15.316 3.05124L21.316 5.05124C21.4964 5.11137 21.6558 5.22167 21.7757 5.36921C21.8956 5.51674 21.971 5.6954 21.993 5.88424L22 6.00024V11.0002C22 11.2452 21.91 11.4816 21.7473 11.6646C21.5845 11.8476 21.3603 11.9646 21.117 11.9932L21 12.0002H19V19.0002C19.0002 19.5048 18.8096 19.9908 18.4665 20.3608C18.1234 20.7308 17.6532 20.9574 17.15 20.9952L17 21.0002H7C6.49542 21.0004 6.00943 20.8098 5.63945 20.4667C5.26947 20.1237 5.04284 19.6534 5.005 19.1502L5 19.0002V12.0002H3C2.75507 12.0002 2.51866 11.9103 2.33563 11.7475C2.15259 11.5848 2.03566 11.3605 2.007 11.1172L2 11.0002V6.00024C1.99994 5.81009 2.05409 5.62386 2.15611 5.46339C2.25813 5.30292 2.40379 5.17487 2.576 5.09424L2.684 5.05124L8.684 3.05124C8.83433 3.00117 8.99441 2.98754 9.15105 3.01147C9.30768 3.03541 9.45639 3.09622 9.58491 3.1889C9.71343 3.28158 9.81808 3.40347 9.89025 3.54453C9.96242 3.6856 10 3.84179 10 4.00024C9.99768 4.51922 10.1972 5.01879 10.5564 5.39339C10.9156 5.768 11.4063 5.98831 11.9249 6.00778C12.4436 6.02726 12.9494 5.84437 13.3357 5.49775C13.722 5.15113 13.9584 4.66794 13.995 4.15024L14.004 3.91024L14.021 3.79724L14.058 3.66324L14.102 3.56024L14.152 3.46824L14.22 3.37524L14.289 3.29524C14.345 3.24124 14.402 3.19524 14.464 3.15524L14.56 3.10224L14.663 3.05824L14.771 3.02624L14.883 3.00724Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57539">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
