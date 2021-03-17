import React, {Component} from "react";
import { Form,Button} from "react-bootstrap";
class Page7 extends Component{
    render(){
        return(
            <Form action="Dashboard">
                <div className="col-md-8 m-auto">
            <Form.Group controlId="Page7Form.ControlInput1">
              <Form.Label>Task Id</Form.Label>
              <Form.Control type="number" placeholder="Task Id" name="Task_id"/>
            </Form.Group>
            <Form.Group controlId="Page7Form.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} name="Description"/>
            </Form.Group>
            <Form.Group controlId="Page7Form.ControlSelect1">
              <Form.Label>TODO list</Form.Label>
              <Form.Control as="select" name="TODO_List">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </div>
          </Form>        
)
        }
    }

export default Page7;