import { useStore } from 'vuex'

/**
 * 获取歌词 分隔时间和 歌词 获取毫秒数
 */
export const lyricList = () => {
    const store = useStore()
    let list = store.state.geden.lyric
    let arr = list.split(/\n/igs).map((item,i) => {
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill = item.slice(7,10)
        let lyric = item.slice(11,item.length)
        let time = parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000
        return {
            min,
            sec,
            mill,
            lyric,
            time
        }
    })
    // console.log(arr);
    return arr
}

