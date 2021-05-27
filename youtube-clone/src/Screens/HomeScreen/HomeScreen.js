import React from 'react'
import {Container , Row, Col} from 'react-bootstrap'


// components
import CategoriesBar from '../../Components/CategoriesBar/CategoriesBar'
import Video from '../../Components/Video/Video'

function HomeScreen() {
    return (
        <Container>

            <CategoriesBar />

            <Row>

                {[...new Array(20)].map(() => (
                    <Col lg = {3} md= {6} sm = {12} xs = {12}>
                        <Video />
                    </Col>
                ))}

            </Row>

        </Container>
    )
}

export default HomeScreen
