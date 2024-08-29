'use client'
import { marked } from 'marked';


export default function RenderMarkdownBlock({ content, props }) {
    const html = marked(content)

	return (
		<div dangerouslySetInnerHTML={{ __html: html }} {...props}/>
	)
}
