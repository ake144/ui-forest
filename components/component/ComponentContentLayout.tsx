'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { MDXRemote } from 'next-mdx-remote'
import CodeBlock from './codeBlock'

export default function ComponentLayout({ component }:any) {
  const [activeCodeTab, setActiveCodeTab] = useState('tsx')

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{component.name}</h1>
        <p className="text-xl text-zinc-400 mb-8">{component.description}</p>

        <Tabs defaultValue="preview" className="space-y-8">
          <TabsList className="bg-zinc-800 border-zinc-700">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            {/* <Card className="bg-zinc-800/50 border-zinc-700">
              <CardHeader>
                <CardTitle>Component Preview</CardTitle>
              </CardHeader>
              <CardContent className="bg-zinc-900 p-6 rounded-lg">
                <MDXRemote {...component.mdxSource} />
              </CardContent>
            </Card> */}

              <Card className="bg-zinc-800/50 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Component Preview</CardTitle>
                  </CardHeader>
                  <CardContent className="bg-zinc-900 p-6 rounded-lg">
                    {component.mdxSource ? (
                      <MDXRemote {...component.mdxSource} />
                    ) : (
                      <p className="text-zinc-400">No preview available for this component.</p>
                    )}
                  </CardContent>
                </Card>
          </TabsContent>

          <TabsContent value="code">
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardHeader>
                <CardTitle>Component Code</CardTitle>
                <Tabs value={activeCodeTab} onValueChange={setActiveCodeTab}>
                  <TabsList className="bg-zinc-700 border-zinc-600">
                    <TabsTrigger value="tsx">TSX</TabsTrigger>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="css">CSS</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              {/* <CardContent>
                <CodeBlock language={activeCodeTab} code={component.code[activeCodeTab]} />
              </CardContent> */}
              <CardContent>
                {component.code?.[activeCodeTab] ? (
                  <CodeBlock language={activeCodeTab} code={component.code[activeCodeTab]} />
                ) : (
                  <p className="text-zinc-400">No {activeCodeTab} code available.</p>
                )}
              </CardContent>

            </Card>
          </TabsContent>

          {/* <TabsContent value="docs">
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <MDXRemote {...component.documentation} />
              </CardContent>
            </Card>
          </TabsContent> */}

          <TabsContent value="docs">
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                {component.documentation ? (
                  <MDXRemote {...component.documentation} />
                ) : (
                  <p className="text-zinc-400">No documentation available for this component.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
