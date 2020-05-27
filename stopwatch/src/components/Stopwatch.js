import React, { Component } from 'react'

 class Stopwatch extends Component {
     constructor(props){
         super(props);
         this.start = this.start.bind(this);
         this.reset = this.reset.bind(this);
         this.pause = this.pause.bind(this);

     }
    render() {
        return (
            <div>
                <h1></h1>
                <button onClick={this.start} >
                    Start
                </button>
            </div>
        )
    }
}
export default Stopwatch;
