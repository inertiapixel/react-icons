import React from "react";

export const AssetIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59066)">
<path d="M19 2C19.472 1.99979 19.9375 2.11097 20.3584 2.32449C20.7794 2.53802 21.144 2.84787 21.4227 3.22886C21.7014 3.60985 21.8862 4.05122 21.9622 4.5171C22.0382 4.98298 22.0032 5.46021 21.86 5.91L21.753 6.201L21.707 6.294C21.6663 6.37933 21.6217 6.46267 21.573 6.544L15.097 18.453C15.0772 18.489 15.0551 18.5237 15.031 18.557C14.2513 19.8803 13.058 20.9105 11.635 21.4887C10.2121 22.0668 8.63842 22.1609 7.15669 21.7565C5.67495 21.352 4.36737 20.4714 3.43551 19.2505C2.50364 18.0295 1.99922 16.5359 2 15L2.004 14.76C2.04348 13.6027 2.36946 12.4732 2.95271 11.4729C3.53597 10.4725 4.3583 9.63246 5.346 9.028L5.602 8.878L17.307 2.523C17.427 2.441 17.553 2.36767 17.685 2.303L17.9 2.207L18.036 2.159C18.338 2.056 18.663 2 19 2ZM9 12C8.23479 12 7.49849 12.2923 6.94174 12.8173C6.38499 13.3422 6.04989 14.0601 6.005 14.824L6 15C6 15.5933 6.17595 16.1734 6.50559 16.6667C6.83524 17.1601 7.30377 17.5446 7.85195 17.7716C8.40013 17.9987 9.00333 18.0581 9.58527 17.9424C10.1672 17.8266 10.7018 17.5409 11.1213 17.1213C11.5409 16.7018 11.8266 16.1672 11.9424 15.5853C12.0581 15.0033 11.9987 14.4001 11.7716 13.8519C11.5446 13.3038 11.1601 12.8352 10.6667 12.5056C10.1734 12.1759 9.59334 12 9 12ZM16.04 5.488L10.92 8.266C12.0669 8.59391 13.1111 9.20906 13.9538 10.0532C14.7966 10.8974 15.41 11.9426 15.736 13.09L18.524 7.962C17.9027 7.86236 17.3284 7.56985 16.8824 7.12587C16.4365 6.68188 16.1414 6.1089 16.039 5.488M19 4C18.8923 3.99981 18.7852 4.01704 18.683 4.051L18.373 4.221C18.2604 4.31171 18.1689 4.42574 18.1046 4.55525C18.0404 4.68476 18.005 4.82666 18.0008 4.97117C17.9967 5.11568 18.024 5.25937 18.0807 5.39233C18.1375 5.52529 18.2224 5.64436 18.3296 5.74133C18.4369 5.83831 18.5638 5.91088 18.7018 5.95405C18.8398 5.99722 18.9855 6.00996 19.1289 5.9914C19.2722 5.97283 19.4099 5.9234 19.5323 5.8465C19.6547 5.76961 19.759 5.66709 19.838 5.546L19.91 5.416C19.9797 5.26361 20.01 5.09614 19.9981 4.92898C19.9862 4.76183 19.9325 4.60034 19.8419 4.45936C19.7513 4.31838 19.6267 4.20244 19.4796 4.12217C19.3325 4.0419 19.1676 3.99989 19 4Z" />
</g>
<defs>
<clipPath id="clip0_802_59066">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
