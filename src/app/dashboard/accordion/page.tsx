import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
}

export default function Page() {
  const items: QuestionAnswer[] = [
    {
      id: 'item-1',
      question: '¿Cuál es la capital de España?',
      answer: 'La capital de España es Madrid.',
    },
    {
      id: 'item-2',
      question: '¿Cuántos continentes hay en el mundo?',
      answer: 'Hay siete continentes en el mundo.',
    },
    {
      id: 'item-3',
      question: '¿Qué es el Amazonas?',
      answer: 'El Amazonas es un río y una selva en Sudamérica.',
    },
    {
      id: 'item-4',
      question: '¿Quién pintó la Mona Lisa?',
      answer: 'La Mona Lisa fue pintada por Leonardo da Vinci.',
    },
    {
      id: 'item-5',
      question: '¿Cuál es el idioma oficial de Brasil?',
      answer: 'El idioma oficial de Brasil es el portugués.',
    },
  ];

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
