import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

export default class Search extends Component {
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