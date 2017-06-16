import React, { Component } from 'react';
import './NewProfile.css';

class NewProfile extends Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTagline: '',
            inputProfilePic: '',
            inputBio: '',
            newUser: {name: '', tagline: '', profilePic: '', bio:''}
        }

        this.handleBioChange = this.handleChange.bind(this, 'inputBio');
        this.handleNameChange = this.handleChange.bind(this, 'inputName');
        this.handlePicChange = this.handleChange.bind(this, 'inputProfilePic');
        this.handleTagChange = this.handleChange.bind(this, 'inputTagline');
    }

// class method to handle input of user info
handleChange(field, event) {
    console.log(event.target.value);
    this.setState({ [field]: event.target.value} );
}

// class method to create a new account object
newProfile() {
    this.setState({
        newUser: Object.assign({}, {
            name: inputName,
            tagline: inputTagline,
            profilePic: inputProfilePic,
            bio: inputBio
            })
        });
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