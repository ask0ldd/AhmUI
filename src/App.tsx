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

        <div className='inputsGroup'>
          <button style={{padding:'0 0.5rem'}}>Add A New Row</button>
        </div>

        <div className='inputsGroup'>
          <input placeholder='HTMLElement Id'/>
          <input placeholder='Tweakable Property'/>
          <select>
            <option value="rules">-- Property Type --</option>
            <option value="style">Style</option>
            <option value="attribute">Attribute</option>
            <option value="value">Value</option>
            <option value="innerHTML">InnerHTML</option>
          </select>
          <select>
            <option value="rules">-- Set Some Rules --</option>
            <option value="free">Free</option>
            <option value="runtime">At Runtime</option>
            <option value="list">Within A List</option>
          </select>
          <input placeholder='List Of Values'/>
        </div>

        <div className='inputsGroup' style={{opacity:'0.8'}}>
          <input placeholder='HTMLElement Id'/>
          <input placeholder='Tweakable Property'/>
          <select>
            <option value="rules">-- Property Type --</option>
            <option value="Style">Style</option>
            <option value="elementAttribute">Element Attribute</option>
            <option value="value">Value</option>
            <option value="innerHTML">InnerHTML</option>
          </select>
          <select>
            <option value="rules">-- Set Some Rules --</option>
            <option value="free">Free</option>
            <option value="runtime">At Runtime</option>
            <option value="list">Within A List</option>
          </select>
          <input placeholder='List Of Values'/>
        </div>

        <div className='inputsGroup' style={{opacity:'0.6'}}>
          <input placeholder='HTMLElement Id'/>
          <input placeholder='Tweakable Property'/>
          <select>
            <option value="rules">-- Property Type --</option>
            <option value="Style">Style</option>
            <option value="elementAttribute">Element Attribute</option>
            <option value="value">Value</option>
            <option value="innerHTML">InnerHTML</option>
          </select>
          <select>
            <option value="rules">-- Set Some Rules --</option>
            <option value="free">Free</option>
            <option value="runtime">At Runtime</option>
            <option value="list">Within A List</option>
          </select>
          <input placeholder='List Of Values'/>
        </div>

        <div className='inputsGroup' style={{opacity:'0.4'}}>
          <input placeholder='HTMLElement Id'/>
          <input placeholder='Tweakable Property'/>
          <select>
            <option value="rules">-- Property Type --</option>
            <option value="Style">Style</option>
            <option value="elementAttribute">Element Attribute</option>
            <option value="value">Value</option>
            <option value="innerHTML">InnerHTML</option>
          </select>
          <select>
            <option value="rules">-- Set Some Rules --</option>
            <option value="free">Free</option>
            <option value="runtime">At Runtime</option>
            <option value="list">Within A List</option>
          </select>
          <input placeholder='List Of Values'/>
        </div>

      </section>

    </>
  )
}

export default App
