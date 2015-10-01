import 'css/mathjax-matrix.css';
import React from 'react';

export default class MathJax extends React.Component {
    render() {
        return (
            <div className="mathjax-matrix">
                {
                    '$u(\\vec{x},t)=2^n\\hat{u}\\cos(\\omega t)\\sum_{i=1}^n\\sin(k_ix_i)$'
                }
            </div>
        );
    }
}
