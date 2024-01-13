import React  from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { Card, Grid, Text, Button, Row, Input, Spacer, Col, Loading, Modal, Image} from "@nextui-org/react";

const tick = require('../../Images/icons8-tick-160.png')




export default function FieldCard() {
    const [name, setName] = useState('Blockchain Dev');
    const [selectedImage, setSelectedImage] = useState('null');
    const [description, setDescription] = useState('#uyegqr3o87w243y');
    const [image, setImage] = useState("https://models.readyplayer.me/65a156a150377ef74b531c8b.glb");
    const [visible, setVisible] = React.useState(false);

    const [created, setCreated] = useState(false);
    const [fCreated, setFCreated] = useState(false);
    const [ipfsStatus, setIpfsStatus] = useState(false);
    let tokenId;

    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
      setFCreated(false);
      window.location.reload(true);
    };

    async function handleSubmit(event) {
      setVisible(true);
    }
  
    function handleNameChange(event) {
      setName(event.target.value);
    }
  
    function handleDescriptionChange(event) {
      setDescription(event.target.value);
    }
  
    function handleImageChange(event) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectedImage(event.target.files[0]);
    }

    return(

        <div>
        <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} color='warning'>
            Don't Refresh! The page until complete
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Grid.Container gap={2}>


        {ipfsStatus? 
                    (<>
                    <Col span={2}>
                    <Grid>
                    <Image src={tick}/>
                    </Grid></Col>
                <Col span={10}>
                    <Grid>
                    <Text b size={18}> Uploaded to IPFS</Text>
                    </Grid></Col></>) :
                    ( <>
                        <Col span={2}>
                            <Grid>
                            <Loading/>
                            </Grid></Col>
                            <Col span={10}>
                            <Grid>
                            <Text b size={18}>Uploading to IPFS..</Text>
                            </Grid></Col></> )}
                </Grid.Container>
                <Grid.Container gap={2}>

            {created? 
                    (<>
                    <Col span={2}>
                    <Grid>
                    <Image src={tick}/>
                    </Grid></Col>
                <Col span={10}>
                    <Grid>
                    <Text b size={18}>NFT Minting completed</Text>
                    </Grid></Col></>) :
                    ( <>
                        <Col span={2}>
                            <Grid>
                            <Loading/>
                            </Grid></Col>
                            <Col span={10}>
                            <Grid>
                            <Text b size={18}>NFT Minting InProgress..</Text>
                            </Grid></Col></> )}
                </Grid.Container>
                <Grid.Container gap={2}>
            {fCreated? 
                    (<>
                    <Col span={2}>
                    <Grid>
                    <Image style={{height: "200%"}} src={tick}/>
                    </Grid></Col>
                <Col span={10}>
                    <Grid>
                    <Text b size={18}>generating Id completed</Text>
                    </Grid></Col></>) :
                    ( <>
                        <Col span={2}>
                            <Grid>
                            <Loading/>
                            </Grid></Col>
                            <Col span={10}>
                            <Grid>
                            <Text b size={18}>generating Id InProgress</Text>
                            </Grid></Col></> )}
                </Grid.Container>
                <Grid.Container gap={2}>
            {fCreated && created ? 
                    (<>
                    <Grid>
                    <Link to={{pathname:'/dashboard', state: {myNFTs: "test"}}}>
                    <Button  color ='gradient' bordered style = {{marginLeft: "33%"}}> Go to Dashboard</Button> </Link>                    
                    </Grid></>) :
                    ( <>
                            <Grid>
                            <Button color='gradient' bordered style = {{marginLeft: "33%"}}> <Text style={{marginRight:"10%"}} b size={"$lg"}> In Progress</Text> <Loading color={'white'} type='points'/></Button>  
                            </Grid></> )}
                </Grid.Container>
        </Modal.Body>
      </Modal>
    <Grid.Container gap={2} css={{marginLeft: "20%", marginTop: "5%"}}>
    <Grid sm={12} md={5}>
      <Card css={{ mw: "350px" }}>
      <Card.Header>
          <Text b>Create and Fracctionalize</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Spacer y={1}></Spacer>
          <Input shadow= {false} underlined clearable labelPlaceholder="virtual Name" status="default" onChange={handleNameChange}/>
          <Spacer y={2}></Spacer>
          <Input shadow= {false} underlined clearable labelPlaceholder="Job position(i.e Blockchain Dev)" status="default" onChange={handleDescriptionChange}/>
          <Spacer y={1}></Spacer>
          <Text weight={"thin"} h4 style={{fontFamily:"sans-serif"}}> upload Avatar</Text>
          <Spacer y={1}></Spacer>
          <Input shadow= {false} clearable type= {"file"} accept="image/*" onChange={handleImageChange}/>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="flex-end">
            <Button size="sm" light>
              Cancel
            </Button>
            <Button size="sm" color='gradient' bordered onPress= {handleSubmit}>create</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
    <Grid sm={12} md={5} css= {{marginTop : "10%"}}>
        <Card css={{ mw: "300px" , mh:"300px"}}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={image}
        width="100%"
        height="100%"
        objectFit="cover"
        alt={"https://nextui.org/images/card-example-6.jpeg"}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            {name}
          </Text>
          <Text color="#000" size={12}>
            {description}.
          </Text>
        </Col>
      </Row>
    </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container></div>
    )
}