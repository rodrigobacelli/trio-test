import axios from 'axios'
import { API_DOMAIN } from 'config'

const apiClient = axios.create({
  baseURL: API_DOMAIN,
})

export default apiClient
