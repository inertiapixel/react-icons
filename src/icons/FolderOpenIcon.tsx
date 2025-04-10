import React from "react";

export const FolderOpenIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_73275)">
<path d="M5 19L7.757 11.649C7.82844 11.4584 7.95632 11.2942 8.12357 11.1782C8.29082 11.0623 8.48948 11.0001 8.693 11H21M5 19H19.026C19.4913 18.9999 19.942 18.8375 20.3004 18.5409C20.6589 18.2443 20.9028 17.832 20.99 17.375L21.986 12.164C22.0098 12.0208 22.0022 11.8741 21.9636 11.7342C21.925 11.5943 21.8564 11.4644 21.7626 11.3536C21.6688 11.2429 21.5519 11.1539 21.4203 11.0928C21.2886 11.0317 21.1452 11.0001 21 11M5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H9L12 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73275">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
