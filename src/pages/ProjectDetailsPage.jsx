import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";

class ProjectDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Details"/>
                <PageTop pagetitle="Project Details"/>
                <ProjectDetails/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ProjectDetailsPage;