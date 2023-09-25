import React from "react"
import Info from "/components/Info.js"
import Interests from "/components/Interests.js"

export default function Main() {
    return (
        <main className="main-body">
          <Info />
          <Interests />
        </main>
    )
}