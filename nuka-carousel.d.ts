declare module "nuka-carousel" {
  import * as React from "react";

  interface CarouselProps {
    autoplay?: boolean;
    wrapAround?: boolean;
    adaptiveHeight?: boolean;
    adaptiveHeightAnimation?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export default class Carousel extends React.Component<CarouselProps> {}
}
