import React, { useState } from 'react'
import Overlay from './overlay-card'
import './sketchie-card.css'

const SketchieCard = ({ sketchie }) => {
  const [showName, setShowName] = useState(false)

  const handleClick = () => {
    setShowName(!showName)
  }

  return (
    <div className="container rounded-3xl relative" onClick={handleClick}>
      <Overlay sketchie={sketchie} showName={showName} />
      <img src={sketchie.picture + sketchie.id} alt={`Image de ${sketchie.name}`} className="rounded-3xl" />
    </div>
  )
}

export default SketchieCard
