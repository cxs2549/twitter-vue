import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/css/main.css"
import "./assets/css/app.scss"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"

import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import Left from "./components/Left/Left"
import Right from "./components/Right/Right"
import Center from "./components/Center/Center"
import Bottombar from './components/Bottombar/Bottombar'

Vue.config.productionTip = false

Vue.component("theme-switcher", ThemeSwitcher)
Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component("left", Left)
Vue.component("right", Right)
Vue.component("center", Center)
Vue.component("bottombar", Bottombar)

Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
