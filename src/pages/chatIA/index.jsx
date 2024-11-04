import QuestionCard from './components/questionCard';
import SearchBar from './components/searchBar';
import Layout from '../../components/layout';
import Message from './components/message';

const ChatIA = () => {

    /*
  localStorage.removeItem("theme") => remover
  localStorage.getItem("theme") => pegar
  localStorage.setItem("theme", valor) => guardar
    */
    
  return (
    <Layout>
    <QuestionCard/>
    <Message message='Hello world!'/>
    <SearchBar iconSize='20px'/>
    </Layout>
  )
};

export default ChatIA;