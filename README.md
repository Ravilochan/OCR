# TEXT RECOGNITION USING OCR

A project report submitted in partial fulfillment of the Academic requirements for the award of the Degree of

## BACHELOR OF ENGINEERING IN INFORMATION TECHNOLOGY

By

## B Ravilochan

Under the guidance of

## Mr. V Ashwini Kumar

Head of Dept. of I.T
MVSR Engineering College
Nadergul, Hyderabad.
(Nov, 2019)

## DEPARTMENT OF INFORMATION TECHNOLOGY

MVSR ENGINEERING COLLEGE
(Affiliated to Osmania University, Hyderabad. Recognized by AICTE)
Nadergul, Saroornagar Mandal, Hyderabad-501510
2019-2020

         ACKNOWLEDGEMENT

          We with extreme jubilance and deepest gratitude, would like to thank
          Mr. V. Ashwini Kumar, Associate Professor & Head of Department, Department of Information Technology, MVSR Engineering College, for his constant encouragement and facilities provided to us to complete our project in time. With immense pleasure,
          we record our deep sense of gratitude to our beloved Head of the department Mr. V. Ashwini Kumar Department of Information Technology, MVSR Engineering College, for permitting us to carry out this project. We would like to extend our gratitude
          to Mrs. K.Devaki, Assistant Professor, Mrs .K.Srilakshmi Assistant Professor, and Mr .S.Kalyan Chakravarty    Lab Assistant Department of Information Technology, MVSR Engineering College, for his valuable suggestions and timely help during the course of the project.
          We express, from the bottom of our hearts, my deepest gratitude to my parents and family for their support, dedication, comprehension, and love.
          Finally, we express our heartfelt thanks to each and every one who directly and indirectly helped us in the successful completion of this project work.


                                                                                                            B Ravilochan
                                                                                                   M.V.S.R ENGINEERING COLLEGE
                                                                                                   (Affiliated to Osmania University, Hyderabad. Recognized by AICTE)
                                                                                        Nadergul, Saroornagar Mandal, Hyderabad-501510

## ABSTRACT

Optical Character Recognition (OCR) is used for the purpose of extracting text from an image. The main agenda of an OCR is to make easily viewed & editable documents from existing paper documents or image files. A clean image file can have an accuracy as high as 97.56% by using Tesseract OCR.
Here we developed a web application that simulates an OCR with Tesseract JS, a JavaScript version of OCR, and other APIs to convert recognized text to PDF files and even output the text as audio.
This can even help to visually impaired, illiterate, understand the pronunciation of words clearly and accurately.

                              Table of Contents


    1 Abstract
    2 Introduction
        2.1 Problem Statement
        2.2 Existing System
        2.3 Proposed System
        2.4 Scope of Work
        2.5 Goals
        2.6 Applications
    3 Literature Survey
    4 Tools and Technologies
        4.1 Hardware Requirements
        4.2 Software Requirements
        4.3 Tools and Technologies
    5 System and Methodologies
    6 Testing
    7 Conclusion and Future Enhancements
        7.1 Result & Conclusion
        7.2 Future Scope of Work
    8 References

## INTRODUCTION

Optical Character Recognition (OCR) is a process of classifying optical patterns with respect to alphanumeric or other characters. The optical character recognition process includes segmentation, feature extraction, and classification.
Text capture converts analog text-based resources to digital text resources and then these converted resources can be used in several ways like searchable text in indexes so as to identify documents or images.
As the first stage of text capture a scanned image of a page is taken. This scanned copy will form the basis for all other stages. The very next stage involves the implementation of technology Optical Character Recognition for converting text content into machine-understandable or readable format.
OCR analysis takes the input as a digital image and converts it to machine-readable digital text format. Then OCR processes the digital image into small components for analysis of finding text or word or character blocks. And again the character blocks are further broken into components and are compared with a dictionary of characters. Accuracy rates are measured in several ways and the ways they are measured impact the accuracy rate.

## Problem Statement

A system cannot read or recognize any text directly from an image. So we are using Optical Character Recognition (OCR), an open-source Tesseract OCR Engine, to detect text from images and use other APIs outputting the recognized text from the images in PDF files and as audio using text-to-speech API.

## Existing System

In the world, there is a growing demand for users to convert printed documents into electronic documents for proper, easy maintenance and security. Hence the basic OCR system was invented to convert the data available on the papers into computer-processable documents so that the documents can be editable and reusable. The existing system or the previous system of OCR on a grid infrastructure is just an OCR without grid functionality and other functionality to convert the text into PDF files and listen to the text in the form of audio. That is the existing system deals with the homogeneous character recognition or character recognition of any single language.

## Proposed System

The proposed system is a Text Recognition using Optical Character Recognition (OCR) named Tesseract, which is open-source software released under the Apache License, Version 2.0 and development has been sponsored by Google since 2006.
Open –Source: <https://github.com/tesseract-ocr/tesseract.git>

## Scope

The system transforms printed and documented text into any kind of form/format in an image the text can be on plain paper or else on a pre-printed form. The scanned document, which will be in the image format, will be the input. This scanned image undergoes pre-processing and all the text in the scanned images will be outputted in the form of text, PDF file, and also in audio format.

## Goals

The goal of this project is to develop a system that focuses on the following major criteria:
• Recognizing every text in images
• Efficient and automated storing of text documents.
• Increased accuracy and reduced Time for recording text.
• Reduced Manual Burden for scanning and storing.
• Make data available for a long time without any loss.

## Applications

Application areas of this system are very large as in many organizations.
For Example:
• E-Governance.
• Government organizations.
• Administrative Offices.
• Off-line competitive examination management system.
• Many statutory forms/results prepared in various organizations.
• To save the efforts to make a copy of paper documents and files digitally.
• We can just use the OCR to convert images of paper documents to digital files.
• To be helpful to the visually impaired and illiterate.
• To be helpful in knowing the correct pronunciation of words.
• Take a picture of the word and this can read out the correct & accurate pronunciation of that word.
• To help people hear the paper documents in audio.

## LITERATURE SURVEY

According to the SRS document which details the OCR system and explains the requirements of working of OCR. It provides an introduction to this concept and also provides a full description of the system along with a detailed list of requirements for the building of the OCR system. It lists all the functions performed by the system. It concerns the details of the requirement model for the OCR for Text Recognition.
OCR is a complex technology that converts images with text into editable formats. OCR allows you to process scanned books, screenshots, and photos with text and get editable documents like TXT, DOC, or PDF files. This technology is widely used in many areas and the most advanced OCR systems can handle almost all types of images, even such complex as scanned magazine pages with images and columns or photos from just a mobile phone.

## TOOLS AND TECHNOLOGIES

### Hardware Requirements

Requirements needed to run this project.

Processor: Intel Pentium IV (2 GHz) or earlier.

RAM: 256 MB (512 MB recommended)

Storage: 10 MB (\* Application to be executed only on Internal Storage Drives)

• Internet Connectivity

### Software Requirements

OS: Windows XP/ Vista / 7 / 8 / 8.1 / 10

Linux, Any Distros.

MacOS X 10 / MacOS 10.14 or earlier.

• Browser which supports JavaScript.

### Server Configuration

We developed in development server of NodeJS.

OS: Windows.

RAM: 12 GB 3200 MHz

Processor: Intel i3 6006U.

Storage: 1TB.

We developed this on this configuration but this configuration is not necessary.
2.5 Tools & Technologies Used for Development:
The entire project is developed in NodeJS and interpreted by Chrome V-8 Engine. The GUI is developed using `ejs` & Bootstrap library which is loaded using CDN. For File manipulation and operations, Multer NPM packages are used. JQuery and PopperJS are used for Client-side JavaScript DOM manipulation. Express is used for all API classes and navigation. PDFkit is used for converting and creating PDF files. TesseractJS is the OCR Engine used. Nodemon is used as a dev-dependency. Git is used for version control systems. GitHub is used to store Remote Repositories.

• NodeJS

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
Source-code: <https://github.com/nodejs/node.git>

• Express

Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
Open-Source: <https://github.com/expressjs/express.git>

•EJS

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control flow. It's just plain JavaScript.
Open-Source: <https://github.com/mde/ejs.git>

• Bootstrap

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
Get-Code: <https://github.com/twbs/bootstrap.git>

• PopperJS

Popper.js is a positioning engine; its purpose is to calculate the position of UMD - Universal Module Definition
PopperJS library is used to position poppers in web applications.
A popper is an element on the screen that "pops out" from the natural flow of your application. Common examples of poppers are tooltips, popovers, and drop-downs.
Source-Code: <https://github.com/FezVrasta/popper.js.git>

• JQuery

JQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
Open-Source: <https://github.com/jquery/jquery.git>

• Multer

Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. It is written on top of the busboy for maximum efficiency.
Open-Source: <https://github.com/expressjs/multer.git>

• PDFkit

PDFKit JavaScript PDF generation library for Node and the browser.
PDFKit is a PDF document generation library for Node and the browser that makes creating complex, multi-page, printable documents easy. The API embraces chain ability and includes both low-level functions as well as abstractions for higher-level functionality. The PDFKit API is designed to be simple, so generating complex documents is often as simple as a few function calls.
Open-Source: <https://github.com/foliojs/pdfkit.git>

• TesseractJS
Tesseract.js is a pure JavaScript port of the popular Tesseract OCR engine.
This library supports more than 100 languages, automatic text orientation, and script detection, and a simple interface for reading paragraph, word, and character bounding boxes. Tesseract.js can run either in a browser or on a server with NodeJS.

Open-source: <https://github.com/naptha/tesseract.js.git>

• Git

Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.
Source Code: <https://github.com/git/git.git>

• Nodemon

nodemon is a tool that helps develop NodeJS-based applications by automatically restarting the node application when file changes in the directory are detected. `nodemon` does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node, to use `nodemon` replace the word node on the command line when executing your script.
Source Code: <https://github.com/remy/nodemon.git>

## SYSTEM IMPLEMENTATION AND METHODOLOGIES

Tesseract.js wraps an emscripten port of the Tesseract OCR Engine. It works in the browser using a web pack or plain script tags with a CDN and on the server with Node.js.

### Step 1
```js
import Tesseract from 'tesseract.js';

Tesseract.recognize(
'https://tesseract.projectnaptha.com/img/eng_bw.png',
'eng',
{ logger: m => console.log(m) }
).then(({ data: { text } }) => {
console.log(text);
})
```
### Step 2
```js
import { createWorker } from 'tesseract.js';

const worker = createWorker({
logger: m => console.log(m)
});

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text);
await worker.terminate();
})();
```
### Step 3: with progress
```js
import { createWorker } from 'tesseract.js';

const worker = createWorker({
logger: m => console.log(m), // Add logger here
});

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text);
await worker.terminate();
})();
```
### Step 4: if multiple languages
```js
import { createWorker } from 'tesseract.js';

const worker = createWorker();

(async () => {
await worker.load();
await worker.loadLanguage('eng+chi_tra');
await worker.initialize('eng+chi_tra');
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text);
await worker.terminate();
})();
```
### Step 5: with whitelist char
```js
import { createWorker } from 'tesseract.js';

const worker = createWorker();

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');
await worker.setParameters({
tessedit_char_whitelist: '0123456789',
});
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text);
await worker.terminate();
})();
```
### Step 6 : with different pageseg modes
```js
import { createWorker, PSM } from 'tesseract.js';

const worker = createWorker();

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');
await worker.setParameters({
tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
});
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text);
await worker.terminate();
})();
```
### Step 7: with one part of the image
```js
import { createWorker } from 'tesseract.js';

const worker = createWorker();
const rectangles = [
{ left: 0, top: 0, width: 500, height: 250 },
];

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');
const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png', 'eng', { rectangles });
console.log(text);
await worker.terminate();
})();
```
### Step 8: with multiple workers to speed up
```js
import { createWorker, createScheduler } from 'tesseract.js';

const scheduler = createScheduler();
const worker1 = createWorker();
const worker2 = createWorker();

(async () => {
await worker1.load();
await worker2.load();
await worker1.loadLanguage('eng');
await worker2.loadLanguage('eng');
await worker1.initialize('eng');
await worker2.initialize('eng');
scheduler.addWorker(worker1);
scheduler.addWorker(worker2);
/\*_Add 10 recognition jobs_/
const results = await Promise.all(Array(10).fill(0).map(() => (
await scheduler.addJob('recognize', 'https://tesseract.projectnaptha.com/img/eng_bw.png')
)))
console.log(results);
await scheduler.terminate(); // It also terminates all workers.
})();
```

## Methodologies

Responsive Voice is an HTML5-based Text-To-Speech library designed to add voice features to WordPress across all smartphone, tablet, and desktop devices. It supports 51 languages through 168 voices and has no dependencies.

FEATURES:
- Listen to any post or page with the tap of a button
- Shortcodes to place the Listen button anywhere on the post or page
- 51 languages supported through 168 voices
- Unlimited text-to-speech
- Easy access to content for website users, tap to listen to your page or post read-aloud
- A more functional website for a range of users including the visually impaired and the elderly
- Web Accessibility Compliance Group 2.0, ADA, and BS 8878:2010 features

```html
<script src='https://code.responsivevoice.org/responsivevoice.js?key=YOUR_UNIQUE_KEY'>
</script>

<input onclick='responsiveVoice.speak("Hello World");' type='button' value='🔊’ />
```

For Audio as output:

```html
<! -- API for Speaking-->

<script src="https://code.responsivevoice.org/responsivevoice.js?key=HVyByr7B"></script>

<! -- API for Speaking-->
```

## TESTING

The testing phase of the implementation is simple and straightforward. Since the program is coded into modular parts the same routines that were used to load, analyze and compute network parameters of input vectors in the training phase can be reused in the testing phase as well.
The basic steps in testing input images for characters can be summarized as follows:
- load an image file
- analyze images for characters
- for each character line detect consecutive character symbols
- analyze and process
- feed input vector to OCR Engine and compute output
- convert the Unicode binary output to the corresponding character and render it into a text box
- Display the text on a page
- Output the text recognized as an audio
- Create a PDF file of the text in the image input.
- Download the PDF.

## CONCLUSIONS & FUTURE ENHANCEMENTS

### Conclusion

Our Project is recognizing the text from the images. So it has input of scan printed document like that image of scan documents is converted to text form according to user scanned image. Thus our project looked upon the problems faced by Educational Institutes, in storing data which is in Printed format. It helps in reducing the manual burden and is also less time-consuming. This software can also be used for any kind of format of printed documents to recognize text in the images and output the text in PDF file format and audio format outputs. Thus not only Educational Institutes are benefited by this but also the government offices or any other organizations using such printed documents are benefited.
By Text Recognizer using OCR, We can achieve a way of recognizing text within images, faster and simple and convert them into pdfs and can listen to that text in audio. This is a useful way to help blind and visually impaired people.
We looked upon various algorithms and techniques for preprocessing and character recognition from an image and implemented the most optimal ones amongst them, thus resulting in more speed and accuracy.  
 This makes our project dynamic and is feasible for any kind of organization.
We reached all our goals and statement of purpose of the project.
Full Project: <https://github.com/Ravilochan/OCR.git>

### Future Enhancements

This project can be further extended to recognizing handwritten documents. This software can be further upgraded in which functionality can be added to train the handwriting of a particular individual and then can be used to recognize documents written by that individual. Also, software can be trained to recognize the handwriting of multiple individuals and also different fonts. There is also scope for increasing the accuracy of the recognizer so that no manual watch should be needed on the software other than inputting the data.
All the data recognized by the OCR can be formulated and entered into a database, which makes it more secure, redundant easily accessible, and useful. This can be used to convert normal images into database data. Normal text document data can be easily migrated into a database.
For Business purposes, all the resumes, letters, and complaints sent to a company can be directly entered into a database without the huge load and necessity for data entry jobs. This can decrease the money spent on Manuka labor and time.
Thus software can be atomized to a higher level.

## REFERENCES

Online References:
- Dev ED YouTube (<https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q>)
- <http://www.ieeexplore.com>
- <http://www.codeproject.com>
- <http://www.fadooengineers.com>
- <http://www.scribd.com>
- <http://www.stackoverflow.com>
- <https://github.com/Ravilochan/OCR.git>
- <https://github.com/Ravilochan/tesseract.js.git>
- <https://github.com/Ravilochan/pytesseract.git>
  
Books Referred:

1. Using Neural Networks to Create an Adaptive Character Recognition System
   © 2002, Alexander J. Faberge
2. Node.JS in Action - Marc Harter, Nathan Redlich, T. J. Holowaychuk, Mike Cantelon
