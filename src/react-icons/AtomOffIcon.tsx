import React from "react";

export const AtomOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84666)">
<path d="M12 12V12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.17255 9.17266C5.26655 13.0777 3.36755 17.5097 4.92955 19.0727C6.49155 20.6337 10.9296 18.7347 14.8296 14.8287M16.7135 12.7157C19.3005 9.43866 20.3555 6.21365 19.0715 4.92965C17.7875 3.64565 14.5635 4.69966 11.2875 7.28665"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.92955 4.92969C3.36755 6.49169 5.26655 10.9297 9.17255 14.8297C13.0775 18.7347 17.5096 20.6337 19.0726 19.0717M19.0006 15.0007C18.2336 13.2067 16.7856 11.1287 14.8286 9.17269C12.8846 7.22769 10.7875 5.77069 9.00055 5.00069"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84666">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
