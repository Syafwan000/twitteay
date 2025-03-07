import InputWrapper from "@/components/display/InputWrapper"
import Filepond from "@/components/input/Filepond"
import SubmenuLayout from "@/components/layout/SubmenuLayout"
import useContentStore from "@/stores/content-store"

const AdditionalContent = () => {
  const { imageContent, setImageContent } = useContentStore()

  return (
    <SubmenuLayout
      title="Additional Content"
      description="Use this section to add supplementary elements that enhance your content">
        <InputWrapper
          label="Image Content"
          id="image-content">
            <Filepond 
              name="Image Content"
              value={imageContent}
              stateHandler={setImageContent} />
        </InputWrapper>
    </SubmenuLayout>
  )
}

export default AdditionalContent