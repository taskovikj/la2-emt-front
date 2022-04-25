import React, {Component} from "react";
import Books from "./components/Books/Books";
import BookStoreService from "./repository/book-store-repo";


class App extends Component{

    constructor(props) {
      super(props);
      this.state ={
        books : []
      }
    }

    render(){
      return (
          <div>
              <Books books = {this.state.books }/>
          </div>
      );
    }

    loadBooks = () => {
        BookStoreService.fetchBooks()
            .then((data) =>{
                this.setState({
                    books: data.data
                })
            });
    }
    componentDidMount(){
        this.loadBooks();
    }

}

export default App;
