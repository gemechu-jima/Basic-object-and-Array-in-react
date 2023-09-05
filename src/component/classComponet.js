import React, { Component } from 'react'

export class classComponet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
      document.title=`click ${this.state.count} times`
    }
    componentDidUpdate(prevprops, prevState){
        if(prevState.count!==this.state.count){
        console.log('update counter')
        document.title=`click ${this.state.count} times`
        }
    }
  render() {
    return (
      <div><h2>classComponet</h2>
       <input type='text' value={this.state.name} onChange={(event)=>{
        this.setState({name:event.target.value})}}/>
    <button onClick={()=>{this.setState({count:this.state.count+1})}}>
        Click {this.state.count} times
    </button>
      </div>
    )
  }
}

export default classComponet