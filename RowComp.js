import React from 'react';

class RowComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emps:this.props.emp
        }
        
    }
    //  removeMe = (index) => {
    //     if(index > -1) {
    //       this.state.emps.slice(index, 1);
    //     }
    //     return this.state.emps;
    //   }
    render(){
        return(
            <tr>
            <td>{this.state.emps.eid}</td>
            <td>{this.state.emps.ename}</td>
            <td>{this.state.emps.salary}</td>
            <td>{this.state.emps.department}</td>
            {/* <td><button type="button" className='btn btn-secondary'>DELETE</button></td>
            <td><button type="button" className='btn btn-secondary'>UPDATE</button></td> */}
            </tr>
        );
    }
}

export default RowComp;