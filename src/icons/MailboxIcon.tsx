import React from "react";

export const MailboxIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_69630)">
<path d="M10 21V14.5C10 13.5717 9.63125 12.6815 8.97487 12.0251C8.3185 11.3687 7.42826 11 6.5 11M6.5 11C5.57174 11 4.6815 11.3687 4.02513 12.0251C3.36875 12.6815 3 13.5717 3 14.5V21H21V15C21 13.9391 20.5786 12.9217 19.8284 12.1716C19.0783 11.4214 18.0609 11 17 11H6.5Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V3H16L18 5L16 7H12" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 15H7" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69630">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
