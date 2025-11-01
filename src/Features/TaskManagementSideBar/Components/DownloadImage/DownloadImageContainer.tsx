import DoneZoSideMenuConfigV1 from '../../../../Config/DoneZoSideMenuConfigV1.json'

const {downloadImageContents} = DoneZoSideMenuConfigV1;

const DownloadImageContainer = () => {
    return(
        downloadImageContents.map((imageProps, imageIndex) => (
            <div key={`image-${imageIndex}`} className='flex justify-center items-center my-4'>
                <img className='rounded-[27px]' src={imageProps.downloadImageUrl} alt={imageProps.downloadImageAltText} height={imageProps.downloadImageHeight} width={imageProps.downloadImageWidth}/>
            </div>
        ))
    )
}

export default DownloadImageContainer;