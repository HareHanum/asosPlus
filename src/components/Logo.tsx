import React from 'react';
import { Image } from 'react-native';


const logo = require('../theme/assets/logo.png');

const Logo = () => (
    <Image style={{ width: 130, height: 100 }} source={logo} />
);

export { Logo };

