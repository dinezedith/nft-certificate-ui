import { Card, Col, Row, Button, Text } from "@nextui-org/react";


export const Card5 = () => (
  <Card css={{ w: "20%", h: "400px", marginTop: "3%", marginLeft: "2%"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://ipfs.io/ipfs/QmXNhdTRBCk1Go1tHTBqAyDkRsa46uWLnCBrKssAMMFeiG"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://ipfs.io/ipfs/QmXNhdTRBCk1Go1tHTBqAyDkRsa46uWLnCBrKssAMMFeiG"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                #0f111466BCD002
              </Text>
              <Text color="#d1d1d1" size={12}>
                BLOCKHAIN DEV.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Hire
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
