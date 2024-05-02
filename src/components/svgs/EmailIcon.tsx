import {memo, SVGProps} from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.884}
        d="M2.837 3.095H13.67c.713 0 1.29.577 1.29 1.29v7.737a1.29 1.29 0 0 1-1.29 1.29H2.837a1.29 1.29 0 0 1-1.29-1.29V4.384c0-.712.578-1.29 1.29-1.29Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.884}
        d="m12.895 5.158-4.642 3.61-4.642-3.61"
      />
    </svg>
  );
}

const EmailIcon = memo(SvgComponent)
export default EmailIcon
