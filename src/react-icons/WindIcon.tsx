import React from "react";

export const WindIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59834)">
<path d="M5 7.99954H13.5C13.9644 8.00843 14.4222 7.88775 14.8218 7.65103C15.2215 7.41431 15.5473 7.07092 15.7627 6.65937C15.9782 6.24783 16.0747 5.7844 16.0414 5.32108C16.0082 4.85775 15.8465 4.41285 15.5745 4.03627C15.3026 3.6597 14.931 3.36635 14.5017 3.18912C14.0723 3.01189 13.602 2.95779 13.1436 3.03289C12.6852 3.108 12.2568 3.30933 11.9064 3.61432C11.5561 3.9193 11.2976 4.31587 11.16 4.75954"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12.0005H18.5C18.9644 11.9916 19.4222 12.1123 19.8218 12.349C20.2215 12.5857 20.5473 12.9291 20.7627 13.3406C20.9782 13.7522 21.0747 14.2156 21.0414 14.6789C21.0082 15.1423 20.8465 15.5872 20.5745 15.9637C20.3026 16.3403 19.931 16.6337 19.5017 16.8109C19.0723 16.9881 18.602 17.0422 18.1436 16.9671C17.6852 16.892 17.2568 16.6907 16.9064 16.3857C16.5561 16.0807 16.2976 15.6841 16.16 15.2405"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16.0005H9.5C9.96443 15.9916 10.4222 16.1123 10.8218 16.349C11.2215 16.5857 11.5473 16.9291 11.7627 17.3406C11.9782 17.7522 12.0747 18.2156 12.0414 18.6789C12.0082 19.1423 11.8465 19.5872 11.5745 19.9637C11.3026 20.3403 10.931 20.6337 10.5017 20.8109C10.0723 20.9881 9.60203 21.0422 9.14362 20.9671C8.68522 20.892 8.2568 20.6907 7.90643 20.3857C7.55605 20.0807 7.29758 19.6841 7.16 19.2405"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59834">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
