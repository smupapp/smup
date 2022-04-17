import React from 'react';

import { ButtonPrimary, ButtonSecondary, Container, Image } from '../../../components';
import { Content, Title } from '.';

import { COLORS } from '../../../constants';


const STYLES = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left'
  },
  overview: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left'
  }
};


class Body extends React.Component {

  render() {

    return (
      <Container theme={STYLES.container}>
        <Container theme={STYLES.overview}>
          <Title>Overview</Title>
          <Content>
            Sublist3r is a python tool designed to enumerate subdomains of websites using OSINT. 
            It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting. 
            Sublist3r enumerates subdomains using many search engines such as Google, Yahoo, Bing, Baidu and Ask. 
            Sublist3r also enumerates subdomains using Netcraft, Virustotal, ThreatCrowd, DNSdumpster and ReverseDNS. 
            subbrute was integrated with Sublist3r to increase the possibility of finding more subdomains using bruteforce 
            with an improved wordlist. The credit goes to TheRook who is the author of subbrute.
          </Content>
        </Container>
      </Container>
    );
  }
}


export default Body;
