import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer id="contactMe">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link disabled">Email: blankeyboat@gmail.com</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/blankeyboat903">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/alexander-blankenship-82233a234/">Linkedin</a>
                    </li>
                </ul>
            </footer>
        )
    }
}