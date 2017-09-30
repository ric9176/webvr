import React, { Component } from 'react'
import 'aframe'

class App extends Component {
  render() {
    return (
      <a-scene>
      <a-text
        text="color: #000000; anchor: align; width: 5; value: Playing with aframe in react"
        position="-1.132 1.693 -1.469"
      />

      <a-image src={require('./leanjs-logo.png')} />

      <a-entity
        geometry="primitive: box"
        position="-1 0.5 -3"
        rotation="0 45 0"
        material="color: #4CC3D9" />
      <a-entity
        geometry="primitive: sphere; radius: 1.25;"
        position="0.080 3.414 -3.983"
        material="color: #EF2D5E" />
      <a-entity
        geometry="primitive: cylinder; radius: 0.5, height: 1.5"
        position="1 0.75 -3"
        material="color: #FFC65D" />
      <a-entity
        geometry="primitive: plane; width: 4; height: 4"
        position="0 0 -4"
        rotation="-90 0 0"
        material="color: #7BC8A4" />
      <a-entity
        geometry="primitive: sphere; radius: 1.25;"
        position="1.492 3.497 3.072"
        material="color: #ffff00" />
      </a-scene>
    )
  }
}

export default App
