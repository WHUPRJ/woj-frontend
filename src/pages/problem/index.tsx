import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './index.css';
const problem = `# 1000. A+B Problem
Input $A$ and $B$, Print $A+B$
$$
D(x) = \\begin{cases}
\\lim\\limits_{x \\to 0} \\frac{a^x}{b+c}, & x<3 \\\\
\\pi, & x=3 \\\\
\\int_a^{3b}x_{ij}+e^2 \\mathrm{d}x,& x>3 \\\\
\\end{cases}
$$

\`\`\`cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;
  cout << a + b;
  return 0;
}
\`\`\`

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

| Alpha | Bravo   |
| ----- | ------- |
| 中文  | Charlie |
| 👩‍❤️‍👩    | Delta   |
`;

function Problem() {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className="markdown-body result"
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <SyntaxHighlighter
              // slow when loading language...
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {problem}
    </ReactMarkdown>
  );
}

export default Problem;

// note: no html support because html inject is DANGEROUS
