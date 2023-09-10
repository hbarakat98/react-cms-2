import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import PrivacyDescription from "../component/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy and Policy"/>
                <PageTop pageTitle="Privacy and Policy"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;