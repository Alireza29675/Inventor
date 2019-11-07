import React from 'react'

import './style.scss'
import { Editor } from '../../shared/Editor'

export const Module = () => {
    return (
        <div className="Module">
            <div className="Module__editor-box">
                <Editor value="" language="typescript" />
            </div>
        </div>
    )
}
