import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import dotenv from 'dotenv';

dotenv.config();

test('Login',async({page})=>{

const login=new LoginPage(page);

await login.goto();

await login.login(
process.env.EMAIL!,
process.env.PASSWORD!
);

await login.verifyLogin();

});