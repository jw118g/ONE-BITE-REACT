import { useParams,useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import Viewer from "../components/Viewer"
import useDiary from "../hooks/useDiary"
import { getStringedDate } from "../util/getStringedDate"
import usePageTitle from "../hooks/usePageTitle"

const Diary = () => {
    const params = useParams()
    usePageTitle(`${params.id}번일기`)
    const nav = useNavigate()
    const curDiaryItem = useDiary(params.id)
    //console.log(curDiaryItem) // 최초호출시 undefind, 그후 useEffect 실행시 반환.

    if(!curDiaryItem) {
        return <div>데이터 로딩중...</div>
    }

    const {createdDate,emotionId,content} = curDiaryItem
    //console.log(getStringedDate())
    const title = getStringedDate(new Date(createdDate))

    return <div>
            <Header 
            title={title}
            leftChild={<Button  onClick={() => nav(-1)} text={"< 뒤로 가기"}/>} 
            rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"}/>} 
            />
            <Viewer emotionId={emotionId} content={content}/>        
        </div>
}
export default Diary