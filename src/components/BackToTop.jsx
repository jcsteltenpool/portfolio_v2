/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";

import { ReactComponent as ArrowUp } from '../assets/svg/arrowUp.svg';

export default function BackToTop({ scrollTop }) {
    return (
        <HashLink smooth to="#"
                  className={`back-to-top-button ${scrollTop >= 1500 ? 'active' : ''}`}>
            <ArrowUp />
        </HashLink>
    )
}