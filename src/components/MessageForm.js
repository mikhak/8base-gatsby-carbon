import React, { useState } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import "carbon-components/css/carbon-components.min.css";
import {
  Form,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  Button
} from "carbon-components-react"

const MESSAGE_CREATE_MUTATION = gql`
  mutation MessageCreate($data: MessageCreateInput!) {
    messageCreate( data: $data ) {
      id
    }
  }
`;

const MessageForm = ( { messageCreate } ) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [option, setOption] = useState("Finance");

  const handleNameInput = (e) => {
    setName(e.nativeEvent.target.value);
  };
  const handleBodyInput = (e) => {
    setBody(e.nativeEvent.target.value);
  };

  const handleOption = (e) => {
    setOption(e.nativeEvent.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(JSON.stringify({"name": name, "body": body, "option": option }));
    // await messageCreate( { variables: { data : {name: name, body: body, option: option } } })
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <div style={{ marginBottom: "2rem" }}>
        <TextInput
          helperText="Enter your name here!"
          id="test2"
          labelText="Name"
          placeholder="Your name..."
          value={name}
          onChange={handleNameInput}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TextArea
          cols={50}
          helperText="Enter your message here!"
          id="test5"
          labelText="Your message"
          placeholder="Placeholder text"
          rows={4}
          value={body}
          onChange={handleBodyInput}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <Select
          defaultValue="placeholder-item"
          id="select-1"
          invalidText="This is an invalid error message."
          labelText="Select department to send your message to."
          value={option}
          onChange={handleOption}
        >
          <SelectItem text="Finance" value="Finance" />
          <SelectItem text="Technology" value="Technology" />
          <SelectItem text="Public Relations" value="Public Relations" />
        </Select>
      </div>
      <div>
        <Button kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default MessageForm

// export default graphql(MESSAGE_CREATE_MUTATION, {
//   name: 'messageCreate',
//   })(MessageForm)
