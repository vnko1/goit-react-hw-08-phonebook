import * as Yup from 'yup';

const submitSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
    })
    .required('Required'),
  phone: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    )
    .required('Required'),
  email: Yup.string()
    .matches(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, {
      message: 'Email must have @',
    })
    .required('Required'),
});

const changeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'",
    }),

  phone: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
  email: Yup.string()
    .matches(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, {
      message: 'Email must have @',
    })
    .required('Required'),
});

export { submitSchema, changeSchema };
