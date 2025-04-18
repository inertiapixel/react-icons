import React from "react";

export const CurrencyTakaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_77147)">
<path d="M15.5 15.5C15.5 15.7652 15.6054 16.0196 15.7929 16.2071C15.9804 16.3946 16.2348 16.5 16.5 16.5C16.7652 16.5 17.0196 16.3946 17.2071 16.2071C17.3946 16.0196 17.5 15.7652 17.5 15.5C17.5 15.2348 17.3946 14.9804 17.2071 14.7929C17.0196 14.6054 16.7652 14.5 16.5 14.5C16.2348 14.5 15.9804 14.6054 15.7929 14.7929C15.6054 14.9804 15.5 15.2348 15.5 15.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5C9.53043 5 10.0391 5.21071 10.4142 5.58579C10.7893 5.96086 11 6.46957 11 7V16C11 16.7956 11.3161 17.5587 11.8787 18.1213C12.4413 18.6839 13.2044 19 14 19C14.7956 19 15.5587 18.6839 16.1213 18.1213C16.6839 17.5587 17 16.7956 17 16V15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 11H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77147">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
