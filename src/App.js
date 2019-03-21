import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <section className="hero is-light is-large">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                {/*<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>*/}
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroB"></span>
                        </div>
                        <div id="navbarMenuHeroB" className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item">
                                    How it works?
                                </a>
                                <span className="navbar-item">
                                  <a className="button is-info is-inverted">
                                    <span className="icon">
                                      <i className="fab fa-github"></i>
                                    </span>
                                    <span><a href="https://github.com/follow-github-organisation/follow-github-organisation/" target={'_blank'}>GitHub</a></span>
                                  </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">
                        <a href="https://github.com/follow-github-organisation/follow-github-organisation/" target={'_blank'}>Follow GitHub Organisation</a>
                    </p>
                    <p className="subtitle">
                        Get notified when a new repository is created in a GitHub organisation
                    </p>
                </div>
            </div>

            {/*<div className="hero-foot">*/}
                {/*<div className="container has-text-centered">*/}
                    {/*<div className="field">*/}
                        {/*<div className="control has-icons-left has-icons-right">*/}
                            {/*<input className="input is-medium" type="email" placeholder="Paste GitHub Organisation Link"/>*/}
                            {/*<span className="icon is-medium is-left">*/}
                              {/*<i className="fab fa-github"></i>*/}
                            {/*</span>*/}
                            {/*<a className="button is-white">Follow</a>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}

        </section>
    );
  }
}

export default App;
