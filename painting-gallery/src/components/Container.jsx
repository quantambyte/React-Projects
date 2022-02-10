// components
import Card from './Card';

// data
import data from '../utils/data';

const Container = () => {
  return (
    <main className='container'>
      {data.map(({ id, title, imgSource, dataAOS }) => (
        <Card
          title={title}
          imgSource={imgSource}
          key={id}
          dataAOS={dataAOS}
        />
      ))}
    </main>
  );
};

export default Container;
