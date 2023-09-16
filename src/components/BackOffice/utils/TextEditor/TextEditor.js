import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
    Editor,
    Transforms,
    createEditor,
    Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import TitleIcon from '@mui/icons-material/Title';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button, Icon, Toolbar } from './ComponentsTextEditor'
import theme from '../../../../theme'
import {Box} from "@mui/material";

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const TextEditor = ({placeholder, value, setValue}) => {
    console.log("Editor value received --> ", value);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <Slate
            editor={editor}
            //value={value}
            onChange={newValue => setValue(newValue)}
            initialValue={value}
        >
            <Box sx={{
                border: 1,
                borderColor: 'rgba(0, 0, 0, 0.12)',
                borderRadius: theme.shape.borderRadius+"px", 
                '&:hover': {
                    borderColor: "black",
                 },
                 minHeight: '152px',
                 padding: '16px',}}>
            <Toolbar>
                <BlockButton format="title" icon={<TitleIcon />} />
                <MarkButton format="bold" icon={<FormatBoldIcon/>} />
                <MarkButton format="italic" icon={<FormatItalicIcon />} />
                <MarkButton format="underline" icon={<FormatUnderlinedIcon />} />
                <BlockButton format="numbered-list" icon={<FormatListNumberedIcon />} />
                <BlockButton format="bulleted-list" icon={<FormatListBulletedIcon />} />
            </Toolbar>
                <Editable
                    style={{
                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                        height: '100%'
                    }}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    placeholder={placeholder}
                    spellCheck
                    autoFocus
                    onKeyDown={event => {
                        for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event)) {
                                event.preventDefault()
                                const mark = HOTKEYS[hotkey]
                                toggleMark(editor, mark)
                            }
                        }
                    }}
                />
            </Box>
        </Slate>
    )
}

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n.type),
        split: true,
    })
    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isBlockActive = (editor, format) => {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
        Editor.nodes(editor, {
            at: Editor.unhangRange(editor, selection),
            match: n =>
                !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
        })
    )

    return !!match
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
       case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'title':
            return <h3 {...attributes}>{children}</h3>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isBlockActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleBlock(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

const MarkButton = ({ format, icon }) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            <Icon>{icon}</Icon>
        </Button>
    )
}

export default TextEditor