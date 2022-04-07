import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from '../../Quote/Quote';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<blockquote></blockquote>, div)

} )