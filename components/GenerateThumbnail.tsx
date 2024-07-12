import { Button } from "./ui/button"

const GenerateThumbnail = () => {
  return (
    <div className="generate_thumbnail">
      <Button
        type="button"
        variant="plain"
        className="bg-black-6"
      >
        Use AI to generate thumbnail
      </Button>
      <Button
        type="button"
        variant="plain"
        className="bg-black-6"
      >
        Upload custom image
      </Button>
    </div>
  )
}

export default GenerateThumbnail