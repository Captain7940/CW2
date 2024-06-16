import './App.css'
import { Layout, Space} from 'antd';
import Hello from './components/Hello'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DetailArticle from './components/DetailArticle';
import NewArticles from './components/NewArticles';
import LoginForm from './components/LoginForm';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Router>
      <Hello name="The Canine Shelter animals adoption system"/>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> 
            <Link to="/newarticle">New</Link>
            <LoginForm />
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/about" element={<About />}  />
          <Route path="/:aid" element = {<DetailArticle /> } />
          <Route path="/newarticle" element= {<NewArticles />} />
        </Routes>
      </Content>
      <Footer>
        <p></p>
      </Footer>
    </Router>
  )
}