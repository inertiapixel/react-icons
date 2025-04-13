import React from "react";

export const CircleLetterVIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58447)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM14.243 7.03C13.9857 6.96556 13.7134 7.00595 13.4859 7.14229C13.2585 7.27863 13.0945 7.49974 13.03 7.757L12 11.875L10.97 7.757C10.9389 7.62881 10.8827 7.50804 10.8046 7.40166C10.7266 7.29528 10.6283 7.20539 10.5154 7.13717C10.4025 7.06895 10.2772 7.02374 10.1467 7.00416C10.0163 6.98457 9.88323 6.99099 9.75526 7.02305C9.62729 7.05511 9.50693 7.11217 9.40111 7.19095C9.29529 7.26972 9.20611 7.36866 9.13869 7.48206C9.07128 7.59546 9.02697 7.72107 9.00831 7.85167C8.98966 7.98227 8.99703 8.11526 9.03 8.243L11.03 16.243C11.282 17.253 12.718 17.253 12.97 16.243L14.97 8.243C15.0344 7.98574 14.9941 7.71342 14.8577 7.48594C14.7214 7.25846 14.5003 7.09445 14.243 7.03Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58447">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
