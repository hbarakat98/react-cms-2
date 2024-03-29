import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import ContactSection from "../component/ContactSection/ContactSection";
import Footer from "../component/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Us"/>
                <PageTop pageTitle="Contact Us"/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;