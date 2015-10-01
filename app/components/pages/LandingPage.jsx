import React from 'react';
import $ from 'jquery';
import 'css/landing-page.css';
import Equation from 'app/components/Equation';

export default class LandingPage extends React.Component {
    componentDidMount() {
        let node = $(React.findDOMNode(this));
        node.hide();
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, node.get(0)], () => {
            node.fadeIn(700);
        });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="columns">
                    <Equation/>
                    <p className="title">
                        Proof PDX
                    </p>
                    <p className="subtitle">
                        Web and iOS development with extraordinary attention to detail.
                    </p>
                    <div className="tiles">
                        <div>Information Design</div>
                        <div>WordPress</div>
                        <div>UI/UX Design</div>
                        <div>Storytelling</div>
                        <div>Themes</div>
                    </div>
                    <div className="tiles">
                        <div>iOS</div>
                        <div>HTML5</div>
                        <div>Node.js</div>
                        <div>Swift</div>
                        <div>Cocoa Touch</div>
                        <div>PHP</div>
                        <div>REST</div>
                        <div>OAuth</div>
                        <div>Advanced Math</div>
                    </div>
                </div>
            </div>
        );
    }
}
