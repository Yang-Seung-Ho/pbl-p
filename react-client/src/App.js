import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import AddTutorial from "./components/add-tutorial.component";
import Proposal from "./pages/Proposal";
import Design from "./pages/Design";
import Content from "./components/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GlobalStyle from './GlobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div style={{ display: 'flex' }}>
          <Menu />
          <Content>
            {/* Routes는 Router로 감싸져 있으므로 바로 사용 가능 */}
            <Routes>
              <Route path="/" />
              <Route path="/proposal" element={<Proposal />} />
              <Route path="/proposal/submit" element={<AddTutorial text="제안서 - 작성 방법 및 예시" />} />
              <Route path="/design" element={<Design />} />
              <Route path="/design/submit" element={<AddTutorial text="설계서 - 작성 방법 및 예시" />} />
            </Routes>
          </Content>
        </div>
      </>
    );
  }
}

export default App;
