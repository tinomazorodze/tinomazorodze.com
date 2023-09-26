import PortableText from "react-portable-text";
import { P } from "./pt-components/p";
import blockProsCard from "./pt-components/pros-card";
import Headings from "./pt-components/headings";
import Blockquote from "./pt-components/blockquote";
import { Li, Ol, Ul } from "./pt-components/list";
import annotationLinks from "./pt-components/a";
import faqsComponent from "./pt-components/faqs";
import blockConsCard from "./pt-components/cons-card";
import imageModule from "./pt-components/image";
import gradientText from "./pt-components/gradient-text";
import blockGreenCard from "./pt-components/green-card";
import blockPartnersCard from "./pt-components/partners-card";
import blockProductSummary from "./pt-components/product-summary";
import blockTable from "./pt-components/table";

const PtComponents = (articles: any) => {
  return {
    blockProsCard,
    blockConsCard,
    imageModule,
    blockGreenCard: (props: any) => blockGreenCard(props, articles),
    blockPartnersCard,
    blockTable,
    blockProductSummary,
    gradientText: gradientText,
    blockFAQs: (props: any) => faqsComponent(props, articles),
    normal: P,
    blockquote: Blockquote,
    ...Headings,
    ...annotationLinks(articles),
    ul: Ul,
    ol: Ol,
    li: Li,
    link: (props: any) => props.children,
  }
}

type PtRendererType = {
  body: any;
  articles: any;
};

export default function PtRenderer(props: PtRendererType) {
  return <PortableText content={props.body}
    serializers={PtComponents(props.articles)}
  />
}

const TxtComponents = (articles: any) => {
  return {
    normal: (props: any) => props.children,
    ...annotationLinks(articles),
    ul: (props: any) => <ul>{props.children}</ul>,
    li: (props: any) => <li>{props.children}</li>,
    link: (props: any) => props.children,
  }
}

export function TxtRenderer(props: PtRendererType) {
  return <PortableText content={props.body}
    serializers={TxtComponents(props.articles)}
  />
}
