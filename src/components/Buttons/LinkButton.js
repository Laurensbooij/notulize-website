import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ScLinkButton = styled(Link)`
    color: #555555;
    font-weight: 700;
    padding: 1rem;
    border: 3px solid #f89521;
    text-decoration: none;
    border-radius: 10px;
    margin: 2rem 0 0 0;

    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.2s ease-in-out;

    @media (max-width: 700px) {
      background-color: #f89521;
      color: #fff;
    }

    &:hover {
      background-color: #f89521;
      color: #fff;

      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.2s ease-in-out;
    }`;

const LinkButton = props => {
    return <ScLinkButton className={props.className} to={props.to}>{props.children}</ScLinkButton>
};

export default LinkButton;
