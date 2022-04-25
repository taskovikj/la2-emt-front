import axios from "../custom-axios/axios";

const BookStoreService={
    fetchBooks:() => {
        return axios.get("/books");
    }
}

export default BookStoreService;