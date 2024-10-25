import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.onChangeMember = this.onChangeMember.bind(this);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        teamName: "",
        member: "",
        thought: "",
        fileName: "",
        filePath: ""
      },
      message: "",
      file: null
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;
    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeTeamName(e) {
    const teamName = e.target.value;
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        teamName: teamName
      }
    }));
  }

  onChangeMember(e) {
    const member = e.target.value;
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        member: member
      }
    }));
  }

  onChangeThought(e) {
    const thought = e.target.value;
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        thought: thought
      }
    }));
  }

  onFileChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    const formData = new FormData();
    formData.append('title', this.state.currentTutorial.title);
    formData.append('teamName', this.state.currentTutorial.teamName);
    formData.append('member', this.state.currentTutorial.member);
    formData.append('thought', this.state.currentTutorial.thought);
    if (this.state.file) {
      formData.append('file', this.state.file);
    }

    TutorialDataService.update(
      this.state.currentTutorial.id,
      formData
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!",
          currentTutorial: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/tutorials');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="teamName">Team Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="teamName"
                  value={currentTutorial.teamName}
                  onChange={this.onChangeTeamName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="member">Member</label>
                <input
                  type="text"
                  className="form-control"
                  id="member"
                  value={currentTutorial.member}
                  onChange={this.onChangeMember}
                />
              </div>
              <div className="form-group">
                <label htmlFor="thought">Thought</label>
                <input
                  type="text"
                  className="form-control"
                  id="thought"
                  value={currentTutorial.thought}
                  onChange={this.onChangeThought}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="file"
                  onChange={this.onFileChange}
                />
              </div>
              {currentTutorial.fileName && (
                <div className="form-group">
                  <label>Current File: </label>
                  <a href={`http://localhost:8080/${currentTutorial.filePath}`} target="_blank" rel="noopener noreferrer">
                    {currentTutorial.fileName}
                  </a>
                </div>
              )}
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Tutorial);