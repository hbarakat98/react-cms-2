import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import RefundDescription from "../component/RefundDescription/RefundDescription";
import Footer from "../component/Footer/Footer";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundDescription/>
                <Footer/>


            </Fragment>

        );
    }
}

export default RefundPage;