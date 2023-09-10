import React, {Component, Fragment} from 'react';
import AllCourses from "../component/AllCourses/AllCourses";
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";

class AllCoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="All Courses"/>
                <PageTop pageTitle="All Courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllCoursePage;