import React from 'react';
import './styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikField from './FormikField/FormikField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

const initialValues = {
  name: '',
  message: '',
  email: '',
}



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório.'),
  message: Yup.string()
    .required('Campo obrigatório.'),
  email: Yup.string()
    .email('Necessário um email váido.')
    .required('Campo obrigatório.'),
})

const Formulario = () => {

  const handleSubmit = (e , value) => {
    e.preventDefault();
    console.log(e.target)

    emailjs.sendForm('gmail', 'template_xigp8ld', e.target , 'user_PEmMhmxPcChtmcH3hWoxO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Mensagem enviada. Obrigado por entrar em contato!')
      e.target.reset()
  }
return(
  <div className="formulario">
      <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return(
            <Form onSubmit={handleSubmit}>
              <FormikField name='name' label='Nome' />
              <FormikField name='email' label='Email' />
              <FormikField rows={4} multiline={true} name='message' label='Mensagem ' />

              <Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">
                  Enviar
              </Button>
            </Form>
          )
        }}
      </Formik>
  </div>
)};

export default Formulario;