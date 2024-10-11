import { useAuto } from "../../contexts/ContextProvider";

function FaqBox({ faq }) {
  const { activeFaq, faqClickHandler } = useAuto();
  const isOpen = activeFaq === faq.id;
  return (
    <div
      className={`${isOpen ? 'faq-open' : 'faq-close'}`}
      onClick={() => {
        faqClickHandler(faq.id);
      }}
    >
      <div className="flex gap-4 items-center">
      {isOpen ? (
        <img src="/public/images/minus-square.svg" />
      ) : (
        <img src="/public/images/add-square.svg" />
      )}
      <p>{faq.title}</p>
      </div>
      {isOpen && <p className="text-zinc-500 font-EstedadLight">{faq.text}</p>}
    </div>
  );
}

export default FaqBox;
