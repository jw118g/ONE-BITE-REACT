import { useContext,useState,useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom"

const useDiary = (id)=>{
    const data = useContext(DiaryStateContext)
    const [curDiaryItem, setCurDiaryItem ] = useState()
    const nav = useNavigate()
    //컴포넌트가 마운트 된 후 nav 함수를 호출하도록 하기 위해 useEffect사용.
    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id))
    
        if(!currentDiaryItem) {
            window.alert('존재하지 않는 일기입니다.')
            nav('/',{replace:true})
        }
        setCurDiaryItem(currentDiaryItem)

    },[id, data])

    return curDiaryItem

}

export default useDiary