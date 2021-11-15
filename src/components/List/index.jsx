import React,{useEffect,useState} from 'react';
import axios from 'axios'
import { Book, ContainerBook } from "components";
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon'

const ListBook = () => {
  const [books, setBooks] = useState([])
  const [booksView , setBooksView] = useState([])
  const [query, setQuery] = useState('')
  
  useEffect(() => {   
    axios.get('https://fakerapi.it/api/v1/books?_quantity=36')
      .then((response) => {
        setBooks(response.data.data);
        setBooksView(response.data.data)
        })
    }, [] )
  

  const onChange = (e)=>{
    setQuery(e.target.value)
  }
  const onKeyPress = (e)=>{
    if(e.key === 'Enter'){
      const result = books.filter((book)=>{
        return (book.title.toLowerCase()).includes(query.toLowerCase())
    })
      setBooksView(result)    
    }
    return;
  }

  return(
    <>
      <TextField
        outlined
        label='Pesquisar livro'
        trailingIcon={<MaterialIcon role="button" icon="search"/>}>
        <Input
          type="text"
          value={query} 
          onKeyPress={onKeyPress} 
          onChange={onChange}/>      
      </TextField>
      <ContainerBook>
      {booksView.length > 0 ? (booksView.map((book)=>
        <Book
        key={book.isbn}
        title={book.title}
        author={book.author}
        genre={book.genre}
        published={book.published}
        description={book.description} />
      )):(<h1>Estamos arregando dados dos livros...</h1>)}
      </ContainerBook>
    </>
  )
}
export default ListBook;