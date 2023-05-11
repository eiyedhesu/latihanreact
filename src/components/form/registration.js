import React from "react";
import { Container, Row, Col, Card,Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';




function Registration (){
const submit = (values) =>{
  console.log ('form values', values)
  setTimeout (()=>{
    formik.setSubmitting (false)
    formik.resetForm()
  },2000)
}

  const formik = useFormik ({
    initialValues: {
      username: '',
      email: '',
      password:'',
      confirmPassword:'',
    },
    validationSchema: Yup.object({
      username: Yup.string ()
      .required(),
      email: Yup.string ()
      .required()
      .email('Format Email salah'),
      password: Yup.string ()
      .required()
      .min (8,'Password harus lebih dari 8 karakter')
      .matches(/[a-z]/g, 'minimal 1 karakter huruf kecil')
      .matches(/[A-Z]/g, 'minimal 1 karakter huruf besar'),
      
      confirmPassword: Yup.string ()
      .required()
      .oneOf([Yup.ref('password')],'Password harus sama'), 


    }),
    onSubmit: submit
    

  })  
  

  return(

      
        <Container>
        <Row>
          <Col>
            <Card>
              <div className="card-header bg-dark text-white">
                <Card.Header><h2>Form Registrasi</h2></Card.Header>
              </div>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  <FormGroup>
                  <FormLabel>Username *</FormLabel>
                  <FormControl
                    type="text"
                    name="username"
                    placeholder="Masukan Username"
                     value={formik.values.username}
                    onChange={formik.handleChange} />
                    {formik.errors.username}
                   
                  </FormGroup>
                  <FormGroup>
                  <FormLabel>Email *</FormLabel>
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="Masukan Email"  
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
                     {formik.errors.email}
                   
                  </FormGroup>
                  <FormGroup>
                  <FormLabel>Password *</FormLabel>
                  <FormControl
                    type="password"
                    name="password"
                    placeholder="Masukan Password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
                     {formik.errors.password}
                   
                  </FormGroup>
                  <FormGroup>
                  <FormLabel>Confirm Password *</FormLabel>
                  <FormControl
                    type="password"
                    name="confirmPassword"
                    placeholder="Masukan Password yang sama"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange} />
                     {formik.errors.confirmPassword}
                  </FormGroup>
                  <br></br>
                  <Button variant = "dark" as="input" type="submit" disabled={formik.isSubmitting} />{' '}
                  </Form>
                  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      

    )
}

export default Registration