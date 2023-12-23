import React from 'react'
import { Header, SearchBar, WebsiteName } from './styles'
import { useNavigate } from 'react-router-dom'
import {  } from "react-router-dom";

export default function Navbar() {

const navigate = useNavigate()

    const redirectHome = () => {
        navigate('/')
      };
    
  return (
            <Header>
                <WebsiteName onClick={() => redirectHome()}>Lucca's Frontend Cookbook</WebsiteName>
                <SearchBar>
                    <input type="text" placeholder="Search..." />
                </SearchBar>
            </Header>
  )
}

