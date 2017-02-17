import pdfjs from 'pdfjs-dist';
import Element from './Element';

export default data => pdfjs.getDocument(data).then((doc) => {
  const numPages = doc.numPages;
  const pagePromises = [];

  for (let i = 1; i <= numPages; i++) {
    const promise = doc.getPage(i).then(page => page.getTextContent().then((content) => {
      const items = content.items;
      return Element.orderElements(items.map(item => new Element(item)));
    }));
    pagePromises.push(promise);
  }

  return Promise.all(pagePromises);
});
