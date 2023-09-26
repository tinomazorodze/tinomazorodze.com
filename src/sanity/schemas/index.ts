import linkEmail from "./annotations/linkEmail";
import linkExternal from "./annotations/linkExternal";
import linkInternal from "./annotations/linkInternal";
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
import table from "./objects/table";

const annotations = [linkEmail, linkExternal, linkInternal];

const blocks = [body];

const documents = [article, project, topic];

const objects = [faqs, consCard, prosCard, greenCard, image, partnersCard, questionSchema, productSummary, table]

export const schemaTypes = [...documents, ...objects, ...annotations, ...blocks]
