import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.onChangeMember = this.onChangeMember.bind(this);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      teamName: "", 
      member: "",
      thought: "",
      file: null,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeTeamName(e) {
    this.setState({
      teamName: e.target.value
    });
  }
  onChangeMember(e) {
    this.setState({
      member: e.target.value
    });
  }
  onChangeThought(e) {
    this.setState({
      thought: e.target.value
    });
  }
  onFileChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  saveTutorial() {
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('teamName', this.state.teamName);
    formData.append('member', this.state.member);
    formData.append('thought', this.state.thought);
    if (this.state.file) {
      formData.append('file', this.state.file);
    }

    TutorialDataService.create(formData)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          teamName: response.data.teamName,
          member: response.data.member,
          thought: response.data.thought,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      teamName: "",
      member: "",
      thought: "",
      file: null,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">제목</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamName">팀명</label>
              <input
                type="text"
                className="form-control"
                id="teamName"
                required
                value={this.state.teamName}
                onChange={this.onChangeTeamName}
                name="teamName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="member">팀원</label>
              <input
                type="text"
                className="form-control"
                id="member"
                required
                value={this.state.member}
                onChange={this.onChangeMember}
                name="member"
              />
            </div>
            <div className="form-group">
              <label htmlFor="thought">소감문</label>
              <input
                type="text"
                className="form-control"
                id="thought"
                required
                value={this.state.thought}
                onChange={this.onChangeThought}
                name="thought"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">파일 첨부</label>
              <input
                type="file"
                className="form-control-file"
                id="file"
                onChange={this.onFileChange}
                name="file"
              />
            </div>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}