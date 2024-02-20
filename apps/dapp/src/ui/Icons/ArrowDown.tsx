interface ArrowDownProps {
  className?: string;
  children?: React.ReactNode;
}

export const ArrowDown = ({ className }: ArrowDownProps) => {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Down</title>
      <path
        d="M6.83333 9.11915L10.125 5.82749C10.2019 5.74789 10.2938 5.68441 10.3955 5.64073C10.4972 5.59706 10.6065 5.57407 10.7172 5.57311C10.8278 5.57215 10.9375 5.59323 11.04 5.63513C11.1424 5.67703 11.2354 5.73891 11.3137 5.81716C11.3919 5.8954 11.4538 5.98844 11.4957 6.09086C11.5376 6.19327 11.5587 6.303 11.5577 6.41365C11.5567 6.5243 11.5338 6.63365 11.4901 6.73532C11.4464 6.83699 11.3829 6.92895 11.3033 7.00582L6.58917 11.72C6.51196 11.7976 6.42016 11.8593 6.31905 11.9013C6.21793 11.9434 6.10951 11.965 6 11.965C5.89049 11.965 5.78207 11.9434 5.68096 11.9013C5.57985 11.8593 5.48805 11.7976 5.41083 11.72L0.696668 7.00582C0.617076 6.92895 0.553591 6.83699 0.509916 6.73532C0.466242 6.63365 0.443254 6.5243 0.442292 6.41365C0.441331 6.303 0.462415 6.19327 0.504316 6.09086C0.546217 5.98844 0.608095 5.8954 0.686338 5.81716C0.764582 5.73891 0.857626 5.67703 0.960039 5.63513C1.06245 5.59323 1.17219 5.57215 1.28284 5.57311C1.39348 5.57407 1.50283 5.59706 1.6045 5.64073C1.70617 5.68441 1.79813 5.74789 1.875 5.82749L5.16667 9.11915V1.13082C5.16667 0.909805 5.25447 0.697843 5.41075 0.541563C5.56703 0.385283 5.77899 0.297485 6 0.297485C6.22101 0.297485 6.43298 0.385283 6.58926 0.541563C6.74554 0.697843 6.83333 0.909805 6.83333 1.13082V9.11915Z"
        fill="black"
      />
    </svg>
  );
};