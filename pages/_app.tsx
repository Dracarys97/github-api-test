import type { AppProps } from 'next/app'

import "../src/Components/buttons-component/Buttons.scss"
import '../src/Page/Users/Users.scss'
import '../src/Components/form-component/user-form/User-form.scss';
import '../src/Page/Repositories/Repositories.scss'
import '../src/Components/form-component/repository-form/Repository-form.scss';
import '../src/Components/list-component/List.scss';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/App.scss'
import React from 'react';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}