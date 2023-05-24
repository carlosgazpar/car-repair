import Heading from '../common/Heading'
import TestimonialsItem from '../common/TestimonialsItem'
import '../styles/home/testimonials.scss'
const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className='container'>

        <Heading text='TESTIMONIALS' needIcon={true} />

        <div className='testimonials-list'>
          <TestimonialsItem 
            description='Etiam et pellentesque dui. Ut a sagittis est. Maecenas cursus massa nulla, sed finibus dolor rutrum ut. Nam luctus leo pharetra enim faucibus finibus.'
            author='BILL ALVARADO'
            role='Manager'
          />
          <TestimonialsItem 
            description='Sed vitae placerat velit, non semper nibh. Maecenas pharetra risus vitae sodales vulputate. Praesent accumsan, mi nec tempor convallis, felis nulla.'
            author='ALBERTA WILSON'
            role='Businessman'
          />
          <TestimonialsItem 
            description='Nam fringilla magna at ipsum pharetra, et lobortis ante finibus. Morbi eu quam ante. Mauris mollis venenatis tortor non luctus. Curabitur dignissim.'
            author='ZACHARY FERNANDEZ'
            role='Teacher'
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials