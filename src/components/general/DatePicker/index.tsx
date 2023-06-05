import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptbr from 'date-fns/locale/pt-BR';
import './styles.scss';

interface Props {
  selected: number;
  onChange: (date: Date | null) => void;
  onSelect?: (date: Date | null) => void;
}

const CustomDatePicker = ({ selected, onChange, onSelect }: Props) => {
  const parsedSelected = selected? new Date(selected) : null;
  registerLocale('pt-BR', ptbr);
  return(
    <ReactDatePicker
      className='datepicker'
      calendarClassName='calendar-datepicker'
      popperClassName='calendar-wrapper'
      dateFormat='dd/MM/yyyy HH:mm'
      selected={parsedSelected}
      onChange={onChange}
      onSelect={onSelect}
      showTimeSelect
      locale="pt-BR"
    />
  );
};

export default CustomDatePicker;