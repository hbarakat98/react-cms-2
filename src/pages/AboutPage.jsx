import React, {Component, Fragment} from 'react';
import PageTop from "../component/PageTop/PageTop";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import AboutDescription from "../component/AboutDescription/AboutDescription";
import Footer from "../component/Footer/Footer";
import AboutMe from "../component/AboutMe/AboutMe";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About Us"/>
                <PageTop pageTitle="About Me"/>
                <AboutMe/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;