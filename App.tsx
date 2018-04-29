import 'bootstrap/dist/css/bootstrap.css';
import {incriment} from './actions';
import * as React from 'react';
import Counter from './Counter';
import {connect} from 'react-redux';
interface AppProps {
  inc: (value:any) => any;
  dispatch:(value:any)=>any;
  count:any
 }
interface AppState {
  counter: any
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state={
      counter:0
    }
  }
  
  componentDidUpdate(prevProps: any,prevState:any){
    if(this.props.count!==this.state.counter){
      this.setState({counter: this.props.count})
    }else{
      
    }
    
  }

  countFn = (c: number) => {
    
    this.props.inc(c)
    
  }

  public render() {
    return (
      <div>
        <p> counter is {this.state.counter}</p>
        <Counter countDefault={0} countFn={this.countFn} />
        <Counter countDefault = {0} countFn={this.countFn} />
        
      </div>
    );
  }
}
const mapStateToProps=(state: any)=>{
  return{
    count:state.counter.count
  }
}
const mapDispatchToProps=(dispatch: any)=>{
  return {
    inc:(c: number)=>dispatch(incriment(c)),
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App as any);
