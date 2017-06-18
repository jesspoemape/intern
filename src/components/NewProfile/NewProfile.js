import React, { Component } from 'react';
import './NewProfile.css';

class NewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }

        this.handleBioChange = this.handleChange.bind(this, 'bio');
        this.handleNameChange = this.handleChange.bind(this, 'name');
        this.handlePicChange = this.handleChange.bind(this, 'profilePic');
        this.handleTagChange = this.handleChange.bind(this, 'tagline');
    }

// class method to handle input of user info
handleChange(field, event) {
    console.log(field, event.target.value);
    this.setState({ [field]: event.target.value} );
}

    render() {
        return (
            <div className="main-container">
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="user-input" 
                    onChange={ this.handleNameChange }
                />
                <input 
                    type="text" 
                    placeholder="Tag Line" 
                    className="user-input" 
                    onChange={ this.handleTagChange }
                />
                <input 
                    type="text" 
                    placeholder="Profile Image Url" 
                    className="user-input" 
                    onChange={ this.handlePicChange }
                />
                <input 
                    type="text" 
                    placeholder="Bio" 
                    className="user-input" 
                    onChange={ this.handleBioChange }
                />
                <button className="user-input submit-btn"
                        onClick={ this.addUser }
                >
                    Get Started
                </button>
            </div>
        );
    }
}

export default NewProfile;