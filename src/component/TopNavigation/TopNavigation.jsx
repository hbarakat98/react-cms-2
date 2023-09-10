import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import whiteLogo from "../../asset/image/logo_white.png";
import blackLogo from "../../asset/image/logo_black.png";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    navLinkStyle = ({isActive}) => {
        return{
            color: isActive ?'#ffee00' : '#ffffff'
        }
    }
    constructor(props) {
        super();
        this.state = {
            navBarTitle: "navTitle",
            navBarLogo: [whiteLogo], //object
            navVariant: "dark",
            navBarBack: "navBackground",
            navItem: "navItem",
            pageTitle: props.title

        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blackLogo],
                navBarBack: 'navBackgroundScroll',
                navItem: 'navItemScroll',
                navVariant: 'light',

            })

        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                navBarBack: 'navBackground',
                navItem: 'navItem',
                navVariant: 'dark'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg"
                        variant={this.state.navVariant} style={{padding: "1em"}}>

                    <Navbar.Brand href="#home" className={this.state.navBarTitle}><img src={this.state.navBarLogo}
                                                                                       alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink className={this.state.navItem} to="/" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navItem} to="/about" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>ABOUT</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navItem} to="/service" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>SERVICE</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navItem} to="/course" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navItem} to="/portfolio" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink className={this.state.navItem} to="/contact" style={({isActive})=> ({color: isActive ? "#ffee00" : ""})}>CONTACT
                                US</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;