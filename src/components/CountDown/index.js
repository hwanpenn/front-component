import React from 'react';
import CountDown from 'ant-design-pro/lib/CountDown';

const targetTime = new Date().getTime() + 3900000;

export default function(props) {
return (
    <CountDown style={{ fontSize: 20 }} target={props.target?props.target:targetTime} />
);
}