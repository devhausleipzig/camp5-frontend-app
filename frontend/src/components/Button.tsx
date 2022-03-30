import { LinkProps } from "react-router-dom";

export type IconButtonProps = {
    iconButtonType: 'basket' | 'profile' | 'search' | 'discover';
    onClick: () => void;
    isActive: boolean;
};

const IconButton = ({
    isActive,
    iconButtonType,
    onClick,
}: IconButtonProps): JSX.Element => {
    const active = {
        fill:
            iconButtonType !== 
    }
}