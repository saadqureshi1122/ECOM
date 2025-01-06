declare module "react-rating-stars-component" {
    import * as React from "react";

    interface ReactStarsProps {
        count: number;
        size?: number;
        activeColor?: string;
        value?: number;
        edit?: boolean;
        onChange?: (newValue: number) => void;
    }

    const ReactStars: React.FC<ReactStarsProps>;
    export default ReactStars;
}
