import React from "react";

export const TrophyIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57066)">
<path d="M16.999 3C17.2439 3.00003 17.4803 3.08996 17.6634 3.25272C17.8464 3.41547 17.9633 3.63975 17.992 3.883L17.999 4V6.17C18.4514 6.0106 18.9354 5.962 19.4105 6.02828C19.8856 6.09456 20.3378 6.27379 20.7293 6.55094C21.1208 6.82809 21.4402 7.19507 21.6606 7.62111C21.8809 8.04715 21.996 8.51983 21.996 8.9995C21.996 9.47917 21.8809 9.95185 21.6606 10.3779C21.4402 10.8039 21.1208 11.1709 20.7293 11.4481C20.3378 11.7252 19.8856 11.9044 19.4105 11.9707C18.9354 12.037 18.4514 11.9884 17.999 11.829V12C17.9988 13.418 17.4966 14.7901 16.5814 15.8732C15.6662 16.9562 14.3971 17.6803 12.999 17.917V20H15.999C16.2539 20.0003 16.499 20.0979 16.6844 20.2728C16.8697 20.4478 16.9812 20.687 16.9962 20.9414C17.0111 21.1958 16.9283 21.4464 16.7647 21.6418C16.6011 21.8373 16.3691 21.9629 16.116 21.993L15.999 22H7.999C7.74412 21.9997 7.49897 21.9021 7.31363 21.7272C7.1283 21.5522 7.01677 21.313 7.00183 21.0586C6.98689 20.8042 7.06967 20.5536 7.23326 20.3582C7.39686 20.1627 7.6289 20.0371 7.882 20.007L7.999 20H10.999V17.917C9.639 17.6868 8.39979 16.9952 7.48988 15.9585C6.57997 14.9218 6.0549 13.6034 6.003 12.225L5.999 12V11.829C5.56043 11.9843 5.09175 12.0354 4.63002 11.9783C4.16829 11.9213 3.72615 11.7576 3.33856 11.5003C2.95096 11.243 2.62852 10.899 2.39673 10.4956C2.16494 10.0922 2.03014 9.64045 2.003 9.176L2 9L2.005 8.824C2.03204 8.35958 2.16672 7.90782 2.39839 7.5044C2.63006 7.10099 2.95238 6.75698 3.33987 6.49956C3.72736 6.24214 4.16941 6.07836 4.63108 6.02116C5.09276 5.96397 5.56141 6.01492 6 6.17L5.999 4C5.999 3.73478 6.10436 3.48043 6.29189 3.29289C6.47943 3.10536 6.73378 3 6.999 3H16.999ZM4.999 8C4.73378 8 4.47943 8.10536 4.29189 8.29289C4.10436 8.48043 3.999 8.73478 3.999 9C3.999 9.26522 4.10436 9.51957 4.29189 9.70711C4.47943 9.89464 4.73378 10 4.999 10C5.26422 10 5.51857 9.89464 5.70611 9.70711C5.89364 9.51957 5.999 9.26522 5.999 9C5.999 8.73478 5.89364 8.48043 5.70611 8.29289C5.51857 8.10536 5.26422 8 4.999 8ZM18.999 8C18.7338 8 18.4794 8.10536 18.2919 8.29289C18.1044 8.48043 17.999 8.73478 17.999 9C17.999 9.26522 18.1044 9.51957 18.2919 9.70711C18.4794 9.89464 18.7338 10 18.999 10C19.2642 10 19.5186 9.89464 19.7061 9.70711C19.8936 9.51957 19.999 9.26522 19.999 9C19.999 8.73478 19.8936 8.48043 19.7061 8.29289C19.5186 8.10536 19.2642 8 18.999 8Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57066">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
