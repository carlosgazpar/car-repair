const TestimonialsItem = ({ description, author, role }) => {
  return (
    <div className='testimonials-list-item'>
      <p>{description}</p>
      <a href="/">{author}</a>
      <em>{role}</em>
    </div>
  )
}

export default TestimonialsItem 