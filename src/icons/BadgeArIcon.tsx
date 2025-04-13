import React from "react";

export const BadgeArIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59031)">
<path d="M19 4C19.7956 4 20.5587 4.31607 21.1213 4.87868C21.6839 5.44129 22 6.20435 22 7V17C22 17.7956 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7956 20 19 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V7C2 6.20435 2.31607 5.44129 2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H19ZM8.5 8C7.83696 8 7.20107 8.26339 6.73223 8.73223C6.26339 9.20107 6 9.83696 6 10.5V15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16C7.26522 16 7.51957 15.8946 7.70711 15.7071C7.89464 15.5196 8 15.2652 8 15V14H9V15C9.00003 15.2449 9.08996 15.4813 9.25272 15.6644C9.41547 15.8474 9.63975 15.9643 9.883 15.993L10 16C10.2652 16 10.5196 15.8946 10.7071 15.7071C10.8946 15.5196 11 15.2652 11 15V10.5C11 9.83696 10.7366 9.20107 10.2678 8.73223C9.79893 8.26339 9.16304 8 8.5 8ZM15.5 8H14C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9V15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16L14.117 15.993C14.3603 15.9643 14.5845 15.8474 14.7473 15.6644C14.91 15.4813 15 15.2449 15 15V13.804L16.168 15.554C16.2408 15.6634 16.3344 15.7573 16.4435 15.8304C16.5526 15.9036 16.6751 15.9545 16.8039 15.9804C16.9327 16.0062 17.0653 16.0064 17.1942 15.9809C17.3231 15.9555 17.4457 15.9049 17.555 15.832L17.648 15.762C17.8348 15.6032 17.9567 15.3813 17.9906 15.1385C18.0246 14.8957 17.9681 14.6489 17.832 14.445L16.673 12.707L16.717 12.684C17.2007 12.4146 17.5812 11.9922 17.799 11.4832C18.0167 10.9741 18.0593 10.4072 17.92 9.87132C17.7808 9.33546 17.4676 8.86097 17.0297 8.52229C16.5917 8.18362 16.0537 7.99991 15.5 8ZM8.5 10C8.63261 10 8.75979 10.0527 8.85355 10.1464C8.94732 10.2402 9 10.3674 9 10.5V12H8V10.5C7.99996 10.383 8.04097 10.2696 8.11589 10.1797C8.19081 10.0898 8.29489 10.0291 8.41 10.008L8.5 10ZM15.5 10C15.6326 10 15.7598 10.0527 15.8536 10.1464C15.9473 10.2402 16 10.3674 16 10.5C16 10.6326 15.9473 10.7598 15.8536 10.8536C15.7598 10.9473 15.6326 11 15.5 11H15V10H15.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_59031">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
