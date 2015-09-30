import React from 'react';
import css from 'css/landing-page.css';

const thingsWeKnow = [
    'iOS',
    'HTML5',
    'Swift',
    'React',
    'Node',
    'Webpack',
    'Cocoa Touch'
];

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whatWeKnow: thingsWeKnow[0]
        };
    }

    componentDidMount() {
        this.whatWeKnowLoop();
    }

    render() {
        return (
            <div className="background">
                <h1>We know {this.state.whatWeKnow}</h1>
            </div>
        );
    }

    whatWeKnowLoop() {
        let i = 0;
        setInterval(() => {
            i = (i < thingsWeKnow.length - 1) ? i + 1 : 0;
            this.setState({
                whatWeKnow: thingsWeKnow[i]
            });
        }, 1000);
    }


}
