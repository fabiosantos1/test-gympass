import styles from "./scss/index.scss"
import App from "./app"

const slider = document.querySelector(".slider")
const app = new App(slider)
app.render()
