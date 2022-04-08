import axios from 'axios'

let baseUrl = 'http://localhost:3000'

/**
 * 获取歌单
 * @param {String} id  
 * @returns 
 */
export const PlayListDetail = (id) => {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`, 'get')
}
/**
 * 获取歌词
 * @param {*} id 
 * @returns 
 */
export const PlayLyric = (id) => {
  return axios.get(`${baseUrl}/lyric?id=${id}`, 'get')
}
