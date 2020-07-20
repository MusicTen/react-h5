
import React from 'react';
import Name from '@/components/Name';
import WebSite from '@/components/WebSite';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "MusicTen",
      site: "https://www.gituh.com"
    }
  }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <WebSite site={this.state.site} />
      </div>
    );
  }
}
export default Home;