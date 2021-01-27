import React from 'react';
import Widgets from './widgets';

class Clock extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            time: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ time: new Date() })
    }

    componentDidMount() {
        //everything in js that isnt a primitive is just a pojo
        //take this obj, set the id
        //this is the object(the clock class) so variables declared are available anywhere in the class
        this.intervalID = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render(){

        console.log("in Clock class");
        return(
            <div>
                <h1>Clock</h1>
                <div className="clock">
                    <p>
                        <span>Time:</span>
                        <span>{this.state.time.toLocaleTimeString()}</span>
                    </p>
                        {/* <br/> */}
                    <p>
                        <span>Date:</span>
                        <span>{this.state.time.toDateString()}</span>
                    </p>
                </div>
            </div>
        )
    }
}


export default Clock;