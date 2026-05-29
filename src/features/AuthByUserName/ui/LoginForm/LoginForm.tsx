import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        value={username}
        onChange={setUsername}
      />
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        value={password}
        onChange={setPassword}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
