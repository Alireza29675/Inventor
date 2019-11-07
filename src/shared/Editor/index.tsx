import React, { useEffect, useRef } from 'react'
import { editor } from 'monaco-editor'

import './style.scss'

interface IProps {
    language: 'javascript' | 'typescript' | 'css' | 'sass' | 'pug'
    value?: string
    style?: React.AllHTMLAttributes<HTMLDivElement>['style']
}

export const Editor = ({
    value = '',
    language = 'typescript',
    style = {}
}: IProps) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!ref.current) {
            return
        }
        editor.create(ref.current, {
            value,
            language,
            automaticLayout: true,
            theme: 'vs-dark',
            fontSize: 18
        })
    }, [ref, value, language])

    return <div className="Editor" ref={ref} style={style} />
}
