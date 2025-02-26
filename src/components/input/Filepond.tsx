import { useEffect, useRef } from 'react'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { FilePond, registerPlugin } from 'react-filepond'
import { FilePondFile } from 'filepond'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType)

type FilepondProps = {
  name: string,
  value?: string,
  stateHandler?: (e: string) => void
}

const Filepond = (props: FilepondProps) => {
  const pondRef = useRef<any>(null)

  const previewImage = (e: FilePondFile[]) => {
    if (e[0] && e[0].file) {
      props.stateHandler && props.stateHandler(URL.createObjectURL(e[0].file))
    }
  }

  useEffect(() => {
    if(props.value === '' && pondRef.current) {
      pondRef.current.removeFiles()
    }
  }, [props.value])

  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={props.name}>{props.name}</label>
      <FilePond 
        ref={pondRef}
        id={props.name}
        onupdatefiles={previewImage}
        onremovefile={() => props.stateHandler && props.stateHandler('')}
        onerror={() => props.stateHandler && props.stateHandler('')}
        acceptedFileTypes={['image/*']}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>' />
    </div>
  )
}

export default Filepond