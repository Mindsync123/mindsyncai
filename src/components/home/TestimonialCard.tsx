
interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, position, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-mindsync-teal/30">
            <path d="M13.4 36C9.2 36 5.83333 34.6 3.3 31.8C1.1 29 0 25.4667 0 21.2C0 17.0667 1.36667 13 4.1 9C6.83333 4.86667 10.8333 1.8 16.1 0L19.5 5.8C15.5 7.13333 12.6 9.03333 10.8 11.5C9 13.8333 8.3 16.6 8.7 19.8C9.36667 19.5333 10.2333 19.4 11.3 19.4C13.7667 19.4 15.8333 20.2333 17.5 21.9C19.1667 23.4333 20 25.5333 20 28.2C20 30.8 19.1 32.9 17.3 34.5C15.5667 35.5 14 36 13.4 36ZM37.4 36C33.2 36 29.8333 34.6 27.3 31.8C25.1 29 24 25.4667 24 21.2C24 17.0667 25.3667 13 28.1 9C30.8333 4.86667 34.8333 1.8 40.1 0L43.5 5.8C39.5 7.13333 36.6 9.03333 34.8 11.5C33 13.8333 32.3 16.6 32.7 19.8C33.3667 19.5333 34.2333 19.4 35.3 19.4C37.7667 19.4 39.8333 20.2333 41.5 21.9C43.1667 23.4333 44 25.5333 44 28.2C44 30.8 43.1 32.9 41.3 34.5C39.5667 35.5 38 36 37.4 36Z" fill="currentColor"/>
          </svg>
        </div>
        
        <p className="text-mindsync-blue-light text-lg mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center">
          {image ? (
            <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-mindsync-gray flex items-center justify-center mr-4">
              <span className="text-mindsync-blue font-medium text-lg">
                {author.split(' ').map(name => name[0]).join('')}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-bold text-mindsync-blue">{author}</h4>
            <p className="text-mindsync-gray-dark text-sm">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
