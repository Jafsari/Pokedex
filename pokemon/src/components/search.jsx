import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

export default class Example extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:9000/api/pokemon').then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }
    render() {
      return (
        <Form>
          <FormGroup>
            <Input type="pokemon" name="pokemon" id="examplepokemon" placeholder="Seach pokemon" />
          </FormGroup>
        </Form>
      )
    }
}