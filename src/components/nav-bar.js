import React from "react";
import { Navbar, Button, Link, Text, Spacer} from "@nextui-org/react";
import { Modal, Input, Row, Checkbox } from "@nextui-org/react";

export default function Menubar() {
  const [visible, setVisible] = React.useState(false);
  const [Svisible, SsetVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const signuphandler = () => SsetVisible(true);
  const signupcloseHandler = () => {
    SsetVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Modal
      blur
      aria-labelledby="modal-title"
      open={Svisible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Spacer y={1}/>
          <Text b size={18}>
            FABC non-biased system
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="confirm password"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={signupcloseHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler}>
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
    <Modal
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Spacer y={1}/>
          <Text b size={18}>
            FABC non-biased system
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
      <Navbar isBordered variant="sticky" maxWidth={'xl'}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            FABC LLC.
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" onPress={handler}>
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="/signUp">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      </div>
  )
}
