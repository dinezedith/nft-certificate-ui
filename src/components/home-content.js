import { Container, Row, Col, Text, Button } from "@nextui-org/react";
import { Card5 } from "./card";
import Experience from "./process";

export default function Content() {
  return (
    <div>
    <Container gap={0} style={{maxWidth:"100%"}}>
      <Row gap={1}>
        <Col style={{position:"absolute", marginLeft: "10%"}}>
            <Card5/>
        </Col>
        <Col style={{marginLeft: "29%",marginTop: "13%"}}>
        <Text size={60} h1 css ={{          textGradient: "45deg, $blue600 -20%, $pink600 50%", marginLeft:"5%", fontFamily:"$mono"}}>
                Non-Biased Skill IDs in the decentralized landscape.</Text>
                <Button  color="gradient" rounded bordered size = {"sm"}style={{marginLeft: "44%"}}>Explore</Button>
      </Col>
      </Row>
    </Container>
    <Container gap={0} style={{maxWidth:"100%"}}>
      <Row gap={1}>
        <Col style={{marginTop: "10%"}}>
        <Text size={20} h6 style={{fontFamily:"monospace", transition:"ease-in-out"}}>
                
        Decentralized Digital Certificates mark a revolutionary departure from conventional certification models, presenting a secure, transparent, and tamper-proof method for validating and authenticating credentials.</Text>    </Col>
      </Row>
    </Container>
    <Experience/>
    </div>
  );
}
