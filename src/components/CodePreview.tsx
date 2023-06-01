import '../style/CodePreview.css'

function CodePreview( {codeToRender} : IProps ){

    return(
        <div className="previewContainer" dangerouslySetInnerHTML={{__html: codeToRender}}>
        </div>
    )
}

export default CodePreview

interface IProps{
    codeToRender : string
}