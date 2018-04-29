import * as React from 'react';

interface AppProps {
    countFn(c:number):void;
    countDefault:number
 };
interface AppState {
    count: number;
};
class Counter extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }
    incriment = (): void => {
        this.props.countFn(1);
    }

    decriment = (): void => {
        this.props.countFn(-1)
    }
    public render() {
        return (
            <div>
                <button onClick={this.incriment} className="btn btn-warning">+1</button>
                <button onClick={this.decriment} className="btn btn-danger">-1</button>
            </div>
        )
    }
}
export default Counter;