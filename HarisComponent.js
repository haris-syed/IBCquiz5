import React from 'react';
import logo from './logo.svg';
import './App.css';

class HarisComponent extends React.Component{


    render(){
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="myname">
                HARIS' BLOG
                </p>
            </header>
            <body>
                <h1>Book Review</h1>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71XziFlh4IL.jpg" alt="Smiley face" height="600" width="400"></img>
                <div className="reviewbody">
                <p>Many books I’ve read about entrepreneurs follow a common, and I believe misleading, storyline. It goes like this: A sharp entrepreneur gets a world-changing idea, develops a clear business strategy, recruits a crack team of partners, and together they rocket to fame and riches. Reading these accounts, I’m always struck by how they make their achievements appear to be the inevitable result of some great prescience or unusual skill. It’s no wonder publishers churn out “how-to” titles packed with tidy checklists, 5-step programs, and other simplistic recipes for entrepreneurial success.</p>
                <p><em>Shoe Dog</em>, Phil Knight’s memoir about creating Nike, is a refreshingly honest reminder of what the path to business success really looks like. It’s a messy, perilous, and chaotic journey riddled with mistakes, endless struggles, and sacrifice. In fact, the only thing that seems inevitable in page after page of Knight’s story is that his company will end in failure. </p>
                <p>Failure, of course, is about the last thing people would associate with Nike today. The company’s sales top $30 billion and Nike’s swoosh is one of the most universally recognized logos across the globe. Walk down almost any street in the world and you’ll likely find someone wearing a pair of Nikes. But Knight brings readers back more than 50 years to the incredibly humble and fragile beginnings of the company when he started selling imported Japanese athletic footwear out of the back of his Plymouth Valiant. </p>
                </div>
                <h3>For the complete review visit: <a href="https://www.gatesnotes.com/Books/Shoe-Dog">here</a></h3>
            </body>
            <footer className="Appfooter">
                <p>This app was made using React</p>
            </footer>
            </div>
        );
    }
}

export default HarisComponent;