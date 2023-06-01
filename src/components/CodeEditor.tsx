import { useRef } from "react"
import '../style/CodeEditor.css'

function CodeEditor({setCode} : IProps){

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    return(
    <textarea ref={textAreaRef} className="HTMLCode" >

    </textarea>
    )
}

export default CodeEditor

interface IProps{
    setCode: (code: string) => void
}