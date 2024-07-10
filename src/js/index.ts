import '../styles/main.scss'
import '../parts/header/header'
import Header from '../parts/header/header'

document.addEventListener('DOMContentLoaded', () => {
    class App {
        // header: Header

        constructor() {
            new Header()
        }
    }

    new App()
})
