import Button from "../../atoms/Button/Button";
import NavigateCrad from "../../molecules/NavigateCard/NavigateCrad";
import TopSection from "../../molecules/TopSection/TopSection";

const navigateCrads = [
  {
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  }
];

export default function NavigateSection() {
  return (
    <section className="py-16 px-8">
          <TopSection
            title="Navigate through our Pages"
            subtitle="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
            buttonText="Explore More"
            showButton={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 pt-5">
            {navigateCrads.map((navigate, index) => (
              <NavigateCrad key={index} {...navigate} showButton={true} buttonText="Learn More" />
              
            ))}
            
          </div>
          
        </section>
  )
}
