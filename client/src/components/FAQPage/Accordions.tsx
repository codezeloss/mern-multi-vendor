import AccordionItem from "./AccordionItem.tsx";

const data = [
  {
    title: "How much it takes to process my Order?",
    description:
      "We typically process and ship orders within 1-2 business days. Depending on your location, it can take an additional 2-7 days for your order to arrive.",
  },
  {
    title: "What is your return policy?",
    description:
      "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at support@myecommercestore.com with your order number and a brief explanation of why you're returning the item.",
  },
  {
    title: "How do I track my Order?",
    description:
      "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
  },
  {
    title: "How do I contact customer support?",
    description:
      "You can contact our customer support team by emailing us at support@myecommercestore.com, or by calling us at (555) 123-4567 between the hours of 9am and 5pm EST, Monday through Friday.",
  },
  {
    title: "Can I change or cancel my order?",
    description:
      "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
  },
  {
    title: "Can I change or cancel my order?",
    description: "Currently, we only offer shipping within the United States.",
  },
  {
    title: "How do I track my Order?",
    description:
      "We accept visa,mastercard,paypal payment method also we have cash on delivery system.",
  },
  {
    title: "Can I change or cancel my order?",
    description:
      "We typically process and ship orders within 1-2 business days. Depending on your location, it can take an additional 2-7 days for your order to arrive.",
  },
];

function Accordions() {
  return (
    <>
      <div className={"flex flex-col gap-3"}>
        {data.map((item, index) => (
          <div key={index}>
            <AccordionItem title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordions;
