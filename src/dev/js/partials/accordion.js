import Accordion from 'accordion-js';

const ACCORDION = () => {
  const accordion = document.querySelector('.accordion-container');

  if (!accordion) return;

  const Acc = () => new Accordion(accordion, {
    openOnInit: [0],
  });

  Acc();
};

export default ACCORDION;
