import './App.css';
import React from 'react'


class App extends React.Component{
	constructor(props){
    super(props);
		this.state = {
			id:"",
			name : "",
			salary: "",
			department:"",
		};
	};
	 handleChange = (event) => {
		this.setState({[event.target.name]:event.target.value});
	}
	handleSubmit  = (event) => {
		event.preventDefault();
		const newEmployee = {
      id:this.state.id,
      name:this.state.name,
      salary:this.state.salary,
      department:this.state.department,
    };
    const { id,name,salary,department,employees,employee } = this.state;
	
	};
	render(){ 
    return (
			<div>
        <h2>Employee Details</h2>
				<form onSubmit={this.handleSubmit}>
					<label>ID : </label>
					<input 
					type="text"
					name="id"
					onChange  = {this.handleChange}
					/>
					<br />
          <br />
					<label >Name  : </label>
					<input 
					type="text"
					name="name"
					onChange  = {this.handleChange}
					/>
					<br />
          <br />
					<label >Salary  : </label>
					<input 
					type="text"
					name="salary"
					onChange={this.handleChange}
					/>
					<br />
          <br />
					<label >Department  :  </label>
					<input 
					type="text"
					name="department"
					onChange={this.handleChange}
					/>
					<br />
          <br />
					<button type="submit">Add Employee</button>
				</form>
        <br />
        <h2>Added Employees</h2>
         {this.state.id || this.state.name || this.state.salary || this.state.department?
         (
          <div>
          <p>{this.state.id}   {this.state.name}  {this.state.salary}  {this.state.department}</p>
        
        </div>
         ):(<p>No employees add yet.</p>  ) }
                                         
      </div>
    );
  }
}



export default App;
