import axios from "axios";

//Je paramètre ma base url avec axios
const Axios = axios.create({ baseURL: "http://localhost:5000/MyApi" });

export default Axios;
