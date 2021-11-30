import axios from "axios";
import {BASIC_URL} from '../constants'

export function sendReport(body) {
  return axios.post(`${BASIC_URL}/report`,body);
}
