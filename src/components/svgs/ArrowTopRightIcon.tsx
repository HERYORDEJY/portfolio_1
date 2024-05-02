import {memo, SVGProps} from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M.77 1.608c0-.274.115-.537.317-.731.203-.194.478-.303.765-.303h8.67c.286 0 .56.109.764.303.202.194.316.457.316.73V9.9c-.01.268-.128.521-.33.708a1.11 1.11 0 0 1-.75.29c-.281 0-.55-.104-.752-.29a1.016 1.016 0 0 1-.33-.708V4.105l-7.588 7.258a1.107 1.107 0 0 1-.765.303c-.287 0-.562-.11-.765-.303a1.012 1.012 0 0 1-.317-.732c0-.274.114-.537.317-.731L7.91 2.642H1.852c-.287 0-.562-.11-.765-.303a1.012 1.012 0 0 1-.316-.731Z"
      />
    </svg>
  );
}

const ArrowTopRightIcon = memo(SvgComponent)
export default ArrowTopRightIcon
