import React from "react";

export const CopyrightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58283)">
<path d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM14.66 8.99889C13.8839 8.31682 12.8747 7.96012 11.8424 8.00295C10.8101 8.04579 9.83394 8.48487 9.117 9.22889C8.39975 9.97306 7.999 10.9663 7.999 11.9999C7.999 13.0334 8.39975 14.0267 9.117 14.7709C9.83394 15.5149 10.8101 15.954 11.8424 15.9968C12.8747 16.0397 13.8839 15.683 14.66 15.0009C14.8531 14.8242 14.9693 14.5788 14.9835 14.3175C14.9978 14.0561 14.9089 13.7996 14.7361 13.6029C14.5634 13.4063 14.3204 13.2853 14.0593 13.2658C13.7983 13.2464 13.54 13.3301 13.34 13.4989C12.53 14.2099 11.305 14.1589 10.557 13.3829C10.199 13.0115 9.99905 12.5157 9.99905 11.9999C9.99905 11.4841 10.199 10.9883 10.557 10.6169C10.9168 10.2432 11.4069 10.0226 11.9252 10.001C12.4436 9.97938 12.9503 10.1584 13.34 10.5009C13.5404 10.6655 13.797 10.7457 14.0555 10.7247C14.314 10.7037 14.5542 10.5831 14.7255 10.3884C14.8967 10.1936 14.9856 9.93996 14.9734 9.6809C14.9612 9.42184 14.8488 9.17766 14.66 8.99989V8.99889Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58283">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
