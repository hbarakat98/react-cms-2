import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import AllServicesPage from "../pages/AllServicesPage";
import AllCoursePage from "../pages/AllCoursePage";
import PortofolioPage from "../pages/PortofolioPage";
import ContactPage from "../pages/ContactPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";

class AppRouter extends Component {
    render() {
        return (
           <Fragment>
               <Routes>
                    <Route path="/" element={<HomePage/>} />
                   <Route path="/service" element={<AllServicesPage/>} />
                   <Route path="/course" element={<AllCoursePage/>} />
                   <Route path="/about" element={<AboutPage/>} />
                   <Route path="/portfolio" element={<PortofolioPage/>} />
                   <Route path="/contact" element={<ContactPage/>} />

                   <Route path="/refund" element={<RefundPage/>} />
                   <Route path="/terms" element={<TermsPage/>} />
                   <Route path="/privacy" element={<PrivacyPage/>} />

                   <Route path="/projectdetails" element={<ProjectDetailsPage/>}/>
               </Routes>
           </Fragment>
        );
    }
}

export default AppRouter;