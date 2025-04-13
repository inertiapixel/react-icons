import React from "react";

export const ClockIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58355)">
<path d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM12 5.99989C11.7551 5.99992 11.5187 6.08985 11.3356 6.25261C11.1526 6.41537 11.0357 6.63964 11.007 6.88289L11 6.99989V11.9999L11.009 12.1309C11.0318 12.3044 11.0997 12.4689 11.206 12.6079L11.293 12.7079L14.293 15.7079L14.387 15.7899C14.5624 15.926 14.778 15.9998 15 15.9998C15.222 15.9998 15.4376 15.926 15.613 15.7899L15.707 15.7069L15.79 15.6129C15.9261 15.4375 15.9999 15.2219 15.9999 14.9999C15.9999 14.7779 15.9261 14.5623 15.79 14.3869L15.707 14.2929L13 11.5849V6.99989L12.993 6.88289C12.9643 6.63964 12.8474 6.41537 12.6644 6.25261C12.4813 6.08985 12.2449 5.99992 12 5.99989Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58355">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
