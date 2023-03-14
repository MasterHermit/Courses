import React,{ useEffect, useState } from 'react';

const ProfileImage = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="mx-5 w-6/6 block mt-4">
            {selectedFile &&  <img src={preview} className="border-4 ml-5 h-60 rounded-full "/> }
            <input type='file' className='mt-3' onChange={onSelectFile} />
        </div>
    )
}

export default ProfileImage;