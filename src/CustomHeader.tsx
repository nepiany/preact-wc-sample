import { Component } from 'preact'
import register from 'preact-custom-element'

class App extends Component {
    static tagName = 'custom-header';
    static observedAttributes = ['theme'];

    static style = `
:host {
    font-size: 14px;
}

.main {
    padding: 10px;
    text-align: center;
    background: #ddd;
}

.title {
    color: #888;
}

.nav {
    padding: 10px;
    background: rgba(0,0,0,.2);
}

.nav ul {
    display: flex; /* こいつは効かない */
}
    `

    constructor() {
        super()
        console.log('test')
    }

    render({ theme, title, menu }) {
        return (
            <div class={`main ${theme}`}>
                <style>{App.style}</style>
                <h1 class="title">{title}</h1>
                <nav class="nav">{menu}</nav>
            </div>
        )
    }
}

register(App, null, null, { shadow: true })