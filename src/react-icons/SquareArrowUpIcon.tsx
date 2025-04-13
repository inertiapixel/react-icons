import React from "react";

export const SquareArrowUpIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57509)">
<path d="M19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM12 7L11.91 7.004L11.852 7.011L11.734 7.036L11.629 7.071L11.516 7.125L11.405 7.196C11.3653 7.22554 11.3279 7.25796 11.293 7.293L7.293 11.293L7.21 11.387C7.06075 11.5794 6.98683 11.8197 7.00211 12.0627C7.01739 12.3057 7.12082 12.5348 7.293 12.707L7.387 12.79C7.5794 12.9393 7.81965 13.0132 8.06268 12.9979C8.30571 12.9826 8.53481 12.8792 8.707 12.707L11 10.415V16L11.007 16.117C11.0371 16.3701 11.1627 16.6021 11.3582 16.7657C11.5536 16.9293 11.8042 17.0121 12.0586 16.9972C12.313 16.9822 12.5522 16.8707 12.7272 16.6854C12.9021 16.5 12.9997 16.2549 13 16V10.415L15.293 12.707L15.387 12.79C15.588 12.9454 15.8406 13.0185 16.0935 12.9944C16.3464 12.9703 16.5807 12.8508 16.7488 12.6603C16.9168 12.4697 17.006 12.2223 16.9982 11.9684C16.9905 11.7144 16.8863 11.473 16.707 11.293L12.707 7.293L12.625 7.22L12.521 7.146L12.423 7.094L12.313 7.05L12.201 7.02L12.075 7.003L12 7Z" />
</g>
<defs>
<clipPath id="clip0_802_57509">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
