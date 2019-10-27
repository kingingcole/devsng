import React from "react"

const SvgLogo2 = props => (
  <svg width={100} height={35} {...props}>
    <g fill="none" fillRule="evenodd" fontSize={28}>
      <text
        fontFamily="FiraSans-ExtraBold, Fira Sans"
        fontWeight={600}
        letterSpacing={4}
        fill="#F9FAFB"
        transform="translate(0 -8)"
      >
        <tspan x={0} y={33}>
          {"{)"}
        </tspan>
      </text>
      <text
        opacity={0.747}
        fontFamily="Circular-Black, Circular"
        fontWeight={700}
        letterSpacing={-2}
        fill="#FFF"
        transform="translate(0 -8)"
      >
        <tspan x={24} y={37}>
          {"evs.ng"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default SvgLogo2
