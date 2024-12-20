import classes from './register.module.scss'
import { Dialog, Flex, Button, Text, TextField, Separator } from '@radix-ui/themes';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';

import { useState } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


interface RegisterProps {
  
}
const Register: React.FC<RegisterProps> = () => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [isErr, setIsErr] = useState('false');

  const [passLogin, setPassLogin] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [isErrLogin, setIsErrLogin] = useState('');

  const navigate = useNavigate();

  const register = () => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((user) => {
      console.log(user);
      setIsErr('');
      setEmail('');
      setPass('');
      navigate('/profile');
    })
    .catch((err) => setIsErr(err));
    console.log(isErr);
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, emailLogin, passLogin)
    .then((user) => {
      console.log(user);
      setIsErrLogin('');
      setEmailLogin('');
      setPassLogin('');
      navigate('/profile');
    })
    .catch((err) => setIsErrLogin(err));
    console.log(isErrLogin);
  }

  return (
    <div className={classes.grid}>
      <div className={classes.container}>
        <svg viewBox="0 0 24 24" aria-hidden="true" >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
        <div className={classes.form}>
        <h1 style={{textShadow: '0 0 3px'}}>В курсе<br /> происходящего</h1>
        <h2 style={{textShadow: '0 0 2px'}}>Присоединяйтесь сегодня.</h2>
        <Dialog.Root>
            <Dialog.Trigger>
              <Button color='blue' radius='full' style={{boxShadow: '0px 0px 10px '}}>Зарегистрироваться</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Регистрация</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Заполните пропуски
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Имя
                  </Text>
                  <TextField.Root
                    id='name'
                    placeholder="Введите ваше имя"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Фамилия
                  </Text>
                  <TextField.Root
                    id='surname'
                    placeholder="Введите вашу фамилию"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Почта
                  </Text>
                  <TextField.Root
                    type='email'
                    id='emailReg'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                    required
                  />
                </label>
                <label>
                  <Separator size='4'/>
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Придумайте пароль
                  </Text>
                  <TextField.Root
                    id='passReg'
                    onChange={(e) => setPass(e.target.value)}
                    type='password'
                    placeholder="Пароль"
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="outline" color="gray">
                    Отмена
                  </Button>
                </Dialog.Close>
                <Button onClick={() => register()}>Отправить</Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
          <div className={classes.separator}>
            <Separator size='4'/>
          </div>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button color='blue' radius='full' variant='outline' style={{boxShadow: '0px 0px 10px'}}>Войти</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Вход</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Заполните пропуски
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Почта
                  </Text>
                  <TextField.Root
                    onChange={(e) => setEmailLogin(e.target.value)}
                    type="email"
                    placeholder="example@example.com"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Пароль
                  </Text>
                  <TextField.Root
                    onChange={(e) => setPassLogin(e.target.value)}
                    type='password'
                    placeholder="Пароль"
                  />
                </label>
              </Flex>
              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="outline" color="gray">
                    Отмена
                  </Button>
                </Dialog.Close>
                <Button onClick={() => signIn()}>Войти</Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
    </div>
  );
};

export default Register;
