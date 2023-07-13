import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { createProduct } from '../../services/products.ts';
import './ProductForm.sass';

const ProductForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        price: '',
        image: '',
      }}
      onSubmit={async (values, formikHelpers) => {
        await createProduct(values);
        formikHelpers.resetForm();
        onSubmit?.();
      }}
      validationSchema={validationSchema}
      validateOnMount
      validateOnChange
      isInitialValid={false}
    >
      {({ isValid }) => (
        <Form className="form">
          <div className="form__row">
            <Field
              className="form__input"
              name="name"
              placeholder="Product name"
            />
          </div>

          <div className="form__row">
            <Field className="form__input" name="price" placeholder="Price" />
          </div>

          <div className="form__row">
            <Field
              className="form__input"
              name="image"
              placeholder="Image link"
            />
          </div>

          <button className="form__button" type="submit" disabled={!isValid}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
