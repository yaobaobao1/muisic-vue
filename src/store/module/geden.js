import { PlayLyric } from '@/api/gedan'
// 歌单信息
export default {
    namespaced: true,
    state () {
      return {
        list: [{
          id: 1841350828,
          name: "Fallen Down (Slowed)",
          al:{
            id: 126749733,
            name: "Fallen Down (Slowed)",
            pic: 109951165935240000,
            picUrl: "http://p4.music.126.net/M26mGtIPcq4eVzAhTDdt0Q==/109951165935240004.jpg",
            pic_str: "109951165935240004"
          }
        }],
        Index: 0,
        lyric:'',
        currentTime: 0,
        intervalId: 0
      }
    },
    mutations: {
        // 修改用户信息，payload就是用户信息对象
        setUser (state, payload) {
          state.list = payload
        },
        //修改playCurrentIndex 数据
        setplay (state, payload){
          state.Index = payload
        },
        setlyric (state, payload){
          state.lyric = payload
        },
        setCurrentTime (state, payload){
          state.currentTime = payload
        }
    },
    
    actions: {
      //请求歌词
      async replyric(content, payload){
        await PlayLyric(payload.id).then(res => {
          const { data } = res
          content.commit('setlyric', data.lrc.lyric)
        })
      },
    }
  }