import React, { Component } from 'react'
import { Pannellum, PannellumVideo } from "pannellum-react"
import logo from './assets/img/epsi_street.jpg'
import './App.css'

class App extends Component {
  render() {
    return (
    <Pannellum
        width="100%"
        height="500px"
        image={logo}
        pitch={0}
        yaw={0}
        hfov={100}
        autoLoad
        showFullscreenCtrl
        orientationOnByDefault
        onLoad={() => {
            console.log("panorama loaded");
        }}
        hotspotDebug
    >
      <Pannellum.Hotspot
        type="info"
        pitch={-4.925175050979432}
        yaw={-126.50057332509138}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf"
      />
    </Pannellum>
    )
  }
}

export default App
