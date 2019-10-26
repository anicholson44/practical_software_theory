import { htmlFragment } from '../../components/html-fragment.js';

const head = fetch('/templates/main/head.html');

head
    .then((r) => r.text())
    .then((t) => {
        const node = document.createElement(htmlFragment);
        node.innerHTML = t;
        node.childNodes.forEach((c) => document.head.appendChild(c));
    });
