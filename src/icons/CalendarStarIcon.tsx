import React from "react";

export const CalendarStarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80361)">
<path d="M11 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V10.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3V7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11H15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7983 20.8175L15.6263 21.9555C15.5618 21.989 15.4893 22.004 15.4168 21.9987C15.3444 21.9934 15.2748 21.9681 15.2159 21.9256C15.157 21.8831 15.111 21.825 15.0832 21.7579C15.0554 21.6907 15.0467 21.6172 15.0583 21.5455L15.4733 19.1345L13.7163 17.4275C13.6638 17.3768 13.6267 17.3123 13.6091 17.2416C13.5915 17.1708 13.5942 17.0965 13.6168 17.0271C13.6395 16.9578 13.6811 16.8962 13.7371 16.8494C13.7931 16.8026 13.861 16.7725 13.9333 16.7625L16.3613 16.4105L17.4473 14.2175C17.4798 14.1521 17.5298 14.0972 17.5918 14.0588C17.6538 14.0204 17.7253 14 17.7983 14C17.8712 14 17.9427 14.0204 18.0047 14.0588C18.0667 14.0972 18.1168 14.1521 18.1493 14.2175L19.2353 16.4105L21.6633 16.7625C21.7353 16.7728 21.803 16.8031 21.8587 16.85C21.9144 16.8968 21.9559 16.9583 21.9785 17.0275C22.0011 17.0967 22.0039 17.1708 21.9865 17.2415C21.9691 17.3122 21.9323 17.3766 21.8803 17.4275L20.1233 19.1345L20.5373 21.5445C20.5497 21.6163 20.5417 21.6902 20.5143 21.7578C20.4868 21.8254 20.4409 21.8839 20.3819 21.9267C20.3228 21.9695 20.253 21.9949 20.1802 22C20.1074 22.005 20.0347 21.9896 19.9703 21.9555L17.7983 20.8175Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80361">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
