import React from "react";

export const PigOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66374)">
<path d="M15 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99821 6H11.4972L15.9972 3V6.803C17.2348 7.51912 18.1771 8.65245 18.6552 10H19.9962C20.2614 10 20.5158 10.1054 20.7033 10.2929C20.8909 10.4804 20.9962 10.7348 20.9962 11V13C20.9962 13.2652 20.8909 13.5196 20.7033 13.7071C20.5158 13.8946 20.2614 14 19.9962 14H18.6542C18.5972 14.16 18.5342 14.318 18.4642 14.472M16.9972 17V18.5C16.9972 18.8978 16.8392 19.2794 16.5579 19.5607C16.2766 19.842 15.895 20 15.4972 20C15.0994 20 14.7179 19.842 14.4366 19.5607C14.1552 19.2794 13.9972 18.8978 13.9972 18.5V17.917C13.6668 17.9724 13.3323 18.0001 12.9972 18H8.99721C8.66215 18.0001 8.32766 17.9724 7.99721 17.917V18.5C7.99721 18.8978 7.83917 19.2794 7.55787 19.5607C7.27657 19.842 6.89503 20 6.49721 20C6.09939 20 5.71785 19.842 5.43655 19.5607C5.15525 19.2794 4.99721 18.8978 4.99721 18.5V16.5V16.473C4.25439 15.8089 3.68864 14.9703 3.35103 14.0329C3.01342 13.0955 2.91458 12.0887 3.06343 11.1035C3.21228 10.1183 3.60413 9.1857 4.20362 8.38985C4.80311 7.594 5.59136 6.95997 6.49721 6.545"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66374">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
