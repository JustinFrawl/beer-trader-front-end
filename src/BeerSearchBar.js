import React from 'react';
import { Form } from 'semantic-ui-react'

const BeerSearchBar = (props) => {
  return (
  <div>
    <Form>
   <Form.Field>
    <input
      className='Search'
      onChange={(e) => props.handleSearchTerm(e.target.value)}
      placeholder={"Search Beers"}
      type='text' />
    </Form.Field>
</Form>
    </div>
  )
}

export default BeerSearchBar;
