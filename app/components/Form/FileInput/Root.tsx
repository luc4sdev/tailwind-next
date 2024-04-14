'use client'

import { ComponentProps, createContext, useContext, useId, useState } from "react";

interface RootProps extends ComponentProps<'div'> { }

type FileInputContextType = {
    id: string;
    files: File[];
    onFilesSelected: (files: File[], multiple: boolean) => void;
    handleDeleteFile: (name: string) => void;
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
    const id = useId()
    const [files, setFiles] = useState<File[]>([])

    function handleSelectedFiles(files: File[], multiple: boolean) {
        if (multiple) {
            setFiles((state) => [...state, ...files])
        }
        else {
            setFiles(files)
        }
    }

    function handleDeleteFile(name: string) {
        setFiles((state) => {
            const tempFiles = [...state]

            const index = tempFiles.findIndex(file => file.name === name)
            if (index === -1) {
                return tempFiles
            }
            tempFiles.splice(index, 1)

            return tempFiles
        })

    }

    return (
        <FileInputContext.Provider value={{ id, files, onFilesSelected: handleSelectedFiles, handleDeleteFile }}>
            <div {...props} />
        </FileInputContext.Provider>
    )
}

export const useFileInput = () => useContext(FileInputContext)