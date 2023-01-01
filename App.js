import React from "react"
import ReactDom from "react-dom/client"


const heading = React.createElement("h1", 
{ 
    id : "title"
}, 
"this is heading")
const heading2 = React.createElement("h2", {}, "this is second heading")

const container = React.createElement("div", {}, [heading. heading2])

const root = ReactDom.createRoot(document.getElementById('root'))
// passing a react element inside the root.
root.render(container)




