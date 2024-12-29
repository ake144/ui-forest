"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Server } from 'lucide-react';
import { AnimatedHero } from "./AnimatedHero";
import { ProductCarousel } from "./productCarousel";
import { FloatingCTABanner } from "./floatingCTA";
import { TestimonialSlider } from "./TestimonialsSlider";
import { PricingCalculator } from "./PricingCalculator";
import { FeatureComparisonTable } from "./FeaturedComparison";
import { AnimatedCTA } from "./AnimatedCTA";
import { AnimatedStatsCounter } from "./AnimatedStatsCounter";
import { NewsletterForm } from "./NewsletterForm";
import { FAQAccordion } from "./FAQAccordion";
import { JSX } from "react";
import { MorphingSearchBar } from "./SearchBar";
import { InteractiveTimeline } from "./InteractiveTimeLine";
import { AnimatedSkillBars } from "./AnimatedSkillBars";
import { AnimatedCardCarousel } from "./AnimatedCardCarousel";

interface ComponentType {
    name: string;
    description: string;
    pro: boolean;
    code: string;
    examples: { title: string; preview: string; code: string }[];
}

const ComponentsPage = ({ component }: { component: ComponentType }) => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] pointer-events-none" />

            <div className="container relative mx-auto px-4 py-16">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{component.name}</h1>
                            <p className="text-zinc-400">{component.description}</p>
                        </div>
                        {component.pro && (
                            <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                                Pro
                            </Badge>
                        )}
                    </div>

                    <Tabs defaultValue="preview" className="w-full">
                        <TabsList className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="code">Code</TabsTrigger>
                            <TabsTrigger value="examples">Examples</TabsTrigger>
                        </TabsList>

                        <TabsContent value="preview" className="mt-8">
                            <div className="rounded-lg border border-zinc-800 mt-[50px] bg-zinc-900/80 backdrop-blur-sm p-6">
                                <ComponentPreview name={component.name as ComponentName} />
                            </div>
                        </TabsContent>

                        <TabsContent value="code" className="mt-6">
                            <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="secondary" className="bg-zinc-800">
                                        <Server className="w-4 h-4 mr-2" />
                                        Component Code
                                    </Badge>
                                    <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(component.code)}>
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copy
                                    </Button>
                                </div>
                                <pre className="p-4 rounded-lg bg-zinc-950 overflow-x-auto">
                                    <code className="text-sm text-zinc-100">
                                        {component.code}
                                    </code>
                                </pre>
                            </div>
                        </TabsContent>

                        <TabsContent value="examples" className="mt-6">
                            <div className="grid gap-6">
                                {component.examples.map((example, index) => (
                                    <div key={index} className="rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-6">
                                        <h3 className="text-lg font-semibold mb-4">{example.title}</h3>
                                        <div className="mb-4">
                                            {/* Render the preview component here */}
                                            <div dangerouslySetInnerHTML={{ __html: example.preview }} />
                                        </div>
                                        <pre className="p-4 rounded-lg bg-zinc-950 overflow-x-auto">
                                            <code className="text-sm text-zinc-100">
                                                {example.code}
                                            </code>
                                        </pre>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ComponentsPage;

// Preview component logic can be added below
type ComponentName = "Animated Hero" | "Floating CTA Banner" | "Product Carousel" | "Testimonial Slider" | "Pricing Calculator" | "Feature Comparison Table" | "Animated CTA" | "Animated Stats Counter" | "Newsletter Form" | "FAQ Accordion" | "Morphing Search Bar" | "Interactive Timeline" |  "Animated Card Carousel" | "Animated Skill Bars";

interface ComponentPreviewProps {
    name: ComponentName;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ name }) => {
    const componentsMap: Record<ComponentName, JSX.Element> = {
        "Animated Hero": <AnimatedHero />,
        "Floating CTA Banner": <FloatingCTABanner />,
        "Product Carousel": <ProductCarousel />,
        "Testimonial Slider": <TestimonialSlider />,
        "Animated CTA":<AnimatedCTA  />,
        "Animated Stats Counter": <AnimatedStatsCounter />,
         "Newsletter Form": <NewsletterForm  />,
         "FAQ Accordion": <FAQAccordion  />,
        "Pricing Calculator": <PricingCalculator  />,
        "Feature Comparison Table": <FeatureComparisonTable />,
        "Morphing Search Bar" : <MorphingSearchBar />,
         "Interactive Timeline": <InteractiveTimeline  />,
        "Animated Skill Bars":  <AnimatedSkillBars  />,
         "Animated Card Carousel": <AnimatedCardCarousel  />,
    };

    return (
        <div>
            {componentsMap[name] || <div>Preview for {name}</div>}
        </div>
    );
};