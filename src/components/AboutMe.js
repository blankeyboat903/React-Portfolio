import React, { Component } from "react";


export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" id="aboutMe">
                            <div class="card" style="width: 18rem;">
                                <img src="../images/IMG_3544.jpg" class="card-img-top" alt="Me"></img>
                                <div class="card-body">
                                    <h5 class="card-title">About Me</h5>
                                    <p class="card-text">
                                        I'm a young crypto investor/degen, a healthy balance, who is looking to
                                        get involved in various projects in the crypto space, as well as experience
                                        with companies that promote accessibility to tech to people who currently do not.
                                        I'm in full belief that open source tech and transparency can bring the change that
                                        we urgently need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}