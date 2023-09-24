import link from "./annotations/link";
import body from "./blocks/body";
import article from "./documents/article";
import project from "./documents/project";
import topic from "./documents/topic";
import consCard from "./objects/cons-card";
import faqs from "./objects/faqs";
import questionSchema from "./objects/faqs/question-schema";
import greenCard from "./objects/green-card";
import image from "./objects/image";
import partnersCard from "./objects/partners-card";
import productSummary from "./objects/product-summary";
import prosCard from "./objects/pros-card";

const annotations = [link];

const blocks = [body];

const documents = [article, project, topic];

const objects = [faqs, consCard, prosCard, greenCard, image, partnersCard, questionSchema, productSummary]

export const schemaTypes = [...documents, ...objects, ...annotations, ...blocks]
