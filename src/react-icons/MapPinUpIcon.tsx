import React from "react";

export const MapPinUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69384)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.7893 21.324C12.4219 21.4815 12.0158 21.5252 11.6233 21.4496C11.2308 21.3741 10.8699 21.1826 10.5873 20.9L6.34329 16.657C5.38204 15.6958 4.68158 14.5055 4.30801 13.1985C3.93444 11.8914 3.90009 10.5108 4.20819 9.18678C4.5163 7.86279 5.1567 6.63914 6.06895 5.63133C6.98121 4.62351 8.13522 3.86478 9.42208 3.42674C10.7089 2.98869 12.0862 2.88579 13.4239 3.12773C14.7615 3.36968 16.0155 3.94849 17.0674 4.80955C18.1193 5.67061 18.9344 6.7855 19.4358 8.04901C19.9373 9.31252 20.1085 10.683 19.9333 12.031"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 22V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 19L19 16L16 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69384">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
