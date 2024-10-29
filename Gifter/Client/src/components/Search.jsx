import { getSearchedPosts } from "../services/PostService";

export const Search = ({search, setSearch, setPosts}) => {


    const controlledInputChange = (e) => {
        const newstate = {...search}
    
        newstate[e.target.name] = e.target.value
    
        setSearch(newstate)
    
    }


return(
    <>
        <input 
            type="text" 
            placeholder="search goes here ..." 
            name='q' 
            onChange={(e) => controlledInputChange(e)}
        />
        <button onClick={() => getSearchedPosts(search.q).then(posts => setPosts(posts))}>Add Post</button>
    </>
) 

}