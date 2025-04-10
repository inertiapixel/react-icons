import React from "react";

export const InvoiceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_71272)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9982 12V19C19.0455 19.3774 18.9706 19.76 18.7846 20.0918C18.5986 20.4235 18.3113 20.687 17.9646 20.8435C17.618 21.0001 17.2303 21.0415 16.8584 20.9617C16.4866 20.8818 16.15 20.685 15.8982 20.4C15.7439 20.2026 15.5466 20.0429 15.3213 19.933C15.0961 19.8232 14.8488 19.7661 14.5982 19.7661C14.3476 19.7661 14.1003 19.8232 13.875 19.933C13.6498 20.0429 13.4525 20.2026 13.2982 20.4C13.1439 20.5974 12.9466 20.7571 12.7213 20.867C12.4961 20.9768 12.2488 21.0339 11.9982 21.0339C11.7476 21.0339 11.5003 20.9768 11.275 20.867C11.0498 20.7571 10.8525 20.5974 10.6982 20.4C10.5439 20.2026 10.3466 20.0429 10.1213 19.933C9.89609 19.8232 9.64878 19.7661 9.39819 19.7661C9.14759 19.7661 8.90028 19.8232 8.67503 19.933C8.44978 20.0429 8.25251 20.2026 8.09819 20.4C7.84633 20.685 7.5098 20.8818 7.13792 20.9617C6.76605 21.0415 6.37839 21.0001 6.03175 20.8435C5.68512 20.687 5.39774 20.4235 5.21174 20.0918C5.02574 19.76 4.9509 19.3774 4.99819 19V5C4.99819 4.46957 5.2089 3.96086 5.58397 3.58579C5.95905 3.21071 6.46775 3 6.99819 3H13.9982L18.9982 8V12.25" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71272">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
