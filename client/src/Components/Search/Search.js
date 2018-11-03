import React from 'react';
import './search.css';
import Label from '../Label/Label';
import axios from 'axios';
// import { Link } from 'react-router-dom'



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
       
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=${this.state.topic}&begin_date=${this.state.startDate}&end_date=${this.state.endDate}`)
        .then( res => {
            console.log(res.data);
             this.setState({ docs :  res.data.response.docs });
        });

        // Begin building an object to contain our API call's query parameters
        // Set the API key
       
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
                    Search for past and current articles (Use YYYYMMDD format for date)
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

                { this.state.docs ?
                    this.state.docs.map((e, index )=> {
                        return(
                            <div className="articleContainer" key={index}> 
                                <div className="headLine">
                                   { e.headline.main }
                                </div>
                                <div className="snippet"></div>
                                <div className="link"> <a href={e.web_url}> {e.web_url}</a> </div>
                            </div>
                        )
                    })
                    :
                    ""
                }
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