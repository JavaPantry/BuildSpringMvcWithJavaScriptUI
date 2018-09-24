import { groupBy } from "lodash-es"
import people from "./people"

import "./style.scss"
import './image-example'

const managerGroups = groupBy(people, "manager")

const appRoot = document.getElementById("app-root");
const root = document.createElement("div");
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}  <h1>Hello Alex</h1><br/><h3>from javascript bundle.js</h3></pre>`
appRoot.appendChild(root);