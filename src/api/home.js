import axios from 'axios'
/**
 * 获取轮播图
 * @param {String} type 0: pc 1: android 2: iphone 3: ipad
 * @returns 
 */
let baseUrl = 'http://localhost:3000'
export const HomeBanner = ( type = 1 ) => {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

/**
 * 推荐歌单
 * 
 */
export const HomeSongList = ( type = 20 ) => {
    return axios.get(`${baseUrl}/personalized?limit=${type}`)
}