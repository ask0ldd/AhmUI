import './App.css'
import CodePreview from './components/CodePreview'
import CodeEditor from './components/CodeEditor'
import{ useState } from 'react'
import TabCodeEditor from './components/TabCodeEditor'

function App() {

  const [code, setCode] = useState<string>("")

  return (
    <>
      <section className="editorContainer">
        <CodePreview codeToRender={code}/>
        <div className='codeEditorContainer'>
          <TabCodeEditor/>
          <CodeEditor setCodeToRender={setCode}/>
        </div>
      </section>
      <section className='optionsContainer'>

      </section>
    </>
  )
}

export default App
