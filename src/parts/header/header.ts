import './header.scss'

export default class Header {
    header: HTMLDivElement

    constructor() {
        this.header = document.querySelector('.header')

        this.event()
    }

    handleClick() {
        console.log('header is clicked')
    }

    event() {
        this.header.addEventListener('click', () => this.handleClick())
    }
}
