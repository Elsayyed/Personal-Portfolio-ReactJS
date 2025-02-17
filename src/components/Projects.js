import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"

export default function Projects() {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
           
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
           
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
           
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
           
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
           
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
           
        },
    ];


    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}/>
        </section>
    )
}
