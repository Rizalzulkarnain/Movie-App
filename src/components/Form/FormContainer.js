import { Box, FormControl, InputDark } from '../../styles';

const FormContainer = ({ ...formControl }) => {
  return (
    <Box>
      <FormControl>
        <label htmlFor={formControl.name}>{formControl.label} :</label>
        <InputDark
          id={formControl.name}
          name={formControl.name}
          value={formControl.value}
          type={formControl.type}
          onChange={formControl.onChange}
          placeholder={formControl.placeholder}
        />
      </FormControl>
    </Box>
  );
};

export default FormContainer;
