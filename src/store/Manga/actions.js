import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_manga = createAsyncThunk(
    'get_manga',
    async({ inputId }) => {
        try {
            let response = await axios.get(`https://back-minga.onrender.com/api/mangas/${inputId}`)
            return {
                manga: response.data.mangas
            }
        } catch (error) {
            return {
                manga: []
            }
        }
    }
)

const actions = { get_manga }
export default actions