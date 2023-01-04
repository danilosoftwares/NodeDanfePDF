# Node JS server with Danfe generation in PDF

![](demonstracao.gif)

[![npm](https://img.shields.io/node/v/v.svg?style=flat-square)](https://www.npmjs.com/package/n) [![npm](https://img.shields.io/npm/v/n.svg?style=flat-square)](https://www.npmjs.com/package/n) [![npm](https://img.shields.io/npm/l/n.svg?style=flat-square)](https://www.npmjs.com/package/n) ![npm](https://img.shields.io/badge/express-4.17.1-green?style=flat-square) ![npm](https://img.shields.io/badge/pdfkit-0.11.0-red?style=flat-square)

## *GOAL :*
The purpose of the project is to basically transform an object with electronic invoice characteristics into a danfe pdf document

## *EXTERNAL COMPONENTS :*
+ **express**
+ **pdfkit**
## *INTERNAL COMPONENTS :*

| File | Description |
| ------ | ------ |
| DocumentoPDF.js |This class aims to generate a pdf document with pre-facilitated methods, these methods use the pdfkit package to assemble the pdf |
| Danfe.js | This class aims to assemble the pdf document using the methods of the pdfdocuments.js class |
| NotaFiscalEletronica.js | This class basically uses the danfe.js class to pass the data that will effectively assemble the danfe pdf |

## *INSTALLING*

```sh
git clone https://github.com/danilosoftwares/NodeDanfePDF.git
cd NodeDanfePDF
npm install
```

## License

MIT

