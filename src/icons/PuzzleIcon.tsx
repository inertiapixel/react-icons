import React from "react";

export const PuzzleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_57604)">
<path d="M10 2C10.7652 1.99996 11.5015 2.29233 12.0583 2.81728C12.615 3.34224 12.9501 4.06011 12.995 4.824L13 5V6H16C16.5046 5.99984 16.9906 6.19041 17.3605 6.5335C17.7305 6.87659 17.9572 7.34684 17.995 7.85L18 8V11H19C19.7809 10.9992 20.5313 11.303 21.0918 11.8468C21.6523 12.3905 21.9787 13.1314 22.0016 13.912C22.0245 14.6925 21.7422 15.4513 21.2145 16.027C20.6869 16.6027 19.9556 16.9499 19.176 16.995L19 17H18V20C18.0002 20.5046 17.8096 20.9906 17.4665 21.3605C17.1234 21.7305 16.6532 21.9572 16.15 21.995L16 22H13C12.4954 22.0002 12.0094 21.8096 11.6395 21.4665C11.2695 21.1234 11.0428 20.6532 11.005 20.15L11 20V19C10.9997 18.7451 10.9021 18.5 10.7272 18.3146C10.5522 18.1293 10.313 18.0178 10.0586 18.0028C9.80416 17.9879 9.55362 18.0707 9.35817 18.2343C9.16271 18.3979 9.0371 18.6299 9.007 18.883L9 19V20C9.00016 20.5046 8.80959 20.9906 8.4665 21.3605C8.12341 21.7305 7.65316 21.9572 7.15 21.995L7 22H4C3.49542 22.0002 3.00943 21.8096 2.63945 21.4665C2.26947 21.1234 2.04284 20.6532 2.005 20.15L2 20V17C1.99984 16.4954 2.19041 16.0094 2.5335 15.6395C2.87659 15.2695 3.34684 15.0428 3.85 15.005L4 15H5C5.25488 14.9997 5.50003 14.9021 5.68537 14.7272C5.8707 14.5522 5.98223 14.313 5.99717 14.0586C6.01211 13.8042 5.92933 13.5536 5.76574 13.3582C5.60214 13.1627 5.3701 13.0371 5.117 13.007L5 13H4C3.49542 13.0002 3.00943 12.8096 2.63945 12.4665C2.26947 12.1234 2.04284 11.6532 2.005 11.15L2 11V8C1.99984 7.49542 2.19041 7.00943 2.5335 6.63945C2.87659 6.26947 3.34684 6.04284 3.85 6.005L4 6H7V5C7 4.20435 7.31607 3.44129 7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57604">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
