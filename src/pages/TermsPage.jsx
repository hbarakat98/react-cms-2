import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import TermsDescription from "../component/TermsDescription/TermsDescription";
import Footer from "../component/Footer/Footer";

class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms and Conditions"/>
                <PageTop pageTitle="Terms and Conditions"/>
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;