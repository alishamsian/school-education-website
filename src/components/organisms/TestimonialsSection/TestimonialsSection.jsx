import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import TopSection from "../../molecules/TopSection/TopSection";

const testimonials = [
  {
    name: "Jennifer B",
    description:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    name: "David K",
    description:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    name: "Emily L",
    description:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-8">
      <TopSection
        title="Our Testimonials"
        subtitle="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        buttonText="Their Happy Words 🤗"
        showButton={true}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 pt-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
