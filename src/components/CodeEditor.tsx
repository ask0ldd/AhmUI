import { useRef } from "react"
import '../style/CodeEditor.css'

function CodeEditor({setCodeToRender} : IProps){

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    return(
    <textarea ref={textAreaRef} className="HTMLCode" onChange={() => setCodeToRender(textAreaRef.current?.value || '<style></style>')} spellCheck={false}>
        {`<style></style>`}
    </textarea>
    )
}

export default CodeEditor

interface IProps{
    setCodeToRender: (code: string) => void
}