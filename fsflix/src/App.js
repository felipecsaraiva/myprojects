import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Feed from './components/Feed';
function App() {
  
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <Feed
        url={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhipsters.tech%2Ffeed%2Fpodcast&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=10'}
        isBanner={true}
        color={'orange'}
      />

      <Feed
        url={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Frpguaxa%2Ffeed&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=10'}
        isBanner={false}
        color={'green'}
      />

      <Feed
        url={'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.deviante.com.br%2Fpodcasts%2Fscicast%2Ffeed&api_key=p2jqpogegcl6bvoye3cqjuhcefbbbrfhcpramejj&count=10'}
        isBanner={false}
        color={'#3366CC'}
      />

      <Footer
      />
    </div>
  );
}

export default App;
