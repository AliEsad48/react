import React, { useState } from "react"

const RandomImages = () => {
  const [sayi, setSayi] = useState(0)

  const sayiUret = () => {
    const rastgeleSayi = Math.floor(Math.random() * 9 + 1)
    setSayi(rastgeleSayi)
  }

  return <div></div>
}

export default RandomImages
