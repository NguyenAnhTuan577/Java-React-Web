import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    // const projectObject = {
    //   projectName: "ProjectName PROPS",
    //   projectIdentifier: "PROPS",
    //   description: "description from PROPS"
    // };
    const projects = this.props.project.projects;
    //console.log(projects);
    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <CreateProjectButton></CreateProjectButton>
                <br />
                <hr />
                {projects.map(project => (
                  <ProjectItem key={project.id} project={project}></ProjectItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  project: state.project
});
export default connect(mapStateToProps, { getProjects })(Dashboard);
