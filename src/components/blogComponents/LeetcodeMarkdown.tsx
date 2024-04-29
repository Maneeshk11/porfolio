import { FC } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic as codeboxTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm'
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import 'katex/dist/katex.min.css'

interface LeetcodeMarkdownProps {
    mdx: string
}

const LeetcodeMarkdown:FC<LeetcodeMarkdownProps> = ({mdx}) => {
    return (
        <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[
            rehypeRaw, rehypeKatex
        ]}
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');

                    return !inline && match ? (
                        <SyntaxHighlighter customStyle={
                            {
                                fontFamily: `inter, 'Fira Code', monospace`,
                                borderRadius: "0.7rem",
                                fontSize: "1rem",
                            }
                        } showLineNumbers={match[1] != "txt"} style={codeboxTheme} PreTag="div" language={match[1]} {...props}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={`${className}`} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {mdx}
        </Markdown>
    )
}

export default LeetcodeMarkdown