//rafce
import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulis = ({nama,deskripsi,harga, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Edit Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}> 
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="deskripsi">
              <Form.Label>deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <hr />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulis;
