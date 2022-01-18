import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

const Carousel = ({ children }: { children: React.ReactChild[] }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
    const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        return () => {
            embla.off('select', onSelect);
        }
    }, [embla, onSelect])

    return (
        <>
            {/* Carousel viewport */}
            <div className='overflow-hidden' ref={emblaRef}>
                {/* Carousel container */}
                <div className='flex'>
                    {children.map((child, idx) => {
                        return <div
                            key={idx}
                            className='relative flex-none w-full'
                        >
                            {child}
                        </div>
                    })}
                </div>

            </div>
            {/* Buttons */}
            <div className="flex gap-4 justify-center pt-4">
                {children.map((_, idx) => {
                    return <div
                        key={idx}
                        className="h-1 flex-grow" style={{ backgroundColor: idx === selectedIndex ? '#EA0065' : 'slategray' }}
                    >
                    </div>
                })}

            </div>
        </>
    )



    // return <div className="overflow-hidden mx-auto w-72" ref={emblaRef}>
    //     {children.map}
    //     <div className="flex justify-center items-center">
    //         {
    //             ['/teaser_1.png', '/teaser_2.png', '/teaser_3.png'].map((src, idx) => <div
    //                 key={idx}
    //                 className='relative flex-grow-0 flex-shrink-0 basis-full'
    //             ><Image
    //                     src={src}
    //                     alt="Marketing robot"
    //                     width={190}
    //                     height={173}
    //                     layout='fixed'
    //                 />
    //             </div>)
    //         }
    //     </div>
    // </div>

}

export default Carousel;