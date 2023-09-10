import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Services from "../component/Services/Services";
import Footer from "../component/Footer/Footer";
import ContactSection from "../component/ContactSection/ContactSection";

class AllServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="All Services"/>
                <PageTop pageTitle="Our Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AllServicesPage;