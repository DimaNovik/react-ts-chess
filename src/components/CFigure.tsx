import React, { FC } from "react";

interface FigureProps {
  src: string,
  name: string,
}

const CFigure: FC<FigureProps> = ({src, name}) => (
  <img src={src} alt={name} className="figure" />
)

export default CFigure;