const SET_LINE = "SET_LINE";
const SET_REMOVE_MODAL = "SET_REMOVE_MODAL";
const SET_BACK_PAGE = "SET_BACK_PAGE";
const SET_MODAL = "SET_MODAL";
const SET_MODAL_EDIT = "SET_MODAL_EDIT";
const SET_EDIT = "SET_EDIT";
const SET_EDIT_CLEAR = "SET_EDIT_CLEAR";
const SET_SEARCH = "SET_SEARCH";
const SET_SORT_NAME = "SET_SORT_NAME";
const SET_SORT_DATE = "SET_SORT_DATE";
const SET_REMOVE_LINE = "SET_REMOVE_LINE";

const defaultState = {
  posts: [],
  heandlerModal: false,
  heandlerEdit: false,
  indexEdit: '',
};

export default function lineReduser(state = defaultState, action) {
  
  switch (action.type) {
    case SET_LINE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        filterTable: [],
      }
    case SET_MODAL:
      return {
        ...state,
        heandlerModal: true,
        filterTable: [],
      }
    case SET_MODAL_EDIT:
      return {
        ...state,
        heandlerModal: true,
        heandlerEdit: true,
        indexEdit: action.payload,
        filterTable: [],
      }
    case SET_EDIT_CLEAR:
      return {
        ...state,
        indexEdit: '',
      }
    case SET_REMOVE_MODAL:
      return {
        ...state,
        heandlerModal: false,
        heandlerEdit: false,
        indexEdit: '',
      }
    case SET_REMOVE_LINE:
      return {
        ...state,
        posts: state.posts.filter(line => line.id !== action.payload),
      }
    case SET_EDIT:
      const {name, date, id} = action.payload;
      const posts = state.posts.map((post) => {
        if(post.id === id) {
          return  {
            ...post,
            name,
            date,
          }
        }
        return post
      })
      return {
        ...state,
        posts,
        heandlerModal: false,
      }
    case SET_SEARCH:
      
      return {
        ...state,  
      }
    case SET_SORT_NAME:
      const nameA = (a, b) => a.name > b.name ? -1 : 1;
      const nameB = (a, b) => a.name < b.name ? -1 : 1;
      const sortName = () => {
        if(action.payload){
          return [...state.posts].sort(nameA)
        }else{
          return [...state.posts].sort(nameB)
        }
      }
      return {
        ...state,
        posts: sortName(),
      }
    case SET_SORT_DATE:
      const dateA = (a, b) => a.date > b.date ? -1 : 1;
      const dateB = (a, b) => a.date < b.date ? -1 : 1;
      const sortDate = () => {
        if(action.payload){
          return [...state.posts].sort(dateA)
        }else{
          return [...state.posts].sort(dateB)
        }
      }
      return {
        ...state,
        posts: sortDate(),
      }
        default:
       return state;
  }
};

export const setLine = (payload) => ({type: SET_LINE, payload});
export const setModal = () => ({type: SET_MODAL});
export const setModalEdit = (payload) => ({type: SET_MODAL_EDIT, payload});
export const setBackPage = () => ({type: SET_BACK_PAGE});
export const setRemoveModal = () => ({type: SET_REMOVE_MODAL});
export const setEdit = (payload) => ({type: SET_EDIT, payload});
export const setEditClear = () => ({type: SET_EDIT_CLEAR});
export const setSearch = (payload) => ({type: SET_SEARCH, payload});
export const setSortName = (payload) => ({type: SET_SORT_NAME, payload});
export const setSortDate = (payload) => ({type: SET_SORT_DATE, payload});
export const setRemoveLine = (payload) => ({type: SET_REMOVE_LINE, payload});
