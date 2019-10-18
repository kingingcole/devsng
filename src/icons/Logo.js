import React from "react"

const SvgLogo = props => (
  <svg width={118} height={38} {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      fontFamily="CircularStd-Black, Circular Std"
      fontSize={31.058}
      fontWeight={700}
    >
      <text fill="#12AD82" letterSpacing={4.4} transform="translate(-1 -5)">
        <tspan x={0} y={31}>
          {"{"}
        </tspan>
        <tspan x={16.357} y={31}>
          {")"}
        </tspan>
      </text>
      <text letterSpacing={-0.88} fill="#4A5158" transform="translate(-1 -5)">
        <tspan x={29.04} y={35.4}>
          {"evs.n"}
        </tspan>
        <tspan x={102.379} y={35.4}>
          {"g"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgLogo
