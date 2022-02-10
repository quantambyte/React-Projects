const Card = ({ title, imgSource, dataAOS }) => {
  return (
    <section className='card' data-aos={dataAOS}>
      <img src={imgSource} alt='paint1' />
      <div>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda sint earum reiciendis consectetur, non
          eaque hic illo dolorem dolorum nam blanditiis ullam
          quisquam expedita facere? Recusandae modi tempore non
          possimus.
        </p>
        <a href='#' className='btn'>
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default Card;
