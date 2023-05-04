import { Button } from "@mui/material";

const newButton = (props) => {
    const { text, variant, color, size } = props;
    return (
        <Button variant={variant} color={color} size={size} fullWidth>{text}</Button>
    );
}

export default newButton;