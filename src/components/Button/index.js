import React from 'react';
import Button from 'antd/lib/button';

export default function(props) {
    return (
        <Button type={props.type?props.type:"danger"}>SYButton</Button>
    );
  }