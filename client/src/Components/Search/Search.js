import React from 'react';
import './search.css';
import Label from '../Label/Label';




class Search extends React.Component {
    // Setting the component's initial state
    state = {
        topic: "",
        startDate: "",
        endDate: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`You just searched for articles about ${this.state.topic} between the dates ${this.state.startDate} and ${this.state.endDate}`);
        this.setState({
            topic: "",
            startDate: "",
            endDate: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="searchContainer">
            <Label name="Search"/>
                <p>
                    Hello! What type of articles would you like to search for?
                </p>
                <form className="form">
                    <input
                        value={this.state.topic}
                        name="topic"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Topic"
                    />

                    <input
                        value={this.state.startDate}
                        name="startDate"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Starting Date"
                    />

                    <input
                        value={this.state.endDate}
                        name="endDate"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Ending Date"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
};

export default Search;

    // handleTopicInput(event){
    //     this.setState({topic: event.target.value})
    //     console.log(this.state.topic);
    // }

    // render(){
    //     return(
    //         <div className="searchContainer">
    //             <Label name="Search"/>
    //             <h2>Topic</h2>
    //             <input onChange={this.handleTopicInput.bind(this)} className="input" placeholder="Enter Topic" />
    //             <h2>whater</h2>
    //         </div>
    //     )
    // }


// export default Search