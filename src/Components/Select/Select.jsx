import { MenuItem, TextField } from "@mui/material";

const newSelect = (props) => {
    const { id, name, label, list, variant, size} = props;
    return (
        <TextField select defaultValue="" id={id} name={name} label={label} variant={variant} size={size} fullWidth>
            {
                list.map((element, index) => {
                    return(
                        <MenuItem key={index} value={element.value}>{element.name}</MenuItem>
                    );
                })
            }
        </TextField>
    );
}

export default newSelect;