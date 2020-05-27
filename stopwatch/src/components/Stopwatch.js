import React, { Component } from 'react'

 class Stopwatch extends Component {
     constructor(props){
         super(props);
         this.state = {timer:0,start:false}
         this.start = this.start.bind(this);
         this.reset = this.reset.bind(this);
         this.pause = this.pause.bind(this);

     }
     start(){
         
     }
    render() {
        return (
            <div>
                <h1></h1>
                <button onClick={this.start} >
                    Start
                </button>
                <button onClick={this.pause} >
                    Pause
                </button>
                <button onClick={this.reset} >
                    Reset
                </button>

            </div>
        )
    }
}
export default Stopwatch;
