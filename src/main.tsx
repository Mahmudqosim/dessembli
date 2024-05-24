import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Amplify } from "aws-amplify"
import { RecoilRoot } from "recoil"
import outputs from "../amplify_outputs.json"
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
