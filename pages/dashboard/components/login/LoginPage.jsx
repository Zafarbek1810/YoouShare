import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginForm.module.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required')
});

const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const router = useRouter();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                id="email"
                type="email"
                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
                {...field}
              />
            )}
          />
          {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                id="password"
                type="password"
                className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
                {...field}
              />
            )}
          />
          {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
