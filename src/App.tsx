import './App.css'
import CodePreview from './components/CodePreview'
import CodeEditor from './components/CodeEditor'
import{ useState } from 'react'

function App() {

  const [code, setCode] = useState<string>("")

  return (
    <>
      <section className="editorContainer">
        <CodePreview/>
        <CodeEditor setCode={setCode}/>
      </section>
    </>
  )
}

export default App
