import React, {Component} from 'react';
import {Form,FormGroup,FormText,Input,Col,Label,Button} from 'reactstrap';


class VolunteerForm extends Component{
    render() {
        return(
        <Form action="" method="post" encType="multipart/form-data" className="form">
            <FormGroup row>
            <Col md="3">
                <Label htmlFor="email-input">Email Input</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                <FormText className="help-block">Please enter your email</FormText>
            </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3">
                <Label htmlFor="textarea-input">Leave a Note</Label>
            </Col>
            <Col xs="12" md="9">
                <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                    placeholder="Content..." />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Col md="3">
                <Label>Inline Checkboxes</Label>
            </Col>
            <Col md="9">
                <FormGroup check inline>
                <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                <Label className="form-check-label" check htmlFor="inline-checkbox1">Food</Label>
                </FormGroup>
                <FormGroup check inline>
                <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                <Label className="form-check-label" check htmlFor="inline-checkbox2">Cooking</Label>
                </FormGroup>
                <FormGroup check inline>
                <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                <Label className="form-check-label" check htmlFor="inline-checkbox3">Distribution</Label>
                </FormGroup>
            </Col>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        )
    }
}
export default VolunteerForm;