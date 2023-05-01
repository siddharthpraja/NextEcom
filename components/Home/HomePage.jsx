import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => {
  return (
    <div className="relative w-full">
      <Carousel
        showArrows={false}
        controls={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        indicators={false}
        stopSwipingHandler={false}
      >
        {data?.map((ev) => (
          <Link key={ev.id} href={`${ev.link}`} passHref>
            <div
              key={ev.alt}
              className="relative h-fit overflow-hidden rounded-lg  lg:mx-7"
            >
              <Image src={ev.image} alt={ev.alt} width={2048} height={2048} />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
