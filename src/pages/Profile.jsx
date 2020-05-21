import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Profile = () => {
    return (
        <Container tag="section" className="spacing">
            <h1 className="title">Your profile</h1>
            <p>profile info:</p>
            <Button color="primary" className="mt-3" tag={Link} to="/products">
                Update
            </Button>
        </Container>
    );
};

export default Profile;
